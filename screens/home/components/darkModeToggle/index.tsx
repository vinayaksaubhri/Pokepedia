import { Feather } from "@expo/vector-icons";
import { Platform, StyleSheet, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import useTheme from "../../../../hooks/useTheme";
import { horizontalScale, verticalScale } from "../../../../style/metrics";
import { COLORS, DARK_COLORS } from "../../../../style/style";
const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkModeWithAnimation, setIsDarkMode } = useTheme();

  const pan = Gesture.Pan()
    .runOnJS(true)
    .onBegin((event) => {
      Platform.OS === "ios"
        ? toggleDarkModeWithAnimation(event.absoluteX, event.absoluteY)
        : setIsDarkMode(!isDarkMode);
    });
  return (
    <GestureDetector gesture={pan}>
      <View style={styles.darkModeButtonContainer}>
        {isDarkMode ? (
          <Feather name="sun" size={18} color={DARK_COLORS.white} />
        ) : (
          <Feather name="moon" size={18} color={COLORS.primaryBlue} />
        )}
      </View>
    </GestureDetector>
  );
};
export default DarkModeToggle;
const styles = StyleSheet.create({
  darkModeButtonContainer: {
    borderRadius: 8,
    borderWidth: 1,
    width: horizontalScale(30),
    height: verticalScale(30),
    justifyContent: "center",
    alignItems: "center",
    borderColor: COLORS.grey300,
  },
});
