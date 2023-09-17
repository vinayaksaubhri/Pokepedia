import {
  GestureResponderEvent,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import PokeballIcon from "../assets/svg/pokeball_icon";
import {
  horizontalScale,
  moderateScale,
  scaleFont,
  verticalScale,
  width,
} from "../style/metrics";
import { COLORS, FONTS, POKEMON_COLOR } from "../style/style";
import { PokemonTypes } from "../types/pokemonTypes";
import TypeBadge from "./typeBadge";
import { list as pokemonImageList } from "../assets/pokemonImageData";

type propsType = {
  badgeArray?: Array<{ badgeType: PokemonTypes; name: string }>;
  pokeLabel?: string;
  pokeNumber?: string;
  pokeCardType?: PokemonTypes;
  onPress?: (event: GestureResponderEvent) => void;
  pokemonImageIndex: number;
};

const PokemonCard: React.FC<propsType> = ({
  badgeArray = [
    { badgeType: "grass", name: "Grass" },
    { badgeType: "poison", name: "Poison" },
  ],
  pokeLabel = "Label",
  pokeNumber = "#000",
  pokeCardType = "grass",
  pokemonImageIndex = 0,
  onPress = () => {},
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
      borderRadius: moderateScale(16),
      padding: moderateScale(12),
      flexDirection: "column",
    },
    textContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: verticalScale(16),
    },
    headingText: {
      fontFamily: FONTS.RC_Regular,
      fontSize: scaleFont(12),
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
    pokeballContainer: {
      right: -10,
      bottom: -20,
      position: "absolute",
    },
    imageStyle: {
      aspectRatio: 1,
      width: horizontalScale(60),
    },
  });
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.textContainer}>
        <Text style={styles.headingText}>{pokeLabel}</Text>
        <Text style={styles.headingText}>{pokeNumber}</Text>
      </View>
      <View style={styles.badgeAndImageContainer}>
        <View style={styles.badgeContainer}>
          {badgeArray.map(({ badgeType, name }, index) => (
            <TypeBadge badgeType={badgeType} label={name} key={index} />
          ))}
        </View>
        <Image
          source={pokemonImageList[pokemonImageIndex - 1]?.source}
          style={styles.imageStyle}
        />
      </View>

      <View style={styles.pokeballContainer}>
        <PokeballIcon />
      </View>
    </Pressable>
  );
};
export default PokemonCard;
