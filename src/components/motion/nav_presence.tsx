"use client";

import { motion } from "framer-motion";

export const NavPresence = (props: { children: React.ReactNode }) => {
  return (
    <motion.div
      style={{ originY: 0 }}
      initial={{
        opacity: 0,
        scaleY: 0,
      }}
      animate={{
        opacity: 1,
        scaleY: 1,
      }}
      exit={{
        opacity: 0,
        scaleY: 0,
      }}
      transition={{ duration: 0.3 }}
    >
      {props.children}
    </motion.div>
  );
};
