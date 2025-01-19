import { MemberCard } from "../card/member_card";
import { DivisionContainer } from "../container/division_container";
import { DivisionCarousel } from "@/components/carousel/division_carousel";
import { DivisionComponentProps } from "./type";

export const PracticeDivision = (props: DivisionComponentProps) => {
  return (
    <DivisionContainer
      division="Asisten Praktikum"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore"
    >
      <DivisionCarousel direction="backward">
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
