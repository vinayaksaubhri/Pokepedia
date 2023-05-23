import BottomSheet from "@gorhom/bottom-sheet";
import { useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomSafeAreaView from "../../components/customSafeAreaView";
import FilterModal from "../../components/filterModal";
import SearchBar from "../../components/searchBar";
import { moderateScale, scaleFont, verticalScale } from "../../style/metrics";
import { COLORS, FONTS } from "../../style/style";

const Home = ({ navigation, route }) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  return (
    <CustomSafeAreaView>
      <View style={styles.container}>
        <Text style={styles.headingTextStyle}>Pokédex</Text>
        <Text style={styles.subHeadingTextStyle}>
          Use the advanced search to find Pokémon by type, weakness, ability and
          more!
        </Text>
        <SearchBar
          showFilter
          onPressFilter={() => {
            route.params.setHideBottomBar(true);
            bottomSheetRef.current?.expand();
          }}
        />

        <FilterModal
          bottomSheetRef={bottomSheetRef}
          setHideBottomBar={route.params.setHideBottomBar}
        />
      </View>
    </CustomSafeAreaView>
  );
};
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
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
