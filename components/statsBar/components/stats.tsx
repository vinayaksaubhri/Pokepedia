import { useEffect } from "react";
import { StyleSheet } from "react-native";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../../style/metrics";
import { COLORS } from "../../../style/style";

type StatsProps = {
  isActive: Boolean;
  isSecondaryActive: Boolean;
  delayTime: number;
  startAnimation: Boolean;
};

const stats: React.FC<StatsProps> = ({
  isActive = false,
  isSecondaryActive = false,
  delayTime = 0,
  startAnimation = false,
}) => {
  const progress = useSharedValue(0);
  const animatedStylePrimaryBlue = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        progress.value,
        [0, 1],
        [COLORS.grey200, COLORS.primaryBlue]
      ),
    };
  });
  const animatedStylePrimaryYellow = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        progress.value,
        [0, 1],
        [COLORS.grey200, COLORS.primaryYellow]
      ),
    };
  });
  useEffect(() => {
    if (startAnimation) {
      setTimeout(() => {
        progress.value = withTiming(1, { duration: 100 });
      }, delayTime);
    } else {
      return;
    }
  }, [delayTime, startAnimation]);

  const styles = StyleSheet.create({
    container: {
      width: horizontalScale(8),
      height: verticalScale(24),
      borderRadius: moderateScale(4),
      backgroundColor: COLORS.grey200,
    },
  });
  return (
    <Animated.View
      style={[
        styles.container,
        isActive && animatedStylePrimaryYellow,
        isSecondaryActive && animatedStylePrimaryBlue,
      ]}
    />
  );
};
export default stats;
