import { FlatList, StyleSheet, Text, View } from "react-native";
import CustomSafeAreaView from "../../components/customSafeAreaView";
import { moderateScale, scaleFont, verticalScale } from "../../style/metrics";
import { COLORS, FONTS } from "../../style/style";
import { pokemonData } from "../../constant/constant";
import PokemonCard from "../../components/pokemonCard";
const Favorites = () => {
  return (
    <CustomSafeAreaView>
      <View style={styles.container}>
        <Text style={styles.headingTextStyle}>Favorite</Text>
        <Text style={styles.subHeadingTextStyle}>
          This is the list of your favorite Pokémon! Favorite numbers:{" "}
          {pokemonData.length}
        </Text>
        <FlatList
          data={pokemonData}
          showsVerticalScrollIndicator={false}
          style={styles.flatListStyle}
          contentContainerStyle={styles.contentContainerStyle}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapperStyle}
          renderItem={({ item }) => {
            return <PokemonCard pokeCardType={item.pokeCardType} />;
          }}
        />
      </View>
    </CustomSafeAreaView>
  );
};
export default Favorites;
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
