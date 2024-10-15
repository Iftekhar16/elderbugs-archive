import Link from 'next/link';
import React from 'react';

const Nav = () => {
  return (
    <div className='w-full bg-accent2 text-light1 py-3 sticky top-0 z-[5000]'>
      <div className="wrapper max-w-[70rem] mx-auto flex items-center gap-3">
        <div className="left w-full">
          <Link className="text-xl font-semibold" href="/store">Elderbug&apos;s Archive</Link>
        </div>
        <div className="links flex justify-center gap-3">
          <Link className='hover:underline transition' href="/store">Store</Link>
          <Link className='hover:underline transition' href="/dashboard">Dashboard</Link>
          <Link className='hover:underline transition' href="#">Contact</Link>
          <Link className='hover:underline transition' href="#">About</Link>
          <Link className='hover:underline transition' href="#">Community</Link>
        </div>
        <div className="right w-full flex justify-end gap-3">
          <Link className='px-3 py-1 rounded-lg' href="#">Sign up</Link>
          <Link className='bg-light1 hover:bg-light2 text-dark1 font-medium px-3 py-1 rounded-lg transition' href="#">Log in</Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;