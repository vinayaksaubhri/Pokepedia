import { LinearGradient } from "expo-linear-gradient";
import { Image, StyleSheet, Text, View } from "react-native";
import CustomSafeAreaView from "../../../components/customSafeAreaView";
import TopAppBar from "../../../components/topAppBar";
import { COLORS, FONTS, POKEMON_COLOR } from "../../../style/style";
// import Charizard from "../../../assets/pokemon/charizard";
import CharizardImage from "../../../assets/pokemon/6.png";
import { height, scaleFont } from "../../../style/metrics";
import { ScrollView } from "react-native-gesture-handler";
import { MyTabs } from "../components/topBarNavigator";

const PokemonDetailScreens = ({ navigation }) => {
  return (
    <CustomSafeAreaView backgroundColor={POKEMON_COLOR.fire}>
      <ScrollView
        style={styles.container}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        <LinearGradient
          colors={[POKEMON_COLOR.fire, "#fff"]}
          style={styles.linearGradient}
        >
          <View style={styles.imageHeaderContainer}>
            <TopAppBar label="#006" navigation={navigation} />
            <Image source={CharizardImage} style={styles.imageStyle} />
            <View style={styles.HeadingSubHeadingContainer}>
              <Text style={styles.headingTextStyle}>Charizard</Text>
              <Text style={styles.subHeadingTextStyle}>Flame Pokémon</Text>
            </View>
          </View>
        </LinearGradient>
        <View
          style={{ flex: 1, backgroundColor: "green", height: height * 0.5 }}
        >
          <MyTabs />
        </View>
      </ScrollView>
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
    height: "60%",
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
