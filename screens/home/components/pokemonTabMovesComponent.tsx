import { StyleSheet, View } from "react-native";
import { COLORS } from "../../../style/style";
import PokemonMoveCard from "./pokemonMoveCard";
import { moderateScale } from "../../../style/metrics";
import BlurScrollView from "../../../components/blurScrollView";

const PokemonTabMovesComponent = () => {
  return (
    <BlurScrollView
      blurHeight={24}
      bounces={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollViewContainer}
    >
      <View style={styles.container}>
        <PokemonMoveCard label="Mega-punch" paddingTop={false} />
        <PokemonMoveCard label="Thunder-punch" />
        <PokemonMoveCard label="Scratch" />
        <PokemonMoveCard label="Sword-dance" />
        <PokemonMoveCard label="Cut" />
        <PokemonMoveCard label="Wind-attack" />
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
