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

  let overlay1: SkImage | null = null;
  console.log("🚀 ~ overlay1:", overlay1);
  let overlay2: SkImage | null = null;

  const toggleDarkModeWithAnimation = useCallback(
    async (x: number, y: number) => {
      console.log("Toggled dark mode", x, y);
      overlay1 = await makeImageFromView(ref);
      setIsDarkMode(!isDarkMode);
      console.log("🚀 ~ overlay1:", overlay1);
    },
    [setIsDarkMode, isDarkMode]
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
        {overlay1 && (
          <Canvas style={StyleSheet.absoluteFill}>
            <Image image={overlay1} x={0} y={0} width={width} height={height} />
          </Canvas>
        )}
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
