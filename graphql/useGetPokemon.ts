import { gql } from "graphql-request";
import { useQuery } from "react-query";
import client from "./config";
import { PokemonTypes } from "../types/pokemonTypes";

const query = gql`
  query getPokemon($pokemonIndex: numeric = "1") @cached {
    pokemonDetails(where: { pokemonIndex: { _eq: $pokemonIndex } }) {
      name
      description
      height
      weight
      stats
      pokemonDetails_pokemonCategories {
        pokemonCategory {
          badgeType
          name
        }
      }
      pokemonDetails_pokemonAbilities(limit: 2) {
        pokemonAbility {
          name
          id
        }
      }
      pokemonDetails_pokemonMoves(limit: 10) {
        pokemonMove {
          name
          id
        }
      }
      pokemonDetails_pokemonEvolutions {
        pokemonEvolution {
          chainData
          id
        }
      }
    }
  }
`;

interface Pokemon {
  description: {
    description: string[];
  };
  height: number;
  name: string;
  pokemonDetails_pokemonAbilities: {
    pokemonAbility: {
      id: string;
      name: string;
    };
  }[];
  pokemonDetails_pokemonCategories: {
    pokemonCategory: {
      badgeType: string;
      name: string;
    };
  }[];
  pokemonDetails_pokemonEvolutions: {
    pokemonEvolution: {
      chainData: {
        evolutionLevel: number | null;
        evolvesFrom: boolean;
        name: string;
        pokemonId: string;
        pokemonIndex: number;
        pokemonType: {
          badgeType: string;
          id: string;
          name: string;
        }[];
        trigger: string | null;
        triggerItem: any | null; // Replace 'any' with the actual type
      }[];
      id: string;
    };
  }[];
  pokemonDetails_pokemonMoves: {
    pokemonMove: {
      id: string;
      name: string;
    };
  }[];
  stats: {
    attack: number;
    defense: number;
    hp: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
  };
  weight: number;
}
export function useGetPokemon(pokemonIndex: number) {
  return useQuery<Pokemon, unknown>({
    queryKey: ["getPokemon", { pokemonIndex }],
    queryFn: async () => {
      const data: Pokemon = await client.request(query, {
        pokemonIndex: pokemonIndex,
      });
      const pokemonData: Pokemon = data?.pokemonDetails[0];
      return pokemonData;
    },
  });
}
