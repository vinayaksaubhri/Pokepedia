import { Pressable, StyleSheet, Text, View } from "react-native";
import BackIcon from "../assets/svg/backIcon";
import FavIcon from "../assets/svg/favIcon";
import { COLORS, FONTS } from "../style/style";
import { scaleFont } from "../style/metrics";
const TopAppBar = ({
  label = "Label",
  navigation,
  onPressBackButton = () => {
    navigation.goBack();
  },
}) => {
  return (
    <View style={styles.container}>
      <Pressable>
        <BackIcon onPress={onPressBackButton} />
      </Pressable>
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
    position: "absolute",
    top: 0,
    width: "100%",
  },
  labelStyle: {
    fontFamily: FONTS.RC_Regular,
    fontSize: scaleFont(22),
    color: COLORS.primaryBlue,
  },
});
