import { HeaderBackground } from "../background/header_background";
import { ElementPresence } from "../motion/element_presence";

export const HeaderPage = ({ title }: { title: string }) => {
  return (
    <ElementPresence width="full">
      <div className="relative p-layout flex items-center w-full h-[450px] md:h-[650px] lg:h-screen overflow-hidden ">
        <h4 className="font-black text-5xl md:text-6xl lg:text-8xl text-lead-color z-40">
          {title}
        </h4>
        <HeaderBackground />
      </div>
    </ElementPresence>
  );
};
