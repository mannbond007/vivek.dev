import React from "react";
import { motion } from "framer-motion";

const AnimatedCard = ({ className = "", children, ...rest }) => {
  return (
    <motion.div
      className={className}
      whileHover={{ y: -6, scale: 1.028, boxShadow: "0 24px 40px rgba(0,0,0,0.28)" }}
      whileTap={{ scale: 0.995 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
