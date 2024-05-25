import {
  Canvas,
  Image,
  SkImage,
  dist,
  makeImageFromView,
  mix,
  vec,
  Circle,
  ImageShader,
} from "@shopify/react-native-skia";
import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";
import { Platform, StyleSheet, View } from "react-native";
import { height, width } from "../style/metrics";
import {
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

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

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const ref = useRef<View>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [overlay1, setOverlay1] = useState<SkImage | null>(null);
  const [overlay2, setOverlay2] = useState<SkImage | null>(null);
  const [isActive, setIsActive] = useState(false);
  const corners = [
    vec(0, 0),
    vec(width, 0),
    vec(width, height),
    vec(0, height),
  ];
  const transition = useSharedValue(0);
  const circle = useSharedValue({
    x: 0,
    y: 0,
    r: 0,
  });
  const r = useDerivedValue(() => {
    return mix(transition.value, 0, circle.value.r);
  });

  const wait = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const toggleDarkModeWithAnimation = useCallback(
    async (x: number, y: number) => {
      setIsActive(true);
      const duration = 650;
      const awaitDuration = 16;
      console.log("Toggled dark mode", x, y);
      circle.value = {
        x,
        y,
        r: Math.max(...corners.map((corner) => dist(corner, vec(x, y)))),
      };
      const image1 = await makeImageFromView(ref);
      setOverlay1(image1);
      await wait(awaitDuration);
      setIsDarkMode(!isDarkMode);
      await wait(awaitDuration);
      const image2 = await makeImageFromView(ref);
      setOverlay2(image2);
      transition.value = 0;
      transition.value = withTiming(1, { duration });
      await wait(duration);
      setOverlay1(null);
      setOverlay2(null);
      setIsActive(false);
    },
    [setIsDarkMode, isDarkMode, ref, circle, transition, corners]
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
      <View style={styles.container} ref={ref}>
        {children}
      </View>
      {Platform.OS === "ios" && (
        <Canvas style={StyleSheet.absoluteFill} pointerEvents="none">
          <Image image={overlay1} x={0} y={0} width={width} height={height} />

          {overlay2 && (
            <Circle c={circle} r={r}>
              <ImageShader
                image={overlay2}
                x={0}
                y={0}
                width={width}
                height={height}
                fit="cover"
              />
            </Circle>
          )}
        </Canvas>
      )}
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
