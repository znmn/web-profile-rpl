"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import home3 from "../../../../../../public/background/content/home/Home_3.webp";

export const Home3 = () => {
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
      className="absolute bottom-0 right-0"
    >
      <Image src={home3} alt="Home Background" />
    </motion.div>
  );
};
