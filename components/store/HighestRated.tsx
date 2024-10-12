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
    <div className='max-w-[70rem] mx-auto mb-20'>
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
          {games?
            .sort((a,b) => b.rating - a.rating)
            .slice(0,6)
            .map((game) => (
            <CarouselItemCustom key={game.id} className='basis-1/3'>
              <HighestRatedItem images={game.images} name={game.name} price={game.price} discountedPrice={game.discountedPrice}/>
            </CarouselItemCustom>
          ))}
          {/* <CarouselItemCustom className='basis-1/3'>
            <HighestRatedItem image="/frostpunk-banner4.jpg" title="Frostpunk 2" price={19.99} discountedPrice={4.99}/>
          </CarouselItemCustom>
          <CarouselItemCustom className='basis-1/3'>
            <HighestRatedItem image="/frostpunk-banner5.jpg" title="Frostpunk 2" price={19.99} discountedPrice={4.99}/>
          </CarouselItemCustom>
          <CarouselItemCustom className='basis-1/3'>
            <HighestRatedItem image="/frostpunk-banner6.jpg" title="Frostpunk 2" price={19.99} discountedPrice={4.99}/>
          </CarouselItemCustom>
          <CarouselItemCustom className='basis-1/3'>
            <HighestRatedItem image="/frostpunk-banner3.jpg" title="Frostpunk 2" price={19.99} discountedPrice={4.99}/>
          </CarouselItemCustom>
          <CarouselItemCustom className='basis-1/3'>
            <HighestRatedItem image="/frostpunk-banner4.jpg" title="Frostpunk 2" price={19.99} discountedPrice={4.99}/>
          </CarouselItemCustom>
          <CarouselItemCustom className='basis-1/3'>
            <HighestRatedItem image="/frostpunk-banner5.jpg" title="Frostpunk 2" price={19.99} discountedPrice={4.99}/>
          </CarouselItemCustom>
          <CarouselItemCustom className='basis-1/3'>
            <HighestRatedItem image="/frostpunk-banner6.jpg" title="Frostpunk 2" price={19.99} discountedPrice={4.99}/>
          </CarouselItemCustom> */}
        </CarouselContentCustom>
      </CarouselCustom>
    </div>
  );
};

export default HighestRated;