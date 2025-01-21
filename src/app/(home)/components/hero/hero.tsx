import { HeroContent } from "./hero_content";
import HeroCarousel from "../../../../components/carousel/hero_carousel";
import { getGalleries } from "@/utils/services/galleries";

export const Hero = async () => {
  const data = await getGalleries();

  return (
    <div className="relative p-layout flex items-center justify-center w-full h-[450px] md:h-[650px] lg:h-screen overflow-hidden ">
      <HeroCarousel images={data} />
      <HeroContent />
    </div>
  );
};
