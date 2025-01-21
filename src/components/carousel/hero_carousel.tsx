"use client";

import React, { useEffect, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";
import { Image } from "@/utils/services/galleries";

export default function HeroCarousel({ images }: { images: Image[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Fade()]);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const autoplay = useCallback(() => {
    if (!emblaApi) return;
    autoplayRef.current = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, 10000);
  }, [emblaApi]);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  useEffect(() => {
    autoplay();
    return () => stopAutoplay();
  }, [autoplay, stopAutoplay]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", () => {});
  }, [emblaApi]);

  return (
    <div className="absolute w-full h-full ">
      <div className="h-full overflow-hidden" ref={emblaRef}>
        <div className="flex h-full">
          {images.map((src, index) => (
            <div key={index} className="min-w-full relative">
              <img
                src={src.image}
                alt={`Slide ${index}`}
                className="object-cover w-full h-full md:h-fit bg-gradient-to-t from-black to-white"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bgLight dark:from-bgDark via-bgLight/60 dark:via-bgDark/60 to-transparent duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
