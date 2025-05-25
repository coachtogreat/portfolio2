import React from 'react';

type SectionProps = {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  id?: string;
  className: string;
};

export const Section: React.FC<SectionProps> = ({
  children,
  title,
  subtitle,
  id,
  className,
}) => {
  return (
    <div className={`custom-container py-10 md:py-20 ${className}`} id={id}>
      {/* heading */}
      <div className='text-center'>
        <h2 className='text-display-sm md:text-display-2xl font-extrabold text-neutral-100'>
          {title}
        </h2>
        <p className='md:text-md-regular text-sm-regular mt-4 text-neutral-200'>
          {subtitle}
        </p>
      </div>

      {/* content */}
      <div className='text-display-sm md:text-display-md mx-auto mt-6 flex max-w-[1440px] items-center justify-center md:mt-16'>
        {children}
      </div>
    </div>
  );
};
