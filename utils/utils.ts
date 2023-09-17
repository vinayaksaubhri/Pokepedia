import { AppStateStatus, Platform } from "react-native";
import { focusManager } from "react-query";

export function onAppStateChange(status: AppStateStatus) {
  if (Platform.OS !== "web") {
    focusManager.setFocused(status === "active");
  }
}

export const FONT_OBJECT = {
  "RobotoCondense-Bold": require("../assets/fonts/RobotoCondensed-Bold.ttf"),
  "RobotoCondense-Light": require("../assets/fonts/RobotoCondensed-Light.ttf"),
  "RobotoCondense-Regular": require("../assets/fonts/RobotoCondensed-Regular.ttf"),
  "RobotoCondense-Medium": require("../assets/fonts/roboto-condensed-medium.ttf"),
  "Roboto-Thin": require("../assets/fonts/Roboto-Thin.ttf"),
  "Roboto-Black": require("../assets/fonts/Roboto-Black.ttf"),
  "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
  "Roboto-Light": require("../assets/fonts/Roboto-Light.ttf"),
};
