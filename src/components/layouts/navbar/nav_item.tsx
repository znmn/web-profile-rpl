import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

type NavItemProps = {
  icon: IconDefinition;
  name: string;
  route: "/" | "/blog" | "/about";
};

export const NavItem = (props: NavItemProps) => {
  return (
    <Link
      href={props.route}
      className="px-5 py-3 flex flex-row lg:justify-start items-center gap-2 w-full lg:w-fit rounded-full group hover:bg-primary/90 duration-200"
    >
      <FontAwesomeIcon
        icon={props.icon}
        className="w-4 lg:w-5 h-4 lg:h-5 text-gray-800 group-hover:text-gray-100 duration-200"
      />
      <p className="font-medium text-sm lg:text-md text-gray-800 group-hover:text-gray-100 duration-200">
        {props.name}
      </p>
    </Link>
  );
};
