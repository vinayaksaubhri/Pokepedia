import { StyleSheet, View } from "react-native";
import DiceIcon from "../assets/svg/diceIcon";
import { COLORS } from "../style/style";
import { moderateScale } from "../style/metrics";
const DiceButton = () => {
  return (
    <View style={styles.container}>
      <DiceIcon />
    </View>
  );
};
export default DiceButton;
const styles = StyleSheet.create({
  container: {
    width: moderateScale(72),
    height: moderateScale(72),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: moderateScale(40),
    position: "absolute",
    backgroundColor: COLORS.surface,
    alignSelf: "center",
    bottom: "50%",
  },
});
