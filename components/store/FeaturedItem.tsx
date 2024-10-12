import { Game } from '@/types/games';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FeaturedItem = ({ images }: Game) => {
  return (
    <Link className='w-full h-full' href="#">
      <Image className='w-full h-full object-cover select-none' src={images.bannerLandscape} alt="" width={2000} height={2000}/>
      <div className="gradient absolute bottom-0 left-0 bg-gradient-to-t from-dark3/70 to-transparent w-full h-3/4"></div>
      <div className="content absolute bottom-10 right-10 w-full flex flex-col items-end z-10">
        <Image className='w-fit max-w-96 h-fit max-h-52 object-cover mb-7 select-none' src={images.logo} alt="" width={500} height={500}/>
        <div className="flex select-none">
          <button className='px-5 py-3 rounded-lg text-light1 flex items-center gap-2'>
            Wishlist Now
            <Icon className='text-xl' icon="iconoir:plus-circle" />
          </button>
          <button className='bg-light1 px-5 py-3 rounded-lg'>Buy Now</button>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedItem;