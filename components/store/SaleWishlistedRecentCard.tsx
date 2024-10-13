import Image from 'next/image';
import React from 'react';
import FallBackImage from './FallBackImage';

interface ISaleWishlistedRecentCardProps{
  bannerPortrait: string | undefined | null
  name: string
  discount: number | undefined
  price: number | undefined
  discountedPrice: number | undefined
}

const SaleWishlistedRecentCard = ({ bannerPortrait, name, discount, price, discountedPrice }: ISaleWishlistedRecentCardProps) => {
  return (
    <button className="card w-full text-left flex items-center gap-5 p-2 hover:bg-light1 transition rounded-lg">
      {bannerPortrait?(
        <Image className='w-20 aspect-[3/4] rounded-lg object-cover' src={bannerPortrait} alt="" width={200} height={200}/>
      ):(
        <FallBackImage classes="w-20 aspect-[3/4] rounded-lg object-cover" width={200} height={200}/>
      )}
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