import React from "react";
import { ColorValue, StatusBar, StatusBarStyle, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import useTheme from "../hooks/useTheme";

type CustomStatusBarProps = {
  backgroundColor?: ColorValue | undefined;
  barStyle?: StatusBarStyle | null | undefined;
};

const CustomStatusBar: React.FC<CustomStatusBarProps> = ({
  backgroundColor = "#fff",
  barStyle,
}) => {
  const insets = useSafeAreaInsets();
  const { isDarkMode } = useTheme();

  return (
    <View style={{ height: insets.top, backgroundColor }}>
      <StatusBar
        animated={true}
        backgroundColor={backgroundColor}
        barStyle={
          barStyle ? barStyle : isDarkMode ? "light-content" : "dark-content"
        }
      />
    </View>
  );
};

export default CustomStatusBar;
