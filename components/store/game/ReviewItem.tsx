import { Icon } from '@iconify/react';
import React from 'react';

interface ReviewItemProps{
  name: string,
  description: string,
  rating: number | null
}

const ReviewItem = ({ name, description, rating }:ReviewItemProps) => {
  console.log("rating:", rating);
  return (
    <div className="review h-full bg-dark3 text-light1 px-7 py-5 rounded-lg select-none flex flex-col justify-between">
      <div className="description">{description}</div>
      <div className="">
        <div className="line bg-light1/50 w-full h-[1px] my-3"></div>
        <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center gap-1">
          <div className="name font-semibold mb-1 line-clamp-1">{name}</div>
          {rating!==null && (
            <div className="flex items-center gap-1">
              <Icon icon="solar:star-bold" className="text-lg text-light2 relative -top-[2px]" />
              {rating}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;