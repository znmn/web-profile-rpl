import Image from "next/image";
import ryperLogo from "../../../../public/ryper_logo.svg";

export const NavHeader = () => {
  return (
    <div className="flex flex-row items-center gap-2 lg:gap-4 ">
      <Image src={ryperLogo} alt="RyperLabUnej" width={42} height={42} />
      <h1 className="font-bold text-2xl lg:text-3xl text-gray-900">
        Ryper Lab
      </h1>
    </div>
  );
};
