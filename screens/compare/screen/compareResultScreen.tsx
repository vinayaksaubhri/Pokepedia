import { Image, StyleSheet, Text, View } from "react-native";
import { list as PokemonImageList } from "../../../assets/pokemonImageData";
import CustomSafeAreaView from "../../../components/customSafeAreaView";
import TopAppBar from "../../../components/topAppBar";
import { useGetPokemonStats } from "../../../graphql/useGetPokemonStats";
import { moderateScale } from "../../../style/metrics";
import { COLORS, FONTS } from "../../../style/style";
import { capitalizeFirstLetter, comparePokemon } from "../../../utils/utils";
import AnimatedStatsComparator from "../components/animatedStatsComparator";
import LoadingIndicator from "../../../components/loadingIndicator";
import { useEffect, useState } from "react";
const CompareResultScreen = ({ navigation, route }) => {
  const { bottomNavigationSetOptions, pokemon1, pokemon2 } = route?.params;
  const { data: pokemonStats, isLoading: loadingPokemonStats } =
    useGetPokemonStats(pokemon1.id, pokemon2.id);

  const pokemon1Stats = pokemonStats && pokemonStats[0]?.stats;

  const pokemon2Stats = pokemonStats && pokemonStats[1]?.stats;

  const loadingValue = [
    "Exploring Tall Grass...",
    "Training Pokémon...",
    "Ready to Battle...",
    "Battling...",
    comparePokemon(
      pokemon1Stats,
      pokemon1.type,
      pokemon2Stats,
      pokemon2.type
    ) === 0
      ? capitalizeFirstLetter(pokemon1.name) + " Wins!"
      : capitalizeFirstLetter(pokemon2.name) + " Wins!",
  ];
  const [loadingText, setLoadingText] = useState(loadingValue[0]);
  const delay = 1680;
  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % loadingValue.length;
      setLoadingText(loadingValue[currentIndex]);
    }, delay);

    setTimeout(() => {
      clearInterval(interval);
    }, 5 * delay);

    return () => clearInterval(interval);
  }, [pokemon1, pokemon2]);

  return (
    <CustomSafeAreaView>
      <View style={styles.container}>
        <TopAppBar
          label={"Comparator"}
          showFavIcon
          navigation={navigation}
          onPressBackButton={() => {
            bottomNavigationSetOptions({ tabBarVisible: true });
            navigation.goBack();
          }}
        />
        <View style={styles.itemContainer}>
          <View style={styles.imageContainer}>
            <View style={styles.imageBackground}>
              <Image
                source={PokemonImageList[pokemon1.pokemonIndex - 1].source}
                style={styles.imageStyle}
              />
            </View>
            <View style={styles.imageBackground}>
              <Image
                source={PokemonImageList[pokemon2.pokemonIndex - 1].source}
                style={styles.imageStyle}
              />
            </View>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.textStyles}>
              {capitalizeFirstLetter(pokemon1.name)}
            </Text>
            <Text style={styles.textStyles}>
              {capitalizeFirstLetter(pokemon2.name)}
            </Text>
          </View>
          <View>
            <Text style={styles.headingTextStyle}>
              {loadingPokemonStats ? "" : loadingText}
            </Text>
          </View>
          {loadingPokemonStats ? (
            <LoadingIndicator />
          ) : (
            <View style={styles.statsContainer}>
              <AnimatedStatsComparator
                pokemon1Stats={pokemon1Stats}
                pokemon2Stats={pokemon2Stats}
              />
            </View>
          )}
        </View>
      </View>
    </CustomSafeAreaView>
  );
};
export default CompareResultScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    flex: 1,
    padding: moderateScale(24),
  },
  imageContainer: {
    width: "100%",
    height: "25%",
    gap: 20,
    flexDirection: "row",
  },
  imageBackground: {
    flex: 1,
    backgroundColor: COLORS.grey100,
    borderRadius: 16,
  },
  imageStyle: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    flexDirection: "row",
    width: "100%",
    marginTop: 12,
    gap: 20,
  },
  textStyles: {
    flex: 1,
    textAlign: "center",
    fontFamily: FONTS.RC_Medium,
    fontSize: 20,
    color: COLORS.primaryBlue,
  },
  headingTextStyle: {
    fontFamily: FONTS.RC_Regular,
    fontSize: 22,
    color: COLORS.primaryBlue,
    marginTop: 40,
    marginBottom: 24,
  },
  statsContainer: {
    flex: 1,
  },
});
