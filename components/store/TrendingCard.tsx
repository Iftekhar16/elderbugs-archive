import { Game } from '@/types/games';
import Image from 'next/image';
import React from 'react';

const TrendingCard = ({ id, name, discountedPrice, price, discount, images }: Game) => {
  return (
    <button className="relative select-none">
      {discount!==0 && (
        <p className="discount absolute top-1 right-1 bg-accent2 text-light1 rounded-full text-xs px-2 py-1">-{discount}%</p>
      )}
      {images.bannerPortrait && (
        <Image className='aspect-[3/4] object-cover mb-2 rounded-lg' src={images.bannerPortrait} alt="" width={500} height={500}></Image>
      )}
      <p className="title text-left font-semibold text-lg line-clamp-2">{name}</p>
      <div className="flex items-center gap-2">
        {price === 0? (
          <p className="base-price text-left font-medium">Free to play</p>
        ) : (
          <p className="base-price text-left font-medium">${price}</p>
        )}
        {discount!==0 && (
          <p className="discounted-price text-left text-sm opacity-50 font-medium line-through">${discountedPrice}</p>
        )}
      </div>
    </button>
  );
};

export default TrendingCard;