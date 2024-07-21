import {
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
import Animated, {
  Extrapolation,
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { OnboardingData } from "../data/data";
import { FONTS } from "../../../../style/style";
import {
  horizontalScale,
  moderateScale,
  scaleFont,
  verticalScale,
} from "../../../../style/metrics";

type Props = {
  index: number;
  x: SharedValue<number>;
  item: OnboardingData;
};

const RenderItem = ({ index, x, item }: Props) => {
  const { width: SCREEN_WIDTH } = useWindowDimensions();

  const lottieAnimationStyle = useAnimatedStyle(() => {
    const translateYAnimation = interpolate(
      x.value,
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      [200, 0, -200],
      Extrapolation.CLAMP
    );

    return {
      transform: [{ translateY: translateYAnimation }],
    };
  });

  const circleAnimation = useAnimatedStyle(() => {
    const scale = interpolate(
      x.value,
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      [1, 4, 4],
      Extrapolation.CLAMP
    );

    return {
      transform: [{ scale: scale }],
    };
  });

  return (
    <View style={[styles.itemContainer, { width: SCREEN_WIDTH }]}>
      <View style={styles.circleContainer}>
        <Animated.View
          style={[
            {
              width: SCREEN_WIDTH,
              height: SCREEN_WIDTH,
              borderRadius: SCREEN_WIDTH / 2,
              backgroundColor: item.backgroundColor,
            },
            circleAnimation,
          ]}
        />
      </View>
      <Animated.View style={lottieAnimationStyle}>
        <Image source={item.animation} style={styles.imageStyle} />
      </Animated.View>
      <View style={styles.textContainer}>
        <Text style={[styles.itemText, { color: item.textColor }]}>
          {item.text}
        </Text>
        <Text style={[styles.secondaryText, { color: item.textColor }]}>
          {item.secondaryText}
        </Text>
      </View>
    </View>
  );
};

export default RenderItem;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: verticalScale(120),
  },
  itemText: {
    fontSize: scaleFont(35),
    fontFamily: FONTS.RC_Bold,
  },
  secondaryText: {
    fontSize: scaleFont(16),
    flexWrap: "wrap",
  },
  circleContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  textContainer: {
    alignItems: "flex-start",
    gap: moderateScale(16),
    paddingHorizontal: horizontalScale(30),
  },
  imageStyle: {
    width: "100%",
    aspectRatio: 0.7,
    resizeMode: "contain",
  },
});
