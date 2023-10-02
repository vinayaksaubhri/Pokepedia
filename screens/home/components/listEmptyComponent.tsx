import LottieView from "lottie-react-native";
import { StyleSheet, Text, View } from "react-native";
import { height, scaleFont, width } from "../../../style/metrics";
import { COLORS, FONTS } from "../../../style/style";
const ListEmptyComponent = () => {
  return (
    <View style={styles.container}>
      <LottieView
        style={styles.lottieViewStyle}
        source={require("../../../assets/lottie/listEmptyLottie.json")}
        loop
        autoPlay
        resizeMode="cover"
      />
      <Text style={styles.headingTextStyle}>
        Diglett's sneaky hideaway left us empty-handed. Keep exploring, there
        are more Pokémon out there!
      </Text>
    </View>
  );
};
export default ListEmptyComponent;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // height: height * 0.5,
  },
  lottieViewStyle: {
    width: width * 0.8,
    aspectRatio: 1,
    alignSelf: "center",
    backgroundColor: "white",
  },
  headingTextStyle: {
    color: COLORS.primaryBlue,
    fontSize: scaleFont(20),
    fontFamily: FONTS.RC_Regular,
    textAlign: "center",
    marginTop: 30,
  },
});
