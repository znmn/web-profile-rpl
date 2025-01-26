import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

type NavItemProps = {
  icon: IconDefinition;
  name: string;
  route: "/" | "/blog" | "/about";
};

export const NavItem = (props: NavItemProps) => {
  const path = usePathname();

  const selected = useMemo(() => path === props.route, [path]);

  return (
    <Link
      href={props.route}
      className={`px-5 py-3 flex flex-row lg:justify-start items-center gap-2 w-full lg:w-fit rounded-full group ${
        selected && "bg-primary/90 dark:bg-primary/20"
      } hover:bg-primary/90 dark:group-hover:bg-primary/20 duration-300 `}
    >
      <FontAwesomeIcon
        icon={props.icon}
        className={`w-4 lg:w-5 h-4 lg:h-5  dark:text-gray-200 ${
          selected ? "text-gray-200" : "text-gray-800"
        } group-hover:text-gray-200 duration-300`}
      />
      <p
        className={`font-medium text-sm lg:text-md  dark:text-gray-200 ${
          selected ? "text-gray-200" : "text-gray-800"
        } group-hover:text-gray-200 duration-300`}
      >
        {props.name}
      </p>
    </Link>
  );
};
