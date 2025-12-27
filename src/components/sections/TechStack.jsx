import { Boxes } from "lucide-react";
import React from "react";
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
} from "react-icons/si";

const techStack = [
  { name: "React", icon: SiReact, color: "text-cyan-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-400" },
  { name: "Express.js", icon: SiExpress, color: "text-white" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-400" },
  { name: "Git", icon: SiGit, color: "text-orange-500" },
  { name: "GitHub", icon: SiGithub, color: "text-white" },
];

const TechStack = () => {
  const [stopScroll, setStopScroll] = React.useState(false);

  return (
    <section className="bg-black py-28">
      {/* Marquee Animation */}
      <style>{`
        .marquee-inner {
          animation: marqueeScroll linear infinite;
        }
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <span
  className="
    inline-flex items-center gap-2
    px-6 py-2
    text-sm md:text-base
    tracking-widest uppercase
    text-primary
    bg-primary/10
    border border-primary/30
    rounded-full
  "
>
  <Boxes className="w-4 h-4 md:w-5 md:h-5" />
  Tech Stack
</span>


        <h2 className="text-3xl md:text-4xl text-white mt-6 font-medium">
          Technologies I work with
        </h2>
      </div>

      {/* Marquee */}
      <div
        className="relative overflow-hidden max-w-6xl mx-auto"
        onMouseEnter={() => setStopScroll(true)}
        onMouseLeave={() => setStopScroll(false)}
      >
        {/* Left Fade */}
        <div className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none bg-gradient-to-r from-black to-transparent" />

        <div
          className="marquee-inner flex w-fit"
          style={{
            animationPlayState: stopScroll ? "paused" : "running",
            animationDuration: techStack.length * 1800 + "ms",
          }}
        >
          <div className="flex">
            {[...techStack, ...techStack].map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div
                  key={index}
                  className="
                    group
                    w-48 h-48 mx-4
                    rounded-3xl
                    border border-primary/25
                    bg-gradient-to-br from-primary/10 to-black/50
                    backdrop-blur-xl
                    flex flex-col items-center justify-center
                    gap-4
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-primary/40
                  "
                >
                  {/* Icon */}
                  <div
                    className="
                      w-14 h-14
                      rounded-2xl
                      bg-primary/15
                      border border-primary/30
                      flex items-center justify-center
                    "
                  >
                    <Icon className={`w-8 h-8 ${tech.color}`} />
                  </div>

                  {/* Label */}
                  <span className="text-white/90 text-sm font-medium tracking-wide">
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Fade */}
        <div className="absolute right-0 top-0 h-full w-24 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-black to-transparent" />
      </div>
    </section>
  );
};

export default TechStack;
