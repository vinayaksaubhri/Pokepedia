import BottomSheet from "@gorhom/bottom-sheet";
import { useRef } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import CustomSafeAreaView from "../../components/customSafeAreaView";
import FilterModal from "../../components/filterModal";
import SearchBar from "../../components/searchBar";
import {
  horizontalScale,
  moderateScale,
  scaleFont,
  verticalScale,
} from "../../style/metrics";
import { COLORS, FONTS } from "../../style/style";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import Chip from "../../components/chip";
import PokemonCard from "../../components/pokemonCard";
import { pokemonData } from "../../constant/constant";

const Home = ({ navigation, route }) => {
  const { bottomNavigationSetOptions } = route?.params;

  const bottomSheetRef = useRef<BottomSheet>(null);
  let showSelectedFilter = false;
  const onPressCard = () => {
    bottomNavigationSetOptions({ tabBarVisible: false });
    navigation.navigate("PokemonDetailScreen", { bottomNavigationSetOptions });
  };
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
            bottomNavigationSetOptions({ tabBarVisible: false });
            bottomSheetRef.current?.expand();
          }}
        />
        {showSelectedFilter && (
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            style={styles.selectedFilterContainer}
            contentContainerStyle={styles.selectedFilterContentContainerStyle}
          >
            <Chip label="Generation III" showCrossIcon />
            <Chip
              label="Dark"
              showCrossIcon
              showTypeIcon={true}
              iconType="dark"
            />
            <Chip
              label="Dragon"
              showCrossIcon
              showTypeIcon={true}
              iconType="dragon"
            />
            <Chip label="50 kg" showCrossIcon />
            <Chip label="1.7 m" showCrossIcon />
          </ScrollView>
        )}
        <FlatList
          data={pokemonData}
          showsVerticalScrollIndicator={false}
          style={styles.flatListStyle}
          contentContainerStyle={styles.contentContainerStyle}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapperStyle}
          renderItem={({ item, index }) => {
            return (
              <PokemonCard
                pokeCardType={item.pokeCardType}
                onPress={onPressCard}
                key={index}
              />
            );
          }}
        />
      </View>
      <FilterModal
        bottomSheetRef={bottomSheetRef}
        bottomNavigationSetOptions={bottomNavigationSetOptions}
      />
    </CustomSafeAreaView>
  );
};
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: moderateScale(24),
    paddingBottom: 0,
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
  selectedFilterContainer: {
    marginTop: 8,
    flexGrow: 0,
  },
  selectedFilterContentContainerStyle: {
    gap: horizontalScale(12),
  },
});
