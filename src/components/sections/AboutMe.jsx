import React from "react";
import FadeIn from "../animations/FadeIn";
import frontEnd from "../../assets/fe.jpg";
import react from "../../assets/react.png";
import ux from "../../assets/ux.jpg";
// import backend from "../../assets/backend.jpg";
import backend1 from "../../assets/971.jpg";
import db from "../../assets/db.png";
import git from "../../assets/git.png";
import expres from "../../assets/express.png";
import fullstack from "../../assets/fullstack.png";
import fs from "../../assets/fs.png";
import {
  Code2,
  Palette,
  Cpu,
  Database,
  Layers,
  GitBranch,
} from "lucide-react";

const items = [
  {
    title: "Frontend Engineering",
    desc: "Building responsive, accessible, and modern user interfaces using React, Next.js, and Tailwind CSS.",
    icon: <Palette className="w-5 h-5 text-primary" />,
    col: "lg:col-span-1",
    image: frontEnd
  },
  {
    title: "React & Next.js",
    desc: "Component-driven applications with optimized rendering, clean state management, and scalability in mind.",
    icon: <Layers className="w-5 h-5 text-primary" />,
    col: "lg:col-span-1",
    image: react,
  },
  {
    title: "UI / UX Focus",
    desc: "Designing interfaces that balance aesthetics, usability, accessibility, and performance.",
    icon: <Palette className="w-5 h-5 text-primary" />,
    col: "lg:col-span-1",
    image: ux,
  },
  {
    title: "Backend Development",
    desc: "Secure, scalable REST APIs using Node.js and Express with clean architecture principles.",
    icon: <Cpu className="w-5 h-5 text-primary" />,
    col: "lg:col-span-2",
    image:
      expres,
  },
  {
    title: "Databases & Data Modeling",
    desc: "Designing efficient schemas and managing structured and unstructured data using MongoDB and SQL.",
    icon: <Database className="w-5 h-5 text-primary" />,
    col: "lg:col-span-1",
    image:
      db,
  },
  {
    title: "Version Control & Collaboration",
    desc: "Professional Git workflows with GitHub — clean commits, collaboration, and maintainable codebases.",
    icon: <GitBranch className="w-5 h-5 text-primary" />,
    col: "lg:col-span-1",
    image:
      git,
  },
  {
    title: "Full-Stack Project Ownership",
    desc: "End-to-end development covering UI, backend logic, APIs, and database integration.",
    icon: <Code2 className="w-5 h-5 text-primary" />,
    col: "lg:col-span-2",
    image:
      fs,
  },
];

const AboutMe = () => {
  return (
    <section className="relative bg-black py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <FadeIn delay={0}>
          <div className="mb-20 text-center max-w-3xl mx-auto">
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
  <Layers className="w-4 h-4 md:w-5 md:h-5" />
  What I Work With
</span>


            <h2 className="text-3xl md:text-4xl text-white mt-6 font-medium">
              Technical expertise & focus areas
            </h2>

            <p className="text-white/60 mt-5 text-base leading-relaxed">
              My skill set is shaped around building real-world applications —
              combining clean frontend experiences with reliable backend systems.
              I focus on maintainability, performance, and long-term scalability.
            </p>
          </div>
        </FadeIn>

        {/* Bento Grid */}
        <FadeIn delay={100}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, i) => (
              <div
                key={i}
                className={`${item.col}
                  relative
                  rounded-3xl
                  border border-primary/25
                  bg-gradient-to-br from-primary/10 to-black/50
                  backdrop-blur-xl
                  p-7
                `}
              >
                {/* Image */}
                <div className="relative w-full h-52 md:h-56 rounded-2xl overflow-hidden mb-6">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                </div>

                {/* Icon */}
                <div className="mb-4">
                  <div
                    className="
                      w-11 h-11
                      flex items-center justify-center
                      rounded-full
                      bg-primary/20
                      border border-primary/30
                    "
                  >
                    {item.icon}
                  </div>
                </div>

                {/* Text */}
                <h3 className="text-white text-lg font-medium mb-2">
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default AboutMe;
