import Image from "next/image";
import ryperLogo from "../../../../public/ryper_logo.svg";

export const Trailing = () => {
  return (
    <div className="flex flex-row justify-between gap-4 w-fit lg:h-full ">
      <Image src={ryperLogo} alt="RyperLabUnej" width={36} height={36} />
      <h1 className="font-semibold text-2xl lg:text-3xl text-gray-100">
        Ryper Lab
      </h1>
    </div>
  );
};
