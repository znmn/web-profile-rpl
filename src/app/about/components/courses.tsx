import { ErrorBoundary } from "@/components/boundary/error";
import { CoursesCarousel } from "@/components/carousel/courses_carousel";
import { getCourses } from "@/utils/services/courses";
import { MembersNotFound } from "./boundary/members_not_found";

export const Courses = async () => {
  const res = await getCourses();

  return (
    <div className="p-layout p-container flex flex-col items-center gap-6 md:gap-8 lg:gap-10 ">
      <h4 className="font-bold text-lead-size text-lead-color">
        Mata Kuliah Terafiliasi
      </h4>
      {res.success ? (
        res.size < 1 ? (
          <MembersNotFound />
        ) : (
          <CoursesCarousel content={res.data} />
        )
      ) : (
        <ErrorBoundary message={res.message} />
      )}
    </div>
  );
};
