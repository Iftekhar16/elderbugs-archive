import React from 'react';
import TitleLink from './TitleLink';
import FeaturedFranchisesItem from './FeaturedFranchisesItem';

const FeaturedFranchises = () => {
  return (
    <div className='max-w-[70rem] mx-auto mb-20'>
      <TitleLink title="Featured Franchises" link="#" icon="hugeicons:arrow-right-01"/>
      <div className="featured-franchises-container grid grid-cols-3 rounded-lg overflow-hidden">
        <FeaturedFranchisesItem image="/frostpunk-banner5.jpg" logo="/frostpunk2-logo1.png" title="Frostpunk" subtitle="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, autem!"/>
        <FeaturedFranchisesItem image="/frostpunk-banner3.jpg" logo="/frostpunk2-logo1.png" title="Frostpunk" subtitle="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, autem!"/>
        <FeaturedFranchisesItem image="/frostpunk-banner6.jpg" logo="/frostpunk2-logo1.png" title="Frostpunk" subtitle="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, autem!"/>
      </div>
    </div>
  );
};

export default FeaturedFranchises;