import { StyleSheet, Text, View } from "react-native";
import BackIcon from "../assets/svg/backIcon";
import FavIcon from "../assets/svg/favIcon";
import { COLORS, FONTS } from "../style/style";
import { scaleFont } from "../style/metrics";
const TopAppBar = ({ label = "Label" }) => {
  return (
    <View style={styles.container}>
      <BackIcon />
      <Text style={styles.labelStyle}>{label}</Text>
      <FavIcon />
    </View>
  );
};
export default TopAppBar;
const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  labelStyle: {
    fontFamily: FONTS.RC_Regular,
    fontSize: scaleFont(22),
    color: COLORS.primaryBlue,
  },
});
