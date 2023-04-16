import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { LoadAssets } from "./components/LoadAssets";

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
      <View style={styles.container}>
        <Text style={{ fontFamily: "RobotoCondense-Light" }}>Hello World</Text>
        <Text style={{ fontFamily: "RobotoCondense-Bold" }}>Hello World</Text>
        <Text style={{ fontFamily: "RobotoCondense-Regular" }}>
          Hello World
        </Text>
        <Text style={{ fontFamily: "Roboto-Thin" }}>Hello World</Text>
        <Text style={{ fontFamily: "Roboto-Black" }}>Hello World</Text>
        <Text style={{ fontFamily: "Roboto-Bold" }}>Hello World</Text>
        <Text style={{ fontFamily: "Roboto-Light" }}>Hello World</Text>
        <StatusBar style="auto" />
      </View>
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
