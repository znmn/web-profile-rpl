"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import headerDark3 from "../../../../public/background/header/Header_3.webp";

export const Header3 = () => {
  return (
    <motion.div
      animate={{
        rotate: [0, -4, 0],
      }}
      transition={{
        duration: 8,
        ease: "easeInOut",
        repeat: Infinity,
      }}
      className="absolute -rotate-12 "
    >
      <Image src={headerDark3} alt="Header Background" />
    </motion.div>
  );
};
