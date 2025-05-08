import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

// Define types for the component
interface SkillIcon {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface SkillMotionProps {
  className?: string;
  containerHeight?: string;
  containerWidth?: string;
}

// Define animation properties as constants
const animationProps = {
  animate: {
    rotate: [0, 360],
    x: [0, 50, 0, -50, 0],
    y: [0, -50, 0, 50, 0],
  },
  transition: {
    duration: 10,
    repeat: Infinity,
    ease: 'linear',
  },
};

// Define skill icons as constants
const skillIcons: SkillIcon[] = [
  { src: '/icons/css-icon.png', alt: 'CSS', width: 46, height: 54 },
  { src: '/icons/redux-icon.png', alt: 'Redux', width: 57, height: 52 },
  {
    src: '/icons/typescript-icon.png',
    alt: 'TypeScript',
    width: 52,
    height: 52,
  },
  { src: '/icons/html-icon.png', alt: 'HTML', width: 46, height: 52 },
  {
    src: '/icons/javascript-icon.png',
    alt: 'JavaScript',
    width: 52,
    height: 52,
  },
  { src: '/icons/react-icon.png', alt: 'React', width: 52, height: 52 },
];

const Skillmotion: React.FC<SkillMotionProps> = ({ className = '', containerHeight = 'clamp(21.25rem, 52.73vw, 39.81rem)', containerWidth = '100%' }) => {
  return (
    <div
      className={`relative ${className}`}
      style={{ height: containerHeight, width: containerWidth }}
    >
        {/* CSS Icon */}
        <div className='absolute top-[100px] right-[75px]'>
          <motion.div {...animationProps} className='mb-4'>
            <Image
              src={skillIcons[0].src}
              alt={skillIcons[0].alt}
              width={skillIcons[0].width}
              height={skillIcons[0].height}
            />
          </motion.div>
        </div>
        {/* Redux Icon */}
        <div className='absolute top-[200px] right-[200px]'>
          <motion.div {...animationProps} className='mb-4'>
            <Image
              src={skillIcons[1].src}
              alt={skillIcons[1].alt}
              width={skillIcons[1].width}
              height={skillIcons[1].height}
            />
          </motion.div>
        </div>
        {/* TypeScript Icon */}
        <div className='absolute top-[350px] right-[150px]'>
          <motion.div {...animationProps} className='mb-4'>
            <Image
              src={skillIcons[2].src}
              alt={skillIcons[2].alt}
              width={skillIcons[2].width}
              height={skillIcons[2].height}
            />
          </motion.div>
        </div>

        {/* HTML Icon */}
        <div className='absolute top-[70px] left-[200px]'>
          <motion.div {...animationProps} className='mb-4'>
            <Image
              src={skillIcons[3].src}
              alt={skillIcons[3].alt}
              width={skillIcons[3].width}
              height={skillIcons[3].height}
            />
          </motion.div>
        </div>
        {/* JavaScript Icon */}
        <div className='absolute top-[230px] left-[90px]'>
          <motion.div {...animationProps} className='mb-4'>
            <Image
              src={skillIcons[4].src}
              alt={skillIcons[4].alt}
              width={skillIcons[4].width}
              height={skillIcons[4].height}
            />
          </motion.div>
        </div>
        {/* React Icon */}
        <div className='absolute top-[400px] left-[160px]'>
          <motion.div {...animationProps} className='mb-4'>
            <Image
              src={skillIcons[5].src}
              alt={skillIcons[5].alt}
              width={skillIcons[5].width}
              height={skillIcons[5].height}
            />
          </motion.div>
        </div>
      </div>
  );
};

export default Skillmotion;
