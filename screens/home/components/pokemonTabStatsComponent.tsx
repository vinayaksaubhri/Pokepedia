import { StyleSheet, View } from "react-native";
import StatsBar from "../../../components/statsBar";
import { COLORS } from "../../../style/style";
import { moderateScale, verticalScale } from "../../../style/metrics";
const PokemonTabStatsComponent = () => {
  return (
    <View style={styles.container}>
      <StatsBar value={78} statsTitle="HP" />
      <StatsBar value={84} statsTitle="Attack" />
      <StatsBar value={78} statsTitle="Defense" />
      <StatsBar value={109} statsTitle="Sp. Atk" />
      <StatsBar value={85} statsTitle="Sp. Def" />
      <StatsBar value={100} statsTitle="Speed" />
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
