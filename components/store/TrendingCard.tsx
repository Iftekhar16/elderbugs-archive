import Image from 'next/image';
import React from 'react';

const TrendingCard = () => {
  return (
    <button className="relative select-none">
      <p className="discount absolute top-1 right-1 bg-accent2 text-light1 rounded-full text-xs px-2 py-1">-75%</p>
      <Image className='aspect-[3/4] object-cover mb-2 rounded-lg' src="/frostpunk2.avif" alt="" width={500} height={500}></Image>
      <p className="title text-left font-semibold text-lg line-clamp-2">Frostpunk 2</p>
      <div className="flex items-center gap-2">
        <p className="discounted-price text-left font-medium">$4.99</p>
        <p className="base-price text-left text-sm opacity-50 font-medium line-through">$19.99</p>
      </div>
    </button>
  );
};

export default TrendingCard;