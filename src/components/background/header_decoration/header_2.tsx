"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import headerDark2 from "../../../../public/background/header/Header_2.webp";

export const Header2 = () => {
  return (
    <motion.div
      animate={{
        rotate: [0, -2, 0],
      }}
      transition={{
        duration: 8,
        ease: "easeInOut",
        repeat: Infinity,
      }}
      className="absolute top-0 left-0 "
    >
      <Image src={headerDark2} alt="Header Background" />
    </motion.div>
  );
};
