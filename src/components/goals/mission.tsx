import { GoalContainer } from "./goal_container";
import { MissionCard } from "./mission_card";

export const Mission = () => {
  return (
    <GoalContainer title="Misi">
      <div className="flex flex-col items-center gap-2.5 md:gap-5 w-full ">
        <MissionCard />
        <MissionCard />
        <MissionCard />
        <MissionCard />
        <MissionCard />
        <MissionCard />
        <MissionCard />
        <MissionCard />
      </div>
    </GoalContainer>
  );
};
