'use client'
import React from 'react';
import TitleLink from './TitleLink';
import SaleWishlistedRecentCard from './SaleWishlistedRecentCard';
import fetchRecentlyAddedGames from '@/utils/providers/games/fetchRecentlyAddedGames';
import { useQuery } from '@tanstack/react-query';
import { Game } from '@/types/games';

const RecentlyAdded = () => {

  const { data: games, error, isLoading } = useQuery<Game[]>({
    queryKey: ['recentlyAdded'],
    queryFn: fetchRecentlyAddedGames,
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

  const convertToDate = (dateStr: string | null): Date => {
    if (!dateStr) return new Date(0);
    const [day, month, year] = dateStr.split('-').map(Number);
    return new Date(year, month - 1, day);
  };

  const sortedGames = games?.sort((a, b) => {
    const dateA = convertToDate(a.releaseDate??"");
    const dateB = convertToDate(b.releaseDate??"");
    return dateB.getTime() - dateA.getTime();
  })

  return (
    <div className="recent-container">
      <TitleLink title="Recently Added" link="#" icon="hugeicons:arrow-right-01"/>
      {sortedGames?.slice(0,4).map((game) => (
        game.releaseDate !== null && (
          <SaleWishlistedRecentCard
            key={game.id}
            bannerPortrait={game.images.bannerPortrait}
            name={game.name}
            discount={game.discount}
            price={game.price}
            discountedPrice={game.discountedPrice}
          />
        )
      ))}
    </div>
  );
};

export default RecentlyAdded;