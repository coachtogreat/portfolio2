import React from 'react';

type WhiteSectionProps = {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  id?: string;
};

export const WhiteSection: React.FC<WhiteSectionProps> = ({
  children,
  title,
  subtitle,
  id,
}) => {
  return (
    <div className='custom-container py-10 md:py-20' id={id}>
      {/* heading */}
      <div className='text-center'>
        <h2 className='display-sm-bold md:display-lg-bold text-neutral-25'>
          {title}
        </h2>
        <p className='text-sm-regular md:text-md-regular mt-4 text-white'>
          {subtitle}
        </p>
      </div>

      {/* content */}
      <div className='mt-6 md:mt-16'>{children}</div>
    </div>
  );
};
