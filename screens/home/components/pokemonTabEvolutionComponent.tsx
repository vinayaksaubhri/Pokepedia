import { StyleSheet, View } from "react-native";
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
import ROUTES from "../../../constant/routes";

const PokemonTabEvolutionComponent = ({ route, navigation }) => {
  const { pokemonEvolutions, isMultipleEvolutions } = route?.params;

  if (!isMultipleEvolutions) {
    return (
      <>
        <BlurScrollView
          blurHeight={24}
          bounces={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContainer}
        >
          <View style={styles.container}>
            {pokemonEvolutions[0]?.pokemonEvolution?.chainData.map(
              (pokemonEvolution) => {
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
                    onPress={() => {
                      navigation.navigate(ROUTES.POKEMON_DETAIL_SCREEN, {
                        pokemonIndex: pokemonIndex,
                      });
                    }}
                  />
                );
              }
            )}
          </View>
        </BlurScrollView>
      </>
    );
  }
  return (
    <BlurScrollView
      blurHeight={24}
      bounces={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollViewContainer}
    >
      <View style={styles.container}>
        {pokemonEvolutions.map((pokemonEvolution) => {
          return (
            <View style={styles.chainContainer}>
              {pokemonEvolution.pokemonEvolution.chainData.map((chainData) => {
                const {
                  name,
                  pokemonId,
                  pokemonIndex,
                  pokemonType,
                  evolutionLevel,
                  evolvesFrom,
                  trigger,
                  triggerItem,
                } = chainData;
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
          );
        })}
      </View>
    </BlurScrollView>
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
  chainContainer: {
    marginBottom: verticalScale(32),
  },
});
