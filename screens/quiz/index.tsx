import { Image, StyleSheet, View } from "react-native";
import WhoThatPokemon from "../../assets/images/WhoThatPokemon.png";
import Button from "../../components/button";
import CustomSafeAreaView from "../../components/customSafeAreaView";
import { moderateScale } from "../../style/metrics";
import ROUTES from "../../constant/routes";
import useTheme from "../../hooks/useTheme";
import { COLORS, DARK_COLORS } from "../../style/style";

const Quiz = ({ navigation, route }) => {
  const { isDarkMode } = useTheme();

  return (
    <CustomSafeAreaView
      backgroundColor={isDarkMode ? DARK_COLORS.surface : COLORS.surface}
    >
      <View style={styles.container}>
        <Image
          source={WhoThatPokemon}
          style={styles.imageStyle}
          resizeMode="contain"
        />
        <Button
          variant="Primary"
          label="START"
          width={"90%"}
          onPress={() => {
            navigation.navigate(ROUTES.QUIZ_GAME_SCREEN);
          }}
        />
      </View>
    </CustomSafeAreaView>
  );
};
export default Quiz;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: moderateScale(24),
    gap: moderateScale(32),
  },
  imageStyle: {
    width: "100%",
    height: "40%",
  },
});
