import { StyleSheet, View } from "react-native";
import { COLORS } from "../../../style/style";
import PokemonMoveCard from "./pokemonMoveCard";
import { moderateScale } from "../../../style/metrics";
import BlurScrollView from "../../../components/blurScrollView";
import { capitalizeFirstLetter, removeHyphen } from "../../../utils/utils";

const PokemonTabMovesComponent = ({ route, navigation }) => {
  const { pokemonMoves } = route?.params;

  return (
    <BlurScrollView
      blurHeight={24}
      bounces={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollViewContainer}
    >
      <View style={styles.container}>
        {pokemonMoves.map((pokemonMove, index) => (
          <PokemonMoveCard
            key={pokemonMove?.pokemonMove?.id}
            label={capitalizeFirstLetter(
              removeHyphen(pokemonMove?.pokemonMove?.name)
            )}
            paddingTop={index !== 0}
          />
        ))}
      </View>
    </BlurScrollView>
  );
};
export default PokemonTabMovesComponent;
const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    backgroundColor: COLORS.surface,
  },
  container: {
    padding: moderateScale(24),
    backgroundColor: COLORS.surface,
    flex: 1,
  },
});
