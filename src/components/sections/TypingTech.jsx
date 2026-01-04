import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TECH_STACK = [
  "React",
  "Next.js",
  "Node.js",
  "MongoDB",
  "Tailwind CSS",
  "PostgreSQL",
  "TypeScript",
  "HTML5",
  "JavaScript",
  "SCSS",

];

const TypingTech = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = TECH_STACK[index];
    let timer;

    if (!deleting && text.length < current.length) {
      timer = setTimeout(() => {
        setText(current.slice(0, text.length + 1));
      }, 110); // ⬅️ slower typing
    } else if (deleting && text.length > 0) {
      timer = setTimeout(() => {
        setText(current.slice(0, text.length - 1));
      }, 70); // ⬅️ smoother delete
    } else {
      timer = setTimeout(() => {
        if (!deleting) {
          setDeleting(true);
        } else {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % TECH_STACK.length);
        }
      }, 1200); // ⬅️ pause before switch
    }

    return () => clearTimeout(timer);
  }, [text, deleting, index]);

  return (
    <span
      className="
        inline-block
        min-w-[90px] sm:min-w-[130px] lg:min-w-[150px]
        font-mono
        text-primary
        whitespace-nowrap
        
      "
    >
      {text}
      <motion.span
        className="inline-block ml-0.5"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 1, repeat: Infinity }} // ⬅️ slower blink
      >
        _
      </motion.span>
    </span>
  );
};

export default TypingTech;
