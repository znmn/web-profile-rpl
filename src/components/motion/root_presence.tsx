"use client";

import { useTheme } from "@/utils/context/theme_context";
import { AnimatePresence, motion } from "framer-motion";

export const RootPresence = ({ children }: { children: React.ReactNode }) => {
  const { darkMode } = useTheme();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="theme-change"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={`${
          darkMode && "dark"
        } relative flex flex-col min-h-screen bg-bgLight dark:bg-bgDark duration-300`}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
