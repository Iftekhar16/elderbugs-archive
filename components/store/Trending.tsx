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

const Trending3 = () => {
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
          <TitleLink title="Trending Now" link="#" icon="hugeicons:arrow-right-01"/>
          <div className="flex items-center gap-3 ml-auto">
            <CarouselPreviousCustom className='bg-light1' />
            <CarouselNextCustom className='bg-light1' />
          </div>
        </div>
        <CarouselContentCustom>
          <CarouselItemCustom className='basis-1/5'>
            <TrendingCard/>
          </CarouselItemCustom>
          <CarouselItemCustom className='basis-1/5'>
            <TrendingCard/>
          </CarouselItemCustom>
          <CarouselItemCustom className='basis-1/5'>
            <TrendingCard/>
          </CarouselItemCustom>
          <CarouselItemCustom className='basis-1/5'>
            <TrendingCard/>
          </CarouselItemCustom>
          <CarouselItemCustom className='basis-1/5'>
            <TrendingCard/>
          </CarouselItemCustom>
          <CarouselItemCustom className='basis-1/5'>
            <TrendingCard/>
          </CarouselItemCustom>
          <CarouselItemCustom className='basis-1/5'>
            <TrendingCard/>
          </CarouselItemCustom>
          <CarouselItemCustom className='basis-1/5'>
            <TrendingCard/>
          </CarouselItemCustom>
          <CarouselItemCustom className='basis-1/5'>
            <TrendingCard/>
          </CarouselItemCustom>
        </CarouselContentCustom>
      </CarouselCustom>
    </div>
  );
};

export default Trending3;