"use client";

import { useAuth } from "@/providers/AuthProvider";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import NavLinks from "./NavLinks";

function NavLinksWrapper() {
  const { isAuthLoading, isAuthenticated, logout } = useAuth();
  const [showCart, setShowCart] = useState(false);
  const [isMount, setIsMount] = useState<true | undefined>(true);
  const pathName = usePathname();

  useEffect(function () {
    setIsMount(undefined);
  }, []);

  return (
    <NavLinks
      isAuthLoading={isAuthLoading}
      isAuthenticated={isAuthenticated}
      showCart={showCart}
      setShowCart={setShowCart}
      isMount={isMount}
      pathName={pathName}
      logout={logout}
    />
  );
}

export default NavLinksWrapper;
