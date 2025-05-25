import { StaticImageData } from 'next/image';
import React from 'react';

import TestimonialCard from './testimonialCard';

type TestimonialItemProps = {
  description: string;
  profileSrc: StaticImageData | string;
  profileName: string;
  profileOccupation: string;
};

const TestimonialItem: React.FC<TestimonialItemProps> = ({
  description,
  profileSrc,
  profileName,
  profileOccupation,
}) => {
  return (
    <div className='rounded-[10px]'>
      <TestimonialCard
        description={description}
        profileSrc={profileSrc}
        profileName={profileName}
        profileOccupation={profileOccupation}
      />
    </div>
  );
};

export default TestimonialItem;
