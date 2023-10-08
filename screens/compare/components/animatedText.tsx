import { StyleSheet, Text, View } from "react-native";
import { COLORS, FONTS } from "../../../style/style";
import { capitalizeFirstLetter, comparePokemon } from "../../../utils/utils";
import { useEffect, useState } from "react";
import { selectedPokemonType } from "..";
import { pokemonStatsType } from "../../../types/pokemonTypes";
import { scaleFont, verticalScale } from "../../../style/metrics";

type AnimatedTextProps = {
  pokemon1: selectedPokemonType;
  pokemon2: selectedPokemonType;
  pokemon1Stats: pokemonStatsType;
  pokemon2Stats: pokemonStatsType;
};

const AnimatedText: React.FC<AnimatedTextProps> = ({
  pokemon1,
  pokemon2,
  pokemon1Stats,
  pokemon2Stats,
}) => {
  const loadingValue = [
    "Exploring Tall Grass...",
    "Training Pokémon...",
    "Ready to Battle...",
    "Battling...",
    comparePokemon(
      pokemon1Stats,
      pokemon1?.type,
      pokemon2Stats,
      pokemon2?.type
    ) === 0
      ? capitalizeFirstLetter(pokemon1.name) + " Wins!"
      : capitalizeFirstLetter(pokemon2.name) + " Wins!",
  ];
  const [loadingText, setLoadingText] = useState(loadingValue[0]);
  const delay = 1880;
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
    <View>
      <Text style={styles.headingTextStyle}>{loadingText}</Text>
    </View>
  );
};
export default AnimatedText;
const styles = StyleSheet.create({
  headingTextStyle: {
    fontFamily: FONTS.RC_Regular,
    fontSize: scaleFont(22),
    color: COLORS.primaryBlue,
    marginTop: verticalScale(40),
    marginBottom: verticalScale(24),
  },
});
