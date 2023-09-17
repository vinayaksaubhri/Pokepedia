import LottieView from "lottie-react-native";
import { StyleSheet, View } from "react-native";
import { COLORS } from "../style/style";

const LoadingIndicator = () => {
  return (
    <View style={styles.container}>
      <LottieView
        style={styles.lottieStyle}
        source={require("../assets/lottie/loading.json")}
        loop
        autoPlay
        resizeMode="cover"
      />
    </View>
  );
};
export default LoadingIndicator;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.surface,
    alignItems: "center",
    justifyContent: "center",
  },
  lottieStyle: {
    width: "10%",
    aspectRatio: 1,
  },
});
