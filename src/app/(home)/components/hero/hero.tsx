import { HeroContent } from "./hero_content";
import HeroCarousel from "../../../../components/carousel/hero_carousel";
import { getGalleries } from "@/utils/services/galleries";
import { ErrorBoundary } from "@/components/boundary/error";
import { NotFound } from "@/components/boundary/not_found";

export const Hero = async () => {
  const res = await getGalleries();

  return (
    <div className="relative p-layout flex items-center justify-center w-full h-[450px] md:h-[650px] lg:h-screen overflow-hidden ">
      {res.success ? (
        res.size > 0 ? (
          <>
            <HeroCarousel images={res.data} />
          </>
        ) : (
          <NotFound message="Galleri tidak ditemukan" />
        )
      ) : (
        <ErrorBoundary message={res.message} />
      )}
      <HeroContent />
    </div>
  );
};
