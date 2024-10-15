import { Game, GetGamesResponse } from "@/types/games";
import { gql } from "graphql-request";
import { graphQLClient } from "../GraphqlClientProvider";

const getGameDetails = gql`
  query QueryGameDetails ($id: ID!) {
    game (id: $id) {
      id
      name
      descriptions {
        title
        content
      }
      rating
      price
      discount
      discountedPrice
      isWishlisted
      developer
      publisher
      releaseDate
      platform
      tags
      reviews {
        reviewerName
        reviewDescription
        reviewRating
      }
      images {
        logo
        bannerLandscape
        screenshots {
          screenshot1
          screenshot2
          screenshot3
          screenshot4
          screenshot5
        }
      }
    }
  }
`;

const fetchGameDetails = async (id: string): Promise<Game> => {
  try {
    const data: GetGamesResponse = await graphQLClient.request(getGameDetails, {id});
    console.log("Game Details: ", data.game);
    return data.game;
  } catch {
    throw new Error("Failed to fetch game details");
  }
};

export default fetchGameDetails;
