import React from "react";
import FadeIn from "../animations/FadeIn";
import certifications from "../../constants/certifications";
import { ExternalLink, Award } from "lucide-react";

const Certifications = () => {
  return (
    <section id="certifications" className="relative bg-black py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <FadeIn delay={0}>
          <div className="mb-20 text-center">
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
              <Award className="w-4 h-4" />
              Certifications
            </span>

            <h2 className="text-3xl md:text-4xl text-white mt-6 font-medium">
              Professional learning & credentials
            </h2>

            <p className="text-white/60 max-w-2xl mx-auto mt-4">
              Industry-relevant certifications showcasing my continuous learning
              in web development, full-stack engineering, and cyber security.
            </p>
          </div>
        </FadeIn>

        {/* Grid */}
        <FadeIn delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="
                  group
                  rounded-3xl
                  border border-primary/25
                  bg-gradient-to-br from-primary/10 via-black/60 to-black/80
                  backdrop-blur-xl
                  p-8
                  transition-all duration-300
                  hover:border-primary/40
                  hover:-translate-y-1
                "
              >
                {/* Top */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-white text-lg md:text-xl font-medium">
                      {cert.title}
                    </h3>
                    <p className="text-white/60 text-sm mt-1">
                      {cert.provider} • {cert.year}
                    </p>
                  </div>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      w-11 h-11
                      flex items-center justify-center
                      rounded-full
                      bg-primary/15
                      border border-primary/30
                      text-primary
                      hover:bg-primary/25
                      transition
                    "
                    title="View Certificate"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>

                {/* Description */}
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  {cert.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {cert.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="
                        px-3 py-1
                        text-xs
                        rounded-full
                        bg-primary/15
                        border border-primary/30
                        text-primary
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

      </div>
    </section>
  );
};

export default Certifications;
