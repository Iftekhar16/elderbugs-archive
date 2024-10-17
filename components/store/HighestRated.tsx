'use client'
import React from 'react';
import Autoplay from 'embla-carousel-autoplay'
import {
  CarouselCustom,
  CarouselContentCustom,
  CarouselItemCustom,
  CarouselNextCustom,
  CarouselPreviousCustom,
} from "@/components/ui/carouselCustom"
import TitleLink from './TitleLink';
import HighestRatedItem from './HighestRatedItem';
import { useQuery } from '@tanstack/react-query';
import { Game } from '@/types/games';
import fetchHighestRatedGames from '@/utils/providers/games/fetchHighestRatedGames';

const HighestRated = () => {

  const { data:games, error, isLoading } = useQuery<Game[]>({
    queryKey: ['highestRated'],
    queryFn: fetchHighestRatedGames,
    retry: 3
  });
  
  if(isLoading){
    return(
      <div className="text-center">loading...</div>
    )
  }

  if(error){
    console.log("from featured", error);
  }

  return (
    <div className='max-w-[70rem] mx-auto px-3 xl:px-0 mb-20'>
      <CarouselCustom
        plugins={[
          Autoplay({
            delay: 3000,
          })
        ]}
        className=''
      >
        <div className="flex justify-between items-center gap-3 mb-3">
          <TitleLink title="Highest Rated" link="#" icon="hugeicons:arrow-right-01"/>
          <div className="flex items-center gap-3 ml-auto">
            <CarouselPreviousCustom className='bg-light1' />
            <CarouselNextCustom className='bg-light1' />
          </div>
        </div>
        <CarouselContentCustom>
          {games?.sort((a,b) => (b.rating??0) - (a.rating??0))
            .slice(0,6)
            .map((game) => (
              <CarouselItemCustom key={game.id} className='basis-4/5 md:basis-1/2 xl:basis-1/3'>
                <HighestRatedItem id={game.id} bannerSquare={game.images.bannerSquare} name={game.name} price={game.price}/>
              </CarouselItemCustom>
          ))}
        </CarouselContentCustom>
      </CarouselCustom>
    </div>
  );
};

export default HighestRated;