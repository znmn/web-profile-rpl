import { MemberCard } from "../card/member_card";
import { DivisionContainer } from "../container/division_container";
import { DivisionCarousel } from "@/components/carousel/division_carousel";

type AdmministratorDivisionProps = {
  content: {
    name: string;
    image: string;
    position: string;
  }[];
};

export const AdministratorDivision = (props: AdmministratorDivisionProps) => {
  return (
    <DivisionContainer
      division="BPH"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore"
    >
      <DivisionCarousel>
        {props.content.map((member) => (
          <MemberCard
            key={member.name}
            name={member.name}
            position={member.position}
            image={member.image}
          />
        ))}
      </DivisionCarousel>
    </DivisionContainer>
  );
};
