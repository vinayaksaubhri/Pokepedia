import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../style/style";
import { moderateScale } from "../style/metrics";
import Button from "./button";
const PokemonSelectCard = () => {
  return (
    <View style={styles.container}>
      <Button variant="Outline" label="ADD POKEMON" width={"55%"} />
    </View>
  );
};
export default PokemonSelectCard;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: COLORS.grey100,
    borderRadius: moderateScale(16),
    justifyContent: "center",
    alignItems: "center",
  },
});
