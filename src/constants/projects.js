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
    title: "MERN Auth System",
    description:
      "A secure authentication system with JWT, role-based access control, and email verification.",
    image: "/projects/auth.png",
    githubUrl: "https://github.com/yourname/mern-auth",
    liveUrl: "https://auth-demo.com",
    techStack: [
      { label: "React", icon: SiReact },
      { label: "Node", icon: SiNodedotjs },
      { label: "MongoDB", icon: SiMongodb },
      { label: "Tailwind", icon: SiTailwindcss },
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
