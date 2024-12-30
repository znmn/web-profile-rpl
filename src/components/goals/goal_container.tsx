import React from "react";

type GoalContainerProps = {
  title: string;
  children: React.ReactNode;
};

export const GoalContainer = (props: GoalContainerProps) => {
  return (
    <div className="flex flex-col items-center gap-4 md:gap-8 w-full ">
      <h4 className="font-bold text-lead-size text-lead-color duration-300">
        {props.title}
      </h4>
      {props.children}
    </div>
  );
};
