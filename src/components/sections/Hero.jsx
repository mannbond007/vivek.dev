import React from "react";
import FadeIn from "../animations/FadeIn";
import { PERSONAL_INFO, STATS } from "../../utils/constants";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si";
import { ChevronsLeftRightEllipsis, Code2, Star } from "lucide-react";
import { scrollToSection } from "../../hooks/useScrollSpy";
import RadialGradientBackground from "../../constants/background/RadialGradientBackground";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden">
      <RadialGradientBackground variant="hero" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT COLUMN */}
          <div>
            <FadeIn delay={0}>
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-primary/30 bg-primary/10">
                 {/* <Code2 className="w-4 h-4 text-primary" /> */}
                 <ChevronsLeftRightEllipsis className="w-6 h-6 text-primary" />
                <span className="text-xs tracking-wider text-white/90 uppercase">
                  Full-Stack Developer • Crafting Modern Web Experiences
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
                Crafting modern <br />
                <span className="text-primary">React applications</span>
              </h1>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="text-white/70 text-lg max-w-xl mb-10">
                I build high-performance, scalable web applications using React,
                Next.js and modern backend technologies — focused on clean UI
                and real-world usability.
              </p>
            </FadeIn>

            <FadeIn delay={300}>
              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center"
              >
                <span className="bg-white text-black px-7 py-3 rounded-xl font-medium hover:bg-white/90 transition">
                  Get in Touch
                </span>
              </button>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-14">
                {STATS.map((stat, index) => (
                  <div key={index}>
                    <div className="text-2xl text-primary font-mono mb-1">
                      {stat.value}
                    </div>
                    <p className="text-sm text-white/70">{stat.label}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* RIGHT COLUMN */}
          <FadeIn delay={200}>
            <div className="relative flex justify-center lg:justify-end w-full">
              {/* THEME MATCHED CARD */}
              <div
                className="
                  bg-primary/10
                  backdrop-blur-xl
                  border border-primary/30
                  rounded-[32px]
                  p-4 sm:p-6
                  shadow-2xl
                  w-full max-w-[360px] sm:max-w-[420px] md:max-w-[480px]
                "
              >
                {/* IMAGE */}
                <div className="relative w-full h-[360px] sm:h-[420px] md:h-[480px] rounded-2xl overflow-hidden">
                  {/* Image */}
                  <img
                    src="./main.jpg"
                    alt="Developer"
                    className="w-full h-full object-cover"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/40" />
                </div>

                {/* TECH STACK */}
                <div className="flex justify-center flex-wrap gap-4 mt-6">
                  {[
                    { Icon: SiReact, color: "text-cyan-400" },
                    { Icon: SiNextdotjs, color: "text-white" },
                    { Icon: SiTailwindcss, color: "text-sky-400" },
                    { Icon: SiNodedotjs, color: "text-green-400" },
                    { Icon: SiMongodb, color: "text-green-500" },
                  ].map(({ Icon, color }, i) => (
                    <div
                      key={i}
                      className="
                        w-12 h-12
                        flex items-center justify-center
                        rounded-full
                        bg-primary/15
                        border border-primary/30
                        backdrop-blur-md
                        transition
                        hover:bg-primary/25
                      "
                    >
                      <Icon className={`w-6 h-6 ${color}`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;
