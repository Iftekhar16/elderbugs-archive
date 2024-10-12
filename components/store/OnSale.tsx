'use client'
import React from 'react';
import TitleLink from './TitleLink';
import SaleWishlistedRecentCard from './SaleWishlistedRecentCard';
import { Game } from '@/types/games';
import fetchOnSale from '@/utils/providers/games/fetchOnSale';
import { useQuery } from '@tanstack/react-query';

const OnSale = () => {

  const { data: games, error, isLoading } = useQuery<Game[]>({
    queryKey: ['onSale'],
    queryFn: fetchOnSale,
    retry: 3
  });
  
  if(isLoading){
    return(
      <div className="text-center">loading...</div>
    )
  }

  if(error){
    console.log("from featured franchises", error);
  }

  return (
    <div className="sale-container">
      <TitleLink title="On Sale" link="#" icon="hugeicons:arrow-right-01"/>
      {
        games?.filter((game) => game.discount !== 0 && game.discount !== null)
          .sort((a, b) => b.discount - a.discount)
          .slice(0, 4)
          .map((game) => (
            <SaleWishlistedRecentCard
              key={game.id}
              images={game.images}
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

export default OnSale;