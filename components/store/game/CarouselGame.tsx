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

const CarouselGame = () => {
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
          <Image className='w-full h-[25rem] rounded-lg object-cover' src="/frostpunk-banner3.jpg"alt="" width={1920} height={1080}/>
        </CarouselItem>
        <CarouselItem className='relative'>
          <Image className='w-full h-[25rem] rounded-lg object-cover' src="/frostpunk-banner4.jpg"alt="" width={1920} height={1080}/>
        </CarouselItem>
        <CarouselItem className='relative'>
          <Image className='w-full h-[25rem] rounded-lg object-cover' src="/frostpunk-banner5.jpg"alt="" width={1920} height={1080}/>
        </CarouselItem>
        <CarouselItem className='relative'>
          <Image className='w-full h-[25rem] rounded-lg object-cover' src="/frostpunk-banner6.jpg"alt="" width={1920} height={1080}/>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CarouselGame;