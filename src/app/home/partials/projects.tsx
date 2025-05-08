import { StaticImageData } from 'next/image';
import Image from 'next/image';
import React from 'react';

import { Section } from '@/components/layouts/section';

import { projectsData } from '@/constants/projects-data';

const Projects = () => {
  return (
    <Section id='projects' title='' subtitle='' bg-red-500>
      <Cards>
        {projectsData.map((project) => (
          <Card
            key={project.name}
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
  return <div className='flex flex-wrap gap-6 md:gap-5'>{children}</div>;
};

type CardProps = {
  imageSrc: StaticImageData;
  name: string;
  description: string;
  skill1: string;
  skill2: string;
  skill3: string;
  link: string;
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
    <div className='flex-1 basis-70'>
      <Image
        src={imageSrc}
        alt={name}
        className='aspect-square rounded-2xl object-cover md:rounded-4xl'
      />
      <h4 className='text-lg-semibold text-neutral-25 mt-4'>{name}</h4>
      <p className='text-md-regular mt-2 text-white'>{description}</p>
      <div className='mt-4 flex gap-2'>
        <button className='rounded-lg border-2 border-white px-4 py-2 text-white transition-colors hover:bg-blue-50'>
          {skill1}
        </button>
        <button className='rounded-lg border-2 border-white px-4 py-2 text-white transition-colors hover:bg-blue-50'>
          {skill2}
        </button>
        <button className='rounded-lg border-2 border-white px-4 py-2 text-white transition-colors hover:bg-blue-50'>
          {skill3}
        </button>
      </div>
      <div className='mt-4'>
        <a
          href={link}
          className='text-blue-600 transition-colors hover:text-blue-700'
        >
          Visit Project
        </a>
      </div>
    </div>
  );
};
