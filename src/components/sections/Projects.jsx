import React from "react";
import { motion } from "framer-motion";
import AnimatedSection from "../animations/AnimatedSection";
import StaggerContainer, { staggerItem } from "../animations/StaggerContainer";
import AnimatedCard from "../animations/AnimatedCard";
import MotionButton from "../animations/MotionButton";
import { ExternalLink, Folder, Github } from "lucide-react";
import projects from "../../constants/projects";

const Projects = () => {
  return (
    <AnimatedSection id="projects" className="bg-black py-28">
      <div className="max-w-7xl mx-auto px-6">
        <StaggerContainer className="mb-20 text-center">
          <motion.span variants={staggerItem} className="inline-flex items-center gap-2 px-6 py-2 text-sm md:text-base tracking-widest uppercase text-primary bg-primary/10 border border-primary/30 rounded-full">
            <Folder className="w-4 h-4 md:w-5 md:h-5" />
            Projects
          </motion.span>

          <motion.h2 variants={staggerItem} className="text-3xl md:text-4xl text-white mt-6 font-medium">
            Selected work
          </motion.h2>

          <motion.p variants={staggerItem} className="text-white/60 max-w-xl mx-auto mt-4">
            Real-world applications built with performance, scalability, and clean UI.
          </motion.p>
        </StaggerContainer>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div key={index} variants={staggerItem}>
              <AnimatedCard className="group rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/10 to-black/70 backdrop-blur-xl overflow-hidden">
                <div className="p-5">
                  <div className="relative h-64 rounded-2xl overflow-hidden border border-primary/25">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.07 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  </div>
                </div>

                <div className="px-8 pb-8">
                  <h3 className="text-white text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-6">{project.description}</p>

                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.techStack.map((tech, i) => {
                      const Icon = tech.icon;
                      return (
                        <motion.span whileHover={{ scale: 1.05 }} key={i} className="flex items-center gap-2 px-4 py-1.5 text-xs rounded-full bg-primary/15 border border-primary/30 text-primary transition-transform duration-300">
                          <Icon className="w-4 h-4" />
                          {tech.label}
                        </motion.span>
                      );
                    })}
                  </div>

                  <div className="flex items-center gap-4">
                    <MotionButton
                      as="a"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 border border-primary/30 text-white rounded-xl text-sm"
                    >
                      <Github size={16} /> GitHub
                    </MotionButton>

                    <MotionButton
                      as="a"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-black rounded-xl text-sm font-medium"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </MotionButton>
                  </div>
                </div>
              </AnimatedCard>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Projects;
