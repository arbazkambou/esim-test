import { Sheet, SheetContent, SheetHeader } from "@/components/ui/sheet";
import { ChevronDown, Cpu, LogOut, User, Wallet } from "lucide-react";
import Link from "next/link";
import NavSkelton from "../my-ui/fallbacks/NavSkelton";
import FooterLink from "../my-ui/links/FooterLink";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import Logo from "./Logo";

interface PropsType {
  isAuthLoading: boolean;
  isAuthenticated: boolean;
  logout: () => void;
  pathName: string;
  showNav: boolean;
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
}

function MobileNav({
  isAuthLoading,
  isAuthenticated,
  logout,
  pathName,
  showNav,
  setShowNav,
}: PropsType) {
  const navLinks = [
    {
      label: "Buy eSIM",
      href: "/esim/",
    },
    {
      label: "Virtual Number",
      href: "/virtual-number/",
    },
  ];

  const dropdownLinks = [
    {
      label: "Partner With Us",
      items: [
        {
          label: "Distribution Partner",
          href: "/partners/",
        },
        {
          label: "Affiliate Partner",
          href: "/partners/affiliate/",
        },
        {
          label: "eSIM Reseller API",
          href: "/partners/reseller-api/",
        },
      ],
    },
    {
      label: "More",
      items: [
        {
          label: "eSIM Compatible Phones",
          href: "/esim-compatible/",
        },
        {
          label: "International Calling",
          href: "/international-calling/",
        },
        {
          label: "FAQs",
          href: "/faqs/",
        },
        {
          label: "Help Center",
          href: "/help-center/",
        },
        {
          label: "About Us",
          href: "/about-us/",
        },
        {
          label: "Blog",
          href: "/blog/",
        },
        {
          label: "Contact Info",
          href: "/contact-us/",
        },

        {
          label: "What is an eSIM",
          href: "/blog/info/what-is-esim/",
        },
      ],
    },
  ];

  const nonAuthLinks = [
    {
      label: "Login",
      href: "/login/",
    },
  ];

  const authLinks = [
    {
      label: "Wallet",
      svg: <Wallet size={20} />,
      href: "/refill/",
    },
    {
      label: "eSIM",
      svg: <Cpu size={20} />,
      href: "/client/my-sims/",
    },

    {
      label: "Logout",
      svg: <LogOut size={20} />,
      href: "#",
    },
  ];

  // const countryFlags = [
  //   {
  //     label: "English",
  //     imgSrc: "/images/flags/usa.svg",
  //     value: "US",
  //     code: "US",
  //   },
  //   {
  //     label: "Arabic",
  //     imgSrc: "/images/flags/uae.svg",
  //     value: "AE",
  //     code: "AE",
  //   },
  //   {
  //     label: "Turkish",
  //     imgSrc: "/images/flags/turkey.svg",
  //     value: "TR",
  //     code: "TR",
  //   },
  //   {
  //     label: "Spanish",
  //     imgSrc: "/images/flags/spain.svg",
  //     value: "ES",
  //     code: "ES",
  //   },
  //   {
  //     label: "Russian",
  //     imgSrc: "/images/flags/russia.svg",
  //     value: "RU",
  //     code: "RU",
  //   },
  // ];

  return (
    <Sheet open={showNav} onOpenChange={setShowNav}>
      {/* <SheetTrigger asChild>
        <Button variant={"outline"} className="px-2 py-2">
          <Menu size={22} />
        </Button>
      </SheetTrigger> */}

      <SheetContent className="overflow-auto">
        <SheetHeader>
          <Logo />
        </SheetHeader>

        <div className="mt-6 flex h-full flex-col items-start gap-4">
          {navLinks.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`rounded-pill px-3 py-1 font-sans text-sm font-500 transition-colors duration-500 ease-in-out hover:bg-primary hover:text-background ${pathName === item.href && "bg-primary text-background"}`}
              onClick={() => setShowNav(false)}
            >
              {item.label}
            </Link>
          ))}

          {dropdownLinks.map((item, index) => (
            <Collapsible key={index}>
              <CollapsibleTrigger
                className={`group flex items-center gap-1 rounded-pill border-none px-3 py-1 font-sans text-sm font-500 ${item.items.find((item) => item.href === pathName) && "bg-primary text-background"}`}
              >
                {item.label}{" "}
                <ChevronDown
                  size={18}
                  className="transition-all group-data-[state=open]:rotate-180"
                />
              </CollapsibleTrigger>

              <CollapsibleContent className="CollapsibleContent flex flex-col gap-2 ps-6 text-sm data-[state=open]:pt-3">
                {item.items.map((item, index) => (
                  <FooterLink
                    key={index}
                    href={item.href}
                    onClick={() => setShowNav(false)}
                    className={`${pathName === item.href && "text-primary"}`}
                  >
                    {item.label}
                  </FooterLink>
                ))}
              </CollapsibleContent>
            </Collapsible>
          ))}

          {isAuthLoading ? (
            <NavSkelton />
          ) : isAuthenticated ? (
            authLinks.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`flex items-center gap-2 rounded-pill bg-muted px-3 py-2 font-sans text-sm font-500 transition-colors duration-500 ease-in-out ${item.label === "Logout" ? "hover:bg-destructive" : "hover:bg-primary"} hover:text-background ${pathName === item.href && "bg-primary text-background"}`}
                onClick={() => {
                  if (item.label === "Logout") {
                    logout();
                    setShowNav(false);
                  } else {
                    setShowNav(false);
                  }
                }}
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
                className={`flex items-center gap-2 rounded-pill bg-muted px-3 py-2 font-sans text-sm font-500 transition-colors duration-500 ease-in-out hover:bg-primary hover:text-background ${pathName === item.href && "bg-primary text-background"}`}
                onClick={() => setShowNav(false)}
              >
                <User size={16} />
                {item.label}
              </Link>
            ))
          )}

          {/* <Select defaultValue="US">
            <SelectTrigger className="flex w-max rounded-pill border-none px-3 py-2 text-sm font-500 shadow-none transition-colors duration-500 ease-in-out hover:bg-muted">
              <Image
                src={"/images/flags/usa.svg"}
                height={30}
                width={30}
                alt="usa"
              />
            </SelectTrigger>
            <SelectContent className="w-[150px] p-3 shadow-lg">
              {countryFlags.map((item, index) => (
                <SelectItem
                  key={index}
                  value={item.value}
                  onClick={() => setShowNav(false)}
                >
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
          </Select> */}

          {/* <DarkModeToggle /> */}
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
