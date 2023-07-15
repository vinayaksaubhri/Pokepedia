import { PokemonTypes } from "../components/chip";
export const MAX_BASE_STATS = 255;

export const GenerationList = [
  "Generation I",
  "Generation II",
  "Generation III",
  "Generation IV",
];
export const TypeList: { label: string; iconType: PokemonTypes }[] = [
  { label: "Bug", iconType: "bug" },
  { label: "Dark", iconType: "dark" },
  { label: "Dragon", iconType: "dragon" },
  { label: "Electric", iconType: "electric" },
  { label: "Fairy", iconType: "fairy" },
  { label: "Fighting", iconType: "fighting" },
  { label: "Fire", iconType: "fire" },
  { label: "Flying", iconType: "flying" },
  { label: "Ghost", iconType: "ghost" },
  { label: "Grass", iconType: "grass" },
  { label: "Ground", iconType: "ground" },
  { label: "Ice", iconType: "ice" },
  { label: "Normal", iconType: "normal" },
  { label: "Poison", iconType: "poison" },
  { label: "Psychic", iconType: "psychic" },
  { label: "Steel", iconType: "steel" },
  { label: "Water", iconType: "water" },
  { label: "Rock", iconType: "rock" },
];
export const pokemonData: { pokeCardType: PokemonTypes }[] = [
  { pokeCardType: "electric" },
  { pokeCardType: "bug" },
  { pokeCardType: "dark" },
  { pokeCardType: "dragon" },
  { pokeCardType: "fairy" },
  { pokeCardType: "fighting" },
  { pokeCardType: "fire" },
  { pokeCardType: "flying" },
  { pokeCardType: "ghost" },
  { pokeCardType: "ground" },
  { pokeCardType: "ice" },
  { pokeCardType: "normal" },
  { pokeCardType: "poison" },
  { pokeCardType: "psychic" },
  { pokeCardType: "rock" },
  { pokeCardType: "steel" },
  { pokeCardType: "water" },
];
