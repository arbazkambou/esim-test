"use client";

import { useAuth } from "@/providers/AuthProvider";
import {
  CardSim,
  Cpu,
  Grid2X2Plus,
  Home,
  LucideProps,
  User,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ForwardRefExoticComponent, RefAttributes, useState } from "react";
import MobileNav from "./MobileNav";

export default function FloatingBottomNav() {
  const { isAuthenticated, isAuthLoading, logout } = useAuth();
  const pathName = usePathname();
  const [showNav, setShowNav] = useState(false);

  type Base = {
    id: string;
    label: string;
    icon: ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
    >;
  };

  type LinkType = Base & {
    type: "link";
    href: string;
  };

  type ButtonType = Base & {
    type: "button";
    href?: never;
  };

  type Link = LinkType | ButtonType;

  const noAuthLinks: Link[] = [
    { id: "Home", label: "Home", icon: Home, href: "/", type: "link" },
    {
      id: "Buy eSIM",
      label: "Buy eSIM",
      icon: CardSim,
      href: "/esim/",
      type: "link",
    },
    { id: "Login", label: "Login", icon: User, href: "/login/", type: "link" },
    { id: "More", label: "More", icon: Grid2X2Plus, type: "button" },
  ];

  const authLinks: Link[] = [
    { id: "Home", label: "Home", icon: Home, href: "/", type: "link" },
    {
      id: "Buy eSIM",
      label: "Buy eSIM",
      icon: CardSim,
      href: "/esim/",
      type: "link",
    },
    {
      id: "eSIMs",
      label: "My eSIM",
      icon: Cpu,
      href: "/client/my-sims/",
      type: "link",
    },
    { id: "More", label: "More", icon: Grid2X2Plus, type: "button" },
  ];

  const navLinks = isAuthenticated ? authLinks : noAuthLinks;

  return (
    <>
      <div className="container sm:container">
        <div className="fixed bottom-2 left-2 right-2 z-50 xs:left-4 xs:right-4 md:left-8 md:right-8 xl:hidden">
          <nav className="border-bottomNav/80 rounded-2xl border bg-bottomNav px-2 py-2 shadow-bottomNav backdrop-blur-[20px]">
            <div className="flex items-center justify-around">
              {navLinks.map((tab) => {
                const Icon = tab.icon;
                const isActive = pathName === tab.href;

                return tab.type === "button" ? (
                  <button
                    key={tab.id}
                    onClick={
                      tab.id === "More" ? () => setShowNav(true) : () => {}
                    }
                    className={`flex min-w-0 flex-1 flex-col items-center rounded-xl px-3 py-2 transition-all duration-300 ease-in-out hover:scale-105`}
                  >
                    <Icon
                      className={`mb-1 h-6 w-6 transition-all duration-300 ${isActive ? "text-primary" : "text-foreground-light/80"} hover:scale-110`}
                      strokeWidth={isActive ? 2 : 1.5}
                    />
                    <span
                      className={`text-xs font-medium transition-all duration-300 ${isActive ? "text-primary" : "text-foreground-light/80"} `}
                    >
                      {tab.label}
                    </span>
                  </button>
                ) : (
                  <Link
                    key={tab.id}
                    href={tab.href}
                    className={`flex min-w-0 flex-1 flex-col items-center rounded-xl px-3 py-2 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95`}
                  >
                    <Icon
                      className={`mb-1 h-6 w-6 transition-all duration-300 ${isActive ? "text-primary" : "text-foreground-light/80"} hover:scale-110`}
                      strokeWidth={isActive ? 2 : 1.5}
                    />
                    <span
                      className={`text-xs font-medium transition-all duration-300 ${isActive ? "text-primary" : "text-foreground-light/80"} `}
                    >
                      {tab.label}
                    </span>
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>

        <MobileNav
          isAuthLoading={isAuthLoading}
          isAuthenticated={isAuthenticated}
          pathName={pathName}
          showNav={showNav}
          setShowNav={setShowNav}
          logout={logout}
        />
      </div>
    </>
  );
}
