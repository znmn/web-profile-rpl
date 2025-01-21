import React from "react";

type NotFoundProps = {
  message: string;
  children?: React.ReactNode;
};

export const NotFound = (props: NotFoundProps) => {
  return (
    <div className="py-8 md:py-10 flex flex-col w-full">
      <div className="p-4 md:p-6 lg:p-8 flex flex-col items-center gap-1.5 lg:gap-3 rounded-2xl ">
        <h6 className="font-medium text-center text-moderate-size text-moderate-color">
          {props.message}
        </h6>
        {props.children}
      </div>
    </div>
  );
};
