import { Icon } from '@iconify/react';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className='footer-container bg-accent1'>
      <div className="wrapper max-w-[70rem] mx-auto py-14">
        <div className="links-container flex px-5 md:px-auto flex-wrap justify-center gap-3 mb-5">
          <Link href="/store" className='text-light2 text-sm hover:opacity-70 transition'>Store</Link>
          <Link href="/dashboard" className='text-light2 text-sm hover:opacity-70 transition whitespace-nowrap'>Frostpunk</Link>
        </div>
        <div className="socials-container flex justify-center items-center gap-3">
          <Link href="#" className='bg-light1 text-dark1 size-10 flex justify-center items-center rounded-full' aria-label="Email us">
            <Icon icon="hugeicons:mail-02" className='text-xl'/>
            <span className="sr-only">Email</span>
          </Link>
          <Link href="#" className='bg-light1 text-dark1 size-10 flex justify-center items-center rounded-full' aria-label="Visit our Facebook page">
            <Icon icon="hugeicons:facebook-02" className='text-xl'/>
            <span className="sr-only">Facebook</span>
          </Link>
          <Link href="#" className='bg-light1 text-dark1 size-10 flex justify-center items-center rounded-full' aria-label="Follow us on Twitter">
            <Icon icon="hugeicons:new-twitter" className='text-xl'/>
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="#" className='bg-light1 text-dark1 size-10 flex justify-center items-center rounded-full' aria-label="Follow us on Instagram">
            <Icon icon="hugeicons:instagram" className='text-xl'/>
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="#" className='bg-light1 text-dark1 size-10 flex justify-center items-center rounded-full' aria-label="Subscribe to our YouTube channel">
            <Icon icon="hugeicons:youtube" className='text-xl'/>
            <span className="sr-only">YouTube</span>
          </Link>
        </div>
      </div>
      <div className="copyright bg-dark2 text-light2 text-xs py-2 flex justify-center z-10">© 2024 Elderbug&apos;s Archive LLC</div>
    </div>
  );
};

export default Footer;