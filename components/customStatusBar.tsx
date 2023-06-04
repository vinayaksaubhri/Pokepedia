import React from "react";
import { ColorValue, StatusBar, StatusBarStyle, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type CustomStatusBarProps = {
  backgroundColor?: ColorValue | undefined;
  barStyle?: StatusBarStyle | null | undefined;
};

const CustomStatusBar: React.FC<CustomStatusBarProps> = ({
  backgroundColor = "#fff",
  barStyle = "dark-content",
}) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ height: insets.top, backgroundColor }}>
      <StatusBar
        animated={true}
        backgroundColor={backgroundColor}
        barStyle={barStyle}
      />
    </View>
  );
};

export default CustomStatusBar;
