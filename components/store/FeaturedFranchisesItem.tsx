import Image from 'next/image';
import React from 'react';
import FallBackImage from './FallBackImage';

interface IFeaturedFranchiseItemProps {
  bannerPortrait: string | undefined
  logo: string | undefined
  name: string
  descriptions?: Array<{
    title: string
    content: string
  }> | undefined
}

const FeaturedFranchisesItem = ({ bannerPortrait, logo, name, descriptions }: IFeaturedFranchiseItemProps) => {
  return (
    <div className="item relative group">
      {bannerPortrait?(
        <Image className="h-[30rem] object-cover brightness-75 group-hover:brightness-100 transition" src={bannerPortrait} alt='' width={1000} height={1000}/>
      ):(
        <FallBackImage classes='h-[30rem] object-cover brightness-75 group-hover:brightness-100 transition' width={1000} height={1000} text="Featured+Franchise"/>
      )}
      <div className="gradient absolute bottom-0 left-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-dark3/70 to-transparent w-full h-3/4 transition"></div>
      {logo?(
        <Image className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[15rem] w-full max-h-[30rem] h-fit object-cover opacity-100 group-hover:opacity-0 transition" src={logo} alt='' width={1000} height={1000}/>
      ):(
        <FallBackImage classes='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[15rem] w-full max-h-[30rem] h-fit object-cover opacity-100 group-hover:opacity-0 transition' width={1000} height={1000} text="Featured+Franchise+Logo"/>
      )}
      <div className="absolute bottom-0 left-0 px-7 py-5 opacity-0 group-hover:opacity-100 transition">
        <div className="title text-xl font-semibold text-light1 line-clamp-2 mb-1">{name}</div>
        {descriptions?(
          <div className="title font-xs text-light1 line-clamp-3">{descriptions[0].content}</div>
        ):(
          <div className="title font-xs text-light1 line-clamp-3">no description available</div>
        )}
      </div>
    </div>
  );
};

export default FeaturedFranchisesItem;