import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FootContent } from "./foot_content";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type FootDescriptionProps = {
  label: string;
  icon: IconDefinition;
  content: string;
};

export const FootDescription = (props: FootDescriptionProps) => {
  return (
    <FootContent label={props.label}>
      <div className="flex flex-row items-center gap-2 ">
        <FontAwesomeIcon icon={props.icon} className="w-4 h-4 text-gray-100" />

        <p className="font-normal text-sm lg:text-md text-gray-200 ">
          {props.content}
        </p>
      </div>
    </FootContent>
  );
};
