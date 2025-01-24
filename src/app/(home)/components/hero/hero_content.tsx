import Image from "next/image";
import ryperLogo from "../../../../../public/ryper_logo.svg";
import { HeroHeadline } from "./hero_headline";
import { ElementPresence } from "@/components/motion/element_presence";

export const HeroContent = () => {
  return (
    <ElementPresence>
      <div className="flex flex-col items-center gap-4 md:gap-8 z-10 ">
        <Image
          src={ryperLogo}
          alt="RyperLabUnej"
          width={112}
          height={112}
          className="w-[72px] md:w-[96px] lg:w-[112px] 2xl:w-[140px] h-[72px] md:h-[96px] lg:h-[112px] 2xl:h-[140px]"
        />
        <HeroHeadline />
        <p className="font-light text-xs md:text-base lg:text-lg 2xl:text-xl text-center text-gray-700 dark:text-gray-300 duration-300">
          Ryper Lab merupakan salah satu laboratorium yang dimiliki oleh
          Fakultas Ilmu Komputer Universitas Jember yang berfokus pada analisis,
          pengembangan, desain dan implementasi perangkat lunak. Ryper Lab
          memiliki asisten laboratorium yang terbagi menjadi 3 bidang yang
          terdiri asisten praktikum (pendidikan), asisten penelitian.
        </p>
      </div>
    </ElementPresence>
  );
};
