import Image from "next/image";
import headerDark1 from "../../../public/background/header/Header_1.webp";
import headerDark2 from "../../../public/background/header/Header_2.webp";
import headerDark3 from "../../../public/background/header/Header_3.webp";

export const HeaderBackground = () => {
  return (
    <div className="absolute flex flex-row inset-0 w-full h-full z-30 ">
      <Image
        src={headerDark3}
        alt="Header Background"
        className="absolute -rotate-12 "
      />
      <Image
        src={headerDark2}
        alt="Header Background"
        className="absolute top-0 left-0 "
      />
      <Image
        src={headerDark1}
        alt="Header Background"
        className="absolute right-0 "
      />
    </div>
  );
};
