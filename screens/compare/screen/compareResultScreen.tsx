import { Image, StyleSheet, Text, View } from "react-native";
import { list as PokemonImageList } from "../../../assets/pokemonImageData";
import CustomSafeAreaView from "../../../components/customSafeAreaView";
import LoadingIndicator from "../../../components/loadingIndicator";
import TopAppBar from "../../../components/topAppBar";
import { useGetPokemonStats } from "../../../graphql/useGetPokemonStats";
import { moderateScale } from "../../../style/metrics";
import { COLORS, DARK_COLORS, FONTS } from "../../../style/style";
import { capitalizeFirstLetter } from "../../../utils/utils";
import AnimatedStatsComparator from "../components/animatedStatsComparator";
import AnimatedText from "../components/animatedText";
import useTheme from "../../../hooks/useTheme";
const CompareResultScreen = ({ navigation, route }) => {
  const { isDarkMode } = useTheme();
  const { pokemon1, pokemon2 } = route?.params;
  const { data: pokemonStats, isLoading: loadingPokemonStats } =
    useGetPokemonStats(pokemon1.id, pokemon2.id);

  const pokemon1Stats = pokemonStats && pokemonStats[0]?.stats;

  const pokemon2Stats = pokemonStats && pokemonStats[1]?.stats;

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
      color: isDarkMode ? DARK_COLORS.white : COLORS.primaryBlue,
    },

    statsContainer: {
      flex: 1,
    },
  });
  return (
    <CustomSafeAreaView
      backgroundColor={isDarkMode ? DARK_COLORS.surface : COLORS.surface}
    >
      <View style={styles.container}>
        <TopAppBar
          label={"Comparator"}
          navigation={navigation}
          onPressBackButton={() => {
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
            {!loadingPokemonStats && (
              <AnimatedText
                pokemon1={pokemon1}
                pokemon2={pokemon2}
                pokemon1Stats={pokemon1Stats}
                pokemon2Stats={pokemon2Stats}
              />
            )}
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
