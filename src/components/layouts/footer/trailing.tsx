import Image from "next/image";
import ryperLogo from "../../../../public/ryper_logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

export const Trailing = () => {
  return (
    <div className="flex flex-col justify-between gap-4 w-full lg:w-fit h-fit lg:h-full ">
      <div className="flex flex-col gap-2 ">
        <Image src={ryperLogo} alt="RyperLabUnej" width={42} height={42} />
        <h1 className="font-bold text-2xl lg:text-3xl text-gray-100">
          Ryper Lab
        </h1>
      </div>
      <div className="py-1 flex flex-row items-center gap-1 ">
        <FontAwesomeIcon icon={faCopyright} className="w-4 h-4 text-gray-100" />
        <p className="text-sm lg:text-md text-gray-100">Copyright 2024</p>
      </div>
    </div>
  );
};
