import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from 'embla-carousel-autoplay';
import ReviewItem from './ReviewItem';

const Reviews = () => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 3000,
        })
      ]}
      className='rounded-lg overflow-hidden mb-20'
    > 
    <div className="text-xl font-semibold mb-1">Reviews</div>
      <CarouselContent className=''>
        <CarouselItem className='basis-1/3 relative'>
          <ReviewItem name="Hornet's Silk" description="Frostpunk 2 takes everything I loved about the original and amplifies it. The expanded city-building mechanics and deeper faction politics create an even more engaging and challenging experience. A must-play for strategy fans!" rating={4.5}/>
        </CarouselItem>
        <CarouselItem className='basis-1/3 relative'>
          <ReviewItem name="Hornet's Milk" description="The moral dilemmas in Frostpunk 2 are more gut-wrenching than ever. Every decision feels impactful, and the new faction system adds layers of complexity to an already stellar game. It's a masterclass in atmosphere and tension." rating={4.5}/>
        </CarouselItem>
        <CarouselItem className='basis-1/3 relative'>
          <ReviewItem name="Hornet's Horn" description="Frostpunk 2's city districts and special buildings add a new dimension to resource management. The game perfectly balances hope and despair, making every small victory feel monumental. It's an emotional rollercoaster I can't stop riding!" rating={4.5}/>
        </CarouselItem>
        <CarouselItem className='basis-1/3 relative'>
          <ReviewItem name="Hornet's Corn" description="The addition of colonies in Frostpunk 2 expands the game world beautifully. Venturing into the frostland feels both terrifying and exhilarating. The improved graphics and haunting soundtrack create an immersive experience like no other." rating={4.5}/>
        </CarouselItem>
        <CarouselItem className='basis-1/3 relative'>
          <ReviewItem name="Hornet's Silk" description="Frostpunk 2 takes everything I loved about the original and amplifies it. The expanded city-building mechanics and deeper faction politics create an even more engaging and challenging experience. A must-play for strategy fans!" rating={4.5}/>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Reviews;