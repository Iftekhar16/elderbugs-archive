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
import { review } from '@/types/games';

const Reviews = ({ reviews }: {reviews: review[]}) => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 3000,
        })
      ]}
      className='rounded-lg overflow-hidden mb-10 md:mb-20'
    > 
    <div className="text-xl font-semibold mb-2">Reviews</div>
      <CarouselContent className=''>
        {reviews?.map((item: review, index: number)=>(
          <CarouselItem key={index} className='basis-5/6 xl:basis-1/3 relative'>
            <ReviewItem name={item.reviewerName??""} description={item.reviewDescription??""} rating={parseFloat(item.reviewRating??'0')}/>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Reviews;