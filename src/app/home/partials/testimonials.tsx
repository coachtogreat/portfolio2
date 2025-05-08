import { StaticImageData } from 'next/image';
import Image from 'next/image';
import React from 'react';

import { Section } from '@/components/layouts/section';
import { Marquee } from '@/components/ui/marquee';

import { testimonialsData } from '@/constants/testimonials-data';

const Testimonials = () => {
  return (
    <Section
      title='People Say About Me'
      subtitle='Hear from clients and colleagues about their experiences working with me.'
      id='testimonial'
    >
      <div className='custom-container relative flex flex-col gap-8'>
        {/* First Row */}
        <div className='w-full overflow-hidden mix-blend-luminosity'>
          <Marquee className='w-full py-4 [--duration:120s] md:max-w-[calc(100%+160px)]'>
            {testimonialsData
              .filter((_, index) => index % 2 === 0)
              .map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  description={testimonial.description}
                  profileSrc={testimonial.profileSrc}
                  profileName={testimonial.profileName}
                  profileOccupation={testimonial.profileOccupation}
                />
              ))}
          </Marquee>
        </div>

        {/* Second Row */}
        <div className='w-full overflow-hidden mix-blend-luminosity'>
          <Marquee className='w-full py-4 [--duration:120s] md:max-w-[calc(100%+160px)]'>
            {testimonialsData
              .filter((_, index) => index % 2 !== 0)
              .map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  description={testimonial.description}
                  profileSrc={testimonial.profileSrc}
                  profileName={testimonial.profileName}
                  profileOccupation={testimonial.profileOccupation}
                />
              ))}
          </Marquee>
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;

type TestimonialCardProps = {
  description: string;
  profileSrc: StaticImageData;
  profileName: string;
  profileOccupation: string;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  description,
  profileSrc,
  profileName,
  profileOccupation,
}) => {
  return (
    <div className='bg-base-background relative overflow-hidden rounded-[10px] border-2 border-transparent p-6 transition-all duration-300 hover:border-[2px] hover:border-[var(--gradient-border)] hover:[--gradient-border:linear-gradient(to_right,violet,pink)]'>
      <div className='mt-4 flex items-start gap-4 md:mt-6'>
        <Image
          src={profileSrc}
          alt={profileName}
          className='h-12 w-12 rounded-full'
        />
        <div>
          <p className='text-sm-bold md:text-md-semibold text-neutral-200'>
            {profileName}
          </p>
          <p className='text-sm-regular md:text-md-regular text-white'>
            {profileOccupation}
          </p>
        </div>
      </div>

      <p className='text-sm-regular md:text-md-regular text-neutral-25 mt-4 mb-2 line-clamp-6 max-h-[240px] max-w-[320px] leading-relaxed md:max-h-[260px] md:max-w-[450px]'>
        {description}
      </p>
    </div>
  );
};
