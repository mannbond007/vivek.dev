import React from "react";
import { motion } from "framer-motion";

const MotionButton = ({ as: Component = "button", className = "", children, ...rest }) => {
  // update to new API from framer-motion v12
  const MotionComponent = motion.create(Component);

  return (
    <MotionComponent
      className={className}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      {...rest}
    >
      {children}
    </MotionComponent>
  );
};

export default MotionButton;
