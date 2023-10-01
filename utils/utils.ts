import { GenerationList } from "./../constant/constant";
import { AppStateStatus, Platform } from "react-native";
import { focusManager } from "react-query";
import { POKEMON_COLOR } from "../style/style";
import {
  PokemonTypes,
  filterType,
  pokemonGenerationType,
} from "../types/pokemonTypes";
import pokemonEvolutionItem from "../assets/pokemonEvolutionItem";

export function onAppStateChange(status: AppStateStatus) {
  if (Platform.OS !== "web") {
    focusManager.setFocused(status === "active");
  }
}

export const FONT_OBJECT = {
  "RobotoCondense-Bold": require("../assets/fonts/RobotoCondensed-Bold.ttf"),
  "RobotoCondense-Light": require("../assets/fonts/RobotoCondensed-Light.ttf"),
  "RobotoCondense-Regular": require("../assets/fonts/RobotoCondensed-Regular.ttf"),
  "RobotoCondense-Medium": require("../assets/fonts/roboto-condensed-medium.ttf"),
  "Roboto-Thin": require("../assets/fonts/Roboto-Thin.ttf"),
  "Roboto-Black": require("../assets/fonts/Roboto-Black.ttf"),
  "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
  "Roboto-Light": require("../assets/fonts/Roboto-Light.ttf"),
};
export function getPokeNumberFromPokemonIndex(pokemonIndex: number) {
  return "#" + pokemonIndex?.toString()?.padStart(3, "0");
}
export function capitalizeFirstLetter(inputString: string): string {
  if (!inputString) {
    return "";
  }
  const words = inputString.split(" ");
  const capitalizedWords = words.map((word) => {
    if (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    } else {
      return "";
    }
  });
  return capitalizedWords.join(" ");
}
export function removeHyphen(inputString: string): string {
  // Use the replace method with a regular expression to remove hyphens
  return inputString.replace(/-/g, " ");
}
export function pokeCardColor(pokeCardType: PokemonTypes) {
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
export function getPokemonEvolutionItemSource(itemName: string) {
  return pokemonEvolutionItem.find((item) => item.label === itemName)?.source;
}
const PokemonWeaknessData: {
  [K in PokemonTypes]: PokemonTypes[];
} = {
  normal: ["rock", "steel", "ghost"],
  fighting: ["flying", "psychic", "fairy", "bug", "ghost", "poison"],
  flying: ["rock", "electric", "steel"],
  poison: ["ground", "poison", "rock", "ghost", "steel"],
  ground: ["grass", "bug", "flying"],
  rock: ["fighting", "ground", "steel"],
  bug: ["fighting", "flying", "poison", "ghost", "steel", "fire", "fairy"],
  ghost: ["normal", "dark"],
  steel: ["steel", "fire", "water", "electric"],
  fire: ["rock", "fire", "water", "dragon"],
  water: ["water", "grass", "dragon"],
  grass: ["flying", "poison", "bug", "steel", "fire", "grass", "dragon"],
  electric: ["ground", "grass", "electric", "dragon"],
  psychic: ["steel", "psychic", "dark"],
  ice: ["steel", "fire", "water", "ice"],
  dragon: ["steel", "fairy"],
  fairy: ["poison", "steel", "fire"],
  dark: ["fighting", "dark", "fairy"],
  "": [],
};
export function getPokemonTypeFromWeakness(pokemonType: PokemonTypes) {
  return PokemonWeaknessData[pokemonType];
}

export function generateWhereFormFilterData(filterData: filterType) {
  const { generation, type, weakness, height, weight, name } = filterData;

  const pokemonType = getPokemonTypeFromWeaknessAndType({
    weakness,
    type,
  });

  const whereCondition = {
    _and: [],
  };
  if (name !== "") {
    whereCondition._and.push({ name: { _ilike: `%${name}%` } });
  }
  if (pokemonType.length !== 0) {
    whereCondition._and.push({
      pokemonDetails_pokemonCategories: {
        pokemonCategory: {
          _or: pokemonType.map((type) => ({ badgeType: { _eq: type } })),
        },
      },
    });
  }

  if (generation !== "") {
    whereCondition._and.push({ generation: { _eq: generation } });
  }

  if (height !== null) {
    whereCondition._and.push({ height: { _gte: height } });
  }

  if (weight !== null) {
    whereCondition._and.push({ weight: { _gte: weight } });
  }

  return whereCondition;
}
export function getPokemonTypeFromWeaknessAndType({
  weakness,
  type,
}: {
  weakness: PokemonTypes;
  type: PokemonTypes;
}) {
  if (type === "") {
    return getPokemonTypeFromWeakness(weakness);
  }
  if (weakness === "") {
    return [type];
  }
  return [type, ...getPokemonTypeFromWeakness(weakness)];
}
export function getGenerationFromGenerationName(
  generationName: pokemonGenerationType
) {
  return GenerationList[
    GenerationList.findIndex(({ value }) => value === generationName)
  ].label;
}
