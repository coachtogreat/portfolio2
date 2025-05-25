import React from 'react';

interface GradientBorderWrapperProps {
  children: React.ReactNode;
}

const GradientBorderWrapper: React.FC<GradientBorderWrapperProps> = ({ children }) => {
  return (
    <div className='rounded-[10px] border-[2px] border-gradient-to-r border-from-[#dc40ab] border-to-[#8746eb]'>
      <div className='p-[1px]'>
        {children}
      </div>
    </div>
  );
};

export default GradientBorderWrapper;
