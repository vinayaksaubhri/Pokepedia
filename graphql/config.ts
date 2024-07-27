import { GraphQLClient } from "graphql-request";

if (typeof process.env.HASURA_GRAPHQL_ENDPOINT === "undefined") {
  throw new Error("HASURA_GRAPHQL_ENDPOINT is not defined");
}

const endpoint = process.env.HASURA_GRAPHQL_ENDPOINT;
const client = new GraphQLClient(endpoint);
client.setHeader(
  "x-hasura-admin-secret",
  "4to7NQKLeOaHh3nXrx5fgQJL84R9g5EnO36AebUoTkw9DDglcb1Z3ZbugAec3BgB"
);

export default client;
