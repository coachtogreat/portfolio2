import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <>
      <section
        id='hero'
        className='custom-container md: relative z-10 flex flex-wrap items-center justify-center gap-10 overflow-hidden pt-40'
      >
        <div className='rounded-full bg-gradient-to-r from-[#dc49ab] to-[#8746eb] p-[2px] shadow-[0_4px_24px_rgba(135,70,235,0.32)] hover:from-[#dc49ab]/70 hover:to-[#8746eb]/70'>
          <Button
            variant='outline'
            className='flex h-[46px] w-[184px] items-center justify-center gap-2'
          >
            <Image
              src='/images/jpg/pk.jpg'
              alt='profile'
              width={20}
              height={20}
            />
            Alex&apos;s&nbsp;Profile
          </Button>
        </div>

        <div className='mx-auto max-w-[957px] space-y-6'>
          <h1 className='text-display-xl md:text-display-3xl text-center font-extrabold text-neutral-100 md:tracking-[0em] md:text-neutral-100'>
            I am a{' '}
            <span className='relative inline-block rounded-[0px] bg-gradient-to-r from-[#dc49ab] to-[#8746EB] p-[1px]'>
              <span className='block rounded-[1px] bg-black px-1 py-1'>
                <span className='bg-gradient-to-r from-[#dc49ab] to-[#8746EB] bg-clip-text text-transparent'>
                  Front-
                </span>
              </span>
            </span>
            <span className='relative inline-block rounded-[0px] bg-gradient-to-r from-[#dc49ab] to-[#8746EB] p-[1px]'>
              <span className='block rounded-[1px] bg-black px-1 py-1'>
                <span className='bg-gradient-to-r from-[#dc49ab] to-[#8746EB] bg-clip-text text-transparent'>
                  End Developer
                </span>
              </span>
            </span>
            &nbsp; & Web Programming Instructor
          </h1>
          <p className='text-sm-regular md:text-md-regular max-w-[900px] text-center text-neutral-100'>
            Hi, I&apos;m Alex, a passionate web developer with over&nbsp;
            <span className='font-bold'>3 years of experiences</span> in
            creating responsive websites. I also teach aspiring developers to
            master modern web programming and bring their ideas to life.
          </p>
        </div>
        <Button
          asChild
          className='hidden w-[180px] flex-row items-center gap-2 lg:flex'
        >
          <div className='mb-5 flex items-center gap-1.5'>
            <Link href='#contacts'>View&nbsp;Profile</Link>
          </div>
        </Button>
      </section>
      <div className='relative z-[-1] h-[250px] w-full bg-[url(/images/png/waves2.png)] bg-contain bg-bottom bg-repeat-x'></div>
    </>
  );
};

export default Hero;
