import {
  faHome,
  faNewspaper,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import { NavItem } from "./nav_item";

export const NavContent = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-8 ">
      <NavItem icon={faHome} name="Beranda" route="/" />
      <NavItem icon={faNewspaper} name="Blog" route="/blog" />
      <NavItem icon={faPeopleGroup} name="Tentang" route="/about" />
    </div>
  );
};
