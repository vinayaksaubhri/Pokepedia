import { Image, StyleSheet, Text, View } from "react-native";
import TopAppBar from "../../../components/topAppBar";
import CustomSafeAreaView from "../../../components/customSafeAreaView";
import { moderateScale, verticalScale } from "../../../style/metrics";
import { COLORS, FONTS } from "../../../style/style";
import { list as PokemonImageList } from "../../../assets/pokemonImageData";
import StatsBar from "../../../components/statsBar";
const CompareResultScreen = ({ navigation, route }) => {
  const { bottomNavigationSetOptions } = route?.params;
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
                source={PokemonImageList[5].source}
                style={styles.imageStyle}
              />
            </View>
            <View style={styles.imageBackground}>
              <Image
                source={PokemonImageList[1].source}
                style={styles.imageStyle}
              />
            </View>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.textStyles}>Vinayak</Text>
            <Text style={styles.textStyles}>Vinayak</Text>
          </View>
          <View>
            <Text style={styles.headingTextStyle}>Wartortle wins!</Text>
          </View>
          <View style={styles.statsContainer}>
            <StatsBar value={10} statsTitle="HP" />
            <StatsBar value={20} statsTitle="Attack" />
            <StatsBar value={30} statsTitle="Defense" />
            <StatsBar value={40} statsTitle="Sp. Atk" />
            <StatsBar value={50} statsTitle="Sp. Def" />
            <StatsBar value={60} statsTitle="Speed" />
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
