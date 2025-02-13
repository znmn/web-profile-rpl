"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import home2 from "../../../../../../public/background/content/home/Home_2.webp";

export const Home2 = () => {
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
      className="absolute top-0 left-0"
    >
      <Image src={home2} alt="Home Background" />
    </motion.div>
  );
};
