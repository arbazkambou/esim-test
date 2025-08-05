"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function RouteChangeListener() {
  const pathname = usePathname();

  useEffect(() => {
    const savedUsage = localStorage.getItem("redeemSim");

    if (savedUsage) {
      if (pathname !== "/redeem/") {
        localStorage.removeItem("redeemSim");
      }
    } else {
      return;
    }
  }, [pathname]);

  return <></>;
}
