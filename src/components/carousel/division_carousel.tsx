"use client";

import React, { useEffect } from "react";
import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";

type DivisionCarouselProps = {
  children: React.ReactNode;
  direction: "forward" | "backward";
};

export const DivisionCarousel = (props: DivisionCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: true,
      startIndex: props.direction === "forward" ? 0 : 1,
    },
    [
      AutoScroll({
        playOnInit: true,
        direction: props.direction,
      }),
    ]
  );

  useEffect(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;
  }, [emblaApi]);

  return (
    <div ref={emblaRef} className="w-full overflow-hidden">
      <div className=" flex flex-row flex-nowrap gap-4 md:gap-6 w-full">
        {props.children}
        {props.children}
        {props.children}
      </div>
    </div>
  );
};
