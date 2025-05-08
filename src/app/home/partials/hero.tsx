import Image from 'next/image';
import React from 'react';

import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section
      id='hero'
      className='custom-container md: flex flex-wrap items-center justify-center gap-7 gap-10 overflow-hidden pt-28'
    >
      <Button variant='outline'>Alex&apos;s Profile</Button>
      <div className='space-y-6'>
        <h1 className='text-center text-4xl font-bold'>
          I am a{' '}
          <span className='from-secondary-300 to-primary-300 bg-gradient-to-r bg-clip-text text-transparent'>
            Front-End Developer
          </span>
          <br />& Web Programming Instructor
        </h1>
        <p className='text-center text-lg'>
          Hi, I&apos;m Alex, a passionate web developer with over 3 years of
          experience in creating responsive websites. I also teach <br />{' '}
          aspiring developers to master modern web programming and bring their
          ideas to life
        </p>
      </div>
      <div>
        <Button>Alex&apos;s Profile</Button>
      </div>
      <div className='relative mt-8 h-[100px] w-full'>
        <Image
          src='/images/background.png'
          alt='Background'
          fill
          className='object-cover'
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
