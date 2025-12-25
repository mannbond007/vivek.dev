// src/constants/projects.js
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiJavascript,
} from "react-icons/si";

const projects = [
  {
    title: "Weather App",
    description:
      "A real-time weather forecasting web application using OpenWeatherMap API with clean UI and responsive design.",
    image: "/projects/weather.png",
    githubUrl: "https://github.com/yourname/weather-app",
    liveUrl: "https://weather-app-demo.com",
    techStack: [
      { label: "React", icon: SiReact },
      { label: "JavaScript", icon: SiJavascript },
      { label: "API", icon: SiNodedotjs },
      { label: "Tailwind", icon: SiTailwindcss },
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
