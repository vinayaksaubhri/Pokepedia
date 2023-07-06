import { StyleSheet } from "react-native";
import "react-native-gesture-handler";
import { LoadAssets } from "./components/loadAssets";
import Navigation from "./navigation";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { LogBox } from "react-native";
LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

export default function App() {
  const Fonts = {
    "RobotoCondense-Bold": require("./assets/fonts/RobotoCondensed-Bold.ttf"),
    "RobotoCondense-Light": require("./assets/fonts/RobotoCondensed-Light.ttf"),
    "RobotoCondense-Regular": require("./assets/fonts/RobotoCondensed-Regular.ttf"),
    "RobotoCondense-Medium": require("./assets/fonts/roboto-condensed-medium.ttf"),
    "Roboto-Thin": require("./assets/fonts/Roboto-Thin.ttf"),
    "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),
  };

  return (
    <LoadAssets fonts={Fonts}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Navigation />
      </GestureHandlerRootView>
    </LoadAssets>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
