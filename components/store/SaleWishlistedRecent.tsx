import React from 'react';
import OnSale from './OnSale';
import Wishlisted from './Wishlisted';
import RecentlyAdded from './RecentlyAdded';

const SaleWishlistedRecent = () => {
  return (
    <div className='max-w-[70rem] mx-auto mb-20 grid grid-cols-3 gap-3'>
      <OnSale/>
      <Wishlisted/>
      <RecentlyAdded/>
    </div>
  );
};

export default SaleWishlistedRecent;