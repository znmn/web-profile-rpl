"use client";

import { AnimatePresence, motion } from "framer-motion";

export const Presence = (props: { children: React.ReactNode }) => {
  return (
    <AnimatePresence>
      <motion.div
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
        style={{ originY: 0 }}
      >
        {props.children}
      </motion.div>
    </AnimatePresence>
  );
};
