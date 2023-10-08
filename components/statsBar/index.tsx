import { StyleSheet, Text, View } from "react-native";
import Stats from "./components/stats";
import { COLORS, FONTS } from "../../style/style";
import { scaleFont } from "../../style/metrics";
import { MAX_BASE_STATS } from "../../constant/constant";
import { getDelayTime } from "../../utils/utils";
import React, { useMemo } from "react";

export type StatsBarProps = {
  value?: number;
  statsTitle?: string;
  comparatorMode?: boolean;
  comparatorSecondValue?: number;
  startAnimation?: boolean;
};

const StatsBar: React.FC<StatsBarProps> = ({
  value = 0,
  statsTitle = "",
  comparatorMode = false,
  comparatorSecondValue = 0,
  startAnimation = false,
}) => {
  const arr = new Array(14).fill(0);
  const primaryValue = Math.floor((arr.length / MAX_BASE_STATS) * value);
  const secondeValue = arr.length - primaryValue;
  const delayTime = 200;
  const delayTimeArr = useMemo(
    () => getDelayTime(primaryValue, secondeValue, delayTime),
    [primaryValue, secondeValue, delayTime]
  ) as number[];

  return (
    <View style={styles.container}>
      <Text style={styles.statsTitle}>{statsTitle}</Text>
      <Text style={styles.value}>{value}</Text>
      <View style={styles.statsBarContainer}>
        {arr.map((_, index) => (
          <Stats
            isActive={index < primaryValue}
            key={index}
            delayTime={delayTimeArr[index]}
            isSecondaryActive={comparatorMode && index >= primaryValue}
            startAnimation={startAnimation}
          />
        ))}
      </View>
      {comparatorMode && (
        <Text style={[styles.value, styles.textAlignRight]}>
          {comparatorSecondValue}
        </Text>
      )}
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
    flex: 0.15,
  },
  statsBarContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    flex: 0.6,
  },
  textAlignRight: {
    textAlign: "right",
  },
});
