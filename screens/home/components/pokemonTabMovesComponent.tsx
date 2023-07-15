import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { COLORS } from "../../../style/style";
import PokemonMoveCard from "./pokemonMoveCard";

const PokemonTabMovesComponent = () => {
  return (
    <ScrollView
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
    </ScrollView>
  );
};
export default PokemonTabMovesComponent;
const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    backgroundColor: COLORS.surface,
  },
  container: {
    padding: 24,
    backgroundColor: COLORS.surface,
    flex: 1,
  },
});
