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
                Building <span className="text-primary">Scalable</span> and{" "}
                <span className="text-primary">Modern</span> Web Products
              </h1>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="text-white/70 text-lg max-w-xl mb-10 leading-relaxed">
                I design and build{" "}
                <span className="text-white font-medium">
                  reliable, scalable web applications
                </span>{" "}
                using <span className="text-primary font-medium">React</span>,{" "}
                <span className="text-primary font-medium">Next.js</span>,{" "}
                <span className="text-primary font-medium">TypeScript</span> and
                modern backend technologies like{" "}
                <span className="text-primary font-medium">Node.js</span> and{" "}
                <span className="text-primary font-medium">REST APIs</span>,
                with a strong focus on{" "}
                <span className="text-white font-medium">
                  usability, performance, clean architecture, and maintainable
                  code
                </span>
                .
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

            {/* All the stats goes here */}

            <FadeIn delay={400}>
              <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10">
                {STATS.map((stat, index) => (
                  <div
                    key={index}
                    className="
          relative
          rounded-xl
          px-5 py-6
          bg-primary/[0.06]
          backdrop-blur-md
          border border-primary/20
          shadow-[0_6px_18px_rgba(0,0,0,0.18)]
          transition-all duration-300
          hover:bg-primary/[0.09]
        "
                  >
                    {/* Value */}
                    <div className="text-2xl font-mono text-primary mb-2">
                      {stat.value}
                    </div>

                    {/* Accent underline */}
                    <div
                      className="
            h-[2px] w-6
            bg-primary/50
            mb-2
            transition-all duration-300
            hover:w-10
          "
                    />

                    {/* Label */}
                    <p className="text-sm text-white/65 tracking-wide">
                      {stat.label}
                    </p>
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
