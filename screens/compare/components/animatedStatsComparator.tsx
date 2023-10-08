import { StyleSheet, View } from "react-native";
import { verticalScale } from "../../../style/metrics";
import AnimatedStatsBar from "./animatedStatsBar";

const AnimatedStatsComparator = () => {
  return (
    <View style={styles.container}>
      <AnimatedStatsBar
        index={0}
        statsTitle="HP"
        overwriteStartAnimation={true}
        stopTranslation={true}
        value={50}
      />
      <AnimatedStatsBar index={1} statsTitle="Attack" value={60} />
      <AnimatedStatsBar index={2} statsTitle="Defense" value={80} />
      <AnimatedStatsBar index={3} statsTitle="Sp. Atk" value={90} />
      <AnimatedStatsBar index={4} statsTitle="Sp. Def" value={100} />
      <AnimatedStatsBar index={5} statsTitle="Speed" value={110} />
    </View>
  );
};
export default AnimatedStatsComparator;
const styles = StyleSheet.create({
  container: {
    gap: verticalScale(24),
  },
});
