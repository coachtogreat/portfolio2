import { StaticImageData } from 'next/image';
import Image from 'next/image';
import React from 'react';

import { Section } from '@/components/layouts/section';

import { projectsData } from '@/constants/projects-data';

const Projects = () => {
  return (
    <Section id='projects' title='' subtitle='' className=''>
      <Cards>
        {projectsData.map((project, index) => (
          <Card
            key={`${project.name}-${index}`}
            imageSrc={project.imageSrc}
            name={project.name}
            description={project.description}
            skill1={project.skill1}
            skill2={project.skill2}
            skill3={project.skill3}
            link={project.link}
          />
        ))}
      </Cards>
    </Section>
  );
};

export default Projects;

type CardsProps = {
  children: React.ReactNode;
};

const Cards: React.FC<CardsProps> = ({ children }) => {
  return <div className='grid gap-6 md:grid-cols-3 md:gap-8'>{children}</div>;
};

type CardProps = {
  imageSrc: StaticImageData;
  name: string;
  description: string;
  skill1: string;
  skill2: string;
  skill3: string;
  link: string;
  className?: string;
};

const Card: React.FC<CardProps> = ({
  imageSrc,
  name,
  description,
  skill1,
  skill2,
  skill3,
  link,
}) => {
  return (
    <div className='w-full'>
      <Image
        src={imageSrc}
        alt={name}
        className='aspect-square rounded-2xl object-cover md:rounded-4xl'
      />
      <h4 className='text-lg-bold md:text-xl-bold mt-4 text-neutral-100'>
        {name}
      </h4>
      <p className='text-sm-regular md:text-md-regular mt-2 text-neutral-200'>
        {description}
      </p>
      <div className='mt-4 flex gap-2'>
        <button className='text-sm-regular md:text-md-regular h-10 rounded-lg border-1 border-white px-3 py-1.5 text-white transition-all hover:bg-gradient-to-r hover:from-[#8746eb] hover:to-[#dc49ab] hover:bg-clip-text hover:text-transparent'>
          {skill1}
        </button>
        <button className='text-sm-regular md:text-md-regular h-10 rounded-lg border-1 border-white px-3 py-1.5 text-white transition-all hover:bg-gradient-to-r hover:from-[#8746eb] hover:to-[#dc49ab] hover:bg-clip-text hover:text-transparent'>
          {skill2}
        </button>
        <button className='text-sm-regular md:text-md-regular h-10 rounded-lg border-1 border-white px-3 py-1.5 text-white transition-all hover:bg-gradient-to-r hover:from-[#8746eb] hover:to-[#dc49ab] hover:bg-clip-text hover:text-transparent'>
          {skill3}
        </button>
      </div>
      <div className='mt-4'>
        <a
          href={link}
          className='text-md-bold md:text-lg-bold flex items-center gap-2 rounded-lg bg-transparent bg-gradient-to-r from-[#8746eb] to-[#dc49ab] bg-clip-text py-2 text-transparent transition-all hover:opacity-90'
        >
          Visit Project
          <div className='relative inline-block'>
            <Image
              src='/images/png/panah.png'
              alt='arrow right'
              width={16}
              height={16}
              className='h-4 w-4'
            />
            <div className='absolute inset-0 bg-gradient-to-r from-[#8746eb] to-[#dc49ab] opacity-0 transition-opacity hover:opacity-100'></div>
          </div>
        </a>
      </div>
    </div>
  );
};
