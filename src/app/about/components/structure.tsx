import { getMembers } from "@/utils/services/members";
import { MentorDivision } from "./division/mentor_division";
import { ErrorBoundary } from "@/components/boundary/error";
import { MembersNotFound } from "./boundary/members_not_found";

export const Structure = async () => {
  const res = await getMembers();

  return (
    <div className="p-layout p-container flex flex-col items-center gap-6 md:gap-8 lg:gap-10 ">
      <h4 className="font-bold text-lead-size text-lead-color">Struktur Lab</h4>
      {res.success ? (
        res.size < 1 ? (
          <MembersNotFound />
        ) : (
          <MentorDivision content={res.data[0]} />
        )
      ) : (
        <ErrorBoundary message={res.message} />
      )}
    </div>
  );
};
