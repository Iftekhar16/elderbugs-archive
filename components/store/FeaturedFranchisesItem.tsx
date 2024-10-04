import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface FeaturedFranchisesItemProps{
  image: string,
  logo: string,
  title: string,
  subtitle: string
}

const FeaturedFranchisesItem = ({ image, logo, title, subtitle }: FeaturedFranchisesItemProps) => {
  return (
    <Link href="#" className="item relative group">
      <Image className="h-[30rem] object-cover brightness-75 group-hover:brightness-100 transition" src={image} alt='' width={1000} height={1000}/>
      <div className="gradient absolute bottom-0 left-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-dark3/70 to-transparent w-full h-3/4 transition"></div>
      <Image className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[10rem] object-cover opacity-100 group-hover:opacity-0 transition" src={logo} alt='' width={1000} height={1000}/>
      <div className="absolute bottom-0 left-0 px-7 py-5 opacity-0 group-hover:opacity-100 transition">
        <div className="title text-xl font-semibold text-light1 line-clamp-2 mb-1">{title}</div>
        <div className="title font-xs text-light1 line-clamp-3">{subtitle}</div>
      </div>
    </Link>
  );
};

export default FeaturedFranchisesItem;