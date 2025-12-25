import React from "react";
import FadeIn from "../animations/FadeIn";
import {
  Layout,
  Code2,
  Server,
  ShieldCheck,
  Rocket,
  Palette,
} from "lucide-react";

const services = [
  {
    title: "Frontend Development",
    desc: "Modern, responsive, and accessible user interfaces using React, Next.js, and Tailwind CSS.",
    icon: <Layout className="w-6 h-6 text-primary" />,
  },
  {
    title: "Full-Stack Development",
    desc: "End-to-end web applications with clean architecture using MERN stack and Next.js.",
    icon: <Code2 className="w-6 h-6 text-primary" />,
  },
  {
    title: "Backend & API Development",
    desc: "Secure and scalable REST APIs with Node.js, Express, MongoDB, and MySQL.",
    icon: <Server className="w-6 h-6 text-primary" />,
  },
  {
    title: "UI / UX & Performance",
    desc: "Design-driven development focused on usability, animations, and performance optimization.",
    icon: <Palette className="w-6 h-6 text-primary" />,
  },
  {
    title: "Security-Aware Development",
    desc: "Cybersecurity-conscious coding practices, authentication flows, and secure APIs.",
    icon: <ShieldCheck className="w-6 h-6 text-primary" />,
  },
  {
    title: "Deployment & Optimization",
    desc: "Production-ready deployments with performance tuning and best practices.",
    icon: <Rocket className="w-6 h-6 text-primary" />,
  },
];

const Services = () => {
  return (
    <section id="services" className="relative bg-black py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <FadeIn delay={0}>
          <div className="mb-20 text-center">
            <span
              className="
                inline-flex items-center
                px-6 py-2
                text-sm md:text-base
                tracking-widest uppercase
                text-primary
                bg-primary/10
                border border-primary/30
                rounded-full
              "
            >
              Services
            </span>

            <h2 className="text-3xl md:text-4xl text-white mt-6 font-medium">
              What I can help you build
            </h2>

            <p className="text-white/60 max-w-2xl mx-auto mt-4 text-sm md:text-base">
              I focus on building scalable, secure, and visually polished web
              applications using modern technologies and best practices.
            </p>
          </div>
        </FadeIn>

        {/* Services Grid */}
        <FadeIn delay={100}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="
                  group
                  rounded-3xl
                  border border-primary/25
                  bg-gradient-to-br from-primary/10 to-black/60
                  backdrop-blur-xl
                  p-8
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-primary/40
                "
              >
                {/* Icon */}
                <div
                  className="
                    w-14 h-14
                    flex items-center justify-center
                    rounded-2xl
                    bg-primary/20
                    border border-primary/30
                    mb-6
                  "
                >
                  {service.icon}
                </div>

                {/* Text */}
                <h3 className="text-white text-lg font-medium mb-3">
                  {service.title}
                </h3>

                <p className="text-white/70 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default Services;
