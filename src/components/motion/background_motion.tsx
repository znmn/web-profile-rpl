"use client";

import { motion } from "framer-motion";
import React from "react";

export const BackgroundMotion = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      animate={{
        rotate: [0, 360],
      }}
      transition={{
        duration: 3,
        ease: "linear",
        repeat: Infinity,
      }}
    >
      {children}
    </motion.div>
  );
};
