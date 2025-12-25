import React, { useState } from "react";
import { Code2, Menu, X } from "lucide-react";

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
      {/* Glass Bar */}
      <div className="relative bg-black/50 backdrop-blur-xl border-b border-white/10">
        {/* subtle glow line */}
        <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div
              className="
                w-9 h-9
                flex items-center justify-center
                rounded-xl
                bg-primary/15
                border border-primary/30
                group-hover:bg-primary/25
                transition
              "
            >
              <Code2 className="w-5 h-5 text-primary" />
            </div>

            <span className="text-white font-semibold text-lg tracking-wide">
              <span className="text-primary">&lt;</span>
              Vivek
              <span className="text-primary">/&gt;</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="
                  relative text-sm font-medium text-white/70
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

          {/* CTA (WHITE BUTTON) */}
          <div className="hidden md:block">
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
          md:hidden
          overflow-hidden
          transition-all duration-300 ease-in-out
          ${open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div
          className="
            bg-black/90 backdrop-blur-xl
            border-t border-white/10
            px-6 py-6
            space-y-4
          "
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="
                block text-white/80
                text-base font-medium
                hover:text-white
                transition
              "
            >
              {link.label}
            </a>
          ))}

          {/* Mobile CTA (WHITE BUTTON) */}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="
              block w-full text-center
              mt-4 px-6 py-3
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
