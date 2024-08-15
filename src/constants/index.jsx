import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import { SiGeeksforgeeks } from "react-icons/si";

import { RiReactjsLine } from "react-icons/ri";
import { PiTreeStructureFill } from "react-icons/pi";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiKotlin } from "react-icons/si";
import { FaPython } from "react-icons/fa";

import post_it_prj from "../assets/post_it_prj.png";
import image2 from "../assets/project2.jpeg";
import image3 from "../assets/project3.jpeg";
import image4 from "../assets/project4.jpeg";
import image5 from "../assets/project5.jpeg";
import image6 from "../assets/project6.jpeg";
import image7 from "../assets/project7.jpeg";
import image8 from "../assets/project8.jpeg";

import abhinav_img from "../assets/profile-pictures/abhinav_img.jpg";
import athul_img from "../assets/profile-pictures/athul_img.png";


export const NAVIGATION_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#project" },
  { label: "Skills", href: "#skill" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Aarin Sheik M",
  info: "Full-stack developer with a creative mindset.",
};

export const ABOUT = {
  text1:
    "I create dynamic, responsive websites that blend creativity with efficiency",
  text2:
    "Hello! I'm Aarin Sheik, a full-stack developer with a flair for graphic design. I thrive on crafting web experiences that are not only visually stunning but also highly functional and user-friendly. My passion for detail ensures that every project is polished and professional. Beyond coding, I'm an avid explorer of new cultures and cuisines. My curiosity drives me to stay on the cutting edge of technology and design trends, bringing innovative and practical solutions to every challenge. Whether I'm developing a sleek website or diving into the latest tech, I am dedicated to delivering excellence in every project.",
};

export const PROJECTS = [
  {
    title: "Post-it",
    subtitle:
      "A full-stack  A Social-Media web-App built with React.js, Node.js, Express.js and MongoDB.",
    image: post_it_prj,
    link: 'https://post-it-psk3.onrender.com/'
  },
  {
    title: "Social Media App",
    subtitle:
      "A social media application developed using Next.js and Firebase.",
    image: image2,
    link: '#'
  },
  {
    title: "Project Management Tool",
    subtitle: "A project management tool built with Django and PostgreSQL.",
    image: image3,
    link: '#'
  },
  {
    title: "Personal Portfolio",
    subtitle:
      "A personal portfolio website designed with HTML, CSS, and JavaScript.",
    image: image4,
    link: '#'
  },
  {
    title: "Weather Dashboard",
    subtitle:
      "A weather dashboard application built with Vue.js and Express.js.",
    image: image5,
    link: '#'
  },
  {
    title: "Blog Platform",
    subtitle:
      "A blogging platform developed with Ruby on Rails and PostgreSQL.",
    image: image6,
    link: '#'
  },
  {
    title: "Fitness Tracker",
    subtitle: "A fitness tracking app created using Flutter and Firebase.",
    image: image7,
    link: '#'
  },
  {
    title: "Recipe Finder",
    subtitle: "A recipe finder application developed with Angular and Node.js.",
    image: image8,
    link: '#'
  },
];

export const SKILLS = [
  {
    icon: <PiTreeStructureFill className="text-4xl lg:text-6xl text-yellow-500" />,
    name: "DSA",
    experience: "experienced",
  },
  {
    icon: <FaPython className="text-4xl lg:text-6xl text-yellow-300" />,
    name: "Python",
    experience: "Intermediate",
  },
  {
    icon: <RiReactjsLine className="text-4xl lg:text-6xl text-cyan-400" />,
    name: "React",
    experience: "Intermediate",
  },
  {
    icon: <FaNodeJs className="text-4xl lg:text-6xl text-green-600" />,
    name: "Node.js",
    experience: "beginner",
  },
  {
    icon: <SiMongodb className="text-4xl lg:text-6xl text-green-600" />,
    name: "MongoDB",
    experience: "beginner",
  },
  {
    icon: <SiKotlin className="text-4xl py-2 lg:text-6xl text-purple-600" />,
    name: "Kotlin",
    experience: "beginner",
  },
];

export const TESTIMONIALS = [
  {
    name: "Dr. H S Guruprasad",
    title: " Ph.D.,  Professor at BMSCE.",
    quote: "Aarin Sheik is an outstanding computer science student with strong problem-solving skills and deep knowledge. His curiosity and passion drive him to excel and explore beyond the curriculum",
    image: "https://webcampus.bmsce.in/assets/faculty/IS/Dr_H_S_Guruprasad.JPG",
  },
  {
    name: "Dr. P Jayarekha",
    title: "Ph.D., Professor & HOD of ISE-dept at BMSCE  ",
    quote: "Aarin Sheik consistently delivers high-quality work, combining creativity and technical prowess. His ability to solve complex problems with elegant solutions is truly impressive.",
    image: "https://webcampus.bmsce.in/assets/faculty/IS/Dr_Jayarekha_P_.JPG",
  },
  {
    name: "Abhinav N B",
    title: "fullstack Developer, CSE student at NIE,mysuru ",
    quote: "Aarin is incredibly talented in both frontend and backend development. He's always quick to learn new concepts, and his code is consistently solid. He's going to be a fantastic developer!",
    image: abhinav_img,
  },
  {
    name: "Athul I kumar",
    title: "Pre-final year student in the ISE-dept at BMSCE",
    quote: "Aarin shows amazing dedication and discipline in his studies. His commitment to mastering every detail and staying focused is truly inspiring. He’s always on top of his work, no matter what!",
    image: athul_img,
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://github.com/aarinsheik",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/aarin-sheik-28136b227/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.geeksforgeeks.org/user/aarinsheikm/",
    icon: <SiGeeksforgeeks fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://discordapp.com/users/aarin_sheik.m",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.instagram.com/aarin_sheik/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
];
