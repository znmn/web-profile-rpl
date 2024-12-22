"use client";

import { useCallback, useEffect, useState } from "react";
import { NavContent } from "./nav_content";
import { NavHeader } from "./nav_header";
import { MenuBtn } from "./menu_btn";
import useWindow from "@/utils/hooks/useWindow";
import { NavPresence } from "@/components/motion/nav_presence";

export const Navbar = () => {
  const isMobile = useWindow();
  const [show, setShow] = useState(false);

  const handleNav = useCallback(() => {
    setShow(!show);
  }, [show]);

  useEffect(() => {
    isMobile ? setShow(false) : setShow(true);
  }, [isMobile]);

  return (
    <nav className="sticky top-0 right-0 left-0 p-layout py-6 lg:py-6 flex flex-col lg:flex-row gap-6 lg:justify-between w-full z-50 bg-bgLight dark:bg-bgDark">
      <div className="flex flex-row justify-between ">
        <NavHeader />
        {isMobile && <MenuBtn action={handleNav} />}
      </div>
      {show && (
        <NavPresence>
          <NavContent />
        </NavPresence>
      )}
    </nav>
  );
};
