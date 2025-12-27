import { Code, Eye, FileText } from 'lucide-react';
import roverImage from '../assets/HighPark.png';
import websiteImage from '../assets/personalwebsite.jpg';
import microbridgeImage from '../assets/MicroBridge_Thumbnail.png';
import bulletHellImage from '../assets/BulletHell.png';

export type Category = 'All' | 'Coding' | 'Engineering';

export interface ProjectLink {
  icon: typeof Code;
  text: string;
  url: string;
}

export interface Project {
  id: number;
  title: string;
  category: 'Coding' | 'Engineering';
  image: string;
  description: string;
  techStack: string[];
  techColor: 'primary' | 'amber';
  links: ProjectLink[];
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Personal Website",
    category: "Coding",
    image: websiteImage,
    description: "A modern, interactive portfolio website built with React and Vite, featuring a warm aesthetic and a narrative-driven project showcase.",
    techStack: ["Html", "CSS", "TypeScript", "Firebase"],
    techColor: "primary",
    links: [
      { icon: Code, text: "Source", url: "https://github.com/Charliecl-Lau/personal-website" },
      //{ icon: Eye, text: "Report", url: "#" },
      //{ icon: FileText, text: "Reflection", url: "#" }
    ]
  },
  {
    id: 2,
    title: "Equitable Access to High Park",
    category: "Engineering",
    image: roverImage,
    description: "Designed an accessible pathway to High Park Nature Centre, featuring a solar-heated conveyor belt for year-round access and ecosystem preservation.",
    techStack: ["Engineering Design", "Sustainability", "Data Analysis"],
    techColor: "amber",
    links: [
      { icon: Eye, text: "Report", url: "#" },
      //{ icon: FileText, text: "Reflection", url: "#" }
    ]
  },
  {
    id: 3,
    title: "MicroBridge StartUp",
    category: "Coding",
    image: microbridgeImage,
    description: "A full-stack microinternship platform connecting students with Startup companies for internships.",
    techStack: ["Node.js", "React", "GoLang", "PostgreSQL"],
    techColor: "primary",
    links: [
      { icon: Code, text: "Source", url: "https://github.com/Charliecl-Lau/MicroBridge-v2" },
      { icon: FileText, text: "Blog", url: "/projects/microbridge-startup" }
    ]
  },
  {
    id: 4,
    title: "Bullet Hell Game",
    category: "Coding",
    image: bulletHellImage,
    description: "A classic bullet hell game featuring intense projectile patterns and challenging gameplay mechanics.",
    techStack: ["Java"],
    techColor: "primary",
    links: [
      { icon: Code, text: "Source", url: "https://github.com/Charliecl-Lau/final-project-greenfoot-teamg.git" }
    ]
  }
];
