import { Game, GetGamesResponse } from "@/types/games";
import { gql } from "graphql-request";
import { graphQLClient } from "../GraphqlClientProvider";

const getHighestRatedGames = gql`
  query QueryFeaturedFranchises {
    games {
      id
      name
      rating
      price
      discountedPrice
      images {
        bannerSquare
      }
    }
  }
`;

const fetchHighestRatedGames = async (): Promise<Game[]> => {
  try {
    const data: GetGamesResponse = await graphQLClient.request(getHighestRatedGames);
    console.log("Highest Rated games: ", data.games)
    return data.games;
  } catch {
    throw new Error("Failed to fetch highest rated games");
  }
};

export default fetchHighestRatedGames;
