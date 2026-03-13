import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiDocker,
  SiExpress,
  SiGit
} from "react-icons/si";

const techStack = [
  { name: "React", icon: SiReact, color: "text-cyan-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-400" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
  { name: "Docker", icon: SiDocker, color: "text-sky-400" },
  { name: "Express", icon: SiExpress, color: "text-gray-300" },
  { name: "Git & GitHub", icon: SiGit, color: "text-orange-500" },
];

const codeLines = [
  <>
    <span className="text-purple-400">import</span>{" "}
    <span className="text-cyan-400">React</span>{" "}
    <span className="text-purple-400">from</span>{" "}
    <span className="text-green-400">"react"</span>;
  </>,

  <>
    <span className="text-purple-400">import</span>{" "}
    <span className="text-cyan-400">useProjects</span>{" "}
    <span className="text-purple-400">from</span>{" "}
    <span className="text-green-400">"@/hooks/useProjects"</span>;
  </>,

  "",

  <>
    <span className="text-purple-400">const</span>{" "}
    <span className="text-yellow-400">Developer</span>{" "}
    = () {"=>"} {"{"}
  </>,

  <>
    {"  "}
    <span className="text-purple-400">const</span>{" "}
    {"{"}
    <span className="text-white">projects</span>
    {"}"} ={" "}
    <span className="text-cyan-400">useProjects</span>();
  </>,

  <>
    {"  "}
    <span className="text-gray-500">
      // build scalable and maintainable systems
    </span>
  </>,

  "",

  <>
    {"  "}
    <span className="text-purple-400">return</span>{" "}
    {"("}
  </>,

  <>
    {"    "}
    <span className="text-pink-400">&lt;Portfolio</span>
  </>,

  <>
    {"      "}
    <span className="text-cyan-400">developer</span>=
    <span className="text-green-400">"Vivek Kumar"</span>
  </>,

  <>
    {"      "}
    <span className="text-cyan-400">stack</span>=
    <span className="text-yellow-300">["React","Node","MongoDB"]</span>
  </>,

  <>
    {"    "}
    <span className="text-pink-400">/&gt;</span>
  </>,

  <>
    {"  "}
    {")"}
  </>,

  <>
    {"}"}
  </>
];

const HeroImageCard = () => {
  return (
    <div className="relative w-full flex justify-center">

      {/* glow background */}
      <div className="pointer-events-none absolute inset-0 flex justify-center items-center">
        <div className="h-[460px] w-[650px] max-w-[90vw] rounded-[30px]
        bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-transparent blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.02 }}
        className="relative w-[min(650px,92vw)] rounded-2xl
        border border-white/15 bg-black/70 backdrop-blur-xl
        shadow-[0_25px_60px_rgba(0,0,0,0.55)] overflow-hidden"
      >

        <motion.div
          animate={{ y: [-8, 8] }}
          transition={{
            duration: 8,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror"
          }}
          className="p-7 will-change-transform"
        >

          {/* window dots */}
          <div className="flex items-center gap-2 mb-5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
          </div>

          {/* code editor */}
          <div className="h-[340px] sm:h-[380px] lg:h-[420px] overflow-hidden rounded-xl border border-white/10 bg-[#0b1220]">

            <div className="h-full p-7 font-mono text-sm text-white/90 leading-6 grid grid-cols-[40px_1fr]">

              {/* line numbers */}
              <div className="text-slate-500 text-right pr-3 select-none">
                {codeLines.map((_, i) => (
                  <div key={i}>{i + 1}</div>
                ))}
              </div>

              {/* code */}
              <div>
                {codeLines.map((line, i) => (
                  <div key={i} className="whitespace-pre">
                    {line}
                  </div>
                ))}
              </div>

            </div>

          </div>

          {/* tech stack */}
          <div className="mt-6 flex flex-wrap justify-center gap-3">

            {techStack.map((tech, i) => {
              const Icon = tech.icon;

              return (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  className="
                  flex items-center gap-2
                  px-3 py-1.5
                  rounded-lg
                  border border-white/10
                  bg-white/5
                  backdrop-blur-md
                  text-sm text-white/80
                  hover:border-cyan-400/40
                  hover:bg-white/10
                  transition
                  "
                >
                  <Icon className={`text-lg ${tech.color}`} />
                  <span>{tech.name}</span>
                </motion.div>
              );
            })}

          </div>

        </motion.div>
      </motion.div>

    </div>
  );
};

export default HeroImageCard;