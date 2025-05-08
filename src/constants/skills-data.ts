export interface Skill {
  name: string;
  proficiency: number;
  iconPath: string;
  iconWidth: number;
  iconHeight: number;
}

export const skillsData: Skill[] = [
  {
    name: 'HTML',
    proficiency: 100,
    iconPath: '/icons/html-icon.png',
    iconWidth: 46,
    iconHeight: 52
  },
  {
    name: 'CSS',
    proficiency: 80,
    iconPath: '/icons/css-icon.png',
    iconWidth: 46,
    iconHeight: 54
  },
  {
    name: 'JavaScript',
    proficiency: 90,
    iconPath: '/icons/javascript-icon.png',
    iconWidth: 52,
    iconHeight: 52
  },
  {
    name: 'React',
    proficiency: 90,
    iconPath: '/icons/react-icon.png',
    iconWidth: 52,
    iconHeight: 52
  },
  {
    name: 'Redux',
    proficiency: 85,
    iconPath: '/icons/redux-icon.png',
    iconWidth: 57,
    iconHeight: 52
  },
  {
    name: 'TypeScript',
    proficiency: 70,
    iconPath: '/icons/typescript-icon.png',
    iconWidth: 52,
    iconHeight: 52
  }
];
