import { StyleSheet, Text, View } from "react-native";
import { COLORS, FONTS } from "../style/style";
import { ChipIcon } from "./chip";
const TypeBadge = () => {
  return (
    <View style={styles.container}>
      <ChipIcon iconType={"grass"} />
      <Text style={styles.textStyle}>TypeBadge</Text>
    </View>
  );
};
export default TypeBadge;
const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-start",
    backgroundColor: COLORS.typeBadgeBackground,
    paddingHorizontal: 2,
    paddingVertical: 2,
    borderRadius: 24,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  textStyle: {
    fontSize: 10,
    fontFamily: FONTS.RC_Regular,
    color: COLORS.surface,
  },
});
