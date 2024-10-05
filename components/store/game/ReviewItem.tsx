import { Icon } from '@iconify/react';
import React from 'react';

interface ReviewItemProps{
  name: string,
  description: string,
  rating: number
}

const ReviewItem = ({ name, description, rating }:ReviewItemProps) => {
  return (
    <div className="review h-full bg-dark3 text-light1 px-7 py-5 rounded-lg select-none">
      <div className="description">{description}</div>
      <div className="line bg-light1/50 w-full h-[1px] my-3"></div>
      <div className="flex justify-between items-center gap-1">
        <div className="name font-semibold mb-1 line-clamp-2">{name}</div>
        <div className="flex items-center gap-1">
          <Icon icon="solar:star-bold" className="text-lg text-light2" />
          {rating}
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;