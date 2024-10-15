import Image from 'next/image';
import React from 'react';
import FallBackImage from './FallBackImage';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface ITrendingCardProps {
  id: string
  name: string
  discountedPrice: number | undefined
  price: number | undefined
  discount: number | undefined
  bannerPortrait: string | undefined
}

const TrendingCard = ({ id, name, discountedPrice, price, discount, bannerPortrait }: ITrendingCardProps) => {
  const path = usePathname();
  return (
    <Link className="relative select-none" href={`${path}/game/${id}`}>
      {discount!==0 && (
        <p className="discount absolute top-1 right-1 bg-accent2 text-light1 rounded-full text-xs px-2 py-1">-{discount}%</p>
      )}
      {bannerPortrait? (
        <Image className='aspect-[3/4] object-cover mb-2 rounded-lg' src={bannerPortrait} alt="" width={500} height={500}></Image>
      ):(
        <FallBackImage classes='aspect-[3/4] object-cover mb-2 rounded-lg' width={500} height={500} text="Trending"/>
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
    </Link>
  );
};

export default TrendingCard;