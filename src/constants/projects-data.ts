import { StaticImageData } from 'next/image';

import project1Src from '../../public/images/image1.png';
import project2Src from '../../public/images/image2.png';
import project3Src from '../../public/images/image3.png';
import project4Src from '../../public/images/image4.png';
import project5Src from '../../public/images/image5.png';
import project6Src from '../../public/images/image6.png';

type Project = {
  imageSrc: StaticImageData;
  name: string;
  description: string;
  skill1: string;
  skill2: string;
  skill3: string;
  link: string;
};

export const projectsData: Project[] = [
  {
    imageSrc: project1Src,
    name: 'Landing Page',
    description:
      'The BIGGEST community event in Indonesia, which will run for 30 full days with the theme.',
    skill1: 'React',
    skill2: 'HTML',
    skill3: 'CSS',
    link: 'http://www.community.com',
  },
  {
    imageSrc: project2Src,
    name: 'Landing Page',
    description:
      'Private hospital in the city of padang that provides special surgical services',
    skill1: 'React',
    skill2: 'HTML',
    skill3: 'CSS',
    link: 'http://www.privatehospital.com',
  },
  {
    imageSrc: project3Src,
    name: 'Landing Page',
    description:
      'Product engaged in WhatsApp API services and other information technology services.',
    skill1: 'React',
    skill2: 'HTML',
    skill3: 'CSS',
    link: 'http://apiservices.com',
  },
  {
    imageSrc: project4Src,
    name: 'Landing Page',
    description:
      'nusa.id cloud is part of the Nusanet Group (PT. Media Antar Nusa) of experience as an Internusa.',
    skill1: 'React',
    skill2: 'HTML',
    skill3: 'CSS',
    link: 'http://www.nusa.id',
  },
  {
    imageSrc: project5Src,
    name: 'Landing Page',
    description: 'UKUR is a constructor and interior marketplace in Indonesia.',
    skill1: 'React',
    skill2: 'HTML',
    skill3: 'CSS',
    link: 'http://www,ukur.com',
  },
  {
    imageSrc: project6Src,
    name: 'Landing Page',
    description:
      'Product engaged in WhatsApp API Services and other information technology services.',
    skill1: 'React',
    skill2: 'HTML',
    skill3: 'CSS',
    link: 'http://www.engaged.com',
  },
];
