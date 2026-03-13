import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { STATS } from "../../utils/constants";
import { scrollToSection } from "../../hooks/useScrollSpy";
import TypingTech from "./TypingTech";
import HeroImageCard from "./HeroImageCard";
import MotionButton from "../animations/MotionButton";
import StaggerContainer, { staggerItem } from "../animations/StaggerContainer";

const heroTextVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const Hero = () => {
  const heroRef = useRef(null);
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 500], [0, -28], { clamp: true });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const glowX = useSpring(mouseX, { damping: 24, stiffness: 120 });
  const glowY = useSpring(mouseY, { damping: 24, stiffness: 120 });

  const onMouseMove = (event) => {
    const rect = heroRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    mouseX.set(x * 0.15);
    mouseY.set(y * 0.15);
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={onMouseMove}
      className="relative min-h-screen flex items-center overflow-hidden bg-black"
    >
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{ opacity: 0.88 }}
      >
        <motion.div
          className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-primary/20 blur-3xl"
          style={{ x: glowX, y: glowY }}
        />
        <motion.div
          className="absolute right-10 top-1/4 h-72 w-72 rounded-full bg-cyan-400/10 blur-2xl"
          style={{
            x: useTransform(glowX, (v) => v * 0.6),
            y: useTransform(glowY, (v) => v * 0.6),
          }}
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <StaggerContainer className="space-y-5">
            <motion.div
              variants={staggerItem}
              className="inline-flex items-center gap-3 px-4 py-2 mb-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
            >
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-white/10 text-primary text-sm">
                ❮❯
              </span>
              <span className="text-sm tracking-wide text-white/80 uppercase">
                Full-Stack Developer • <TypingTech />
              </span>
            </motion.div>

            <motion.h1
              variants={staggerItem}
              className="text-[38px] sm:text-5xl lg:text-6xl font-semibold text-white leading-[1.1] tracking-tight max-w-2xl"
            >
              Building <span className="text-primary">Scalable</span> and{" "}
              <br className="hidden sm:block" />
              <span className="text-primary">Modern</span> Web Products
            </motion.h1>

            <motion.p
              variants={staggerItem}
              className="text-white/70 text-lg max-w-xl leading-relaxed"
            >
              I design and build{" "}
              <span className="text-white font-medium">
                reliable, scalable web applications
              </span>{" "}
              using <span className="text-primary font-medium">React</span>,{" "}
              <span className="text-primary font-medium">Next.js</span>,{" "}
              <span className="text-primary font-medium">TypeScript</span> and
              modern backend technologies like{" "}
              <span className="text-primary font-medium">Node.js</span> and{" "}
              <span className="text-primary font-medium">REST APIs</span>, with
              a strong focus on{" "}
              <span className="text-white font-medium">
                usability, performance, clean architecture, and maintainable
                code
              </span>
              .
            </motion.p>

            <motion.div variants={staggerItem} className="flex flex-wrap gap-4">
              <MotionButton
                onClick={() => scrollToSection("contact")}
                className="bg-white text-black px-8 py-2 rounded font-medium"
              >
                Hire Me
              </MotionButton>

              <MotionButton
                onClick={() => scrollToSection("projects")}
                className="border border-white/20 text-white/80 px-8 py-2 rounded font-medium"
              >
                View Projects
              </MotionButton>
            </motion.div>

            <motion.div
              variants={staggerItem}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-5"
            >
              {STATS.map((stat, index) => (
                <div
                  key={index}
                  className="rounded-xl px-4 py-4 bg-primary/[0.07] border border-primary/20 shadow-[0_8px_18px_rgba(0,0,0,0.2)]"
                >
                  <div className="text-2xl font-mono text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="h-[2px] w-7 bg-primary/50 mb-2" />
                  <p className="text-sm text-white/70 tracking-wide">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </StaggerContainer>

          <motion.div style={{ y: parallaxY }}>
            <HeroImageCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
