export const dynamic = "force-dynamic";

import { getMembers } from "@/utils/services/members";
import { MentorDivision } from "./division/mentor_division";
import { ErrorBoundary } from "@/components/boundary/error";
import { AdministratorDivision } from "./division/administrator_division";
import { PracticeDivision } from "./division/practice_division";
import { ResearchDivision } from "./division/research_division";
import { NotFound } from "@/components/boundary/not_found";

export const Structure = async () => {
  const res = await getMembers();

  return (
    <div className="p-layout p-container flex flex-col items-center gap-6 md:gap-8 lg:gap-10 ">
      <h4 className="font-bold text-lead-size text-lead-color">Struktur Lab</h4>
      {res.success ? (
        res.size < 1 ? (
          <NotFound message="Data Anggota Lab tidak ditemukan" />
        ) : (
          <>
            <MentorDivision content={res.data[0]} />
            <AdministratorDivision
              content={res.data.filter(
                (member) => member.id > 1 && member.id <= 7
              )}
            />
            <PracticeDivision
              content={res.data.filter(
                (member) => member.id > 7 && member.id <= 10
              )}
            />
            <ResearchDivision
              content={res.data.filter(
                (member) => member.id > 10 && member.id <= 12
              )}
            />
          </>
        )
      ) : (
        <ErrorBoundary message={res.message} />
      )}
    </div>
  );
};
