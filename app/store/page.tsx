import Featured from '@/components/store/Featured';
import Trending from '@/components/store/Trending';
import React from 'react';
import HighestRated from '@/components/store/HighestRated';
import SaleWishlistedRecent from '@/components/store/SaleWishlistedRecent';
import Footer from '@/components/store/Footer';
import FeaturedFranchises from '@/components/store/FeaturedFranchises';
import Nav from '@/components/store/Nav';
import { useQuery } from '@tanstack/react-query';
import fetchGames from '@/utils/fetchGames';

const Page = () => {

  const { data: games, isLoading, error } = useQuery({
    queryKey: ['games'],
    queryFn: fetchGames
  });
  console.log(games);

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