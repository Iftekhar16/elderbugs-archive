import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { Game } from '@/types/games';

interface CarouselGameProps {
  game: Game
}

const CarouselGame: React.FC<CarouselGameProps>= ({ game }) => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 3000,
        })
      ]}
      className='max-w-[70rem] mx-auto rounded-lg overflow-hidden mb-7'
    >
      <CarouselContent className=''>
        <CarouselItem className='relative'>
          <Image className='w-full h-[25rem] rounded-lg object-cover' src={game.images.bannerLandscape??""} alt="" width={1920} height={1080}/>
        </CarouselItem>
        <CarouselItem className='relative'>
          <Image className='w-full h-[25rem] rounded-lg object-cover' src={game.images.screenshots?.screenshot1??""} alt="" width={1920} height={1080}/>
        </CarouselItem>
        <CarouselItem className='relative'>
          <Image className='w-full h-[25rem] rounded-lg object-cover' src={game.images.screenshots?.screenshot2??""} alt="" width={1920} height={1080}/>
        </CarouselItem>
        <CarouselItem className='relative'>
          <Image className='w-full h-[25rem] rounded-lg object-cover' src={game.images.screenshots?.screenshot3??""} alt="" width={1920} height={1080}/>
        </CarouselItem>
        <CarouselItem className='relative'>
          <Image className='w-full h-[25rem] rounded-lg object-cover' src={game.images.screenshots?.screenshot4??""} alt="" width={1920} height={1080}/>
        </CarouselItem>
        <CarouselItem className='relative'>
          <Image className='w-full h-[25rem] rounded-lg object-cover' src={game.images.screenshots?.screenshot5??""} alt="" width={1920} height={1080}/>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CarouselGame;