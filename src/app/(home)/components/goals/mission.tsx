import { useMission } from "@/utils/hooks/useMission";
import { GoalContainer } from "./goal_container";
import { MissionCard } from "./mission_card";

export const Mission = () => {
  const missions = useMission();

  return (
    <GoalContainer title="Misi">
      <div className="flex flex-col items-center gap-2.5 md:gap-5 w-full z-40">
        {missions.map((mission, idx) => (
          <MissionCard
            key={mission.title || idx}
            idx={idx + 1}
            title={mission.title}
            description={mission.description}
          />
        ))}
      </div>
    </GoalContainer>
  );
};
