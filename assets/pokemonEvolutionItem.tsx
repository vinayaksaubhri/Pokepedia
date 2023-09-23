import { ImageSourcePropType } from "react-native";
export type PokemonEvolutionItemType = {
  label: string;
  source: ImageSourcePropType;
};
const pokemonEvolutionItem: PokemonEvolutionItemType[] = [
  {
    label: "thunder-stone",
    source: require("./pokemon_stone/thunder-stone.png"),
  },
  {
    label: "moon-stone",
    source: require("./pokemon_stone/moon-stone.png"),
  },
  {
    label: "fire-stone",
    source: require("./pokemon_stone/fire-stone.png"),
  },
  {
    label: "leaf-stone",
    source: require("./pokemon_stone/leaf-stone.png"),
  },
  {
    label: "sun-stone",
    source: require("./pokemon_stone/sun-stone.png"),
  },
  {
    label: "water-stone",
    source: require("./pokemon_stone/water-stone.png"),
  },
  {
    label: "galarica-cuff",
    source: require("./pokemon_stone/galarica-cuff.png"),
  },
  {
    label: "galarica-wreath",
    source: require("./pokemon_stone/galarica-wreath.png"),
  },
  {
    label: "black-augurite",
    source: require("./pokemon_stone/black-augurite.png"),
  },
  {
    label: "ice-stone",
    source: require("./pokemon_stone/ice-stone.png"),
  },
  {
    label: "shiny-stone",
    source: require("./pokemon_stone/shiny-stone.png"),
  },
  {
    label: "dusk-stone",
    source: require("./pokemon_stone/dusk-stone.png"),
  },
  {
    label: "peat-block",
    source: require("./pokemon_stone/peat-block.png"),
  },
  {
    label: "dawn-stone",
    source: require("./pokemon_stone/dawn-stone.png"),
  },
  {
    label: "tart-apple",
    source: require("./pokemon_stone/tart-apple.png"),
  },
  {
    label: "sweet-apple",
    source: require("./pokemon_stone/sweet-apple.png"),
  },
  {
    label: "cracked-pot",
    source: require("./pokemon_stone/cracked-pot.png"),
  },
  {
    label: "auspicious-armor",
    source: require("./pokemon_stone/auspicious-armor.png"),
  },
  {
    label: "malicious-armor",
    source: require("./pokemon_stone/malicious-armor.png"),
  },
];

export default pokemonEvolutionItem;
