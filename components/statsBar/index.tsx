import { StyleSheet, Text, View } from "react-native";
import Stats from "./components/stats";
import { COLORS, FONTS } from "../../style/style";
import { scaleFont } from "../../style/metrics";
import { MAX_BASE_STATS } from "../../constant/constant";
const StatsBar = ({ value = 0, statsTitle = "" }) => {
  const arr = new Array(15).fill(0);
  const valueInStatsBar = Math.floor((arr.length / MAX_BASE_STATS) * value);

  return (
    <View style={styles.container}>
      <Text style={styles.statsTitle}>{statsTitle}</Text>
      <Text style={styles.value}>{value}</Text>
      <View style={styles.statsBarContainer}>
        {arr.map((_, index) => (
          <Stats isActive={index < valueInStatsBar} />
        ))}
      </View>
    </View>
  );
};
export default StatsBar;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  statsTitle: {
    color: COLORS.grey400,
    fontFamily: FONTS.RC_Regular,
    fontSize: scaleFont(16),
    flex: 0.2,
  },
  value: {
    color: COLORS.primaryBlue,
    fontFamily: FONTS.RC_Medium,
    fontSize: scaleFont(16),
    flex: 0.2,
  },
  statsBarContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    flex: 0.6,
  },
});
