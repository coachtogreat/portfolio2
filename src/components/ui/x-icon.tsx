import React from 'react';

interface XIconProps {
  className?: string;
}

const XIcon: React.FC<XIconProps> = ({ className = '' }) => {
  return (
    <div className={`relative h-6 w-6 ${className}`}>
      <div className='absolute inset-0 rounded-full bg-gray-600' />
      <svg
        className='absolute inset-0'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M8 8L16 16M16 8L8 16'
          stroke='white'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </div>
  );
};

export default XIcon;
