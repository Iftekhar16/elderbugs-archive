import Image from 'next/image';
import React from 'react';

interface HighestRatedItemProps {
  image: string,
  title: string,
  price: number,
  discountedPrice: number
}

const HighestRatedItem = ({ image, title, price, discountedPrice }: HighestRatedItemProps) => {
  return (
    <button className="relative aspect-square select-none">
      <Image className='aspect-square object-cover rounded-lg' src={image} alt="" width={500} height={500}></Image>
      <div className="gradient absolute bottom-0 left-0 bg-gradient-to-t from-dark3/70 to-transparent rounded-b-lg w-full h-3/4"></div>
      <div className="absolute bottom-4 left-5">
        <p className="title text-light1 text-left font-semibold text-2xl line-clamp-2">{title}</p>
        <div className="flex items-center gap-2">
          <p className="discounted-price text-light1 text-left text-lg font-medium">${discountedPrice}</p>
          <p className="base-price text-light1 text-left opacity-50 font-medium line-through">${price}</p>
        </div>
      </div>
    </button>
  );
};

export default HighestRatedItem;