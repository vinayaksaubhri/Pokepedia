import { GraphQLClient } from "graphql-request";

if (
  typeof process.env.EXPO_PUBLIC_HASURA_GRAPHQL_ENDPOINT === "undefined" ||
  typeof process.env.EXPO_PUBLIC_HASURA_GRAPHQL_ADMIN_SECRET === "undefined"
) {
  throw new Error(
    "HASURA_GRAPHQL_ENDPOINT or EXPO_PUBLIC_HASURA_GRAPHQL_ADMIN_SECRET is not defined"
  );
}

const endpoint = process.env.EXPO_PUBLIC_HASURA_GRAPHQL_ENDPOINT;
const client = new GraphQLClient(endpoint);
client.setHeader(
  "x-hasura-admin-secret",
  process.env.EXPO_PUBLIC_HASURA_GRAPHQL_ADMIN_SECRET
);

export default client;
