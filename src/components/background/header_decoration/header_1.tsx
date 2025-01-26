"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import headerDark1 from "../../../../public/background/header/Header_1.webp";

export const Header1 = () => {
  return (
    <motion.div
      animate={{
        rotate: [0, 4, 0],
      }}
      transition={{
        duration: 8,
        ease: "easeInOut",
        repeat: Infinity,
      }}
      className="absolute right-0 "
    >
      <Image src={headerDark1} alt="Header Background" />
    </motion.div>
  );
};
