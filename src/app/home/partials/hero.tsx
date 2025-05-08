import Image from 'next/image';
import React from 'react';

import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section
      id='hero'
      className='custom-container md: flex flex-wrap items-center justify-center gap-10 overflow-hidden pt-28'
    >
      <Button variant='outline'>Alex&apos;s Profile</Button>
      <div className='space-y-6'>
        <h1 className='text-center text-4xl font-bold'>
          I am a{' '}
          <span className='bg-gradient-to-r from-[#dc49ab] to-[#8746EB] bg-clip-text text-transparent'>
            Front-End Developer
          </span>
          <br />& Web Programming Instructor
        </h1>
        <p className='text-md mx-auto max-w-[930px] text-justify font-normal'>
          Hi, I&apos;m Alex, a passionate web developer with over 3 years of
          experiences in creating responsive websites. I also teach aspiring
          developers to master modern web programming and bring their ideas to
          life.
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
