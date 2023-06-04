import React from "react";
import {
  GestureResponderEvent,
  Pressable,
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
type buttonProps = {
  variant: "Primary" | "Outline" | "Transparent";
  label: string;
  onPress?: (event: GestureResponderEvent) => void;
  onLongPress?: (event: GestureResponderEvent) => void;
  height?: number | string;
  width?: number | string;
  showIcon?: boolean;
};

const Button: React.FC<buttonProps> = ({
  variant = "Primary",
  label = "Button",
  onPress = () => {},
  onLongPress = () => {},
  height = verticalScale(44),
  width = horizontalScale(233),
  showIcon = false,
}) => {
  const styles = StyleSheet.create({
    buttonContainerPrimary: {
      backgroundColor: COLORS.primaryYellow,
      width: width,
      height: height,
      borderRadius: moderateScale(16),
      justifyContent: "center",
      alignItems: "center",
    },
    buttonTextStyle: {
      fontSize: scaleFont(14),
      fontFamily: FONTS.RC_Medium,
      color: COLORS.primaryBlue,
    },
    pressFeedbackPrimary: {
      backgroundColor: COLORS.primaryYellow + "80",
    },
    pressFeedbackOutline: {
      backgroundColor: COLORS.surface + "80",
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
    },
  });
  switch (variant) {
    case "Primary":
      return (
        <Pressable
          onPress={onPress}
          onLongPress={onLongPress}
          style={({ pressed }) => [
            styles.buttonContainerPrimary,
            pressed ? styles.pressFeedbackPrimary : {},
          ]}
        >
          <Text style={styles.buttonTextStyle}>{label}</Text>
        </Pressable>
      );
    case "Outline":
      return (
        <Pressable
          onPress={onPress}
          onLongPress={onLongPress}
          style={({ pressed }) => [
            styles.buttonContainerOutline,
            pressed ? styles.pressFeedbackOutline : {},
          ]}
        >
          <Text style={styles.buttonTextStyle}>{label}</Text>
        </Pressable>
      );
    case "Transparent":
      return (
        <Pressable
          onPress={onPress}
          onLongPress={onLongPress}
          style={({ pressed }) => [
            styles.buttonContainerTransparent,
            pressed ? styles.pressFeedbackOutline : {},
          ]}
        >
          {showIcon && <ReplaceIcon />}
          <Text style={styles.buttonTextStyle}>{label}</Text>
        </Pressable>
      );
    default:
      return (
        <Pressable
          onPress={onPress}
          onLongPress={onLongPress}
          style={({ pressed }) => [
            styles.buttonContainerPrimary,
            pressed ? styles.pressFeedbackPrimary : {},
          ]}
        >
          <Text style={styles.buttonTextStyle}>{label}</Text>
        </Pressable>
      );
  }
};
export default Button;
