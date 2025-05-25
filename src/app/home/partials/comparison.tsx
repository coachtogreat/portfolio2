import { motion } from 'framer-motion';
import React from 'react';

import VIcon from '../../../components/ui/v-icon';
import XIcon from '../../../components/ui/x-icon';
import { comparisonData } from '../../../constants/comparison-data';

interface SectionProps {
  title: string;
  subtitle: string;
  id: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, subtitle, id, children }) => {
  return (
    <section id={id} className='mb-16'>
      <div className='mb-8 text-center'>
        <h2 className='text-display-xl md:text-display-2xl mb-2 font-bold'>
          {title}
        </h2>
        <p className='md:text-md-regular text-sm-regular text-neutral-200'>
          {subtitle}
        </p>
      </div>
      {children}
    </section>
  );
};

const Comparison: React.FC = () => {
  return (
    <Section
      title='Why We Stand?'
      subtitle='A showcase of my unique approach and skill set compared to conventional front-end-developers'
      id='comparison'
    >
      <div className='custom-container flex flex-col items-center justify-center gap-4'>
        {/* Header */}
        <div className='flex w-full items-center justify-center gap-4 rounded-full bg-gradient-to-r from-[#dc49a6] to-[#8746eb] p-2'>
          <div className='flex-[5.0] basis-80 text-center font-medium'>
            Skill
          </div>
          <div className='flex-[2.5] basis-80 text-center font-medium'>Me</div>
          <div className='flex-[2.5] basis-80 text-center font-medium'>
            Other
          </div>
        </div>

        {/* Data Rows */}
        {comparisonData.map((tech) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='flex w-full items-center gap-4'
          >
            <div className='flex-[5.0] basis-80 text-center'>{tech.name}</div>
            <div className='flex flex-[2.5] basis-80 items-center justify-center text-center text-2xl'>
              {tech.me === '✅' ? (
                <VIcon className='text-green-600' />
              ) : (
                <XIcon className='text-red-500' />
              )}
            </div>
            <div className='flex flex-[2.5] basis-80 items-center justify-center text-center text-2xl'>
              {tech.other === '✅' ? (
                <VIcon className='text-green-600' />
              ) : (
                <XIcon className='text-red-500' />
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Comparison;
