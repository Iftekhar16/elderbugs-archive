import { Game, GetGamesResponse } from "@/types/games";
import { gql } from "graphql-request";
import { graphQLClient } from "../GraphqlClientProvider";

const getRecentlyAddedGames = gql`
  query QueryRecentlyAddedGames {
    games {
      id
      name
      wishlistCount
      price
      discount
      discountedPrice
      releaseDate
      images {
        bannerPortrait
      }
    }
  }
`;

const fetchRecentlyAddedGames = async (): Promise<Game[]> => {
  try {
    const data: GetGamesResponse = await graphQLClient.request(getRecentlyAddedGames);
    console.log("Recently Added games: ", data.games)
    return data.games;
  } catch {
    throw new Error("Failed to fetch recently added games");
  }
};

export default fetchRecentlyAddedGames;
