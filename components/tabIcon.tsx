import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { COLORS, FONTS } from "../style/style";
import { moderateScale, verticalScale } from "../style/metrics";

interface TabIconProps {
  isFocused?: boolean;
  color?: string;
  size?: number;
  icon: JSX.Element;
  label: string;
  onPress?: (event: GestureResponderEvent) => void;
}

const TabIcon: React.FC<TabIconProps> = ({
  icon,
  isFocused,
  label,
  onPress,
}) => {
  return (
    <Pressable onPress={onPress} style={[styles.container]}>
      <View style={[isFocused && styles.activeContainer]}>
        <View>{icon}</View>
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
const styles = StyleSheet.create({
  activeContainer: {
    backgroundColor: COLORS.surface,
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
