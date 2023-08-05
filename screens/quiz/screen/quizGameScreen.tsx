import { Image, StyleSheet, View } from "react-native";
import Pokemon from "../../../assets/pokemon_sprites/17.png";
import CustomSafeAreaView from "../../../components/customSafeAreaView";
import TopAppBar from "../../../components/topAppBar";
import Button from "../../../components/button";
import { moderateScale, verticalScale } from "../../../style/metrics";
import React, { useState } from "react";

const QuizGameScreen = ({ route, navigation }) => {
  const { bottomNavigationSetOptions } = route?.params;
  const [gameState, setGameState] = useState<"start" | "end">("start");
  const [currentPokemon, setCurrentPokemon] = useState({
    name: "Pidgeotto",
    index: 17,
  });

  return (
    <CustomSafeAreaView>
      <TopAppBar
        label="Who’s that Pokémon!"
        navigation={navigation}
        onPressBackButton={() => {
          bottomNavigationSetOptions({ tabBarVisible: true });
          navigation.goBack();
        }}
      />
      <View style={styles.imageAndButtonContainer}>
        <Image
          source={Pokemon}
          style={styles.imageStyle}
          resizeMode="contain"
          tintColor={gameState === "start" ? "black" : ""}
        />
        <View style={styles.buttonContainer}>
          <Button variant="Outline" width={"100%"} label="Ponyta" />
          <Button variant="Outline" width={"100%"} label="Pidgeotto" />
          <Button variant="Outline" width={"100%"} label="Metapod" />
          {gameState === "end" && (
            <Button
              variant="Transparent"
              width={"100%"}
              label="Again"
              showIcon
            />
          )}
        </View>
      </View>
    </CustomSafeAreaView>
  );
};
export default QuizGameScreen;
const styles = StyleSheet.create({
  imageStyle: {
    aspectRatio: 1,
    height: "50%",
    alignSelf: "center",
    marginBottom: verticalScale(48),
  },
  buttonContainer: {
    gap: verticalScale(16),
  },
  imageAndButtonContainer: {
    padding: moderateScale(24),
  },
});
