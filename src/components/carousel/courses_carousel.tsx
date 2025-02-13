"use client";

import { CourseCard } from "@/app/about/components/card/course_card";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

type CoursesCarouselProps = {
  content: {
    id: number;
    title: string;
    image: string;
  }[];
};

export const CoursesCarousel = (props: CoursesCarouselProps) => {
  const [selectedCourse, setSelectedCourse] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    dragFree: true,
    startIndex: 0,
  });

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedCourse(emblaApi.selectedScrollSnap()); // Menyimpan index yang sedang di tengah
    };

    emblaApi.on("select", onSelect);
    onSelect();
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
        {props.content.map((course, idx) => (
          <CourseCard
            key={course.title}
            title={course.title}
            image={course.image}
            action={() => onCardClick(idx)}
            isSelected={idx === selectedCourse}
          />
        ))}
      </div>
    </div>
  );
};
