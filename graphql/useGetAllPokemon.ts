import { filterType } from "./../types/pokemonTypes";
import { gql } from "graphql-request";
import { QueryClient, useInfiniteQuery } from "react-query";
import { PokemonTypes } from "../types/pokemonTypes";
import client from "./config";
import { generateWhereFormFilterData } from "../utils/utils";

const query = gql`
  query getAllPokemon(
    $limit: Int = 10
    $offset: Int = null
    $where: pokemonDetails_bool_exp = {}
  ) @cached {
    pokemonDetails(
      order_by: { pokemonIndex: asc }
      limit: $limit
      offset: $offset
      where: $where
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
export function useGetAllPokemon(filterType: filterType) {
  return useInfiniteQuery<PokemonList, unknown>(
    ["getAllPokemon", filterType],
    async ({ pageParam }) => {
      const data: any = await client.request(query, {
        offset: pageParam ? pageParam : null,
        where: generateWhereFormFilterData(filterType),
      });

      return data.pokemonDetails;
    },
    {
      keepPreviousData: true,
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage.length < 10) {
          return undefined;
        }
        return allPages.length * 10;
      },
    }
  );
}
