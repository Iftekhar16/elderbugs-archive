'use client'
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
    <div className='mt-10 mb-20 select-none'>
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
          })
        ]}
        className='max-w-[70rem] h-[80svh] mx-auto rounded-lg overflow-hidden'
      >
        <CarouselContent className=''>
          {
            games?.map((game: Game, index: number)=>(
              game.isFeatured && (
                <CarouselItem key={index} className='relative h-[80svh]'>
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