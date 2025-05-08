import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <section
      className='custom-container items-center gap-6 md:gap-12'
      id='about'
    >
      <div className='flex items-center justify-center bg-gradient-to-r from-[#8746eb] to-[#dc49ab]'>
        <Image src='/images/hero.png' alt='Hero' width={818} height={459} />
      </div>
      <div className='custom-container flex flex-wrap items-start gap-6 py-5 md:gap-12 md:py-20'>
        <div className='flex-[1.5] basis-80'>
          <h2 className='text-neutral-25 mt-0 pt-2 text-3xl font-extrabold'>
            Who am I?
          </h2>
        </div>
        <div className='flex-[8.5] basis-80'>
          <p className='text-sm-regular md:text-md-regular mt-4'>
            Hi, I am Alex, a Front-End Developer & Web Programming Instructor
            based in Jakarta. With over{' '}
            <span className='font-bold'>3 years of experiences</span>, I
            specialize in crafting interactive, responsive, and user-friendly
            websites that deliver exceptional digital experiences. My expertise
            spans across various industries, including e-commerce, education,
            and SaaS. I am proficient in modern front-end technologies, clean
            coding practices, and performance optimization.
          </p>
        </div>
      </div>

      <div className='mt-8 flex flex-wrap justify-center gap-4 pb-20 sm:gap-6 lg:gap-2'>
        {[
          { title: '3+', subtitle: 'Years Experiences', gradient: false },
          { title: '30+', subtitle: 'Projects', gradient: true },
          { title: '90+', subtitle: 'Students', gradient: false },
          { title: '20+', subtitle: 'Happy Clients', gradient: true },
        ].map((item, index) => (
          <button
            key={index}
            className={`flex aspect-square w-[45vw] max-w-[273px] flex-col items-center justify-center rounded-full text-center text-xl font-bold sm:w-[45vw] lg:w-[273px] ${
              item.gradient
                ? 'border border-transparent bg-gradient-to-r from-[#8746eb] to-[#dc49ab] text-white'
                : 'border border-neutral-100 text-neutral-100'
            }`}
          >
            <div>
              <h3 className='text-xl font-bold'>{item.title}</h3>
              <p className='text-sm'>{item.subtitle}</p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default About;
