import React from "react";
import FadeIn from "../animations/FadeIn";
import { STATS } from "../../utils/constants";
import { scrollToSection } from "../../hooks/useScrollSpy";
import RadialGradientBackground from "../../constants/background/RadialGradientBackground";
import TypingTech from "./TypingTech";
import HeroImageCard from "./HeroImageCard";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden">
      <RadialGradientBackground variant="hero" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>
            <FadeIn delay={0}>
              <div className="inline-flex items-center gap-3 px-4 py-2 mb-8 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-white/10 text-primary text-sm">
                  ❮❯
                </span>
                <span className="text-sm tracking-wide text-white/80 uppercase">
                  Full-Stack Developer • <TypingTech />
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <h1 className="text-[36px] sm:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
                Building{" "}
                <span className="text-primary">Production-Ready</span>{" "}
                Web Products
                <br />
                <span className="text-white/60 text-3xl">
                  not just side projects
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="text-white/70 text-lg max-w-xl mb-10 leading-relaxed">
                I design and develop{" "}
                <span className="text-white font-medium">
                  scalable, high-performance applications
                </span>{" "}
                using{" "}
                <span className="text-primary font-medium">React</span>,{" "}
                <span className="text-primary font-medium">Next.js</span>{" "}
                and modern backend systems — focusing on{" "}
                <span className="text-white font-medium">
                  UX, performance, and maintainability
                </span>.
              </p>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="bg-white text-black px-7 py-3 rounded-xl font-medium hover:bg-white/90 transition"
                >
                  Hire Me
                </button>

                <button
                  onClick={() => scrollToSection("projects")}
                  className="px-7 py-3 rounded-xl font-medium border border-white/20 text-white/80 hover:bg-white/5 transition"
                >
                  View Projects
                </button>
              </div>
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

          {/* RIGHT */}
          <FadeIn delay={200}>
            <HeroImageCard />
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default Hero;
