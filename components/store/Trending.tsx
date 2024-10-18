'use client'
import React from 'react';
import TrendingCard from './TrendingCard';
import Autoplay from 'embla-carousel-autoplay'
import {
  CarouselCustom,
  CarouselContentCustom,
  CarouselItemCustom,
  CarouselNextCustom,
  CarouselPreviousCustom,
} from "@/components/ui/carouselCustom"
import TitleLink from './TitleLink';
import { useQuery } from '@tanstack/react-query';
import fetchTrendingGames from '@/utils/providers/games/fetchTrendingGames';
import { Game } from '@/types/games';

const Trending = () => {

  const { data: games, error, isLoading } = useQuery<Game[]>({
    queryKey: ['trending'],
    queryFn: fetchTrendingGames,
    retry: 3
  });
  
  if(isLoading){
    return(
      <div className="text-center">loading...</div>
    )
  }

  if(error){
    console.log("from trending", error);
  }

  return (
    <div className='max-w-[70rem] mx-auto px-3 xl:px-0 mb-10 md:mb-20'>
      <CarouselCustom
        plugins={[
          Autoplay({
            delay: 3000,
          })
        ]}
        className=''
      >
        <div className="flex justify-between items-center gap-3 mb-3">
          <TitleLink title="Trending Now" link="#" icon="hugeicons:arrow-right-01"/>
          <div className="flex items-center gap-3 ml-auto">
            <CarouselPreviousCustom className='bg-light1' />
            <CarouselNextCustom className='bg-light1' />
          </div>
        </div>
        <CarouselContentCustom>
          {
            games?.map((game: Game, index: number)=>(
              game.isTrending && (
                <CarouselItemCustom key={index} className='basis-4/5 sm:basis-1/3 xl:basis-1/5'>
                  <TrendingCard id={game.id} name={game.name} price={game.price} discount={game.discount} discountedPrice={game.discountedPrice} bannerPortrait={game.images.bannerPortrait}/>
                </CarouselItemCustom>
              )
            ))
          }
        </CarouselContentCustom>
      </CarouselCustom>
    </div>
  );
};

export default Trending;