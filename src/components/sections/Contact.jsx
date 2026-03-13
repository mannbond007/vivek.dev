import React from "react";
import { motion } from "framer-motion";
import AnimatedSection from "../animations/AnimatedSection";
import { staggerItem } from "../animations/StaggerContainer";
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
    <AnimatedSection id="contact" className="relative bg-black py-28 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center">
          <motion.span variants={staggerItem} className="inline-flex items-center gap-2 px-6 py-2 text-sm md:text-base tracking-widest uppercase text-primary bg-primary/10 border border-primary/30 rounded-full">
            <MessageCircle className="w-4 h-4" /> Contact
          </motion.span>

          <motion.h2 variants={staggerItem} className="text-3xl md:text-4xl text-white mt-6 font-medium">
            Let’s build something together
          </motion.h2>

          <motion.p variants={staggerItem} className="text-white/60 max-w-xl mx-auto mt-4">
            Have a project, idea, or opportunity? I’m always open to meaningful conversations and collaborations.
          </motion.p>
        </div>

        <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start" initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.16 } } }}>
          <motion.div variants={staggerItem}>
            <h3 className="text-2xl text-white font-medium mb-4">Get in touch</h3>
            <p className="text-white/70 leading-relaxed mb-8">I’m open to full-time roles, freelance projects, and collaborations. Whether you’re building something new or improving an existing product — feel free to reach out.</p>
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <span className="text-white/80">vivekkumargzp233001@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <span className="text-white/80">+91 6387234233 <span className="mx-3 text-primary">|</span> +91 7266840582</span>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-10">
              {[
                { Icon: Github, href: "https://github.com/", label: "GitHub" },
                { Icon: Linkedin, href: "https://linkedin.com/", label: "LinkedIn" },
                { Icon: Twitter, href: "https://twitter.com/", label: "Twitter" },
              ].map(({ Icon, href, label }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.08 }}
                  className="w-11 h-11 flex items-center justify-center rounded-full bg-primary/15 border border-primary/30 text-primary transition"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.form variants={staggerItem} className="relative rounded-3xl border border-primary/25 bg-gradient-to-br from-primary/10 to-black/60 backdrop-blur-xl p-8">
            <div className="absolute -inset-px rounded-3xl bg-primary/20 blur-xl opacity-30 pointer-events-none" />
            <div className="relative space-y-6">
              <div>
                <label className="block text-sm text-white/70 mb-2">Your Email</label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-primary/30 text-white placeholder:text-white/40 focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-2">Message</label>
                <textarea rows="5" required placeholder="Tell me about your project..." className="w-full px-4 py-3 rounded-xl bg-black/40 border border-primary/30 text-white placeholder:text-white/40 focus:outline-none focus:border-primary resize-none" />
              </div>
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.15 }} type="submit" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-black rounded-xl font-medium">
                <Send className="w-4 h-4" /> Send Message
              </motion.button>
            </div>
          </motion.form>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
