"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { useAuth } from "@/providers/AuthProvider";
import {
  ChevronDown,
  Cpu,
  LogOut,
  ShoppingCart,
  User,
  Wallet,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import DarkModeToggle from "../my-components/shared/DarkModeToggle";
import NavSkelton from "../my-components/shared/NavSkelton";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import MobileNav from "./MobileNav";

function NavLinks() {
  const { isAuthLoading, isAuthenticated, logout } = useAuth();
  const navLinks = [
    {
      label: "Buy eSIM",
      href: "/esim",
    },
    {
      label: "Virtual Number",
      href: "/virtual-number",
    },
  ];

  const dropdownLinks = [
    {
      label: "Partner With Us",
      items: [
        {
          label: "Distribution Partner",
          href: "/partners",
        },
        {
          label: "Affliated Partner",
          href: "/partners/affiliate",
        },
        {
          label: "eSIM Reseller API",
          href: "/partners/reseller-api",
        },
      ],
    },
    {
      label: "More",
      items: [
        {
          label: "eSIM Compatible Phones",
          href: "/esim-compatible",
        },
        {
          label: "International Calling",
          href: "/international-calling",
        },
        {
          label: "FAQs",
          href: "/faqs",
        },
        {
          label: "Help Center",
          href: "/help-center",
        },
        {
          label: "About Us",
          href: "/about-us",
        },
        {
          label: "Blog",
          href: "/blog",
        },
        {
          label: "Contact Info",
          href: "/contact-us",
        },
        {
          label: "Server Status",
          href: "https://esimcard.statuspage.io/",
        },
        {
          label: "What is an eSIM",
          href: "/blog/info/what-is-esim",
        },
      ],
    },
  ];

  const nonAuthLinks = [
    {
      label: "Login",
      href: "/login",
    },
  ];

  const authLinks = [
    {
      label: "Wallet",
      svg: <Wallet size={20} />,
      href: "/refill",
    },
    {
      label: "eSIM",
      svg: <Cpu size={20} />,
      href: "/client/my-sims",
    },

    {
      label: "Logout",
      svg: <LogOut size={20} />,
      href: "#",
    },
  ];

  const countryFlags = [
    {
      label: "English",
      imgSrc: "/images/flags/usa.svg",
      value: "US",
      code: "US",
    },
    {
      label: "Arabic",
      imgSrc: "/images/flags/uae.svg",
      value: "AE",
      code: "AE",
    },
    {
      label: "Turkish",
      imgSrc: "/images/flags/turkey.svg",
      value: "TR",
      code: "TR",
    },
    {
      label: "Spanish",
      imgSrc: "/images/flags/spain.svg",
      value: "ES",
      code: "ES",
    },
    {
      label: "Russian",
      imgSrc: "/images/flags/russia.svg",
      value: "RU",
      code: "RU",
    },
  ];
  return (
    <>
      <div className="flex items-center gap-2 xl:hidden">
        {isAuthenticated && (
          <Link
            href={"/client/my-esims"}
            className={`flex items-center gap-2 rounded-pill px-3 py-2 font-sans text-sm font-500 transition-all duration-200 hover:scale-105 hover:text-background xl:bg-secondary`}
          >
            <User size={20} />
          </Link>
        )}

        <Button
          className={`relative rounded-pill border-0 px-3 py-2 font-sans text-sm font-500 shadow-none transition-all duration-200 hover:scale-105 hover:bg-primary hover:text-background xl:bg-secondary`}
          size={"sm"}
          variant={"outline"}
        >
          <ShoppingCart size={20} />
          <Badge className="absolute -top-2 right-[5px] flex h-4 w-4 items-center justify-center rounded-[50%] text-[10px]">
            0
          </Badge>
        </Button>
        <MobileNav />
      </div>
      <div className="hidden items-end gap-3 xl:flex 2xl:gap-4">
        {navLinks.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={`dur rounded-pill px-3 py-2 font-sans text-sm font-500 transition-all hover:scale-105 hover:bg-primary hover:text-background`}
          >
            {item.label}
          </Link>
        ))}

        {dropdownLinks.map((item, index) => (
          <DropdownMenu key={index}>
            <DropdownMenuTrigger className="flex items-center gap-1 rounded-pill border-none px-3 py-2 font-sans text-sm font-500 transition-all duration-200 hover:scale-105 hover:bg-primary hover:text-background">
              {item.label} <ChevronDown size={18} />
            </DropdownMenuTrigger>

            <DropdownMenuContent className="p-3 pe-8 text-sm">
              {item.items.map((item, index) => (
                <Link key={index} href={item.href}>
                  <DropdownMenuItem key={index}>{item.label}</DropdownMenuItem>
                </Link>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        ))}
        <Button
          className={`relative rounded-pill border-0 bg-secondary px-3 py-2 font-sans text-sm font-500 shadow-none transition-all duration-200 hover:scale-105 hover:bg-primary hover:text-background`}
          size={"sm"}
          variant={"outline"}
        >
          <ShoppingCart size={20} />
          <Badge className="absolute -top-2 right-[5px] flex h-4 w-4 items-center justify-center rounded-[50%] text-[10px]">
            0
          </Badge>
        </Button>

        {isAuthLoading ? (
          <NavSkelton />
        ) : isAuthenticated ? (
          authLinks.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`flex items-center gap-2 rounded-pill bg-muted px-3 py-2 font-sans text-sm font-500 transition-all duration-200 hover:scale-105 ${item.label === "Logout" ? "hover:bg-destructive" : "hover:bg-primary"} hover:text-background`}
              onClick={item.label === "Logout" ? logout : () => {}}
            >
              {item.svg}
              {item.label}
            </Link>
          ))
        ) : (
          nonAuthLinks.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="flex items-center gap-2 rounded-pill bg-muted px-3 py-2 font-sans text-sm font-500 transition-all duration-200 hover:scale-105 hover:bg-primary hover:text-background"
            >
              <User size={16} />
              {item.label}
            </Link>
          ))
        )}

        <DarkModeToggle />
        <Select defaultValue="US">
          <SelectTrigger className="flex w-max rounded-pill border-none px-3 py-2 text-sm font-500 shadow-none transition-all duration-200 hover:scale-105 hover:bg-muted">
            <Image
              src={"/images/flags/usa.svg"}
              height={30}
              width={30}
              alt="usa"
            />
          </SelectTrigger>
          <SelectContent className="w-[150px] p-3 shadow-lg">
            {countryFlags.map((item, index) => (
              <SelectItem key={index} value={item.value}>
                <div className="flex items-center gap-2">
                  <Image
                    src={item.imgSrc}
                    height={20}
                    width={20}
                    alt={item.label}
                  />
                  <p>{item.label}</p>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </>
  );
}

export default NavLinks;
