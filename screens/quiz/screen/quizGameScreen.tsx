import { Image, StyleSheet, View } from "react-native";
import CustomSafeAreaView from "../../../components/customSafeAreaView";
import TopAppBar from "../../../components/topAppBar";
import Button from "../../../components/button";
import {
  height,
  moderateScale,
  verticalScale,
  width,
} from "../../../style/metrics";
import React, { useEffect, useRef, useState } from "react";
import { getRandomPokemon, selectCurrentPokemon } from "../utils/data";
import { PokemonListType } from "../utils/pokemonListQuiz";
import Confetti from "react-native-confetti";
import { useHaptic } from "../../../hooks/useHaptic";

const QuizGameScreen = ({ route, navigation }) => {
  const hapticSuccess = useHaptic("success");
  const hapticError = useHaptic("error");
  const { bottomNavigationSetOptions } = route?.params;
  const confettiRef = useRef(null);
  const [gameState, setGameState] = useState<"start" | "end">("start");
  const [pokemonList, setPokemonList] = useState<PokemonListType[]>([]);
  const [answerState, setAnswerState] = useState<"correct" | "wrong" | null>(
    null
  );
  const [answer, setAnswer] = useState({
    name: "",
  });

  const [currentPokemon, setCurrentPokemon] = useState<PokemonListType>({
    name: "",
    id: 0,
    source: require("../../../assets/pokemon_sprites/0.png"),
  });

  const startOrResetTheGame = () => {
    if (gameState === "end") {
      setAnswer({ name: "" });
      setAnswerState(null);
      setGameState("start");
      confettiRef.current?.stopConfetti();
    }
    const randomPokemonList = getRandomPokemon();

    const selectedPokemon = selectCurrentPokemon(randomPokemonList);
    setPokemonList(randomPokemonList);
    setCurrentPokemon(selectedPokemon);
  };

  const checkAnswer = (pokemonName: string) => {
    setAnswer({ name: pokemonName });
    if (pokemonName === currentPokemon?.name) {
      setAnswerState("correct");
      hapticSuccess();
      confettiRef.current?.startConfetti();
    } else {
      hapticError();
      setAnswerState("wrong");
    }
    setGameState("end");
  };

  useEffect(() => {
    startOrResetTheGame();
  }, []);

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
        {gameState === "start" ? (
          <Image
            style={styles.imageStyle}
            resizeMode="contain"
            source={currentPokemon?.source}
            tintColor={"#000000"}
          />
        ) : (
          <Image
            style={styles.imageStyle}
            resizeMode="contain"
            source={currentPokemon?.source}
          />
        )}
        <View style={styles.buttonContainer}>
          {pokemonList?.map((pokemon) => (
            <Button
              variant={
                pokemon?.name === answer?.name
                  ? answerState === "correct"
                    ? "Primary"
                    : "Warning"
                  : pokemon?.name === currentPokemon?.name &&
                    gameState === "end"
                  ? "Primary"
                  : "Outline"
              }
              width={"100%"}
              label={pokemon?.name}
              onPress={() => checkAnswer(pokemon?.name)}
              disabled={answer?.name !== ""}
              feedbackType="none"
            />
          ))}
          <Button
            hidden={gameState !== "end"}
            variant="Transparent"
            width="100%"
            label="Again"
            showIcon
            onPress={startOrResetTheGame}
          />
        </View>
        <Confetti ref={confettiRef} confettiCount={50} />
      </View>
    </CustomSafeAreaView>
  );
};
export default QuizGameScreen;
const styles = StyleSheet.create({
  imageStyle: {
    aspectRatio: 1,
    height: height * 0.3,
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
