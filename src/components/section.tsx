'use client';

import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  id: string;
}

const Section: React.FC<SectionProps> = ({ children, title, subtitle, id }) => {
  return (
    <section id={id} className='space-y-8'>
      <div className='mb-8 text-center'>
        <h2 className='text-display-sm md:text-display-2xl mb-2 font-extrabold'>
          {title}
        </h2>
        <p className='text-display-sm md:text-display-md text-center text-neutral-100'>
          {subtitle}
        </p>
      </div>
      {children}
    </section>
  );
};

export { Section };
