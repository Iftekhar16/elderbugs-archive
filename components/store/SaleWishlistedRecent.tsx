import React from 'react';
import OnSale from './OnSale';
import Wishlisted from './Wishlisted';
import RecentlyAdded from './RecentlyAdded';

const SaleWishlistedRecent = () => {
  return (
    <div className='max-w-[70rem] mx-auto px-3 xl:px-0 mb-10 md:mb-20 grid grid-cols-1 lg:grid-cols-3 gap-10 xl:gap-3'>
      <OnSale/>
      <Wishlisted/>
      <RecentlyAdded/>
    </div>
  );
};

export default SaleWishlistedRecent;