import request, { gql } from "graphql-request";
import { useQuery } from "react-query";
import client from "./config";

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

export function useGetAllPokemon(variable) {
  const { limit } = variable;

  return useQuery("getAllPokemon", async () => {
    try {
      const data = await client.request(query, {
        limit: limit,
      });

      return data;
    } catch (error) {
      console.log(
        "🚀 ~ file: useGetAllPokemon.ts:31 ~ returnuseQuery ~ error:",
        error
      );
    }
  });
}
