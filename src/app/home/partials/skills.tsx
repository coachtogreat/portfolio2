import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import { Section } from '@/components/layouts/section';

import { skillsData, Skill } from '../../../constants/skills-data';

const Skills = () => {
  return (
    <Section
      title='My Core Skills'
      subtitle='An overview of the key technologies and frameworks I specialize in.'
      id='skills'
      className=''
    >
      <div className='flex w-full flex-col gap-6 md:flex-row'>
        <div className='relative w-full flex-[1] md:flex-[4.7]'>
          <div className='relative h-[400px] w-full gap-8'>
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                className='absolute'
                style={{ left: skill.x, top: skill.y }}
              >
                <div className='relative inline-flex h-[80px] w-[162px] items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 p-[1px]'>
                  <div className='flex h-full w-full items-center justify-center rounded-lg bg-black dark:bg-black'>
                    <Image
                      src={skill.iconPath}
                      alt={skill.name}
                      width={skill.iconWidth}
                      height={skill.iconHeight}
                      className='h-auto w-auto'
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='flex-[1] md:flex-[5.3]'>
          <div className='flex h-[340px] flex-col justify-between'>
            <div className='space-y-8 md:space-y-6 md:space-x-3'>
              {skillsData.map((skill: Skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20, width: 0 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    width: `${skill.proficiency}%`,
                  }}
                  transition={{
                    duration: 1,
                    delay: index * 0.2,
                    ease: 'easeOut',
                  }}
                  viewport={{ once: true }}
                >
                  <div className='flex flex-col'>
                    <div className='flex items-center justify-between'>
                      <span className='text-sm font-medium'>{skill.name}</span>
                      <span className='text-sm text-white'>
                        {skill.proficiency}%
                      </span>
                    </div>
                    <div
                      className='relative h-2 w-full rounded-full'
                      style={{ background: '#242424' }}
                    >
                      <div
                        className='absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500'
                        style={{ width: `${skill.proficiency}%` }}
                      />
                      <motion.div
                        className='absolute inset-y-0 left-0 rounded-full transition-all duration-500'
                        style={{
                          background:
                            'linear-gradient(90deg, #dc49a6 0%, #8746eb 100%)',
                          width: `${skill.proficiency}%`,
                        }}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.proficiency}%` }}
                        transition={{
                          duration: 1,
                          delay: index * 0.2,
                          ease: 'easeOut',
                        }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Skills;
