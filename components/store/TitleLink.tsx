import { Icon } from '@iconify/react';
import Link from 'next/link';
import React from 'react';

interface TitleLinkProps {
  title: string,
  link: string,
  icon: string
}

const TitleLink = ({ title, link, icon }: TitleLinkProps) => {
  return (
    <Link className="title w-fit group text-xl font-semibold flex items-center gap-0 hover:gap-3 mb-3 transition-all" href={link}>
      {title}
      <Icon className='text-2xl' icon={icon} />
    </Link>
  );
};

export default TitleLink;