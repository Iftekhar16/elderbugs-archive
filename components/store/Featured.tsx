'use client';
import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from 'embla-carousel-autoplay';
import FeaturedItem from './FeaturedItem';
import { useQuery } from '@tanstack/react-query';
import fetchFeaturedGames from '@/utils/providers/games/fetchFeaturedGames';
import { Game } from '@/types/games';

const Featured = () => {

  const { data: games, error, isLoading } = useQuery<Game[]>({
    queryKey: ['featured'],
    queryFn: fetchFeaturedGames,
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
    <div className='mt-5 xl:mt-10 mb-10 md:mb-20 select-none'>
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
          })
        ]}
        className='max-w-[70rem] md:aspect-auto h-fit md:h-[80svh] mx-auto px-3 xl:px-0 rounded-lg overflow-hidden'
      >
        <CarouselContent className=''>
          {
            games?.map((game: Game, index: number)=>(
              game.isFeatured && (
                <CarouselItem key={index} className='relative aspect-square md:aspect-auto h-fit md:h-[80svh]'>
                  <FeaturedItem
                    id={game.id}
                    isWishlisted={game.isWishlisted}
                    logo={game.images.logo}
                    bannerLandscape={game.images.bannerLandscape}
                  />
                </CarouselItem>
              )
            ))
          }
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Featured;