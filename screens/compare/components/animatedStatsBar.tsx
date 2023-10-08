import { useEffect, useState } from "react";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import StatsBar, { StatsBarProps } from "../../../components/statsBar";
import { verticalScale } from "../../../style/metrics";

type AnimatedStatsBarProps = StatsBarProps & {
  index?: number;
  overwriteStartAnimation?: boolean;
  stopTranslation?: boolean;
};

const AnimatedStatsBar: React.FC<AnimatedStatsBarProps> = ({
  index = 0,
  overwriteStartAnimation = false,
  stopTranslation = false,
  ...rest
}) => {
  const [height, setHeight] = useState(0);
  const progressValue = useSharedValue(0);
  const [startAnimation, setStartAnimation] = useState(false);
  const translationStartValue =
    height * (index - 1) + verticalScale(24) * (index - 1);
  const translationEndValue = height * index + verticalScale(24) * index;

  const animatedStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      progressValue.value,
      [0, 1],
      [translationStartValue, translationEndValue]
    );

    const opacity = interpolate(progressValue.value, [0, 1], [0, 1]);

    return {
      transform: [{ translateY }],
      opacity,
    };
  });
  useEffect(() => {
    if (stopTranslation) return;
    setTimeout(() => {
      progressValue.value = withTiming(1);
      setStartAnimation(true);
    }, 1400 * index + 1);
  }, []);
  return (
    <Animated.View
      style={[
        { position: "absolute", width: "100%" },
        stopTranslation ? {} : animatedStyle,
      ]}
      onLayout={(e) => {
        setHeight(e.nativeEvent.layout.height);
      }}
    >
      <StatsBar
        value={50}
        comparatorMode
        startAnimation={overwriteStartAnimation ? true : startAnimation}
        {...rest}
      />
    </Animated.View>
  );
};
export default AnimatedStatsBar;
