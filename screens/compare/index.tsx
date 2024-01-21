import { StyleSheet, Text, View } from "react-native";
import { COLORS, DARK_COLORS } from "../../style/style";
import CustomSafeAreaView from "../../components/customSafeAreaView";
import { moderateScale, scaleFont, verticalScale } from "../../style/metrics";
import { FONTS } from "../../style/style";
import PokemonSelectCard from "../../components/pokemonSelectCard";
import Button from "../../components/button";
import DiceButton from "../../components/DiceButton";
import ROUTES from "../../constant/routes";
import { useState } from "react";
import { PokemonTypes } from "../../types/pokemonTypes";
import useTheme from "../../hooks/useTheme";

export type selectedPokemonType = {
  id: string | null;
  pokemonIndex: number | null;
  name: string;
  type: PokemonTypes;
};

const Compare = ({ navigation, route }) => {
  const { isDarkMode } = useTheme();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: moderateScale(24),
      paddingBottom: verticalScale(84 + 24),
    },
    headingTextStyle: {
      fontSize: scaleFont(36),
      fontFamily: FONTS.RC_Regular,
      marginBottom: moderateScale(4),
      color: isDarkMode ? DARK_COLORS.textWhite : COLORS.primaryBlue,
    },
    subHeadingTextStyle: {
      fontSize: scaleFont(16),
      fontFamily: FONTS.RC_Regular,
      color: isDarkMode ? DARK_COLORS.textSecondary : COLORS.primaryBlue,
      lineHeight: verticalScale(24),
    },
    pokemonCardContainer: {
      marginTop: verticalScale(24),
      flex: 1,
      gap: 24,
    },
  });
  const [pokemon1, setPokemon1] = useState<selectedPokemonType>({
    id: null,
    pokemonIndex: null,
    name: "",
    type: "",
  });
  const [pokemon2, setPokemon2] = useState<selectedPokemonType>({
    id: null,
    pokemonIndex: null,
    name: "",
    type: "",
  });
  return (
    <CustomSafeAreaView
      backgroundColor={isDarkMode ? DARK_COLORS.surface : COLORS.surface}
    >
      <View style={styles.container}>
        <View>
          <Text style={styles.headingTextStyle}>Comparator</Text>
          <Text style={styles.subHeadingTextStyle}>
            Select two Pokémon and compare them to see who is the strongest!
          </Text>
        </View>
        <View style={styles.pokemonCardContainer}>
          <PokemonSelectCard setPokemon={setPokemon1} pokemon={pokemon1} />
          <PokemonSelectCard setPokemon={setPokemon2} pokemon={pokemon2} />
          <DiceButton />
          <Button
            variant="Primary"
            width={"100%"}
            label="COMPARE!"
            disabled={pokemon1.id === null || pokemon2.id === null}
            disabledColor={pokemon1.id === null || pokemon2.id === null}
            onPress={() => {
              navigation.navigate(ROUTES.COMPARE_RESULT_SCREEN, {
                pokemon1,
                pokemon2,
              });
            }}
          />
        </View>
      </View>
    </CustomSafeAreaView>
  );
};
export default Compare;
