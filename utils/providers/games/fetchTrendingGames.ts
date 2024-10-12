import { Game, GetGamesResponse } from '@/types/games';
import { gql } from 'graphql-request';
import { graphQLClient } from '../GraphqlClientProvider';

const getTrendingGames = gql`
  query QueryFeaturedGames {
    games {
      id
      name
      price
      discount
      discountedPrice
      isTrending
      images {
        bannerPortrait
      }
    }
  }
`;


const fetchTrendingGames = async (): Promise<Game[]> => {
  try {
    const data: GetGamesResponse = await graphQLClient.request(getTrendingGames);
    console.log("Trending games: ", data.games)
    return data.games;
  } catch {
    throw new Error("Failed to fetch trending games");
  }
};

export default fetchTrendingGames;