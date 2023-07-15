import { StyleSheet, Text, View } from "react-native";
import { COLORS, FONTS } from "../../../style/style";
import { scaleFont } from "../../../style/metrics";
const PokemonMoveCard = ({ label = "", paddingTop = true }) => {
  const styles = StyleSheet.create({
    container: {
      paddingVertical: 16,
      borderBottomWidth: 1,
      borderColor: COLORS.grey200,
      paddingTop: paddingTop ? 16 : 0,
    },
    labelStyle: {
      color: COLORS.primaryBlue,
      fontFamily: FONTS.RC_Regular,
      fontSize: scaleFont(16),
    },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.labelStyle}>{label}</Text>
    </View>
  );
};
export default PokemonMoveCard;
