import { Icon } from '@iconify/react';
import Image from 'next/image';
import React from 'react';
import FallBackImage from './FallBackImage';

interface IFeaturedItemProps {
  isWishlisted: boolean | undefined
  logo: string | undefined
  bannerLandscape: string | undefined
}

const FeaturedItem = ({ isWishlisted, logo, bannerLandscape }: IFeaturedItemProps) => {
  return (
    <div className='w-full h-full'>
      {bannerLandscape?(
        <Image className='w-full h-full object-cover select-none' src={bannerLandscape} alt="" width={2000} height={2000}/>
      ):(
        <FallBackImage classes='w-full h-full object-cover select-none' width={2000} height={2000} text="Featured+Game"/>
      )}
      <div className="gradient absolute bottom-0 left-0 bg-gradient-to-t from-dark3/70 to-transparent w-full h-3/4"></div>
      <div className="content absolute bottom-10 right-10 w-full flex flex-col items-end z-10">
        {logo?(
          <Image className='w-fit max-w-96 h-fit max-h-52 object-cover mb-7 select-none' src={logo} alt="" width={500} height={500}/>
        ):(
          <FallBackImage classes='w-fit max-w-96 h-fit max-h-52 object-cover mb-7 select-none' width={500} height={500} text="Featured+Game+Logo"/>
        )}
        <div className="flex select-none">
          {isWishlisted?(
            <div className='px-5 py-3 rounded-lg text-light1 flex items-center gap-2'>
              Wishlisted
              <Icon className='text-xl00' icon="teenyicons:tick-circle-solid" />
            </div>
          ):(
            <div className='px-5 py-3 rounded-lg text-light1 flex items-center gap-2'>
              Wishlist Now
              <Icon className='text-xl' icon="iconoir:plus-circle" />
            </div>
          )}
          <button className='bg-light1 px-5 py-3 rounded-lg'>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedItem;