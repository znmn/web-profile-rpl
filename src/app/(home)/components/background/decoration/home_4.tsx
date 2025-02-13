"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import home4 from "../../../../../../public/background/content/home/Home_4.webp";

export const Home4 = () => {
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
      className="absolute bottom-0 left-0"
    >
      <Image src={home4} alt="Home Background" />
    </motion.div>
  );
};
