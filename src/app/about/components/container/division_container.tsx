import { ElementPresence } from "@/components/motion/element_presence";
import React from "react";

type DivisionContainerProps = {
  division: string;
  description: string;
  children: React.ReactNode;
};

export const DivisionContainer = (props: DivisionContainerProps) => {
  return (
    <ElementPresence width="full">
      <div className="flex flex-col items-center gap-3 md:gap-5 lg:gap-8 w-full ">
        <h6 className="font-semibold text-moderate-size text-moderate-color">
          {props.division}
        </h6>
        <p className="font-normal text-descriptive-size text-descriptive-color text-center">
          {props.description}
        </p>
        {props.children}
      </div>
    </ElementPresence>
  );
};
