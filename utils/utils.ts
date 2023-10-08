import { GenerationList } from "./../constant/constant";
import { AppStateStatus, Platform } from "react-native";
import { focusManager } from "react-query";
import { POKEMON_COLOR } from "../style/style";
import {
  PokemonTypes,
  filterType,
  pokemonGenerationType,
  pokemonStatsType,
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

//             | Bug  | Dark | Electric | Dragon | Fire | Grass | Fairy | Fighting | Flying | Ghost | Rock | Ice | Normal | Poison | Psychic | Ground | Steel | Water
// Bug       | 1    | 2    | 1        | 1      | 0.5 | 0.5  | 0.5   | 0.5      | 0.5    | 0.5   | 1    | 1   | 1      | 1      | 1       | 1      | 0.5   | 1
// Dark      | 2    | 0.5  | 1        | 1      | 1   | 1    | 0.5   | 0.5      | 1      | 2     | 1    | 1   | 1      | 1      | 2       | 1      | 1     | 1
// Electric  | 1    | 1    | 0.5      | 1      | 1   | 0.5  | 1     | 1        | 2      | 1     | 1    | 1   | 1      | 1      | 1       | 0      | 1     | 2
// Dragon    | 1    | 1    | 1        | 2      | 0.5 | 0.5  | 0     | 1        | 1      | 1     | 1    | 2   | 1      | 1      | 1       | 1      | 0.5   | 0.5
// Fire      | 2    | 1    | 1        | 0.5    | 0.5 | 2    | 1     | 1        | 1      | 1     | 0.5  | 2   | 1      | 1      | 1       | 1      | 0.5   | 0.5
// Grass     | 0.5  | 1    | 1        | 0.5    | 2   | 0.5  | 1     | 1        | 2      | 1     | 2    | 0.5 | 1      | 0.5    | 1       | 2      | 0.5   | 2
// Fairy     | 1    | 2    | 1        | 0      | 1   | 1    | 1     | 0.5      | 1      | 1     | 1    | 1   | 1      | 0.5    | 1       | 1      | 2     | 1
// Fighting  | 0.5  | 2    | 1        | 1      | 1   | 1    | 2     | 1        | 0.5    | 1     | 2    | 1   | 2      | 0.5    | 0.5     | 1      | 2     | 1
// Flying    | 2    | 1    | 0.5      | 1      | 1   | 2    | 1     | 2        | 1      | 1     | 0.5  | 1   | 1      | 1      | 1       | 0      | 0.5   | 1
// Ghost     | 0.5  | 0.5  | 1        | 1      | 1   | 1    | 1     | 1        | 1      | 2     | 1    | 1   | 0      | 1      | 2       | 1      | 1     | 1
// Rock      | 2    | 1    | 1        | 1      | 2   | 0.5  | 1     | 0.5      | 2      | 1     | 1    | 2   | 1      | 1      | 1       | 2      | 0.5   | 1
// Ice       | 1    | 1    | 1        | 2      | 2   | 1    | 1     | 2        | 1      | 1     | 2    | 0.5 | 1      | 1      | 1       | 2      | 0.5   | 0.5
// Normal    | 1    | 1    | 1        | 1      | 1   | 1    | 2     | 2        | 1      | 0     | 1    | 1   | 1      | 1      | 1       | 1      | 1     | 1
// Poison    | 1    | 1    | 1        | 1      | 1   | 2    | 0.5   | 1        | 1      | 1     | 0.5  | 1   | 1      | 0.5    | 1       | 0.5    | 0.5   | 1
// Psychic   | 1    | 0.5  | 1        | 1      | 1   | 1    | 1     | 2        | 1      | 1     | 1    | 1   | 1      | 2      | 0.5     | 1      | 0.5   | 1
// Ground    | 1    | 1    | 2        | 1      | 1   | 2    | 1     | 1        | 0      | 1     | 2    | 2   | 1      | 0.5    | 1       | 1      | 2     | 1
// Steel     | 0.5  | 1    | 0.5      | 0.5    | 2   | 0.5  | 0.5   | 2        | 1      | 1     | 0.5  | 2   | 1      | 0.5    | 1       | 1      | 0.5   | 0.5
// Water     | 1    | 1    | 2        | 0.5    | 2   | 0.5  | 1     | 1        | 1      | 1     | 2    | 1   | 1      | 1      | 1       | 2      | 0.5   | 0.5

export function getDelayTime(
  primaryValue = 0,
  secondeValue = 0,
  delayTime = 200
) {
  const arrLength = 14;
  const delayTimeArr = new Array(14).fill(0);
  if (primaryValue === secondeValue) {
    for (let i = 0; i < arrLength / 2; i++) {
      delayTimeArr[i] = i * delayTime;
      delayTimeArr[arrLength - 1 - i] = i * delayTime;
    }
    return delayTimeArr;
  }
  if (primaryValue > secondeValue) {
    for (let i = 0; i < arrLength - secondeValue; i++) {
      if (i <= secondeValue) {
        delayTimeArr[i] = i * delayTime;
        delayTimeArr[arrLength - 1 - i] = i * delayTime;
      } else {
        delayTimeArr[i] = i * delayTime;
      }
    }
    return delayTimeArr;
  }
  if (primaryValue < secondeValue) {
    for (let i = 0; i < arrLength - primaryValue; i++) {
      if (i <= primaryValue) {
        delayTimeArr[i] = i * delayTime;
        delayTimeArr[arrLength - 1 - i] = i * delayTime;
      } else {
        delayTimeArr[arrLength - 1 - i] = i * delayTime;
      }
    }
    return delayTimeArr;
  }
  return delayTimeArr;
}

export function comparePokemon(
  pokemon1: pokemonStatsType,
  pokemon1Type: PokemonTypes,
  pokemon2: pokemonStatsType,
  pokemon2Type: PokemonTypes
) {
  const pokemon1Score =
    0.05 * pokemon1?.hp +
    0.3 * pokemon1?.attack +
    0.2 * pokemon1?.defense +
    0.3 * pokemon1?.specialAttack +
    0.2 * pokemon1?.specialDefense +
    0.15 * pokemon1?.speed +
    getTypeAdvantageFactor(pokemon1Type, pokemon2Type);
  const pokemon2Score =
    0.05 * pokemon2?.hp +
    0.3 * pokemon2?.attack +
    0.2 * pokemon2?.defense +
    0.3 * pokemon2?.specialAttack +
    0.2 * pokemon2?.specialDefense +
    0.15 * pokemon2?.speed +
    getTypeAdvantageFactor(pokemon2Type, pokemon1Type);
  if (pokemon1Score > pokemon2Score) {
    return 0;
  }
  if (pokemon1Score < pokemon2Score) {
    return 1;
  }
  return -1;
}

/* Weighted Score for Pokemon  = (5% * HP) + (30% * Attack) + (20% * Defense) + 
(30 % * Special Attack) + (20 % * Special Defense) +
  (15 % * Speed) + (Type Advantage Factor)*/
type TypeAdvantageMatrixType = {
  [key in PokemonTypes]: {
    [key in PokemonTypes]: number;
  };
};
function getTypeAdvantageFactor(typeA: PokemonTypes, typeB: PokemonTypes) {
  const typeAdvantageMatrix: TypeAdvantageMatrixType = {
    Bug: {
      Bug: 1,
      Dark: 2,
      Electric: 1,
      Dragon: 1,
      Fire: 0.5,
      Grass: 0.5,
      Fairy: 0.5,
      Fighting: 0.5,
      Flying: 0.5,
      Ghost: 0.5,
      Rock: 1,
      Ice: 1,
      Normal: 1,
      Poison: 1,
      Psychic: 1,
      Ground: 1,
      Steel: 0.5,
      Water: 1,
    },
    Dark: {
      Bug: 2,
      Dark: 0.5,
      Electric: 1,
      Dragon: 1,
      Fire: 1,
      Grass: 1,
      Fairy: 0.5,
      Fighting: 0.5,
      Flying: 1,
      Ghost: 2,
      Rock: 1,
      Ice: 1,
      Normal: 1,
      Poison: 1,
      Psychic: 2,
      Ground: 1,
      Steel: 1,
      Water: 1,
    },
    Electric: {
      Bug: 1,
      Dark: 1,
      Electric: 0.5,
      Dragon: 1,
      Fire: 1,
      Grass: 0.5,
      Fairy: 1,
      Fighting: 1,
      Flying: 2,
      Ghost: 1,
      Rock: 1,
      Ice: 1,
      Normal: 1,
      Poison: 1,
      Psychic: 1,
      Ground: 0,
      Steel: 1,
      Water: 2,
    },
    Dragon: {
      Bug: 1,
      Dark: 1,
      Electric: 1,
      Dragon: 2,
      Fire: 0.5,
      Grass: 0.5,
      Fairy: 0,
      Fighting: 1,
      Flying: 1,
      Ghost: 1,
      Rock: 1,
      Ice: 2,
      Normal: 1,
      Poison: 1,
      Psychic: 1,
      Ground: 1,
      Steel: 0.5,
      Water: 0.5,
    },
    Fire: {
      Bug: 2,
      Dark: 1,
      Electric: 1,
      Dragon: 0.5,
      Fire: 0.5,
      Grass: 2,
      Fairy: 1,
      Fighting: 1,
      Flying: 1,
      Ghost: 1,
      Rock: 0.5,
      Ice: 2,
      Normal: 1,
      Poison: 1,
      Psychic: 1,
      Ground: 1,
      Steel: 0.5,
      Water: 0.5,
    },
    Grass: {
      Bug: 0.5,
      Dark: 1,
      Electric: 1,
      Dragon: 0.5,
      Fire: 2,
      Grass: 0.5,
      Fairy: 1,
      Fighting: 1,
      Flying: 0.5,
      Ghost: 1,
      Rock: 2,
      Ice: 1,
      Normal: 1,
      Poison: 0.5,
      Psychic: 1,
      Ground: 2,
      Steel: 0.5,
      Water: 0.5,
    },
    Fairy: {
      Bug: 1,
      Dark: 2,
      Electric: 1,
      Dragon: 0,
      Fire: 1,
      Grass: 1,
      Fairy: 1,
      Fighting: 0.5,
      Flying: 1,
      Ghost: 1,
      Rock: 1,
      Ice: 1,
      Normal: 1,
      Poison: 2,
      Psychic: 1,
      Ground: 1,
      Steel: 0.5,
      Water: 1,
    },
    Fighting: {
      Bug: 0.5,
      Dark: 0.5,
      Electric: 1,
      Dragon: 1,
      Fire: 1,
      Grass: 1,
      Fairy: 2,
      Fighting: 1,
      Flying: 0.5,
      Ghost: 0,
      Rock: 2,
      Ice: 2,
      Normal: 2,
      Poison: 0.5,
      Psychic: 0.5,
      Ground: 1,
      Steel: 2,
      Water: 1,
    },
    Flying: {
      Bug: 2,
      Dark: 1,
      Electric: 0.5,
      Dragon: 1,
      Fire: 1,
      Grass: 2,
      Fairy: 1,
      Fighting: 2,
      Flying: 1,
      Ghost: 1,
      Rock: 0.5,
      Ice: 1,
      Normal: 1,
      Poison: 1,
      Psychic: 1,
      Ground: 0,
      Steel: 0.5,
      Water: 1,
    },
    Ghost: {
      Bug: 0.5,
      Dark: 2,
      Electric: 1,
      Dragon: 1,
      Fire: 1,
      Grass: 1,
      Fairy: 1,
      Fighting: 0,
      Flying: 1,
      Ghost: 2,
      Rock: 1,
      Ice: 1,
      Normal: 0,
      Poison: 0.5,
      Psychic: 1,
      Ground: 1,
      Steel: 1,
      Water: 1,
    },
    Rock: {
      Bug: 1,
      Dark: 1,
      Electric: 1,
      Dragon: 1,
      Fire: 2,
      Grass: 0.5,
      Fairy: 1,
      Fighting: 0.5,
      Flying: 2,
      Ghost: 1,
      Rock: 1,
      Ice: 2,
      Normal: 1,
      Poison: 1,
      Psychic: 1,
      Ground: 2,
      Steel: 0.5,
      Water: 1,
    },
    Ice: {
      Bug: 1,
      Dark: 1,
      Electric: 1,
      Dragon: 2,
      Fire: 0.5,
      Grass: 2,
      Fairy: 1,
      Fighting: 1,
      Flying: 1,
      Ghost: 1,
      Rock: 0.5,
      Ice: 0.5,
      Normal: 1,
      Poison: 1,
      Psychic: 1,
      Ground: 2,
      Steel: 0.5,
      Water: 0.5,
    },
    Normal: {
      Bug: 1,
      Dark: 1,
      Electric: 1,
      Dragon: 1,
      Fire: 1,
      Grass: 1,
      Fairy: 2,
      Fighting: 2,
      Flying: 1,
      Ghost: 0,
      Rock: 1,
      Ice: 1,
      Normal: 1,
      Poison: 1,
      Psychic: 1,
      Ground: 1,
      Steel: 0.5,
      Water: 1,
    },
    Poison: {
      Bug: 1,
      Dark: 1,
      Electric: 1,
      Dragon: 1,
      Fire: 1,
      Grass: 0.5,
      Fairy: 0.5,
      Fighting: 0.5,
      Flying: 1,
      Ghost: 1,
      Rock: 1,
      Ice: 1,
      Normal: 1,
      Poison: 0.5,
      Psychic: 2,
      Ground: 2,
      Steel: 0.5,
      Water: 1,
    },
    Psychic: {
      Bug: 1,
      Dark: 0.5,
      Electric: 1,
      Dragon: 1,
      Fire: 1,
      Grass: 1,
      Fairy: 1,
      Fighting: 2,
      Flying: 1,
      Ghost: 1,
      Rock: 1,
      Ice: 1,
      Normal: 1,
      Poison: 2,
      Psychic: 0.5,
      Ground: 1,
      Steel: 0.5,
      Water: 1,
    },
    Ground: {
      Bug: 1,
      Dark: 1,
      Electric: 2,
      Dragon: 1,
      Fire: 1,
      Grass: 2,
      Fairy: 1,
      Fighting: 1,
      Flying: 0,
      Ghost: 1,
      Rock: 2,
      Ice: 2,
      Normal: 1,
      Poison: 0.5,
      Psychic: 1,
      Ground: 1,
      Steel: 2,
      Water: 1,
    },
    Steel: {
      Bug: 0.5,
      Dark: 1,
      Electric: 0.5,
      Dragon: 0.5,
      Fire: 2,
      Grass: 0.5,
      Fairy: 0.5,
      Fighting: 2,
      Flying: 0.5,
      Ghost: 1,
      Rock: 2,
      Ice: 2,
      Normal: 1,
      Poison: 0,
      Psychic: 0.5,
      Ground: 2,
      Steel: 0.5,
      Water: 0.5,
    },
    Water: {
      Bug: 1,
      Dark: 1,
      Electric: 2,
      Dragon: 0.5,
      Fire: 2,
      Grass: 0.5,
      Fairy: 1,
      Fighting: 1,
      Flying: 1,
      Ghost: 1,
      Rock: 2,
      Ice: 1,
      Normal: 1,
      Poison: 1,
      Psychic: 1,
      Ground: 2,
      Steel: 0.5,
      Water: 0.5,
    },
  };

  if (typeA in typeAdvantageMatrix && typeB in typeAdvantageMatrix[typeA]) {
    return typeAdvantageMatrix[typeA][typeB];
  } else {
    return 1;
  }
}
