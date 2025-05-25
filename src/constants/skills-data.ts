export interface Skill {
  name: string;
  proficiency: number;
  iconPath: string;
  iconWidth: number;
  iconHeight: number;
  x: number;
  y: number;
}

export const skillsData: Skill[] = [
  {
    name: 'HTML',
    proficiency: 100,
    iconPath: '/icons/html-icon.png',
    iconWidth: 46,
    iconHeight: 52,
    x: 60,
    y: 30,
  },
  {
    name: 'CSS',
    proficiency: 80,
    iconPath: '/icons/css-icon.png',
    iconWidth: 46,
    iconHeight: 54,
    x: 360,
    y: 50,
  },
  {
    name: 'JavaScript',
    proficiency: 90,
    iconPath: '/icons/javascript-icon.png',
    iconWidth: 52,
    iconHeight: 52,
    x: 20,
    y: 150,
  },
  {
    name: 'React',
    proficiency: 90,
    iconPath: '/icons/react-icon.png',
    iconWidth: 52,
    iconHeight: 52,
    x: 140,
    y: 240,
  },
  {
    name: 'Redux',
    proficiency: 85,
    iconPath: '/icons/redux-icon.png',
    iconWidth: 57,
    iconHeight: 52,
    x: 190,
    y: 130,
  },
  {
    name: 'TypeScript',
    proficiency: 70,
    iconPath: '/icons/typescript-icon.png',
    iconWidth: 52,
    iconHeight: 52,
    x: 340,
    y: 220,
  },
];
