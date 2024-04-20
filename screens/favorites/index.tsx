import { StyleSheet, Text, View } from "react-native";
import CustomSafeAreaView from "../../components/customSafeAreaView";
import { moderateScale, scaleFont, verticalScale } from "../../style/metrics";
import { COLORS, DARK_COLORS, FONTS } from "../../style/style";
import useTheme from "../../hooks/useTheme";
const Favorites = () => {
  const { isDarkMode } = useTheme();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: moderateScale(24),
      justifyContent: "center",
      alignItems: "center",
    },
    headingTextStyle: {
      fontSize: scaleFont(36),
      color: isDarkMode ? DARK_COLORS.textWhite : COLORS.primaryBlue,
      fontFamily: FONTS.RC_Regular,
      marginBottom: verticalScale(4),
    },
    subHeadingTextStyle: {
      alignSelf: "flex-start",
      fontSize: scaleFont(16),
      color: COLORS.primaryBlue,
      fontFamily: FONTS.RC_Regular,
      marginBottom: verticalScale(16),
      lineHeight: verticalScale(24),
    },
    contentContainerStyle: {
      gap: verticalScale(16),
      paddingTop: verticalScale(20),
      paddingBottom: verticalScale(90),
    },
    flatListStyle: {
      flex: 1,
      marginTop: 4,
      width: "100%",
      borderRadius: moderateScale(16),
    },
    columnWrapperStyle: {
      justifyContent: "space-between",
    },
  });
  return (
    <CustomSafeAreaView
      backgroundColor={isDarkMode ? DARK_COLORS.surface : COLORS.surface}
    >
      <View style={styles.container}>
        <Text style={styles.headingTextStyle}>Coming Soon!</Text>
      </View>
    </CustomSafeAreaView>
  );
};
export default Favorites;
