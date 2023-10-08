import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useRef } from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import { selectedPokemonType } from "../screens/compare";
import PokemonSelectModal from "../screens/compare/components/pokemonSelectModal";
import { moderateScale } from "../style/metrics";
import { COLORS } from "../style/style";
import Button from "./button";
import { list as PokemonImageList } from "../assets/pokemonImageData";

type PokemonSelectCardProps = {
  pokemon: selectedPokemonType;
  setPokemon: React.Dispatch<React.SetStateAction<selectedPokemonType>>;
  bottomNavigationSetOptions: any;
};

const PokemonSelectCard: React.FC<PokemonSelectCardProps> = ({
  setPokemon,
  pokemon,
  bottomNavigationSetOptions,
}) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const onPressCard = () => {
    bottomSheetModalRef.current?.present();
    bottomNavigationSetOptions({ tabBarVisible: false });
  };

  if (pokemon?.pokemonIndex !== null) {
    return (
      <Pressable style={styles.container} onPress={onPressCard}>
        <Image
          source={PokemonImageList[pokemon.pokemonIndex - 1].source}
          style={styles.imageStyle}
        />
        <PokemonSelectModal
          bottomSheetRef={bottomSheetModalRef}
          snapPoints={["100%"]}
          children={undefined}
          setPokemon={setPokemon}
          bottomNavigationSetOptions={bottomNavigationSetOptions}
        />
      </Pressable>
    );
  }

  return (
    <View style={styles.container}>
      <Button
        variant="Outline"
        label="ADD POKEMON"
        width={"55%"}
        onPress={onPressCard}
      />
      <PokemonSelectModal
        bottomSheetRef={bottomSheetModalRef}
        snapPoints={["100%"]}
        children={undefined}
        setPokemon={setPokemon}
        bottomNavigationSetOptions={bottomNavigationSetOptions}
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
  imageStyle: {
    height: "100%",
    aspectRatio: 1,
  },
});
