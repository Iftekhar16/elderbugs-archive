import { Game, GetGamesResponse } from "@/types/games";
import { gql } from "graphql-request";
import { graphQLClient } from "../GraphqlClientProvider";

const getTopWishlistedGames = gql`
  query QueryWishlistedGames {
    games {
      id
      name
      wishlistCount
      price
      discount
      discountedPrice
      images {
        bannerPortrait
      }
    }
  }
`;

const fetchTopWishlistedGames = async (): Promise<Game[]> => {
  try {
    const data: GetGamesResponse = await graphQLClient.request(getTopWishlistedGames);
    console.log("Top Wishlisted games: ", data.games)
    return data.games;
  } catch {
    throw new Error("Failed to fetch top wishlisted games");
  }
};

export default fetchTopWishlistedGames;
