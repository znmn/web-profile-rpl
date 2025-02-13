"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ElementPresence } from "@/components/motion/element_presence";

type MissionCardProps = {
  idx: number;
  title: string;
  description: string;
};

export const MissionCard = (props: MissionCardProps) => {
  const [hover, setHover] = useState(false);

  return (
    <ElementPresence width="full">
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={`group py-3 px-5 md:py-4 md:px-6 flex flex-row  items-center hover:items-start gap-2 md:gap-5 w-full rounded-2xl hover:bg-bgDark dark:hover:bg-bgLight border-[1px] border-bgDark dark:border-bgLight duration-300 z-40`}
      >
        <div className="px-3 lg:px-6 py-1 group-hover:px-0 group-hover:py-0 rounded-md bg-bgDark dark:bg-bgLight duration-300">
          <h6 className="font-bold text-sm md:text-base lg:text-lg text-lead-color-inverse">
            {props.idx}
          </h6>
        </div>
        <div className="flex flex-col gap-2 w-full ">
          <p className="font-meidum text-sm md:text-base lg:text-lg text-moderate-color group-hover:text-gray-200 dark:group-hover:text-gray-800">
            {props.title}
          </p>

          {hover && (
            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{ duration: 0.5 }}
              className="font-normal text-xs md:text-sm lg:text-base text-gray-300 dark:text-gray-700"
            >
              {props.description}
            </motion.p>
          )}
        </div>
      </div>
    </ElementPresence>
  );
};
