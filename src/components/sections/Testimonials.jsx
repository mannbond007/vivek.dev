import { MessageSquareQuote } from "lucide-react";
import React from "react";

const testimonials = [
  {
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=200",
    name: "Briar Martin",
    role: "Product Manager",
    quote:
      "Vivek writes clean, scalable code and has a strong eye for UI detail.",
  },
  {
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200",
    name: "Avery Johnson",
    role: "Startup Founder",
    quote:
      "Execution was fast, communication was clear, and quality was top-notch.",
  },
  {
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200",
    name: "Jordan Lee",
    role: "Frontend Lead",
    quote:
      "Modern UI, solid architecture, and great understanding of React.",
  },
];

const Row = ({ reverse = false }) => {
  const data = [...testimonials, ...testimonials];

  return (
    <div className="relative overflow-hidden">
      {/* Fades */}
      <div className="absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-black to-transparent" />
      <div className="absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-black to-transparent" />

      <div
        className={`flex gap-6 w-max ${
          reverse ? "animate-marquee animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {data.map((t, i) => (
          <div
            key={i}
            className="
              w-[320px]
              shrink-0
              rounded-2xl
              border border-primary/20
              bg-white/5
              backdrop-blur-xl
              p-6
              transition-all duration-300
              hover:border-primary/40
            "
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <img
                src={t.image}
                alt={t.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="text-white text-sm font-medium">{t.name}</p>
                <p className="text-xs text-white/50">{t.role}</p>
              </div>
            </div>

            {/* Quote */}
            <p className="text-sm text-white/70 leading-relaxed">
              “{t.quote}”
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="bg-black py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
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
  <MessageSquareQuote className="w-4 h-4 md:w-5 md:h-5" />
  Testimonials
</span>

          <h2 className="text-3xl md:text-4xl text-white mt-6 font-medium">
            Trusted by people I’ve worked with
          </h2>

          <p className="text-white/60 mt-4 max-w-xl mx-auto text-sm md:text-base">
            Feedback from collaborators and peers who’ve seen my work in action.
          </p>
        </div>

        {/* Rows */}
        <div className="space-y-10">
          <Row />
          <Row reverse />
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
