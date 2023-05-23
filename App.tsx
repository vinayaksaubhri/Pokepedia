import { StyleSheet } from "react-native";
import "react-native-gesture-handler";
import { LoadAssets } from "./components/loadAssets";
import Navigation from "./navigation";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  const Fonts = {
    "RobotoCondense-Bold": require("./assets/Fonts/RobotoCondensed-Bold.ttf"),
    "RobotoCondense-Light": require("./assets/Fonts/RobotoCondensed-Light.ttf"),
    "RobotoCondense-Regular": require("./assets/Fonts/RobotoCondensed-Regular.ttf"),
    "Roboto-Thin": require("./assets/Fonts/Roboto-Thin.ttf"),
    "Roboto-Black": require("./assets/Fonts/Roboto-Black.ttf"),
    "Roboto-Bold": require("./assets/Fonts/Roboto-Bold.ttf"),
    "Roboto-Light": require("./assets/Fonts/Roboto-Light.ttf"),
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
