"use client";
import { GoogleTagManager } from "@next/third-parties/google";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function GTMWrapper() {
  const pathname = usePathname();
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Immediate load on thank-you route
    if (pathname === "/sim-buy-thank-you/") {
      setShouldRender(true);
      return;
    }

    // Delay on other routes
    // const timer = setTimeout(() => {
    //   setShouldRender(true);
    // }, 12000);

    //immediate render when any click event happen
    function handleClick() {
      setShouldRender(true);
    }

    document.addEventListener("click", handleClick);

    return () => {
      // clearTimeout(timer);
      document.removeEventListener("click", handleClick);
    };
  }, [pathname, shouldRender]);

  if (!shouldRender) return null;

  return <GoogleTagManager gtmId="GTM-N9KR8G4R" />;
}
