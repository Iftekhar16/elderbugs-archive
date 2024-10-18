import Featured from '@/components/store/Featured';
import Trending from '@/components/store/Trending';
import React from 'react';
import HighestRated from '@/components/store/HighestRated';
import SaleWishlistedRecent from '@/components/store/SaleWishlistedRecent';
import Footer from '@/components/store/Footer';
import FeaturedFranchises from '@/components/store/FeaturedFranchises';
import Nav from '@/components/store/Nav';

const Page = () => {
  return (
    <div className='flex flex-col justify-between min-h-screen'>
      {/* https://avatar.iran.liara.run/public */}
      <Nav/>
      <div>
        <Featured/>
        <Trending/>
        <FeaturedFranchises/>
        <SaleWishlistedRecent/>
        <HighestRated/>
      </div>
      <Footer/>
    </div>
  );
};

export default Page;