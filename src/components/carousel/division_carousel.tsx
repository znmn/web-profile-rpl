"use client";

import React, { useEffect } from "react";
import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";

export const DivisionCarousel = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", direction: "ltr" },
    [AutoScroll({ playOnInit: true })]
  );

  useEffect(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;

    emblaApi.reInit();
  }, [emblaApi]);

  return (
    <div ref={emblaRef} className="w-full overflow-hidden">
      <div className="flex flex-row flex-nowrap gap-4 md:gap-6 w-full">
        {children}
      </div>
    </div>
  );
};
