import React from 'react';

import { Section } from '@/components/layouts/section';
import { Marquee } from '@/components/ui/marquee';
import TestimonialItem from '@/components/ui/TestimonialItem';

import { testimonialsData } from '@/constants/testimonials-data';

const Testimonials = () => {
  return (
    <Section
      title='People Say About Me'
      subtitle='Hear from clients and colleagues about their experiences working with me.'
      id='testimonial'
      className='bg-gradient-to-b from-black to-gray-900 dark:from-gray-900 dark:to-gray-800'
    >
      <div className='custom-container relative flex flex-col gap-8'>
        {/* First Row */}
        <div className='w-full overflow-hidden mix-blend-luminosity'>
          <Marquee
            reverse
            className='w-full py-4 [--duration:120s] md:max-w-[calc(100%+160px)]'
          >
            {testimonialsData
              .filter((_, index) => index % 2 === 0)
              .map((testimonial, index) => (
                <TestimonialItem
                  key={`testimonial-${index}`}
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
                <TestimonialItem
                  key={`testimonial-${index}`}
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
