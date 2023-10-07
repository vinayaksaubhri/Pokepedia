import { gql } from "graphql-request";
import { useQuery } from "react-query";
import client from "./config";
import { pokemonStatsType } from "../types/pokemonTypes";

const query = gql`
  query getPokemonStats($id1: uuid = "", $id2: uuid = "") @cached {
    pokemonDetails(
      where: { _or: [{ id: { _eq: $id1 } }, { id: { _eq: $id2 } }] }
    ) {
      stats
    }
  }
`;

export function useGetPokemonStats(pokemonId1: string, pokemonId2: string) {
  return useQuery({
    queryKey: ["getPokemonStats", { pokemonId1, pokemonId2 }],
    queryFn: async () => {
      const data: {
        pokemonDetails: { stats: pokemonStatsType[] };
      } = await client.request(query, {
        id1: pokemonId1,
        id2: pokemonId2,
      });

      return data?.pokemonDetails;
    },
  });
}
