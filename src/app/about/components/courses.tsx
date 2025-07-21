import { ErrorBoundary } from "@/components/boundary/error";
import { CoursesCarousel } from "@/components/carousel/courses_carousel";
import { getCourses } from "@/utils/services/courses";
import { NotFound } from "@/components/boundary/not_found";
import { ElementPresence } from "@/components/motion/element_presence";

export const Courses = async () => {
  const res = await getCourses();

  return (
    <ElementPresence width="full">
      <div className="p-layout p-container flex flex-col items-center gap-6 md:gap-8 lg:gap-10 ">
        <h4 className="font-bold text-lead-size text-lead-color">
          Mata Kuliah Terafiliasi
        </h4>
        {res.success ? (
          res.size < 1 ? (
            <NotFound message="Data Kursus tidak ditemukan" />
          ) : (
            <CoursesCarousel content={res.data} />
          )
        ) : (
          <ErrorBoundary message={res.message} />
        )}
      </div>
    </ElementPresence>
  );
};
