import { StyleSheet, Text, View } from "react-native";
import CustomSafeAreaView from "../../components/customSafeAreaView";
import SearchBar from "../../components/searchBar";
import { COLORS, FONTS } from "../../style/style";
import { moderateScale, scaleFont, verticalScale } from "../../style/metrics";

const Home = () => {
  return (
    <CustomSafeAreaView>
      <View style={styles.container}>
        <Text style={styles.headingTextStyle}>Pokédex</Text>
        <Text style={styles.subHeadingTextStyle}>
          Use the advanced search to find Pokémon by type, weakness, ability and
          more!
        </Text>
        <SearchBar showFilter />
      </View>
    </CustomSafeAreaView>
  );
};
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    padding: moderateScale(24),
  },
  headingTextStyle: {
    alignSelf: "flex-start",
    fontSize: scaleFont(36),
    color: COLORS.primaryBlue,
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
});
