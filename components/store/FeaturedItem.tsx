import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface FeaturedItemProps{
  image?: string,
  logo?: string
}

const FeaturedItem = ({ image, logo }: FeaturedItemProps) => {
  return (
    <Link className='w-full h-full' href="#">
      {image && (
        <Image className='w-full h-full object-cover select-none' src={image} alt="" width={2000} height={2000}/>
      )}
      <div className="gradient absolute bottom-0 left-0 bg-gradient-to-t from-dark3/70 to-transparent w-full h-3/4"></div>
      <div className="content absolute bottom-10 right-10 w-full flex flex-col items-end z-10">
        {logo && (
          <Image className='w-fit h-52 object-cover mb-7 select-none' src={logo} alt="" width={500} height={500}/>
        )}
        <div className="flex select-none">
          {/* <button className='px-5 py-3 rounded-lg text-light1 flex items-center gap-2'>
            Wishlisted
            <Icon className='text-xl' icon="teenyicons:tick-circle-solid" />
          </button> */}
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