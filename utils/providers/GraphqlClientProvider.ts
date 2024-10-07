import { GraphQLClient } from "graphql-request";

const endpoint = "https://elderbugs-archive-api.onrender.com";
const graphQLClient = new GraphQLClient(endpoint);

export { graphQLClient };