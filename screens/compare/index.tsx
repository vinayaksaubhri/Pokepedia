import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../style/style";
import CustomSafeAreaView from "../../components/customSafeAreaView";
import { moderateScale, scaleFont, verticalScale } from "../../style/metrics";
import { FONTS } from "../../style/style";
import PokemonSelectCard from "../../components/pokemonSelectCard";
import Button from "../../components/button";
import DiceButton from "../../components/DiceButton";
import ROUTES from "../../constant/routes";
import { useState } from "react";
import { PokemonTypes } from "../../types/pokemonTypes";

type selectedPokemonType = {
  id: string;
  pokemonIndex: number | null;
  name: string;
  type: PokemonTypes;
};

const Compare = ({ navigation, route }) => {
  const { bottomNavigationSetOptions } = route?.params;
  const [pokemon1, setPokemon1] = useState<selectedPokemonType>({
    id: "57f30647-28c6-404e-9b07-a9b644d85a99",
    pokemonIndex: 6,
    name: "charizard",
    type: "fire",
  });
  const [pokemon2, setPokemon2] = useState<selectedPokemonType>({
    id: "36bbc227-088b-4b89-8762-d1b0691ac99b",
    pokemonIndex: 8,
    name: "wartortle",
    type: "water",
  });
  return (
    <CustomSafeAreaView>
      <View style={styles.container}>
        <View>
          <Text style={styles.headingTextStyle}>Comparator</Text>
          <Text style={styles.subHeadingTextStyle}>
            Select two Pokémon and compare them to see who is the strongest!
          </Text>
        </View>
        <View
          style={{
            marginTop: verticalScale(24),
            flex: 1,
            gap: 24,
          }}
        >
          <PokemonSelectCard />
          <PokemonSelectCard />
          <DiceButton />
          <Button
            variant="Primary"
            width={"100%"}
            label="COMPARE!"
            onPress={() => {
              bottomNavigationSetOptions({ tabBarVisible: false });
              navigation.navigate(ROUTES.COMPARE_RESULT_SCREEN, {
                bottomNavigationSetOptions,
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(24),
    paddingBottom: verticalScale(84 + 24),
    // backgroundColor: "red",
  },
  headingTextStyle: {
    fontSize: scaleFont(36),
    fontFamily: FONTS.RC_Regular,
    marginBottom: moderateScale(4),
    color: COLORS.primaryBlue,
  },
  subHeadingTextStyle: {
    fontSize: scaleFont(16),
    fontFamily: FONTS.RC_Regular,
    color: COLORS.primaryBlue,
    lineHeight: verticalScale(24),
  },
});
