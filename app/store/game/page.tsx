import Footer from '@/components/store/Footer';
import Game from '@/components/store/game/Game';
import Nav from '@/components/store/Nav';
import React from 'react';

const Page = () => {
  return (
    <div>
      <Nav/>
      <Game/>
      <Footer/>
    </div>
  );
};

export default Page;