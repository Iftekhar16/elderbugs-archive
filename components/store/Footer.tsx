import { Icon } from '@iconify/react';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className='footer-container bg-accent1'>
      <div className="wrapper max-w-[70rem] mx-auto py-14">
        {/* <div className="title text-3xl font-semibold text-light1 text-center mb-3">Elderbug's Archive</div> */}
        <div className="socials-container flex justify-center items-center gap-3 mb-5">
          <Link href="#" className='bg-light1 text-dark1 size-10 flex justify-center items-center rounded-full'>
            <Icon icon="hugeicons:mail-02" className='text-xl'/>
          </Link>
          <Link href="#" className='bg-light1 text-dark1 size-10 flex justify-center items-center rounded-full'>
            <Icon icon="hugeicons:facebook-02" className='text-xl'/>
          </Link>
          <Link href="#" className='bg-light1 text-dark1 size-10 flex justify-center items-center rounded-full'>
            <Icon icon="hugeicons:new-twitter" className='text-xl'/>
          </Link>
          <Link href="#" className='bg-light1 text-dark1 size-10 flex justify-center items-center rounded-full'>
            <Icon icon="hugeicons:instagram" className='text-xl'/>
          </Link>
          <Link href="#" className='bg-light1 text-dark1 size-10 flex justify-center items-center rounded-full'>
            <Icon icon="hugeicons:youtube" className='text-xl'/>
          </Link>
        </div>
        <div className="links-container flex justify-center gap-3">
          <Link href="/store" className='text-light2 text-sm underline hover:no-underline transition'>Store</Link>
          <Link href="/dashboard" className='text-light2 text-sm underline hover:no-underline transition'>Dashboard</Link>
          <Link href="/#" className='text-light2 text-sm underline hover:no-underline transition'>Contact</Link>
          <Link href="/#" className='text-light2 text-sm underline hover:no-underline transition'>About</Link>
          <Link href="/#" className='text-light2 text-sm underline hover:no-underline transition'>Community</Link>
        </div>
      </div>
      <div className="copyright bg-dark2 text-light2 text-xs py-2 flex justify-center z-10">© 2024 Elderbug&apos;s Archive LLC</div>
    </div>
  );
};

export default Footer;