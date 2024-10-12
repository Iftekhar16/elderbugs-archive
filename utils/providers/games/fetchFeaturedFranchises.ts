import { Game, GetGamesResponse } from "@/types/games";
import { gql } from "graphql-request";
import { graphQLClient } from "../GraphqlClientProvider";

const getFeaturedFranchises = gql`
  query QueryFeaturedFranchises {
    games {
      id
      name
      descriptions{
        title
        content
      }
      isFeaturedFranchise
      images {
        logo
        bannerPortrait
      }
    }
  }
`;

const fetchFeaturedFranchises = async (): Promise<Game[]> => {
  try {
    const data: GetGamesResponse = await graphQLClient.request(getFeaturedFranchises);
    console.log("Featured Franchises games: ", data.games)
    return data.games;
  } catch {
    throw new Error("Failed to fetch featured games");
  }
};

export default fetchFeaturedFranchises;
