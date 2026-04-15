/**
 * Theme transition — how it works (Skia + Reanimated)
 *
 * 1) We take a screenshot of the app (`makeImageFromView`) → "before" bitmap.
 * 2) We show it full-screen in a Skia `Image` (`overlay1`). The live UI is
 *    still the old theme underneath, but the user should only see the bitmap.
 * 3) We switch `isDarkMode`. The live tree repaints to the new theme.
 * 4) We take another screenshot → "after" bitmap (`overlay2`).
 * 5) We draw `overlay2` only inside a circle whose radius grows (Reanimated
 *    `withTiming`). That circle uses `ImageShader` so pixels come from the
 *    "after" image. Outside the circle we still see `overlay1` ("before").
 *    Result: a circular reveal of the new theme from the tap point.
 * 6) We remove both overlays; you see the real new-themed UI.
 *
 * Android fixes (why we had flash / missing animation):
 * - We waited extra animation frames after `overlay1` so it paints before step 3.
 * - We match Skia `Image` size to the measured provider view (`onLayout`), not
 *   only `Dimensions`, so the freeze frame lines up with the real layout.
 * - We raise `zIndex` / `elevation` and use `renderToHardwareTextureAndroid` so
 *   the Skia layer sits above native views instead of flickering underneath.
 * - If a screenshot fails, we still toggle theme and bail so the app never sticks.
 */

import {
  Canvas,
  Circle,
  Image,
  ImageShader,
  SkImage,
  dist,
  makeImageFromView,
  mix,
  vec,
} from "@shopify/react-native-skia";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";
import { LayoutChangeEvent, Platform, StyleSheet, View } from "react-native";
import {
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { height, width } from "../style/metrics";
import {
  THEME_REVEAL_DURATION_MS,
  settleBeforeSecondCapture,
  wait,
  waitForNextFrame,
  waitForOverlayPaint,
} from "./themeTransition";

// --- context -------------------------------------------------------------

const ThemeContext = createContext<{
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  toggleDarkModeWithAnimation: (x: number, y: number) => void;
  isActive: boolean;
}>({
  isDarkMode: false,
  setIsDarkMode: () => {},
  toggleDarkModeWithAnimation: () => {},
  isActive: false,
});

// --- geometry ----------------------------------------------------------

function maxDistanceFromPointToRectCorners(
  x: number,
  y: number,
  layoutWidth: number,
  layoutHeight: number,
) {
  const corners = [
    vec(0, 0),
    vec(layoutWidth, 0),
    vec(layoutWidth, layoutHeight),
    vec(0, layoutHeight),
  ];
  return Math.max(...corners.map((corner) => dist(corner, vec(x, y))));
}

// --- Skia overlay (presentational) -------------------------------------

type SkiaThemeOverlayProps = {
  overlay1: SkImage | null;
  overlay2: SkImage | null;
  layoutWidth: number;
  layoutHeight: number;
  circle: ReturnType<
    typeof useSharedValue<{ x: number; y: number; r: number }>
  >;
  r: ReturnType<typeof useDerivedValue<number>>;
};

function SkiaThemeOverlay({
  overlay1,
  overlay2,
  layoutWidth,
  layoutHeight,
  circle,
  r,
}: SkiaThemeOverlayProps) {
  return (
    <Canvas style={StyleSheet.absoluteFill} pointerEvents="none">
      <Image
        image={overlay1}
        x={0}
        y={0}
        width={layoutWidth}
        height={layoutHeight}
      />

      {overlay2 && (
        <Circle c={circle} r={r}>
          <ImageShader
            image={overlay2}
            x={0}
            y={0}
            width={layoutWidth}
            height={layoutHeight}
            fit="cover"
          />
        </Circle>
      )}
    </Canvas>
  );
}

// --- provider ----------------------------------------------------------

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const ref = useRef<View>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [overlay1, setOverlay1] = useState<SkImage | null>(null);
  const [overlay2, setOverlay2] = useState<SkImage | null>(null);
  const [isActive, setIsActive] = useState(false);
  const [layoutSize, setLayoutSize] = useState({ width, height });

  const transition = useSharedValue(0);
  const circle = useSharedValue({ x: 0, y: 0, r: 0 });
  const r = useDerivedValue(() => mix(transition.value, 0, circle.value.r));

  const onContainerLayout = useCallback((event: LayoutChangeEvent) => {
    const { width: w, height: h } = event.nativeEvent.layout;
    if (w > 0 && h > 0) {
      setLayoutSize({ width: w, height: h });
    }
  }, []);

  const overlayRootStyle = useMemo(
    () => [
      StyleSheet.absoluteFill,
      Platform.OS === "android"
        ? {
            zIndex: 10000,
            elevation: 24,
          }
        : null,
    ],
    [],
  );

  const toggleDarkModeWithAnimation = useCallback(
    async (x: number, y: number) => {
      setIsActive(true);
      const duration = THEME_REVEAL_DURATION_MS;

      circle.value = {
        x,
        y,
        r: maxDistanceFromPointToRectCorners(
          x,
          y,
          layoutSize.width,
          layoutSize.height,
        ),
      };

      let image1: SkImage | null = await makeImageFromView(ref);
      if (!image1 && Platform.OS === "android") {
        await waitForNextFrame();
        image1 = await makeImageFromView(ref);
      }

      if (!image1) {
        setIsDarkMode((prev) => !prev);
        setIsActive(false);
        return;
      }

      setOverlay1(image1);
      await waitForOverlayPaint();
      setIsDarkMode((prev) => !prev);
      await settleBeforeSecondCapture();

      const image2: SkImage | null = await makeImageFromView(ref);
      if (!image2) {
        setOverlay1(null);
        setOverlay2(null);
        setIsActive(false);
        return;
      }

      setOverlay2(image2);
      transition.value = 0;
      transition.value = withTiming(1, { duration });
      await wait(duration);
      setOverlay1(null);
      setOverlay2(null);
      setIsActive(false);
    },
    [
      setIsDarkMode,
      ref,
      circle,
      transition,
      layoutSize.width,
      layoutSize.height,
    ],
  );

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        setIsDarkMode,
        toggleDarkModeWithAnimation,
        isActive,
      }}
    >
      <View
        style={styles.container}
        ref={ref}
        collapsable={false}
        onLayout={onContainerLayout}
      >
        {children}
      </View>

      <View
        style={overlayRootStyle}
        pointerEvents="none"
        collapsable={false}
        renderToHardwareTextureAndroid={Platform.OS === "android"}
      >
        <SkiaThemeOverlay
          overlay1={overlay1}
          overlay2={overlay2}
          layoutWidth={layoutSize.width}
          layoutHeight={layoutSize.height}
          circle={circle}
          r={r}
        />
      </View>
    </ThemeContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function useTheme() {
  return useContext(ThemeContext);
}
