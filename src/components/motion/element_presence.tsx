"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

type ElementPresenceProps = {
  width?: "fit" | "full";
  children: React.ReactNode;
};

export const ElementPresence = ({
  width = "fit",
  children,
}: ElementPresenceProps) => {
  const ref = useRef(null);
  const isView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    isView && mainControls.start("visible");
  }, [isView]);

  return (
    <div ref={ref} className={`relative w-${width} overflow-hidden`}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{
          duration: 0.3,
          delay: 0.25,
        }}
        initial="hidden"
        animate={mainControls}
      >
        {children}
      </motion.div>
    </div>
  );
};
