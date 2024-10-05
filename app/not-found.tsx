import React from 'react';

const notFound = () => {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center'>
      <div className="title text-7xl font-semibold mb-3">404</div>
      <div className="subtitle text-xl">Page not found</div>
    </div>
  );
};

export default notFound;