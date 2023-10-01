import { PokemonTypes } from "../types/pokemonTypes";
export const MAX_BASE_STATS = 255;

export const GenerationList = [
  {
    label: "Generation I",
    value: "generation-i",
  },
  {
    label: "Generation II",
    value: "generation-ii",
  },
  {
    label: "Generation III",
    value: "generation-iii",
  },
  {
    label: "Generation IV",
    value: "generation-iv",
  },
  {
    label: "Generation V",
    value: "generation-v",
  },
  {
    label: "Generation VI",
    value: "generation-vi",
  },
  {
    label: "Generation VII",
    value: "generation-vii",
  },
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
