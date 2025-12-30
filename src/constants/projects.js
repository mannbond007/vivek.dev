import portfolio from "../assets/3d_portfolio.png"


// src/constants/projects.js
import mern from "../assets/mern.png"
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiJavascript,
  SiExpress,
  SiJsonwebtokens,
  SiFramer,
} from "react-icons/si";

const projects = [
  {
  title: "MERN Authentication System",
  description:
    "A full-feature authentication system with secure user registration, login, JWT-based authentication, email verification, password reset, and role-based access control.",
  image: mern,
  githubUrl: "https://github.com/yourname/mern-auth-system",
  liveUrl: "https://mern-auth-demo.com",
  techStack: [
    { label: "React", icon: SiReact },
    { label: "Node.js", icon: SiNodedotjs },
    { label: "Express", icon: SiExpress },
    { label: "MongoDB", icon: SiMongodb },
    { label: "JWT", icon: SiJsonwebtokens },
    { label: "Tailwind CSS", icon: SiTailwindcss },
  ],
  },
 {
  title: "Modern 3D portfolio Website",
  description:
    "A modern authentication experience with secure sign-in, role-based access, protected routes, and smooth UI interactions, designed for full-stack web applications.",
  image: portfolio,
  githubUrl: "https://github.com/mannbond007/MacOs_Portfolio",
  liveUrl: "https://mac-os-portfolio-coral.vercel.app/",
  techStack: [
    { label: "React.js", icon: SiReact },
    { label: "Node.js", icon: SiNodedotjs },
    { label: "Tailwind CSS", icon: SiTailwindcss },
    { label: "Framer Motion", icon: SiFramer }, // import SiFramer
  ],
},
  {
    title: "Medical Tourism Platform",
    description:
      "A full-stack platform helping international patients connect with hospitals and doctors in India.",
    image: "/projects/medical.png",
    githubUrl: "https://github.com/yourname/medical-tourism",
    liveUrl: "https://medical-demo.com",
    techStack: [
      { label: "Next.js", icon: SiNextdotjs },
      { label: "Node", icon: SiNodedotjs },
      { label: "MySQL", icon: SiMysql },
      { label: "Tailwind", icon: SiTailwindcss },
    ],
  },
  {
    title: "ExamPrep Planner",
    description:
      "A smart exam preparation planner with progress tracking, timers, and PDF export.",
    image: "/projects/examprep.png",
    githubUrl: "https://github.com/yourname/examprep",
    liveUrl: "https://examprep-demo.com",
    techStack: [
      { label: "React", icon: SiReact },
      { label: "Tailwind", icon: SiTailwindcss },
      { label: "JavaScript", icon: SiJavascript },
    ],
  },
];

export default projects;
