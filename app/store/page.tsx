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
    <div>
      <Nav/>
      <Featured/>
      <Trending/>
      <FeaturedFranchises/>
      <SaleWishlistedRecent/>
      <HighestRated/>
      <Footer/>
    </div>
  );
};

export default Page;