import React from "react";
import FadeIn from "../animations/FadeIn";
import {
  Code2,
  Palette,
  Server,
  GraduationCap,
  CheckCircle,
} from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";

const experiences = [
  {
    role: "Full-Stack Developer",
    company: "Personal & Real-World Projects",
    duration: "2024 — Present",
    icon: Code2,
    tech: [SiReact, SiNextdotjs, SiNodedotjs, SiMongodb],
    points: [
      "Built full-stack applications using React, Next.js, Node.js, and MongoDB.",
      "Implemented authentication, REST APIs, and role-based access control.",
      "Focused on scalability, clean architecture, and production-ready code.",
    ],
  },
  {
    role: "Frontend & UI Engineer",
    company: "Design-Driven Development",
    duration: "2023 — Present",
    icon: Palette,
    tech: [SiReact, SiTailwindcss],
    points: [
      "Designed modern interfaces using Tailwind CSS and glassmorphism.",
      "Built reusable and accessible UI components.",
      "Improved UX through layout consistency and performance tuning.",
    ],
  },
  {
    role: "Backend Developer",
    company: "API & Server-Side Work",
    duration: "2023 — Present",
    icon: Server,
    tech: [SiNodedotjs, SiMongodb],
    points: [
      "Developed secure REST APIs using Node.js and Express.",
      "Worked with MongoDB for efficient data modeling.",
      "Handled validation, authentication, and API security.",
    ],
  },
  {
    role: "Computer Science Student",
    company: "Learning & Skill Building",
    duration: "Ongoing",
    icon: GraduationCap,
    tech: [SiReact, SiNodedotjs],
    points: [
      "Strong foundation in software engineering principles.",
      "Hands-on learning through real-world projects.",
      "Continuously improving backend and system design skills.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative bg-black py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <FadeIn delay={0}>
          <div className="mb-20 text-center">
            <span className="inline-flex items-center px-6 py-2 text-sm md:text-base tracking-widest uppercase text-primary bg-primary/15 border border-primary/30 rounded-full">
              Experience
            </span>

            <h2 className="text-3xl md:text-4xl text-white mt-6 font-semibold">
              Professional Journey
            </h2>

            <p className="text-white/75 max-w-xl mx-auto mt-4 text-sm md:text-base">
              A clear timeline highlighting my growth, responsibilities,
              and real-world development experience.
            </p>
          </div>
        </FadeIn>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 top-0 h-full w-px bg-primary/40 hidden md:block" />

          <div className="space-y-16">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <FadeIn key={index} delay={100 + index * 100}>
                  <div className="relative md:pl-20">

                    {/* Timeline Icon */}
                    <div className="hidden md:flex absolute left-0 top-8 w-14 h-14 items-center justify-center rounded-full bg-primary/20 border border-primary/40 backdrop-blur-xl shadow-[0_0_30px_rgba(99,102,241,0.35)]">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>

                    {/* Card */}
                    <div className="rounded-3xl border border-primary/30 bg-primary/10 backdrop-blur-xl p-7 md:p-9">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-5">
                        <div>
                          <h3 className="text-white text-lg md:text-xl font-semibold">
                            {exp.role}
                          </h3>
                          <p className="text-white/80 text-sm">
                            {exp.company}
                          </p>
                        </div>

                        <span className="text-white/60 text-sm mt-2 md:mt-0">
                          {exp.duration}
                        </span>
                      </div>

                      {/* Points */}
                      <ul className="space-y-3 text-white/90 text-sm leading-relaxed mb-7">
                        {exp.points.map((point, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-3">
                        {exp.tech.map((TechIcon, i) => (
                          <div
                            key={i}
                            className="w-11 h-11 flex items-center justify-center rounded-full bg-primary/15 border border-primary/30 backdrop-blur-md"
                          >
                            <TechIcon className="w-5 h-5 text-primary" />
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
