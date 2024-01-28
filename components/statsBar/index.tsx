import { StyleSheet, Text, View } from "react-native";
import Stats from "./components/stats";
import { COLORS, DARK_COLORS, FONTS } from "../../style/style";
import { scaleFont } from "../../style/metrics";
import { MAX_BASE_STATS } from "../../constant/constant";
import { getDelayTime } from "../../utils/utils";
import React, { useMemo } from "react";
import useTheme from "../../hooks/useTheme";

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
  const { isDarkMode } = useTheme();
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
    },
    statsTitle: {
      color: isDarkMode ? DARK_COLORS.textSecondary : COLORS.grey400,
      fontFamily: FONTS.RC_Regular,
      fontSize: scaleFont(16),
      flex: 0.2,
    },
    value: {
      color: isDarkMode ? DARK_COLORS.white : COLORS.primaryBlue,
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

  const arr = new Array(14).fill(0);
  let primaryValue = Math.floor((arr.length / MAX_BASE_STATS) * value);
  let secondeValue = Math.floor(
    (arr.length / MAX_BASE_STATS) * comparatorSecondValue
  );
  if (primaryValue + secondeValue > arr.length) {
    if (primaryValue > secondeValue) {
      secondeValue = arr.length - primaryValue;
    } else {
      primaryValue = arr.length - secondeValue;
    }
  }

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
            isSecondaryActive={arr.length - index <= secondeValue}
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
