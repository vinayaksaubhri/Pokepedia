import {
  Canvas,
  Image,
  SkImage,
  makeImageFromView,
} from "@shopify/react-native-skia";
import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";
import { StyleSheet, View } from "react-native";
import { height, width } from "../style/metrics";
const ThemeContext = createContext<{
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  toggleDarkModeWithAnimation: (x: number, y: number) => void;
}>({
  isDarkMode: false,
  setIsDarkMode: () => {},
  toggleDarkModeWithAnimation: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const ref = useRef<View>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [overlay1, setOverlay1] = useState<SkImage | null>(null);
  const [overlay2, setOverlay2] = useState<SkImage | null>(null);

  const wait = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const toggleDarkModeWithAnimation = useCallback(
    async (x: number, y: number) => {
      console.log("Toggled dark mode", x, y);
      const image1 = await makeImageFromView(ref);
      setOverlay1(image1);
      await wait(10);
      setIsDarkMode(!isDarkMode);
      await wait(10);
      const image2 = await makeImageFromView(ref);
      setOverlay2(image2);
    },
    [setIsDarkMode, isDarkMode, ref]
  );

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        setIsDarkMode,
        toggleDarkModeWithAnimation,
      }}
    >
      <View style={styles.container} ref={ref}>
        {children}
      </View>
      <Canvas style={StyleSheet.absoluteFill} pointerEvents="none">
        <Image image={overlay1} x={0} y={0} width={width} height={height} />
        <Image image={overlay2} x={0} y={0} width={width} height={height} />
      </Canvas>
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
