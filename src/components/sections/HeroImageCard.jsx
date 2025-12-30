import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si";

const HeroImageCard = () => {
  return (
    <div className="relative w-full py-14 sm:py-10 max-w-[520px] mx-auto sm:animate-[float_6s_ease-in-out_infinite]">

      {/* VERY SUBTLE DEPTH */}
      <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-primary/5 blur-xl opacity-25 pointer-events-none" />

      {/* CARD */}
      <div className="relative rounded-3xl sm:rounded-3xl  border border-white/15 bg-black/90 backdrop-blur-xl shadow-lg p-3 sm:p-4 overflow-hidden">

        {/* IMAGE (FIXED MOBILE HEIGHT) */}
        <div className="relative h-[380px] sm:h-[420px] lg:h-[500px] rounded-3xl sm:rounded-3xl overflow-hidden">
          <img
            src="./main6.png"
            alt="Developer Preview"
            className="
              w-full h-full
              object-cover object-center
              contrast-95 saturate-90
            "
          />

          {/* INNER SHADOW */}
          <div className="absolute inset-0 shadow-[inset_0_-40px_60px_rgba(0,0,0,0.55)]" />

          {/* SOFT OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
        </div>

        {/* ICON DOCK (THEME MATCHED) */}
        <div className="mt-4 sm:mt-5 flex justify-center">
          <div
            className="
              flex items-center gap-3 sm:gap-4
              px-3 py-2
              rounded-full
              bg-primary/5
              border border-primary/20
              backdrop-blur-md
            "
          >
            {[
              { Icon: SiReact, color: "text-cyan-400/90" },
              { Icon: SiNextdotjs, color: "text-white/85" },
              { Icon: SiTailwindcss, color: "text-sky-400/90" },
              { Icon: SiNodedotjs, color: "text-green-400/90" },
              { Icon: SiMongodb, color: "text-green-500/90" },
            ].map(({ Icon, color }, i) => (
              <div
                key={i}
                className="
                  w-9 h-9 sm:w-10 sm:h-10
                  flex items-center justify-center
                  rounded-full
                  bg-primary/10
                  border border-primary/20
                "
              >
                <Icon className={`w-4.5 h-4.5 sm:w-5 sm:h-5 ${color}`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FLOAT ANIMATION */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
        `}
      </style>
    </div>
  );
};

export default HeroImageCard;
