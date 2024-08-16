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

import post_it_prj from "../assets/project-images/post-it_prj.png";
import job_lab_prj from "../assets/project-images/job-lab_prj.png";
import ASAP_prj from "../assets/project-images/abalone-shell-age-prediction_prj.png";
import fishyTalk_prj from "../assets/project-images/fishyTalk_prj.png";
import BHPP_prj from "../assets/project-images/bengaluru_House_price_prediction_prj.png";
import roadRun_prj from "../assets/project-images/roadRun_prj.png";
import weather_app_prj from "../assets/project-images/weather_app_prj.png";
import imageHub_prj from "../assets/project-images/imageHub_prj.png";
import qr_generator_prj from "../assets/project-images/qr_generator_prj.png";


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
      "A full-stack A Social-Media web-App built with tailwindcss, React.js, Node.js, Express.js and MongoDB.",
    image: post_it_prj,
    link: 'https://post-it-psk3.onrender.com/'
  },
  {
    title: "Job-Lab",
    subtitle:
      "A job searching platform built with tailwindcss, react.js, Node.js, Express.js and MongoDB",
    image: job_lab_prj,
    link: 'https://github.com/aarinsheik/Job-Lab'
  },
  {
    title: "Abalone-shell Age predictor",
    subtitle:
      "This interactive website uses React.js and Tailwind for a responsive frontend, Flask for backend operations, and an ML model to predict abalone shell ages from user input, leveraging a Kaggle-trained dataset.",
    image: ASAP_prj,
    link: 'https://github.com/aarinsheik/Abalone-shell-age-prediction'
  },
  {
    title: "Bengaluru House Price prediction WebApp",
    subtitle:
      "Our site predicts Bengaluru house prices using a Flask server and a Linear Regression model, trained on 13,000+ instances.",
    image: BHPP_prj,
    link: 'https://github.com/aarinsheik/Bengaluru-House_Price-Prediction'
  },
  {
    title: "FishyTalk Android App",
    subtitle: "Fishy Talk is a chat app using Firebase Authentication, Database, and Storage for seamless sign-ups, chat storage, and profile pictures. Built with Android Studio XML and Kotlin.",
    image: fishyTalk_prj,
    link: 'https://github.com/aarinsheik/Fishy-Talk-ChatApp'
  },
  {
    title: "RoadRun Android App",
    subtitle:
      "This app lets users check vehicle fines easily, with authenticated officers inputting details, using Firebase Database and Authentication.",
    image: roadRun_prj,
    link: 'https://github.com/aarinsheik/RoadRun-App'
  },
  {
    title: "Weather-App",
    subtitle:
      "Access real-time weather updates by city with our website, built using HTML, CSS, and JavaScript, and integrated with the Open Weather Map API.",
    image: weather_app_prj,
    link: 'https://weather-info-website-chi.vercel.app/'
  },
  {
    title: "QR Generator Web-App",
    subtitle: "website offers a straightforward QR code generation tool, utilizing the GoQR API. It’s built with HTML, CSS, and JavaScript for a smooth and intuitive user experience",
    image: qr_generator_prj,
    link: 'https://qr-generator-website.vercel.app/'
  },
  {
    title: "ImageHub",
    subtitle: "ImageHub is a dynamic image search engine using HTML, CSS, and JavaScript with the Unsplash API for stunning, copyright-free visuals.",
    image: imageHub_prj,
    link: 'https://image-hub-website.vercel.app/'
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
