import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useRef } from "react";
import { StyleSheet, View } from "react-native";
import { selectedPokemonType } from "../screens/compare";
import PokemonSelectModal from "../screens/compare/components/pokemonSelectModal";
import { moderateScale } from "../style/metrics";
import { COLORS } from "../style/style";
import Button from "./button";

type PokemonSelectCardProps = {
  setPokemon: React.Dispatch<React.SetStateAction<selectedPokemonType>>;
};

const PokemonSelectCard: React.FC<PokemonSelectCardProps> = ({
  setPokemon,
}) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const onPressCard = () => {
    bottomSheetModalRef.current?.present();
  };
  return (
    <View style={styles.container}>
      <PokemonSelectModal
        bottomSheetRef={bottomSheetModalRef}
        snapPoints={["100%"]}
        children={undefined}
        setPokemon={setPokemon}
      />
      <Button
        variant="Outline"
        label="ADD POKEMON"
        width={"55%"}
        onPress={onPressCard}
      />
    </View>
  );
};
export default PokemonSelectCard;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: COLORS.grey100,
    borderRadius: moderateScale(16),
    justifyContent: "center",
    alignItems: "center",
  },
});
