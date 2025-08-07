"use client";
import { GoogleTagManager } from "@next/third-parties/google";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function GTMWrapper() {
  const pathname = usePathname();
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (shouldRender) return;

    // Immediate GTM load for thank-you page
    if (pathname === "/sim-buy-thank-you/") {
      setShouldRender(true);
      return;
    }

    const enableGTM = () => {
      setShouldRender(true);
      document.removeEventListener("click", enableGTM);
      document.removeEventListener("scroll", enableGTM);
      document.removeEventListener("touchstart", enableGTM);
    };

    document.addEventListener("click", enableGTM, { once: true });
    document.addEventListener("scroll", enableGTM, { once: true });
    document.addEventListener("touchstart", enableGTM, { once: true });

    return () => {
      document.removeEventListener("click", enableGTM);
      document.removeEventListener("scroll", enableGTM);
      document.removeEventListener("touchstart", enableGTM);
    };
  }, [pathname, shouldRender]);

  if (!shouldRender) return null;

  return <GoogleTagManager gtmId="GTM-N9KR8G4R" />;
}
