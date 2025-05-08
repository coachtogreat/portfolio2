import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { socialMediaData } from '@/constants/social-media-data';

const Footer = () => {
  return (
    <footer className='border-t border-neutral-800'>
      <div className='custom-container flex flex-col justify-between gap-6 py-10 md:flex-row md:items-center'>
        <div>
          <Image
            src='/icons/logo.svg'
            alt='logo'
            width={40}
            height={40}
            className='max-md:h-8 max-md:w-35.25'
          />
          <p className='text-xs-regular md:text-sm-regular mt-6 text-neutral-400'>
            Another masterpiece by Edwin, trained at WebProgrammingHack bootcamp
          </p>
        </div>
        <div className='flex-start gap-4'>
          {socialMediaData.map((icon) => (
            <Link
              key={icon.alt}
              href={icon.href}
              className='flex-center size-10 rounded-full border border-neutral-800 p-2.5'
            >
              <Image src={icon.src} alt={icon.alt} className='h-full w-auto' />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
