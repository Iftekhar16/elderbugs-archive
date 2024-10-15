import Image from 'next/image';
import React from 'react';
import FallBackImage from './FallBackImage';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface IHighestRatedItemProps {
  id: string
  bannerSquare: string | undefined
  name: string
  price: number | undefined
}

const HighestRatedItem = ({ id, bannerSquare, name, price }: IHighestRatedItemProps) => {
  const path = usePathname();
  return (
    <Link className="relative aspect-square select-none" href={`${path}/game/${id}`}>
      {bannerSquare?(
        <Image className='w-full h-full aspect-square object-cover rounded-lg' src={bannerSquare} alt="" width={500} height={500}></Image>
      ):(
        <FallBackImage classes='w-full h-full aspect-square object-cover rounded-lg' width={500} height={500} text="Highest+Rated"/>
      )}
      <div className="gradient absolute bottom-0 left-0 bg-gradient-to-t from-dark3/70 to-transparent rounded-b-lg w-full h-3/4"></div>
      <div className="absolute bottom-4 left-5">
        <p className="title text-light1 text-left font-semibold text-2xl line-clamp-2">{name}</p>
        <div className="flex items-center gap-2">
          {price === 0? (
            <p className="base-price text-left font-medium text-white">Free to play</p>
          ) : (
            <p className="base-price text-left font-medium text-white">${price}</p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default HighestRatedItem;