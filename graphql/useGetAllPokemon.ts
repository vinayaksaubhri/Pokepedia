import request, { gql } from "graphql-request";
import { useInfiniteQuery, useQuery } from "react-query";
import client from "./config";
import { PokemonTypes } from "../types/pokemonTypes";

const query = gql`
  query getAllPokemon($limit: Int = 10, $offset: Int = null) @cached {
    pokemonDetails(
      order_by: { pokemonIndex: asc }
      limit: $limit
      offset: $offset
    ) {
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
export function useGetAllPokemon() {
  return useInfiniteQuery<PokemonList, unknown>(
    "getAllPokemon",
    async ({ pageParam }) => {
      const data: any = await client.request(query, {
        offset: pageParam ? pageParam : null,
      });

      return data.pokemonDetails;
    },
    {
      keepPreviousData: true,
      getNextPageParam: (lastPage, allPages) => {
        return allPages.length * 10;
      },
    }
  );
}
