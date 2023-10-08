import { StyleSheet, View } from "react-native";
import { verticalScale } from "../../../style/metrics";
import AnimatedStatsBar from "./animatedStatsBar";
import { pokemonStatsType } from "../../../types/pokemonTypes";

type AnimatedStatsComparatorProps = {
  pokemon1Stats: pokemonStatsType;
  pokemon2Stats: pokemonStatsType;
};

const AnimatedStatsComparator: React.FC<AnimatedStatsComparatorProps> = ({
  pokemon1Stats,
  pokemon2Stats,
}) => {
  return (
    <View style={styles.container}>
      <AnimatedStatsBar
        index={0}
        statsTitle="HP"
        overwriteStartAnimation={true}
        stopTranslation={true}
        value={pokemon1Stats?.hp}
        comparatorMode
        comparatorSecondValue={pokemon2Stats?.hp}
      />
      <AnimatedStatsBar
        index={1}
        statsTitle="Attack"
        value={pokemon1Stats?.attack}
        comparatorMode
        comparatorSecondValue={pokemon2Stats?.attack}
      />
      <AnimatedStatsBar
        index={2}
        statsTitle="Defense"
        value={pokemon1Stats?.defense}
        comparatorMode
        comparatorSecondValue={pokemon2Stats?.defense}
      />
      <AnimatedStatsBar
        index={3}
        statsTitle="Sp. Atk"
        value={pokemon1Stats?.specialAttack}
        comparatorMode
        comparatorSecondValue={pokemon2Stats?.specialAttack}
      />
      <AnimatedStatsBar
        index={4}
        statsTitle="Sp. Def"
        value={pokemon1Stats?.specialDefense}
        comparatorSecondValue={pokemon2Stats?.specialDefense}
        comparatorMode
      />
      <AnimatedStatsBar
        index={5}
        statsTitle="Speed"
        value={pokemon1Stats?.speed}
        comparatorMode
        comparatorSecondValue={pokemon2Stats?.speed}
      />
    </View>
  );
};
export default AnimatedStatsComparator;
const styles = StyleSheet.create({
  container: {
    gap: verticalScale(24),
  },
});
