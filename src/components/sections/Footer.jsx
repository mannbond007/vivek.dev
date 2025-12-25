import React from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Code,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-white text-xl font-semibold mb-4">
              <Code className="w-5 h-5 text-primary" />
              <span>
                <span className="text-primary">&lt;</span>
                Vivek
                <span className="text-primary">/&gt;</span>
              </span>
            </div>

            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              Full-stack developer crafting modern, scalable, and meaningful
              digital experiences with a strong focus on usability and clarity.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-medium mb-4">
              Navigation
            </h4>

            <ul className="space-y-3 text-sm">
              {[
                { label: "About", href: "#about" },
                { label: "Skills", href: "#skills" },
                { label: "Projects", href: "#projects" },
                { label: "Experience", href: "#experience" },
                { label: "Contact", href: "#contact" },
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="
                      group
                      relative
                      inline-block
                      text-white/60
                      transition
                      hover:text-white
                    "
                  >
                    {link.label}

                    {/* Hover underline */}
                    <span
                      className="
                        absolute left-0 -bottom-1
                        w-0 h-[1px]
                        bg-primary
                        transition-all duration-300
                        group-hover:w-full
                      "
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-medium mb-4">
              Connect
            </h4>

            <div className="flex items-center gap-4">
              {[
                { Icon: Github, href: "https://github.com/" },
                { Icon: Linkedin, href: "https://linkedin.com/" },
                { Icon: Twitter, href: "https://twitter.com/" },
                { Icon: Mail, href: "mailto:vivek.dev@email.com" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
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
                    hover:scale-105
                    transition
                  "
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-10" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <span>
            © {new Date().getFullYear()} Vivek. All rights reserved.
          </span>

          <span className="text-center md:text-right">
            Designed with intent. Built for real-world impact.
          </span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
