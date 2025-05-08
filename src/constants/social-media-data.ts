import iconGlobal from '../../public/icons/global-icon.png';
import iconInstagram from '../../public/icons/icon-instagram.svg';
import iconLinkedIn from '../../public/icons/icon-linkedin.svg';

type Icon = {
  href: string;
  src: string;
  alt: string;
};

export const socialMediaData: Icon[] = [
  {
    href: 'https://www.facebook.com/',
    src: iconGlobal,
    alt: 'Global',
  },
  {
    href: 'https://www.instagram.com/',
    src: iconInstagram,
    alt: 'Instagram',
  },
  {
    href: 'https://www.linkedin.com/',
    src: iconLinkedIn,
    alt: 'LinkedIn',
  },
];
