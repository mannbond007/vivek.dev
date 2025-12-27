// src/sections/ResumeButton.jsx
export default function ResumeButton({ onClick, fullWidth = false }) {
  return (
    <a href="/vivek_resume.pdf" download onClick={onClick}>
      <div
        className={`
          relative group overflow-hidden
          bg-white/20 p-0.5
          h-9 ${fullWidth ? "w-full" : "w-28"}
          rounded-md
          transition-all duration-300
          hover:scale-105
        `}
      >
        {/* Inner Button */}
        <div
          className="
            flex items-center justify-center
            text-white text-sm font-semibold
            bg-gradient-to-t from-black/60 to-black
            h-full w-full rounded
          "
        >
          Resume
        </div>

        {/* Glow Effect */}
        <div
          className="
            absolute -bottom-12
            group-hover:-bottom-9
            transition-all duration-300
            left-1/2 -translate-x-1/2
            blur-xl
            size-14
            rounded-full
            bg-white/70
          "
        />
      </div>
    </a>
  );
}
