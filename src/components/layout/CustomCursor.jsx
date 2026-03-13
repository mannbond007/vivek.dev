import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const isTouchDevice = () => {
  if (typeof window === "undefined") return true;
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
};

const CustomCursor = () => {
  const [disabled, setDisabled] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const pointerX = useMotionValue(-100);
  const pointerY = useMotionValue(-100);

  const innerX = useSpring(pointerX, { stiffness: 700, damping: 35 });
  const innerY = useSpring(pointerY, { stiffness: 700, damping: 35 });

  const outerX = useSpring(pointerX, { stiffness: 120, damping: 20 });
  const outerY = useSpring(pointerY, { stiffness: 120, damping: 20 });

  useEffect(() => {
    if (isTouchDevice()) {
      setDisabled(true);
      return;
    }

    const moveCursor = (e) => {
      pointerX.set(e.clientX - 5);
      pointerY.set(e.clientY - 5);
    };

    const mouseDown = () => setIsClicking(true);
    const mouseUp = () => setIsClicking(false);

    const hoverSelector =
      "a, button, input, textarea, select, [role='button'], .tech-card";

    const handleMouseOver = (e) => {
      if (e.target.closest(hoverSelector)) setIsHovering(true);
    };

    const handleMouseOut = (e) => {
      if (e.target.closest(hoverSelector)) setIsHovering(false);
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mousedown", mouseDown);
    document.addEventListener("mouseup", mouseUp);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mousedown", mouseDown);
      document.removeEventListener("mouseup", mouseUp);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [pointerX, pointerY]);

  if (disabled) return null;

  return (
    <>
      {/* outer ring */}
      <motion.div
        style={{ translateX: outerX, translateY: outerY }}
        className={`pointer-events-none fixed z-[9999]
        h-9 w-9 rounded-full
        border border-green-400/60
        shadow-[0_0_15px_rgba(74,222,128,0.4)]
        ${isHovering ? "scale-125 border-green-300" : ""}
        ${isClicking ? "scale-90" : ""}`}
      />

      {/* inner dot */}
      <motion.div
        style={{ translateX: innerX, translateY: innerY }}
        className={`pointer-events-none fixed z-[10000]
        h-3 w-3 rounded-full
        bg-green-400
        mix-blend-difference
        ${isHovering ? "scale-125" : ""}
        ${isClicking ? "scale-90" : ""}`}
      />
    </>
  );
};

export default CustomCursor;