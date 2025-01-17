import { MemberCard } from "../card/member_card";
import { DivisionContainer } from "../container/division_container";

type MentorDivisionProps = {
  content: {
    name: string;
    image: string;
    position: string;
  };
};

export const MentorDivision = (props: MentorDivisionProps) => {
  return (
    <DivisionContainer
      division="Pembina Lab"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore"
    >
      <div className="flex flex-col items-center justify-center w-full ">
        <MemberCard
          name={props.content.name}
          position={props.content.position}
          image={props.content.image}
        />
      </div>
    </DivisionContainer>
  );
};
