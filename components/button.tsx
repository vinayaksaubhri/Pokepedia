import React from "react";
import {
  DimensionValue,
  GestureResponderEvent,
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
} from "react-native";
import ReplaceIcon from "../assets/svg/replace_Icon";
import {
  horizontalScale,
  moderateScale,
  scaleFont,
  verticalScale,
} from "../style/metrics";
import { COLORS, FONTS } from "../style/style";
import { FeedbackType, useHaptic } from "../hooks/useHaptic";
type buttonProps = {
  variant: "Primary" | "Outline" | "Transparent" | "Warning";
  label: string;
  onPress?: (event: GestureResponderEvent) => void;
  onLongPress?: (event: GestureResponderEvent) => void;
  height?: DimensionValue | undefined;
  width?: DimensionValue | undefined;
  showIcon?: boolean;
  hidden?: boolean;
  feedbackType?: FeedbackType | "none";
} & PressableProps;

const Button: React.FC<buttonProps> = ({
  variant = "Primary",
  label = "Button",
  onPress = () => {},
  onLongPress = () => {},
  height = verticalScale(44),
  width = horizontalScale(233),
  showIcon = false,
  hidden = false,
  feedbackType = "light",
  ...rest
}) => {
  const hapticSelection = useHaptic(feedbackType);

  const styles = StyleSheet.create({
    buttonContainerPrimary: {
      backgroundColor: COLORS.primaryYellow,
      width: width,
      height: height,
      borderRadius: moderateScale(16),
      justifyContent: "center",
      alignItems: "center",
      display: hidden ? "none" : "flex",
    },
    buttonContainerWarning: {
      backgroundColor: COLORS.primaryRed,

      width: width,
      height: height,
      borderRadius: moderateScale(16),
      justifyContent: "center",
      alignItems: "center",
      display: hidden ? "none" : "flex",
    },
    buttonTextStyle: {
      fontSize: scaleFont(14),
      fontFamily: FONTS.RC_Medium,
      color: COLORS.primaryBlue,
    },
    warningButtonTextStyle: {
      fontSize: scaleFont(14),
      fontFamily: FONTS.RC_Medium,
      color: COLORS.surface,
    },
    pressFeedbackPrimary: {
      backgroundColor: COLORS.primaryYellow + "80",
    },
    pressFeedbackWaring: {
      backgroundColor: COLORS.primaryRed + "80",
    },
    pressFeedbackOutline: {
      backgroundColor: COLORS.outlineButtonFeedbackColor,
    },
    buttonContainerOutline: {
      backgroundColor: COLORS.surface,
      width: width,
      height: height,
      borderWidth: 1,
      borderColor: COLORS.grey200,
      borderRadius: moderateScale(16),
      justifyContent: "center",
      alignItems: "center",
      display: hidden ? "none" : "flex",
    },
    buttonContainerTransparent: {
      backgroundColor: COLORS.surface,

      width: width,
      height: height,
      borderRadius: moderateScale(16),
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      gap: 8,
      display: hidden ? "none" : "flex",
    },
  });
  const onLongPressButton = (event: GestureResponderEvent) => {
    hapticSelection();
    onLongPress(event);
  };
  const onPressButton = (event: GestureResponderEvent) => {
    hapticSelection();
    onPress(event);
  };
  switch (variant) {
    case "Primary":
      return (
        <Pressable
          onPress={onPressButton}
          onLongPress={onLongPressButton}
          style={({ pressed }) => [
            styles.buttonContainerPrimary,
            pressed ? styles.pressFeedbackPrimary : {},
          ]}
          {...rest}
        >
          <Text style={styles.buttonTextStyle}>{label}</Text>
        </Pressable>
      );
    case "Warning":
      return (
        <Pressable
          onPress={onPressButton}
          onLongPress={onLongPressButton}
          style={({ pressed }) => [
            styles.buttonContainerWarning,
            pressed ? styles.pressFeedbackWaring : {},
          ]}
          {...rest}
        >
          <Text style={styles.warningButtonTextStyle}>{label}</Text>
        </Pressable>
      );
    case "Outline":
      return (
        <Pressable
          onPress={onPressButton}
          onLongPress={onLongPressButton}
          style={({ pressed }) => [
            styles.buttonContainerOutline,
            pressed ? styles.pressFeedbackOutline : {},
          ]}
          {...rest}
        >
          <Text style={styles.buttonTextStyle}>{label}</Text>
        </Pressable>
      );
    case "Transparent":
      return (
        <Pressable
          onPress={onPressButton}
          onLongPress={onLongPressButton}
          style={({ pressed }) => [
            styles.buttonContainerTransparent,
            pressed ? styles.pressFeedbackOutline : {},
          ]}
          {...rest}
        >
          {showIcon && <ReplaceIcon />}
          <Text style={styles.buttonTextStyle}>{label}</Text>
        </Pressable>
      );
    default:
      return (
        <Pressable
          onPress={onPressButton}
          onLongPress={onLongPressButton}
          style={({ pressed }) => [
            styles.buttonContainerPrimary,
            pressed ? styles.pressFeedbackPrimary : {},
          ]}
          {...rest}
        >
          <Text style={styles.buttonTextStyle}>{label}</Text>
        </Pressable>
      );
  }
};
export default Button;
