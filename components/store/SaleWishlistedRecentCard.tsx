import Image from 'next/image';
import React from 'react';

interface SaleWishlistedRecentCardProps {
  image: string,
  title: string,
  price: number
}

const SaleWishlistedRecentCard = ({ image, title, price }: SaleWishlistedRecentCardProps) => {
  return (
    <button className="card w-full text-left flex items-center gap-5 p-2 hover:bg-light1 transition rounded-lg">
      <Image className='w-20 aspect-[3/4] rounded-lg object-cover' src={image} alt="" width={200} height={200}/>
      <div className="">
        <p className="title font-semibold text-lg">{title}</p>
        <p className="price font-medium">${price}</p>
      </div>
    </button>
  );
};

export default SaleWishlistedRecentCard;