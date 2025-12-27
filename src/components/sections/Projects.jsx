import React from "react";
import FadeIn from "../animations/FadeIn";
import { ExternalLink, Folder, FolderGit2, Github } from "lucide-react";
import projects from "../../constants/projects";

const Projects = () => {
  return (
    <section id="projects" className="bg-black py-28">
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
              <Folder className="w-4 h-4 md:w-5 md:h-5" />
              Projects
            </span>

            <h2 className="text-3xl md:text-4xl text-white mt-6 font-medium">
              Selected work
            </h2>

            <p className="text-white/60 max-w-xl mx-auto mt-4">
              Real-world applications built with performance, scalability, and
              clean UI.
            </p>
          </div>
        </FadeIn>

        {/* Grid */}
        <FadeIn delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="
                  group
                  rounded-[32px]
                  border border-primary/25
                  bg-gradient-to-br from-primary/10 to-black/70
                  backdrop-blur-xl
                  transition-all duration-300
                  hover:-translate-y-2
                  hover:border-primary/40
                "
              >
                {/* Image Wrapper */}
                <div className="p-5">
                  <div
                    className="
                    relative
                    h-64
                    rounded-2xl
                    overflow-hidden
                    border border-primary/25
                  "
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="
                        w-full h-full object-cover
                        transition-transform duration-500
                        group-hover:scale-105
                      "
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  </div>
                </div>

                {/* Content */}
                <div className="px-8 pb-8">
                  <h3 className="text-white text-xl font-semibold mb-3">
                    {project.title}
                  </h3>

                  <p className="text-white/70 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.techStack.map((tech, i) => {
                      const Icon = tech.icon;
                      return (
                        <span
                          key={i}
                          className="
                            flex items-center gap-2
                            px-4 py-1.5
                            text-xs
                            rounded-full
                            bg-primary/15
                            border border-primary/30
                            text-primary
                          "
                        >
                          <Icon className="w-4 h-4" />
                          {tech.label}
                        </span>
                      );
                    })}
                  </div>

                  {/* Buttons */}
                  <div className="flex items-center gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex items-center gap-2
                        px-5 py-2.5
                        border border-primary/30
                        text-white
                        rounded-xl
                        text-sm
                        hover:bg-primary/10
                        transition
                      "
                    >
                      <Github size={16} />
                      GitHub
                    </a>

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex items-center gap-2
                        px-5 py-2.5
                        bg-primary
                        text-black
                        rounded-xl
                        text-sm font-medium
                        hover:bg-primary/90
                        transition
                      "
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Projects;
