import React from 'react';
import SaleWishlistedRecentCard from './SaleWishlistedRecentCard';
import TitleLink from './TitleLink';

const SaleWishlistedRecent = () => {
  return (
    <div className='max-w-[70rem] mx-auto mb-20 grid grid-cols-3 gap-3'>
      <div className="sale-container">
        <TitleLink title="On Sale" link="#" icon="hugeicons:arrow-right-01"/>
        <SaleWishlistedRecentCard image="/frostpunk2.avif" title="Frostpunk 2" price={19.99}/>
        <SaleWishlistedRecentCard image="/frostpunk2.avif" title="Frostpunk 2" price={19.99}/>
        <SaleWishlistedRecentCard image="/frostpunk2.avif" title="Frostpunk 2" price={19.99}/>
        <SaleWishlistedRecentCard image="/frostpunk2.avif" title="Frostpunk 2" price={19.99}/>
      </div>
      <div className="wishlisted-container">
        <TitleLink title="Top Wishlisted" link="#" icon="hugeicons:arrow-right-01"/>
        <SaleWishlistedRecentCard image="/frostpunk2.avif" title="Frostpunk 2" price={19.99}/>
        <SaleWishlistedRecentCard image="/frostpunk2.avif" title="Frostpunk 2" price={19.99}/>
        <SaleWishlistedRecentCard image="/frostpunk2.avif" title="Frostpunk 2" price={19.99}/>
        <SaleWishlistedRecentCard image="/frostpunk2.avif" title="Frostpunk 2" price={19.99}/>
      </div>
      <div className="recent-container">
        <TitleLink title="Recently Added" link="#" icon="hugeicons:arrow-right-01"/>
        <SaleWishlistedRecentCard image="/frostpunk2.avif" title="Frostpunk 2" price={19.99}/>
        <SaleWishlistedRecentCard image="/frostpunk2.avif" title="Frostpunk 2" price={19.99}/>
        <SaleWishlistedRecentCard image="/frostpunk2.avif" title="Frostpunk 2" price={19.99}/>
        <SaleWishlistedRecentCard image="/frostpunk2.avif" title="Frostpunk 2" price={19.99}/>
      </div>
    </div>
  );
};

export default SaleWishlistedRecent;