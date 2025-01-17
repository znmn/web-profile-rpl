"use client";

import Image from "next/image";
import ryperLogo from "../../../../../public/ryper_logo.svg";

type MemberCardProps = {
  name: string;
  image: string;
  position: string;
};

export const MemberCard = (props: MemberCardProps) => {
  return (
    <div className="relative flex flex-col justify-end w-[210px] md:w-[310px] h-[280px] md:h-[400px] rounded-2xl overflow-hidden ">
      <div className="absolute inset-0 left-3 top-3 z-40 w-[24px] md:w-[32px] h-[24px] md:h-[32px] ">
        <Image
          src={ryperLogo}
          alt="RyperLabUnej"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 w-full h-full z-30 ">
        <img
          src={props.image}
          alt="Member"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="py-3 md:py-6 flex flex-col items-center justify-center gap-2 w-full min-h-[120px] z-40 bg-gradient-to-t from-primary via-primary/50 to-transparent ">
        <div className="flex flex-row items-center justify-center gap-3 w-full ">
          <div className="w-[24px] h-[1px] bg-bgLight"></div>
          <h6 className="font-normal text-sm md:text-base text-gray-200 text-center max-w-[60%] md:max-w-[50%] ">
            {props.position}
          </h6>
          <div className="w-[24px] h-[1px] bg-bgLight"></div>
        </div>
        <p className="font-semibold text-lg md:text-xl lg:text-2xl text-gray-100">
          {props.name}
        </p>
      </div>
    </div>
  );
};
