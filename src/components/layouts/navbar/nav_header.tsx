import Image from "next/image";
import ryperLogo from "../../../../public/ryper_logo.svg";
import { NavPresence } from "@/components/motion/nav_presence";

export const NavHeader = () => {
  return (
    <NavPresence>
      <div className="flex flex-row items-center gap-2 lg:gap-4 ">
        <Image src={ryperLogo} alt="RyperLabUnej" width={42} height={42} />
        <h1 className="font-bold text-2xl lg:text-3xl text-gray-900 dark:text-gray-100 duration-300">
          Ryper Lab
        </h1>
      </div>
    </NavPresence>
  );
};
