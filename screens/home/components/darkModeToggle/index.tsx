import { Feather } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";
import useTheme from "../../../../hooks/useTheme";
import { COLORS, DARK_COLORS } from "../../../../style/style";
import { horizontalScale, verticalScale } from "../../../../style/metrics";
const DarkModeToggle = () => {
  const { isDarkMode, setIsDarkMode } = useTheme();
  return (
    <Pressable
      onPress={() => setIsDarkMode(!isDarkMode)}
      style={styles.darkModeButtonContainer}
    >
      {isDarkMode ? (
        <Feather name="sun" size={18} color={DARK_COLORS.white} />
      ) : (
        <Feather name="moon" size={18} color={COLORS.primaryBlue} />
      )}
    </Pressable>
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
