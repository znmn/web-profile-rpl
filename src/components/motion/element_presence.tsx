"use client";

import React from "react";
import { motion } from "framer-motion";

type ElementPresenceProps = {
  width?: "fit" | "full";
  children: React.ReactNode;
};

export const ElementPresence = ({
  width = "fit",
  children,
}: ElementPresenceProps) => {
  return (
    <div className={`relative w-${width} overflow-hidden`}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{
          duration: 0.3,
          delay: 0.25,
        }}
        initial="hidden"
        whileInView={"visible"}
      >
        {children}
      </motion.div>
    </div>
  );
};
