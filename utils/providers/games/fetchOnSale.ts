import { Game, GetGamesResponse } from "@/types/games";
import { gql } from "graphql-request";
import { graphQLClient } from "../GraphqlClientProvider";

const getOnSale = gql`
  query QueryOnSale {
    games {
      id
      name
      price
      discount
      discountedPrice
      images {
        bannerPortrait
      }
    }
  }
`;

const fetchOnSale = async (): Promise<Game[]> => {
  try {
    const data: GetGamesResponse = await graphQLClient.request(getOnSale);
    console.log("On Sale games: ", data.games)
    return data.games;
  } catch {
    throw new Error("Failed to fetch on sale games");
  }
};

export default fetchOnSale;
