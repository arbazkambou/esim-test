"use client";

import { useAuth } from "@/providers/AuthProvider";
import { usePathname } from "next/navigation";
import { useState } from "react";
import MobileNav from "./MobileNav";

function MobileNavWrapper() {
  const { isAuthLoading, isAuthenticated, logout } = useAuth();
  const [showNav, setShowNav] = useState(false);
  const pathName = usePathname();

  return (
    <MobileNav
      isAuthLoading={isAuthLoading}
      isAuthenticated={isAuthenticated}
      pathName={pathName}
      showNav={showNav}
      setShowNav={setShowNav}
      logout={logout}
    />
  );
}

export default MobileNavWrapper;
