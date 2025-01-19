"use client";

import { useTheme } from "@/utils/context/theme_context";
import ryperLabHistoryLight from "../../../../public/RyperLab_History_Light.webp";
import ryperLabHistoryDark from "../../../../public/RyperLab_History_Dark.webp";
import { ImageContainer } from "./container/image_container";

export const History = () => {
  const { darkMode } = useTheme();

  return (
    <ImageContainer
      image={darkMode ? ryperLabHistoryDark : ryperLabHistoryLight}
      alt="Logo RyperLabe"
    />
  );
};
