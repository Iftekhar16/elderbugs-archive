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


const Featured = () => {

  const { data: games, error, isLoading } = useQuery({
    queryKey: ['games'],
    queryFn: fetchFeaturedGames,
    retry: 3
  });
  
  if(isLoading){
    return(
      <div className="text-center">loading...</div>
    )
  }

  if(error){
    console.log(error);
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
            games && games.map((game)=>(
              <CarouselItem key={game.id} className='relative h-[80svh]'>
                <FeaturedItem image={game.images.bannerLandscape} logo={game.images.logo}/>
              </CarouselItem>
            ))
          }

          {/* <CarouselItem className='relative h-[80svh]'>
            <FeaturedItem image="/frostpunk-banner3.jpg" logo="/frostpunk2-logo1.png"/>
          </CarouselItem>
          <CarouselItem className='relative h-[80svh]'>
            <FeaturedItem image="/frostpunk-banner4.jpg" logo="/frostpunk2-logo1.png"/>
          </CarouselItem>
          <CarouselItem className='relative h-[80svh]'>
            <FeaturedItem image="/frostpunk-banner5.jpg" logo="/frostpunk2-logo1.png"/>
          </CarouselItem>
          <CarouselItem className='relative h-[80svh]'>
            <FeaturedItem image="/frostpunk-banner6.jpg" logo="/frostpunk2-logo1.png"/>
          </CarouselItem> */}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Featured;