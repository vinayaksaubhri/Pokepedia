import { AppStateStatus, Platform } from "react-native";
import { focusManager } from "react-query";
import { POKEMON_COLOR } from "../style/style";
import { PokemonTypes } from "../types/pokemonTypes";

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
