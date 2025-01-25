"use client";

import React from "react";
import { motion } from "framer-motion";

type PagePresenceProps = {
  children: React.ReactNode;
};

export const PagePresence = (props: PagePresenceProps) => {
  return (
    <motion.main
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
        },
      }}
      transition={{
        duration: 0.3,
        delay: 0.25,
      }}
      initial="hidden"
      animate="visible"
      className="flex-1 flex flex-col gap-2 md:gap-4 lg:gap-6 min-h-screen "
    >
      {props.children}
    </motion.main>
  );
};
