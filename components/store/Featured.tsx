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


const Featured2 = () => {
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
          <CarouselItem className='relative h-[80svh]'>
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
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Featured2;