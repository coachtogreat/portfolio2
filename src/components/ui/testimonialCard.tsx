import { StaticImageData } from 'next/image';
import Image from 'next/image';
import React from 'react';

type TestimonialCardProps = {
  description: string;
  profileSrc: StaticImageData | string;
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
    <div
      className='rounded-[10px]'
      style={{
        background: 'linear-gradient(135deg, #8746eb, #dc40ab)',
        width: 'fit-content',
      }}
    >
      <div
        className='group rounded-[8px] bg-black transition-all duration-300 hover:border hover:border-[#dc40ab] hover:shadow-[0_8px_24px_rgba(220,64,171,0.3)]'
        style={{ width: '500px', height: '213px' }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundSize = '120%';
          e.currentTarget.style.backgroundPosition = 'center';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundSize = '100%';
          e.currentTarget.style.backgroundPosition = 'center';
        }}
      >
        <div className='relative pt-4 pr-5 pb-5 pl-5'>
          <div className='flex items-start gap-5'>
            <div className='relative rounded-full bg-gradient-to-r from-[#8746eb] to-[#dc40ab] p-[2px]'>
              <div className='rounded-full bg-black p-[2px]'>
                <Image
                  src={profileSrc}
                  alt={profileName}
                  className='h-12 w-12 rounded-full object-cover'
                  width={60}
                  height={60}
                />
              </div>
            </div>
            <div className='flex flex-col'>
              <p className='text-sm-bold md:text-md-semibold text-neutral-200'>
                {profileName}
              </p>
              <p className='text-sm-regular md:text-md-regular text-white'>
                {profileOccupation}
              </p>
            </div>
          </div>
          <p className='text-sm-regular md:text-md-regular text-neutral-25 pt-4 pr-2 leading-relaxed text-white'>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
