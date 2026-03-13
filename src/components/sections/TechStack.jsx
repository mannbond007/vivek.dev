import { Boxes } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import AnimatedSection from "../animations/AnimatedSection";
import StaggerContainer, { staggerItem } from "../animations/StaggerContainer";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiDocker,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";

const TechCard = ({ icon: Icon, name, color }) => (
  <motion.div
    className="flex flex-col items-center justify-center
    w-36 h-36 sm:w-40 sm:h-40 lg:w-44 lg:h-44
    p-5 rounded-2xl border border-white/10 bg-black/30 backdrop-blur-md
    shadow-[0_10px_25px_rgba(0,0,0,0.35)] transition-all duration-300"
    whileHover={{
      scale: 1.07,
      y: -4,
      boxShadow: "0 25px 50px rgba(34,197,94,0.35)"
    }}
    whileTap={{ scale: 0.97 }}
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.45 }}
  >
    <div className="w-16 h-16 flex items-center justify-center rounded-xl border border-white/20 bg-white/5">
      <Icon className={`w-9 h-9 ${color}`} />
    </div>

    <p className="mt-4 text-sm sm:text-base text-white/85 font-semibold text-center">
      {name}
    </p>
  </motion.div>
);

const row1 = [
  { name: "Git", icon: SiGit, color: "text-orange-500" },
  { name: "GitHub", icon: SiGithub, color: "text-white" },
  { name: "Docker", icon: SiDocker, color: "text-blue-500" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-300" },
  { name: "React", icon: SiReact, color: "text-cyan-400" },
];

const row2 = [
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-400" },
  { name: "Express.js", icon: SiExpress, color: "text-white" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-400" },
];

const TechGrid = () => {
  return (
    <div className="mx-auto flex flex-col items-center gap-8">

      <div className="flex flex-wrap justify-center gap-8">
        {row1.map((tech) => (
          <TechCard key={tech.name} {...tech} />
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {row2.map((tech) => (
          <TechCard key={tech.name} {...tech} />
        ))}
      </div>

    </div>
  );
};

const TechnologySection = () => {
  return (
    <AnimatedSection id="skills" className="bg-black py-24 sm:py-28">

      <div className="max-w-7xl mx-auto px-6 mb-14 text-center">

        <motion.div
          variants={staggerItem}
          className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold tracking-widest uppercase text-primary bg-primary/10 border border-primary/30 rounded-full mx-auto"
        >
          <Boxes className="w-4 h-4" /> Technology
        </motion.div>

        <motion.h2
          variants={staggerItem}
          className="mt-4 text-3xl sm:text-4xl text-white font-bold"
        >
          Modern & Industry-standard Skills
        </motion.h2>

        <motion.p
          variants={staggerItem}
          className="mt-3 text-sm sm:text-base text-white/70 max-w-2xl mx-auto"
        >
          Two balanced rows of skills for a clean, compact, recruiter-ready layout.
        </motion.p>

      </div>

      <StaggerContainer>
        <TechGrid />
      </StaggerContainer>

    </AnimatedSection>
  );
};

export default TechnologySection;