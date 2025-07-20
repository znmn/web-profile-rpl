import { useCallback, useEffect, useState } from "react";

const getIsMobile = () =>
  typeof window !== "undefined" ? window.innerWidth < 1024 : false;

export default function useWindow() {
  const [isMobile, setIsMobile] = useState(false);

  const onResize = useCallback(() => {
    setIsMobile(getIsMobile());
  }, []);

  useEffect(() => {
    setIsMobile(getIsMobile());

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [onResize]);

  return isMobile;
}
