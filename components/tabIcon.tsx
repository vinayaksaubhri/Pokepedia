import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { COLORS, DARK_COLORS, FONTS } from "../style/style";
import { moderateScale, verticalScale } from "../style/metrics";
import useTheme from "../hooks/useTheme";
import { SvgProps } from "react-native-svg";

interface TabIconProps {
  isFocused?: boolean;
  icon: (
    args: JSX.IntrinsicAttributes &
      SvgProps & {
        isFocused?: boolean;
      }
  ) => JSX.Element;
  label: String;
  onPress?: (event: GestureResponderEvent) => void;
}

const TabIcon: React.FC<TabIconProps> = ({
  icon: Icon,
  isFocused,
  label,
  onPress,
}) => {
  const { isDarkMode } = useTheme();
  const styles = StyleSheet.create({
    activeContainer: {
      backgroundColor: isDarkMode ? DARK_COLORS.primaryYellow : COLORS.surface,
      alignItems: "center",
      textAlign: "center",
      height: verticalScale(40),
      borderRadius: moderateScale(100),
      flexDirection: "row",
      padding: 8,
    },
    container: {
      alignItems: "center",
      justifyContent: "center",
      flex: 1,
    },
    iconLabelStyle: {
      color: COLORS.primaryBlue,
      fontFamily: FONTS.R_Bold,
      marginLeft: 8,
    },
  });
  return (
    <Pressable onPress={onPress} style={[styles.container]}>
      <View style={[isFocused && styles.activeContainer]}>
        <View>
          <Icon isFocused={isFocused} />
        </View>
        {isFocused && (
          <Text
            adjustsFontSizeToFit={true}
            numberOfLines={1}
            style={styles.iconLabelStyle}
          >
            {label}
          </Text>
        )}
      </View>
    </Pressable>
  );
};
export default TabIcon;
