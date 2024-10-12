import { Game, GetGamesResponse } from "@/types/games";
import { gql } from "graphql-request";
import { graphQLClient } from "../GraphqlClientProvider";

const getFeaturedGames = gql`
  query QueryTrendingGames {
    games {
      id
      name
      isFeatured
      isWishlisted
      images {
        logo
        bannerLandscape
      }
    }
  }
`;

const fetchFeaturedGames = async (): Promise<Game[]> => {
  try {
    const data: GetGamesResponse = await graphQLClient.request( getFeaturedGames );
    console.log("Featured games: ", data.games)
    return data.games;
  } catch {
    throw new Error("Failed to fetch featured games");
  }
};

export default fetchFeaturedGames;
