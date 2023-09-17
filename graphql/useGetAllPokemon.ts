import request, { gql } from "graphql-request";
import { useQuery } from "react-query";
import client from "./config";
import { PokemonTypes } from "../types/pokemonTypes";

const query = gql`
  query getAllPokemon($limit: Int = 10) {
    pokemonDetails(order_by: { pokemonIndex: asc }, limit: $limit) {
      id
      name
      pokemonIndex
      pokemonDetails_pokemonCategories {
        pokemonCategory {
          badgeType
          name
        }
      }
    }
  }
`;
type PokemonList = {
  id: string;
  name: string;
  pokemonIndex: number;
  pokemonDetails_pokemonCategories: {
    pokemonCategory: {
      badgeType: PokemonTypes;
      name: string;
    };
  }[];
}[];
export function useGetAllPokemon(variable: { limit: number }) {
  const { limit } = variable;

  return useQuery<PokemonList, unknown>("getAllPokemon", async () => {
    const data: any = await client.request(query, {
      limit: limit,
    });

    return data.pokemonDetails;
  });
}
