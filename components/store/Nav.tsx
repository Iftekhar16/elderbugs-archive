'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Icon } from '@iconify/react/dist/iconify.js';

const Nav = () => {

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isMenuOpen]);
  

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  
  return (
    <div>
      <Menu isMenuOpen={isMenuOpen} handleMenu={handleMenu}/>
      <div className="spacer w-full h-12"></div>
      <div className="w-full bg-accent1 text-light1 fixed top-0 left-0 z-[400]">
        <div className="wrapper max-w-[70rem] mx-auto py-3 px-3 lg:px-0 flex justify-between md:justify-normal items-center gap-3">
          <div className="left md:w-full">
            <Link className="md:text-xl font-semibold" href="/store">Elderbug&apos;s Archive</Link>
          </div>
          <div className="links hidden md:flex justify-center gap-3">
            <Link className='hover:opacity-70 transition' href="/store">Store</Link>
            <Link className='hover:opacity-70 transition whitespace-nowrap' href="/store/game/1">Frostpunk</Link>
          </div>
          <div className="right w-full hidden md:flex justify-end gap-3">
            <Link className='px-3 py-1 rounded-lg' href="#">Sign up</Link>
            <Link className='bg-light1 hover:bg-light2 text-dark1 font-medium px-3 py-1 rounded-lg transition' href="#">Log in</Link>
          </div>
          <button className="md:hidden size-7 flex justify-center items-center" onClick={handleMenu}>
            <Icon icon="hugeicons:menu-01" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Nav;

const Menu = ({ isMenuOpen, handleMenu }: {isMenuOpen: boolean, handleMenu: ()=>void}) => {
  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%", display: "none" }}
          transition={{ ease: "easeInOut", duration: 0.3}}
          className={`z-[500] fixed top-0 left-0 bg-light2 w-full h-screen overflow-y-scroll ${isMenuOpen ?"left-0":"right-full hidden"}`}
        >
          <button className="border border-dark1/50 rounded-lg text-black absolute top-3 right-3 size-7 flex justify-center items-center" onClick={handleMenu}>
            <Icon className='text-xl' icon="iconamoon:close-thin" />
          </button>
          <Link className="text-xl text-accent1 font-semibold absolute top-3 left-3" href="/store">Elderbug&apos;s Archive</Link>
          <div className="menu-main h-[97svh] text-dark1 px-5 pt-14">
            <div className="h-full flex flex-col justify-between">
              <div className="links flex flex-grow flex-col justify-center gap-3 mb-3">
                <Link className='text-center' href="/store">Store</Link>
                <Link className='text-center' href="/store/game/1">Frostpunk</Link>
              </div>
              <div className="flex flex-col gap-3 pb-5">
                <Link className='bg-light1 text-dark1 text-center px-3 py-2 rounded-lg' href="#">Sign up</Link>
                <Link className='bg-accent1 text-light2 text-center font-medium px-3 py-2 rounded-lg transition' href="#">Log in</Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}