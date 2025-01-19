"use client";

import { CourseCard } from "@/app/about/components/card/course_card";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect } from "react";

type CoursesCarouselProps = {
  content: {
    id: number;
    title: string;
    image: string;
  }[];
};

export const CoursesCarousel = (props: CoursesCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    dragFree: true,
    startIndex: 0,
  });

  useEffect(() => {
    if (!emblaApi) return;
  }, [emblaApi]);

  const onCardClick = useCallback(
    (idx: any) => {
      if (!emblaApi) return;

      emblaApi.scrollTo(idx);
    },
    [emblaApi]
  );

  return (
    <div ref={emblaRef} className="w-full overflow-hidden">
      <div className="flex flex-row flex-nowrap gap-3 md:gap-6 w-full ">
        {props.content.map((course) => (
          <CourseCard
            key={course.title}
            title={course.title}
            image={course.image}
            action={() => onCardClick(course.title)}
          />
        ))}
      </div>
    </div>
  );
};
