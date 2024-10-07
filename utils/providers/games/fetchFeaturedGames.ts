import { Game, GetGamesResponse } from '@/types/games';
import { gql } from 'graphql-request';
import { graphQLClient } from '../GraphqlClientProvider';

const getFeaturedGames = gql`
  query QueryFeaturedGames {
    games {
      id
      name
      wishlist
      images {
        logo
        bannerLandscape
      }
    }
  }
`;


const fetchFeaturedGames = async (): Promise<Game[]> => {
  try {
    const data: GetGamesResponse = await graphQLClient.request(getFeaturedGames);
    return data.games;
  } catch {
    throw new Error("Failed to fetch games");
  }
};

export default fetchFeaturedGames;