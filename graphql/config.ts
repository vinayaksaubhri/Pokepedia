import { GraphQLClient } from "graphql-request";
const endpoint = "https://pokepedia.hasura.app/v1/graphql";
const client = new GraphQLClient(endpoint);
client.setHeader(
  "x-hasura-admin-secret",
  "4to7NQKLeOaHh3nXrx5fgQJL84R9g5EnO36AebUoTkw9DDglcb1Z3ZbugAec3BgB"
);

export default client;
