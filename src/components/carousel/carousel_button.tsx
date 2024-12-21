import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type CarouselBtnProps = {
  action: () => void;
  icon: IconDefinition;
  position: "left" | "right";
};

export const CarouselBtn = (props: CarouselBtnProps) => {
  return (
    <div
      className={`absolute top-1/2 md:p-4 ${props.position}-0 -translate-y-1/2 z-50`}
    >
      <button
        onClick={props.action}
        className={` p-3 text-gray-900 dark:text-gray-100 duration-300`}
        aria-label={`${props.position} Image`}
      >
        <FontAwesomeIcon icon={props.icon} />
      </button>
    </div>
  );
};
