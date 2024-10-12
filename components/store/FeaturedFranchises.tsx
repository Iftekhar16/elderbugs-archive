'use client'
import React from 'react';
import TitleLink from './TitleLink';
import FeaturedFranchisesItem from './FeaturedFranchisesItem';
import fetchFeaturedFranchises from '@/utils/providers/games/fetchFeaturedFranchises';
import { useQuery } from '@tanstack/react-query';
import { Game } from '@/types/games';

const FeaturedFranchises = () => {

  const { data: games, error, isLoading } = useQuery<Game[]>({
    queryKey: ['featuredFranchises'],
    queryFn: fetchFeaturedFranchises,
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
    <div className='max-w-[70rem] mx-auto mb-20'>
      <TitleLink title="Featured Franchises" link="#" icon="hugeicons:arrow-right-01"/>
      <div className="featured-franchises-container grid grid-cols-3 rounded-lg overflow-hidden">
        {
          games?.filter(game => game.isFeaturedFranchise).slice(0,3).map((game) => (
            game.isFeaturedFranchise && (
              <FeaturedFranchisesItem
                key={game.id}
                id={game.id}
                name={game.name}
                descriptions={game.descriptions}
                images={game.images}
              />
            )
          ))
        }
      </div>
    </div>
  );
};

export default FeaturedFranchises;