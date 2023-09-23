import { StyleSheet, View } from "react-native";
import Charmander from "../../../assets/pokemon/4.png";
import Chameleon from "../../../assets/pokemon/5.png";
import Charizard from "../../../assets/pokemon/6.png";
import { COLORS } from "../../../style/style";
import BlurScrollView from "../../../components/blurScrollView";
import { moderateScale, verticalScale } from "../../../style/metrics";
import PokemonEvolutionCard from "./pokemonEvolutionCard";
import {
  capitalizeFirstLetter,
  getPokeNumberFromPokemonIndex,
} from "../../../utils/utils";
import { list as pokemonImageList } from "../../../assets/pokemonImageData";
import { PokemonTypes } from "../../../types/pokemonTypes";

const PokemonTabEvolutionComponent = ({ route, navigation }) => {
  const { pokemonEvolutions } = route?.params;

  return (
    <>
      <BlurScrollView
        blurHeight={24}
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContainer}
      >
        <View style={styles.container}>
          {pokemonEvolutions.map((pokemonEvolution) => {
            const {
              name,
              pokemonId,
              pokemonIndex,
              pokemonType,
              evolutionLevel,
              evolvesFrom,
              trigger,
              triggerItem,
            } = pokemonEvolution;

            return (
              <PokemonEvolutionCard
                label={getPokeNumberFromPokemonIndex(pokemonIndex)}
                pokemonName={capitalizeFirstLetter(name)}
                pokemonTypes={pokemonType.map(
                  ({ badgeType }: { badgeType: PokemonTypes }) => ({
                    label: "",
                    showLabel: false,
                    showTypeIcon: true,
                    iconType: badgeType,
                  })
                )}
                imageSource={pokemonImageList[pokemonIndex - 1]?.source}
                pokemonLevel={evolutionLevel}
                key={pokemonId}
                evolvesFrom={evolvesFrom}
                trigger={trigger}
                triggerItem={triggerItem}
              />
            );
          })}
        </View>
      </BlurScrollView>
    </>
  );
};
export default PokemonTabEvolutionComponent;
const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    paddingBottom: verticalScale(16),
    backgroundColor: COLORS.surface,
  },
  container: {
    padding: moderateScale(24),
    alignItems: "center",
    backgroundColor: COLORS.surface,
    flex: 1,
  },
});
