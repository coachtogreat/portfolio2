import React from 'react';

interface VIconProps {
  className?: string;
}

const VIcon: React.FC<VIconProps> = ({ className = '' }) => {
  return (
    <div className={`relative h-6 w-6 ${className}`}>
      <div className='absolute inset-0 rounded-full bg-gradient-to-r from-[#dc49a6] to-[#8746eb] opacity-90' />
      <svg
        className='absolute inset-0'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M16 8L10 16L6 12'
          stroke='white'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          fill='none'
        />
      </svg>
    </div>
  );
};

export default VIcon;
