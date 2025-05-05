"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { GoogleTagManager } from "@next/third-parties/google";

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
    const timer = setTimeout(() => {
      setShouldRender(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!shouldRender) return null;

  return <GoogleTagManager gtmId="GTM-N9KR8G4R" />;
}
