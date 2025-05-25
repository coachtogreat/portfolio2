import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <section
      className='custom-container mt-[-80px] items-center gap-6 md:gap-12'
      id='about'
    >
      <div className='flex w-full max-w-[1160px] items-center justify-center rounded-4xl bg-gradient-to-r from-[#dc49ab] to-[#8746eb] md:h-[459px]'>
        <Image
          src='/images/hero.png'
          alt='Hero'
          width={818}
          height={459}
          className='h-auto w-full max-w-[818px]'
        />
      </div>
      <div className='custom-container flex flex-wrap items-start gap-6 py-5 md:gap-12 md:py-20'>
        <div className='flex-[1.5] basis-80'>
          <h2 className='text-display-xl md:text-display-3xl mt-0 pt-2 font-extrabold text-neutral-100'>
            Who am I?
          </h2>
        </div>
        <div className='flex-[8.5] basis-80'>
          <p className='text-sm-regular md:text-md-regular pt-2 text-neutral-200'>
            Hi, I am Alex, a Front-End Developer & Web Programming Instructor
            based in Jakarta. With over&nbsp;
            <span className='font-bold text-neutral-100'>
              3 years of experiences
            </span>
            , I specialize in crafting interactive, responsive, and
            user-friendly websites that deliver exceptional digital experiences.
            My expertise spans across various industries, including e-commerce,
            education, and SaaS. I am proficient in modern front-end
            technologies, clean coding practices, and performance optimization.
          </p>
        </div>
      </div>

      <div className='mt-8 flex flex-wrap justify-center gap-4 pb-20 sm:gap-6 lg:gap-2'>
        {[
          { title: '3+', subtitle: 'Years Experiences', gradient: true },
          { title: '30+', subtitle: 'Projects', gradient: false },
          { title: '90+', subtitle: 'Students', gradient: true },
          { title: '20+', subtitle: 'Happy Clients', gradient: false },
        ].map((item, index) => {
          const button = (
            <button
              key={index}
              className={`flex aspect-square w-[45vw] max-w-[273px] flex-col items-center justify-center rounded-full text-center text-xl font-bold text-white sm:w-[45vw] lg:w-[273px] ${
                item.gradient
                  ? 'bg-neutral-900' // gradient border, solid inner bg
                  : 'bg-gradient-to-r from-[#8746eb] to-[#dc49ab]' // no border, gradient bg
              }`}
            >
              <div>
                <h3 className='text-display-sm md:text-display-2xl font-extrabold'>
                  {item.title}
                </h3>
                <p className='text-sm-regular md:text-md-regular'>
                  {item.subtitle}
                </p>
              </div>
            </button>
          );

          return item.gradient ? (
            <div
              key={index}
              className='rounded-full bg-gradient-to-r from-[#8746eb] to-[#dc49ab] p-[1px]'
            >
              {button}
            </div>
          ) : (
            <div key={index}>{button}</div>
          );
        })}
      </div>
    </section>
  );
};

export default About;
