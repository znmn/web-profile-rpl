"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import home1 from "../../../../../../public/background/content/home/Home_1.webp";

export const Home1 = () => {
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
      className="absolute top-0"
    >
      <Image src={home1} alt="Home Background" />
    </motion.div>
  );
};
