import LottieView from "lottie-react-native";
import { StyleSheet, View } from "react-native";
import { COLORS, DARK_COLORS } from "../style/style";
import useTheme from "../hooks/useTheme";

const LoadingIndicator = () => {
  const { isDarkMode } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? DARK_COLORS.surface : COLORS.surface,
      alignItems: "center",
      justifyContent: "center",
    },
    lottieStyle: {
      width: "10%",
      aspectRatio: 1,
    },
  });
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
