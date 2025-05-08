import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import { Section } from '@/components/layouts/section';

import { skillsData, Skill } from '../../../constants/skills-data';

const Skills = () => {
  const skillPositions = [
    { top: 100, left: null, right: 75 },
    { top: 200, left: null, right: 200 },
    { top: 235, left: null, right: 150 },
    { top: 70, left: 200, right: null },
    { top: 155, left: 90, right: null },
    { top: 300, left: 160, right: null },
  ];

  return (
    <Section
      title='My Core Skills'
      subtitle='An overview of the key technolgies and frameworks I specialize in.'
      id='skills'
    >
      <div className='w-full'>
        <div className='custom-container flex flex-wrap items-center gap-7 overflow-hidden md:gap-10'>
          {/* Skills icons section */}
          <div
            className='flex-start relative flex-[4.7] basis-80'
            style={{ height: 'clamp(10rem, 40vw, 25rem)' }}
          >
            {skillsData.map((skill, index) => {
              const position = skillPositions[index];
              return (
                <div
                  key={skill.name}
                  className={`absolute ${position.left ? `left-[${position.left}px]` : `right-[${position.right}px]`} top-[${position.top}px]`}
                >
                  <motion.div
                    animate={{
                      x: [0, 50, 0, -50, 0],
                      y: [0, -25, 0, -25, 0],
                    }}
                    transition={{
                      duration: Math.random() * 5 + 5,
                      repeat: Infinity,
                      ease: 'linear',
                      delay: index * 0.5,
                    }}
                    className='mb-4'
                  >
                    <Image
                      src={skill.iconPath}
                      alt={skill.name}
                      width={skill.iconWidth}
                      height={skill.iconHeight}
                    />
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* Skill progress bars section */}
          <div className='flex-[5.3] basis-80 flex-col justify-start'>
            <div className='pt-2'>
              <div className='space-y-3'>
                {skillsData.map((skill: Skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.5,
                      duration: 0.5,
                      ease: 'easeOut',
                    }}
                    viewport={{ once: false }}
                  >
                    <div className='flex items-center justify-between'>
                      <span className='text-sm-regular bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>
                        {skill.name}
                      </span>
                      <span className='text-sm-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>
                        {skill.proficiency}%
                      </span>
                    </div>
                    <motion.div
                      className='h-2 w-full rounded-full bg-black'
                      initial={{ width: '0%' }}
                      whileInView={{ width: `${skill.proficiency}%` }}
                      transition={{
                        delay: index * 0.5,
                        duration: 1,
                        ease: 'easeOut',
                      }}
                      viewport={{ once: false }}
                    >
                      <div className='h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500'></div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Skills;
