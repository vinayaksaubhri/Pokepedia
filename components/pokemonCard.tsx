import { StyleSheet, Text, View } from "react-native";
import { width } from "../style/metrics";
import { COLORS, FONTS, POKEMON_COLOR } from "../style/style";
import PokeballIcon from "../assets/svg/pokeball_icon";
import TypeBadge from "./typeBadge";
import Bulbasaur from "../assets/pokemon/bulbasaur";
import { PokemonTypes } from "../types/pokemonTypes";

type propsType = {
  badgeArray?: Array<{ badgeType: string; label: string }>;
  pokeLabel?: string;
  pokeNumber?: string;
  pokeCardType?: PokemonTypes;
};

const PokemonCard: React.FC<propsType> = ({
  badgeArray = [
    { badgeType: "grass", label: "Grass" },
    { badgeType: "poison", label: "Poison" },
  ],
  pokeLabel = "Label",
  pokeNumber = "#000",
  pokeCardType = "grass",
}) => {
  function pokeCardColor(pokeCardType: PokemonTypes) {
    switch (pokeCardType) {
      case "grass":
        return POKEMON_COLOR.grass;
      case "poison":
        return POKEMON_COLOR.poison;
      case "fire":
        return POKEMON_COLOR.fire;
      case "water":
        return POKEMON_COLOR.water;
      case "bug":
        return POKEMON_COLOR.bug;
      case "normal":
        return POKEMON_COLOR.normal;
      case "electric":
        return POKEMON_COLOR.electric;
      case "ground":
        return POKEMON_COLOR.ground;
      case "fairy":
        return POKEMON_COLOR.fairy;
      case "fighting":
        return POKEMON_COLOR.fighting;
      case "psychic":
        return POKEMON_COLOR.psychic;
      case "rock":
        return POKEMON_COLOR.rock;
      case "steel":
        return POKEMON_COLOR.steel;
      case "ice":
        return POKEMON_COLOR.ice;
      case "ghost":
        return POKEMON_COLOR.ghost;
      case "dragon":
        return POKEMON_COLOR.dragon;
      case "dark":
        return POKEMON_COLOR.dark;
      case "flying":
        return POKEMON_COLOR.flying;
      default:
        return POKEMON_COLOR.grass;
    }
  }
  const styles = StyleSheet.create({
    container: {
      width: width * 0.42,
      backgroundColor: pokeCardColor(pokeCardType),
      aspectRatio: 1.52,
      borderRadius: 16,
      padding: 12,
      flexDirection: "column",
    },
    textContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 16,
    },
    headingText: {
      fontFamily: FONTS.RC_Regular,
      fontSize: 12,
      color: COLORS.surface,
    },
    badgeAndImageContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    badgeContainer: {
      gap: 6,
    },
    pokeballContainer: { right: -10, bottom: -20, position: "absolute" },
  });
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.headingText}>{pokeLabel}</Text>
        <Text style={styles.headingText}>{pokeNumber}</Text>
      </View>
      <View style={styles.badgeAndImageContainer}>
        <View style={styles.badgeContainer}>
          {badgeArray.map(({ badgeType, label }) => (
            <TypeBadge badgeType={badgeType} label={label} />
          ))}
        </View>
        <Bulbasaur width={74} height={74} />
      </View>

      <View style={styles.pokeballContainer}>
        <PokeballIcon />
      </View>
    </View>
  );
};
export default PokemonCard;
