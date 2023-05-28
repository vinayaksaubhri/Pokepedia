import { StyleSheet, Text, View } from "react-native";
import { COLORS, FONTS } from "../style/style";
import { ChipIcon } from "./chip";
import { PokemonTypes } from "../types/pokemonTypes";
import { moderateScale, scaleFont } from "../style/metrics";

type propsType = {
  badgeType: PokemonTypes;
  label: string;
};

const TypeBadge: React.FC<propsType> = ({ badgeType = "", label = "" }) => {
  return (
    <View style={styles.container}>
      <ChipIcon iconType={badgeType} />
      <Text style={styles.textStyle}>{label}</Text>
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
    borderRadius: moderateScale(24),
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  textStyle: {
    fontSize: scaleFont(10),
    marginRight: 6,
    fontFamily: FONTS.RC_Regular,
    color: COLORS.surface,
  },
});
