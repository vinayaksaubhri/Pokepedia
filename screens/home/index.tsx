import BottomSheet from "@gorhom/bottom-sheet";
import { useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomSafeAreaView from "../../components/customSafeAreaView";
import FilterModal from "../../components/filterModal";
import SearchBar from "../../components/searchBar";
import { moderateScale, scaleFont, verticalScale } from "../../style/metrics";
import { COLORS, FONTS } from "../../style/style";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import Chip from "../../components/chip";
import PokemonCard from "../../components/pokemonCard";

const Home = ({ navigation, route }) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  let showSelectedFilter = false;
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
            navigation.setOptions({ tabBarVisible: false });
            bottomSheetRef.current?.expand();
          }}
        />

        {showSelectedFilter && (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: 8, marginBottom: 24 }}
            contentContainerStyle={{ gap: 12 }}
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
        <ScrollView
          data={[]}
          style={{
            marginTop: 24,
            flex: 1,
            width: "100%",
            flexWrap: "wrap",
            gap: 8,
          }}
          showsVerticalScrollIndicator={false}
          horizontal={false}
          contentContainerStyle={{
            gap: 8,
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <PokemonCard />
          <PokemonCard pokeCardType="electric" />
          <PokemonCard pokeCardType="bug" />
          <PokemonCard pokeCardType="dark" />
          <PokemonCard pokeCardType="dragon" />
          <PokemonCard pokeCardType="fairy" />
          <PokemonCard pokeCardType="fighting" />
          <PokemonCard pokeCardType="fire" />
          <PokemonCard pokeCardType="flying" />
          <PokemonCard pokeCardType="ghost" />
          <PokemonCard pokeCardType="ground" />
          <PokemonCard pokeCardType="ice" />
          <PokemonCard pokeCardType="normal" />
          <PokemonCard pokeCardType="poison" />
          <PokemonCard pokeCardType="psychic" />
          <PokemonCard pokeCardType="rock" />
          <PokemonCard pokeCardType="steel" />
          <PokemonCard pokeCardType="water" />
        </ScrollView>
      </View>
      <FilterModal bottomSheetRef={bottomSheetRef} navigation={navigation} />
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
