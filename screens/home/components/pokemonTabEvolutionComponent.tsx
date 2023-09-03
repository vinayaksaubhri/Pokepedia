import { StyleSheet, View } from "react-native";
import Charmander from "../../../assets/pokemon/4.png";
import Chameleon from "../../../assets/pokemon/5.png";
import Charizard from "../../../assets/pokemon/6.png";
import { COLORS } from "../../../style/style";
import BlurScrollView from "../../../components/blurScrollView";
import { moderateScale, verticalScale } from "../../../style/metrics";
import PokemonEvolutionCard from "./pokemonEvolutionCard";

const PokemonTabEvolutionComponent = () => {
  return (
    <>
      <BlurScrollView
        blurHeight={24}
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContainer}
      >
        <View style={styles.container}>
          <PokemonEvolutionCard
            label="#004"
            pokemonName="Charmander"
            pokemonTypes={[
              { label: "Fire", iconType: "fire", showTypeIcon: true },
            ]}
            imageSource={Charmander}
            pokemonLevel="Level 16"
          />
          <PokemonEvolutionCard
            label="#005"
            pokemonName="Chameleon"
            pokemonTypes={[
              { label: "Fire", iconType: "fire", showTypeIcon: true },
            ]}
            imageSource={Chameleon}
            pokemonLevel="Level 36"
          />
          <PokemonEvolutionCard
            label="#006"
            pokemonName="Charizard"
            pokemonTypes={[
              { label: "Fire", iconType: "fire", showTypeIcon: true },
              { label: "Flying", iconType: "flying", showTypeIcon: true },
            ]}
            imageSource={Charizard}
          />
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
