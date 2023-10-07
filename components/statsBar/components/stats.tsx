import { memo } from "react";
import { StyleSheet, View } from "react-native";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../../style/metrics";
import { COLORS } from "../../../style/style";
const stats = ({ isActive = false, isSecondaryActive = false }) => {
  const styles = StyleSheet.create({
    container: {
      width: horizontalScale(8),
      height: verticalScale(24),
      borderRadius: moderateScale(4),
      backgroundColor: isActive
        ? COLORS.primaryYellow
        : isSecondaryActive
        ? COLORS.primaryBlue
        : COLORS.grey200,
    },
  });
  return <View style={styles.container} />;
};
export default memo(stats);
