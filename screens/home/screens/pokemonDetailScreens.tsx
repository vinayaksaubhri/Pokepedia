import { LinearGradient } from "expo-linear-gradient";
import { Image, StyleSheet, Text, View } from "react-native";
import { list as pokemonImageList } from "../../../assets/pokemonImageData";
import CustomSafeAreaView from "../../../components/customSafeAreaView";
import LoadingIndicator from "../../../components/loadingIndicator";
import TopAppBar from "../../../components/topAppBar";
import { useGetPokemon } from "../../../graphql/useGetPokemon";
import { height, scaleFont } from "../../../style/metrics";
import { COLORS, FONTS } from "../../../style/style";
import { PokemonTypes } from "../../../types/pokemonTypes";
import {
  capitalizeFirstLetter,
  getPokeNumberFromPokemonIndex,
  pokeCardColor,
} from "../../../utils/utils";
import { PokemonDetailScreenTab } from "../components/pokemonDetailScreenTab";

const PokemonDetailScreens = ({ navigation, route }) => {
  const { bottomNavigationSetOptions, pokemonIndex } = route?.params;
  const { data: pokemonDetail, isLoading: isPokemonDetailsLoading } =
    useGetPokemon(pokemonIndex);

  if (isPokemonDetailsLoading) {
    return <LoadingIndicator />;
  }
  const {
    weight: pokemonWeight,
    stats: pokemonStats,
    pokemonDetails_pokemonMoves: pokemonMoves,
    pokemonDetails_pokemonCategories: pokemonCategories,
    pokemonDetails_pokemonAbilities: pokemonAbilities,
    name: pokemonName,
    height: pokemonHeight,
    description: pokemonDescription,
    pokemonDetails_pokemonEvolutions: pokemonEvolutions,
  } = pokemonDetail!;

  const pokemonColor = pokeCardColor(
    pokemonCategories[0]?.pokemonCategory?.badgeType as PokemonTypes
  );

  const pokemonImageSource = pokemonImageList[pokemonIndex - 1]?.source;

  return (
    <CustomSafeAreaView backgroundColor={pokemonColor}>
      <View style={styles.container}>
        <LinearGradient
          colors={[pokemonColor, "#fff"]}
          style={styles.linearGradient}
        >
          <View style={styles.imageHeaderContainer}>
            <TopAppBar
              label={getPokeNumberFromPokemonIndex(pokemonIndex)}
              navigation={navigation}
              onPressBackButton={() => {
                bottomNavigationSetOptions({ tabBarVisible: true });
                navigation.goBack();
              }}
              showFavIcon={true}
              onPressFavIcon={() => {
                console.log("Fav Icon Pressed");
              }}
            />
            <Image source={pokemonImageSource} style={styles.imageStyle} />
            <View style={styles.HeadingSubHeadingContainer}>
              <Text style={styles.headingTextStyle}>
                {capitalizeFirstLetter(pokemonName)}
              </Text>
              <Text
                style={styles.subHeadingTextStyle}
              >{`${pokemonCategories[0].pokemonCategory.name} Pokémon`}</Text>
            </View>
          </View>
        </LinearGradient>
        <PokemonDetailScreenTab
          pokemonWeight={pokemonWeight}
          pokemonStats={pokemonStats}
          pokemonHeight={pokemonHeight}
          pokemonCategories={pokemonCategories}
          pokemonAbilities={pokemonAbilities}
          pokemonDescription={pokemonDescription.description}
          pokemonMoves={pokemonMoves}
          pokemonEvolutions={pokemonEvolutions}
          isMultipleEvolutions={pokemonEvolutions.length > 1}
          pokemonIndex={pokemonIndex}
        />
      </View>
    </CustomSafeAreaView>
  );
};
export default PokemonDetailScreens;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
    justifyContent: "space-between",
    height: height * 0.5,
  },
  imageHeaderContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  imageStyle: {
    aspectRatio: 1,
    flex: 1,
  },
  HeadingSubHeadingContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  headingTextStyle: {
    fontFamily: FONTS.RC_Regular,
    fontSize: scaleFont(22),
    color: COLORS.primaryBlue,
    marginBottom: 8,
  },
  subHeadingTextStyle: {
    fontFamily: FONTS.RC_Regular,
    fontSize: scaleFont(16),
    color: COLORS.grey300,
  },
});
