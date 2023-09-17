import { StyleSheet, View } from "react-native";
import StatsBar from "../../../components/statsBar";
import { COLORS } from "../../../style/style";
import { moderateScale, verticalScale } from "../../../style/metrics";
const PokemonTabStatsComponent = ({ route, navigation }) => {
  const { pokemonStats } = route.params;
  const { attack, defense, hp, specialAttack, specialDefense, speed } =
    pokemonStats;

  return (
    <View style={styles.container}>
      <StatsBar value={hp} statsTitle="HP" />
      <StatsBar value={attack} statsTitle="Attack" />
      <StatsBar value={defense} statsTitle="Defense" />
      <StatsBar value={specialAttack} statsTitle="Sp. Atk" />
      <StatsBar value={specialDefense} statsTitle="Sp. Def" />
      <StatsBar value={speed} statsTitle="Speed" />
    </View>
  );
};
export default PokemonTabStatsComponent;
const styles = StyleSheet.create({
  container: {
    padding: moderateScale(24),
    backgroundColor: COLORS.surface,
    flex: 1,
    gap: verticalScale(24),
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
