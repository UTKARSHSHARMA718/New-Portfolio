import { useState, useEffect } from "react";

type WindowSize = {
  width: number | undefined;
  height: number | undefined;
};

function useWindowSize(): { windowSize: WindowSize, isMobile: boolean } {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: typeof window !== "undefined" ? window.innerWidth : undefined,
    height: typeof window !== "undefined" ? window.innerHeight : undefined,
  });
  const isMobile = windowSize?.width ? windowSize.width <= 800 : false

  useEffect(() => {
    if (typeof window === "undefined") return;

    function handleResize(): void {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // Initialize on mount

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { windowSize, isMobile };
}

export default useWindowSize;
