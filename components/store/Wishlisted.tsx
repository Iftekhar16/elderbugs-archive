'use client'
import React from 'react';
import TitleLink from './TitleLink';
import SaleWishlistedRecentCard from './SaleWishlistedRecentCard';
import { useQuery } from '@tanstack/react-query';
import { Game } from '@/types/games';
import fetchTopWishlistedGames from '@/utils/providers/games/fetchTopWishlistedGames';

const Wishlisted = () => {

  const { data: games, error, isLoading } = useQuery<Game[]>({
    queryKey: ['wishlistedGames'],
    queryFn: fetchTopWishlistedGames,
    retry: 3
  });
  
  if(isLoading){
    return(
      <div className="text-center">loading...</div>
    )
  }

  if(error){
    console.log("from wishlisted games", error);
  }

  return (
    <div className="wishlisted-container">
      <TitleLink title="Top Wishlisted" link="#" icon="hugeicons:arrow-right-01"/>
      {
        games?.sort((a, b) => (b.wishlistCount??0) - (a.wishlistCount??0))
          .slice(0, 4)
          .map((game) => (
            <SaleWishlistedRecentCard
              key={game.id}
              bannerPortrait={game.images.bannerPortrait}
              name={game.name}
              discount={game.discount}
              price={game.price}
              discountedPrice={game.discountedPrice}
            />
          ))
      }
    </div>
  );
};

export default Wishlisted;