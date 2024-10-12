import { Game } from '@/types/games';
import Image from 'next/image';
import React from 'react';

const SaleWishlistedRecentCard = ({ images, name, discount, price, discountedPrice }: Game) => {
  return (
    <button className="card w-full text-left flex items-center gap-5 p-2 hover:bg-light1 transition rounded-lg">
      <Image className='w-20 aspect-[3/4] rounded-lg object-cover' src={images.bannerPortrait} alt="" width={200} height={200}/>
      <div className="">
        <p className="title font-semibold text-lg">{name}</p>
        <div className="flex items-center gap-2">
          {price === 0? (
            <p className="base-price text-left font-medium">Free to play</p>
          ) : (
            <p className="base-price text-left font-medium">${price}</p>
          )}
          {discount!==0 && (
            <p className="discounted-price text-left text-sm opacity-50 font-medium line-through">${discountedPrice}</p>
          )}
          {discount !== 0 && (
            <p className="discount bg-accent2 text-light1 rounded-full text-xs px-2 py-1">-{discount}%</p>
          )}
        </div>
      </div>
    </button>
  );
};

export default SaleWishlistedRecentCard;