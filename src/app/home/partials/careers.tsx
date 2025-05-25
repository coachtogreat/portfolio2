'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import { careerData } from '@/constants/careers-data';

import { Section } from '../../../components/layouts/section';

interface CareerProps {
  title: string;
  company: string;
  description: string;
  experience?: string[];
  index: number;
}

const Career: React.FC<CareerProps> = ({
  title,
  company,
  description,
  experience,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.5,
        duration: 0.5,
      }}
      viewport={{ once: false }}
      className='w-full'
    >
      <div className='grid grid-cols-[80px_1fr] gap-4'>
        {/* Timeline Column */}
        <motion.div
          className='relative'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: index * 0.5 + 0.2,
            duration: 0.5,
          }}
          viewport={{ once: false }}
        >
          {index < careerData.length - 1 && (
            <motion.div
              className='absolute left-1/2 h-full w-1 -translate-x-1/2 transform bg-gradient-to-b from-pink-500 to-pink-700'
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              transition={{
                delay: index * 0.5 + 0.2,
                duration: 0.5,
                ease: 'easeOut',
              }}
              viewport={{ once: false }}
            />
          )}
          <motion.div
            className='border-primary-100 absolute left-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 transform rounded-full border-4 bg-gradient-to-br from-[#8746eb] to-[#dc49ab]'
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              delay: index * 0.5 + 0.2,
              duration: 0.5,
            }}
            viewport={{ once: false }}
            whileHover={{ scale: 1.05, x: 6 }}
            whileTap={{ scale: 0.9 }}
          />
        </motion.div>

        {/* Right Column - Profile Details */}
        <motion.div
          className='space-y-4'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className='text-display-md md:text-display-xs font-extrabold'>
            {title}
          </h2>
          <div className='flex items-center gap-4'>
            <div className='flex items-center gap-2'>
              <Image
                src='/images/jpg/building.jpg'
                alt='office'
                width={30}
                height={30}
                className='object-contain'
              />
              <span className='text-sm-regular md:text-md-regular text-white'>
                {company}
              </span>
            </div>
            <span className='text-sm-regular md:text-md text-white'>•</span>
            <Image
              src='/images/jpg/date.jpg'
              alt='durasi'
              width={30}
              height={30}
              className='object-contain'
            />
            <span className='text-sm-regular md:text-md regular text-white'>
              {description}
            </span>
          </div>
          {experience && (
            <ul className='text-sm-regular md:text-md-regular list-inside list-disc space-y-1'>
              {experience.map((exp, index) => (
                <motion.li
                  key={index}
                  className='text-white'
                  whileHover={{ scale: 1.05, x: 6 }}
                  transition={{ duration: 0.2 }}
                >
                  {exp}
                </motion.li>
              ))}
            </ul>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

const Careers: React.FC = () => {
  return (
    <Section
      title='Career Journey'
      subtitle='A visual timeline of key milestones and experiences from over the years.'
      id='careers'
      className=''
    >
      <div className='w-full max-w-[1200px]'>
        {careerData.map((career, index) => (
          <Career
            key={index}
            title={career.title}
            company={career.company}
            description={career.description}
            experience={career.experience}
            index={index}
          />
        ))}
      </div>
    </Section>
  );
};

export default Careers;
