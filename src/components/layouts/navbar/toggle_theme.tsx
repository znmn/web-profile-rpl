"use client";

import { useTheme } from "@/utils/context/theme_context";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { IconTheme } from "./icon_theme";
export const ToggleTheme = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="order-none lg:order-last self-start px-4 md:px-5 py-2.5 md:py-3 flex flex-row lg:justify-start items-center gap-2 lg:w-fit rounded-xl group h-full border-2 border-transparent hover:border-primary  duration-300 "
    >
      {darkMode ? (
        <IconTheme key="sun" icon={faSun} />
      ) : (
        <IconTheme key="moon" icon={faMoon} />
      )}
    </button>
  );
};
