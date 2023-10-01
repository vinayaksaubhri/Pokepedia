export type PokemonTypes =
  | "bug"
  | "dark"
  | "electric"
  | "dragon"
  | "fire"
  | "grass"
  | "fairy"
  | "fighting"
  | "fire"
  | "flying"
  | "ghost"
  | "rock"
  | "ice"
  | "normal"
  | "poison"
  | "psychic"
  | "ground"
  | "steel"
  | "water"
  | "";
export type pokemonGenerationType =
  | "generation-i"
  | "generation-ii"
  | "generation-iii"
  | "generation-iv"
  | "generation-v"
  | "generation-vi"
  | "generation-vii"
  | "generation-viii"
  | "";

export type filterType = {
  generation: pokemonGenerationType;
  type: PokemonTypes;
  weakness: PokemonTypes;
  height: number | null;
  weight: number | null;
  orderByPokemonIndex: "asc" | "desc" | null;
  name: string;
};
