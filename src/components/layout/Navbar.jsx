import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import ResumeButton from "../sections/ResumeButton";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Glass Navbar */}
      <div className="relative bg-black/50 backdrop-blur-xl border-b border-white/10">
        {/* subtle glow line */}
        <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* Logo (Linux Terminal Style) */}
          <a href="#" className="group">
            <span
              className="
                font-mono text-lg md:text-xl font-semibold
                text-gray-300
                tracking-wider
                transition-colors duration-300
                group-hover:text-white
              "
            >
             <span className="text-primary ">$</span> Vivek_
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="
                  relative text-lg font-medium text-white/70
                  hover:text-white transition
                  after:absolute after:-bottom-1 after:left-0
                  after:h-[2px] after:w-0
                  after:bg-primary
                  after:transition-all after:duration-300
                  hover:after:w-full
                "
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <ResumeButton />

            <a
              href="#contact"
              className="
                px-6 py-2.5
                rounded-xl
                bg-white text-black
                text-sm font-medium
                hover:bg-white/90
                hover:scale-[1.02]
                transition
              "
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white"
            aria-label="menu"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden overflow-hidden 
          transition-all duration-300 ease-in-out
          ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="bg-black/90  backdrop-blur-xl border-t border-white/10 px-6 py-6 space-y-4">
          
          {/* Mobile Resume Button (SAME STYLE) */}
          <ResumeButton
            fullWidth
            onClick={() => setOpen(false)}
          />

          {/* Mobile Nav Links */}
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="
              mt-6
                block text-white/80
                text-base font-medium
                hover:text-white
                transition
              "
            >
              {link.label}
            </a>
          ))}

          {/* Mobile Hire Me */}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="
              block w-full text-center
              mt-2 px-6 py-3
              rounded-xl
              bg-white text-black
              font-medium
              hover:bg-white/90
              transition
            "
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
