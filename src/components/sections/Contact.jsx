import React from "react";
import FadeIn from "../animations/FadeIn";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Twitter,
  Send,
  MessageCircle,
} from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="relative bg-black py-28 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">

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
              <MessageCircle className="w-4 h-4" />
              Contact
            </span>

            <h2 className="text-3xl md:text-4xl text-white mt-6 font-medium">
              Let’s build something together
            </h2>

            <p className="text-white/60 max-w-xl mx-auto mt-4">
              Have a project, idea, or opportunity? I’m always open to meaningful
              conversations and collaborations.
            </p>
          </div>
        </FadeIn>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* LEFT COLUMN */}
          <FadeIn delay={100}>
            <div>
              <h3 className="text-2xl text-white font-medium mb-4">
                Get in touch
              </h3>

              <p className="text-white/70 leading-relaxed mb-8">
                I’m open to full-time roles, freelance projects, and collaborations.
                Whether you’re building something new or improving an existing
                product — feel free to reach out.
              </p>

              {/* Contact Info */}
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-white/80">
                    vivek.dev@email.com
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-white/80">
                    +91 9XXXXXXXXX
                  </span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 mt-10">
                {[
                  { Icon: Github, href: "https://github.com/", label: "GitHub" },
                  { Icon: Linkedin, href: "https://linkedin.com/", label: "LinkedIn" },
                  { Icon: Twitter, href: "https://twitter.com/", label: "Twitter" },
                ].map(({ Icon, href, label }, i) => (
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
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* RIGHT COLUMN (FORM) */}
          <FadeIn delay={200}>
            <form
              className="
                relative
                rounded-3xl
                border border-primary/25
                bg-gradient-to-br from-primary/10 to-black/60
                backdrop-blur-xl
                p-8
              "
            >
              {/* subtle border glow */}
              <div className="absolute -inset-px rounded-3xl bg-primary/20 blur-xl opacity-30 pointer-events-none" />

              <div className="relative space-y-6">
                <div>
                  <label className="block text-sm text-white/70 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="
                      w-full
                      px-4 py-3
                      rounded-xl
                      bg-black/40
                      border border-primary/30
                      text-white
                      placeholder:text-white/40
                      focus:outline-none
                      focus:border-primary
                    "
                  />
                </div>

                <div>
                  <label className="block text-sm text-white/70 mb-2">
                    Message
                  </label>
                  <textarea
                    rows="5"
                    required
                    placeholder="Tell me about your project..."
                    className="
                      w-full
                      px-4 py-3
                      rounded-xl
                      bg-black/40
                      border border-primary/30
                      text-white
                      placeholder:text-white/40
                      focus:outline-none
                      focus:border-primary
                      resize-none
                    "
                  />
                </div>

                <button
                  type="submit"
                  className="
                    inline-flex  items-center gap-2
                    px-6 py-3
                    bg-primary
                    text-black
                    rounded-xl
                    font-medium
                    hover:bg-primary/90
                    hover:scale-[1.02]
                    transition
                  "
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </div>
            </form>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default Contact;
