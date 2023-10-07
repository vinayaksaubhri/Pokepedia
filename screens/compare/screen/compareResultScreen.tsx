import { Image, StyleSheet, Text, View } from "react-native";
import TopAppBar from "../../../components/topAppBar";
import CustomSafeAreaView from "../../../components/customSafeAreaView";
import { moderateScale, verticalScale } from "../../../style/metrics";
import { COLORS, FONTS } from "../../../style/style";
import { list as PokemonImageList } from "../../../assets/pokemonImageData";
import StatsBar from "../../../components/statsBar";
import { capitalizeFirstLetter } from "../../../utils/utils";
import { useGetPokemonStats } from "../../../graphql/useGetPokemonStats";
import AnimatedStatsComparator from "../components/animatedStatsComparator";
const CompareResultScreen = ({ navigation, route }) => {
  const { bottomNavigationSetOptions, pokemon1, pokemon2 } = route?.params;
  const { data: pokemonStats, isLoading: loadingPokemonStats } =
    useGetPokemonStats(pokemon1.id, pokemon2.id);

  const pokemon1Stats = pokemonStats && pokemonStats[0]?.stats;

  const pokemon2Stats = pokemonStats && pokemonStats[1]?.stats;

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
            <Text style={styles.headingTextStyle}>Wartortle wins!</Text>
          </View>
          <View style={styles.statsContainer}>
            <AnimatedStatsComparator />
          </View>
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
    gap: verticalScale(24),
    alignItems: "center",
  },
});
