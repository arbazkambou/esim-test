import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Cpu, LogOut, User, Wallet } from "lucide-react";
import Link from "next/link";
import CartQuantityButton from "../features/cart/CartQuantityButton";
import CartSheet from "../features/cart/CartSheet";
import NavSkelton from "../my-ui/fallbacks/NavSkelton";

interface PropsType {
  isAuthLoading: boolean;
  isAuthenticated: boolean;
  logout: () => void;
  showCart: boolean;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
  isMount: true | undefined;
  pathName: string;
}

function NavLinks({
  isAuthLoading,
  isAuthenticated,
  isMount,
  logout,
  pathName,
  setShowCart,
  showCart,
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
    <>
      <div className="flex items-center gap-2 xl:hidden">
        {/* {isAuthenticated && (
          <Link
            href={"/client/my-sims"}
            className={`flex items-center gap-2 rounded-pill border-0 bg-secondary px-3 py-2 font-sans text-sm font-500 transition-all duration-200 hover:bg-primary hover:text-background xl:bg-secondary ${pathName === "/client/my-sims/" && "bg-primary text-background"}`}
          >
            <Cpu size={20} />
          </Link>
        )} */}

        <CartQuantityButton setShowCart={setShowCart} />
        {/* <MobileNavWrapper /> */}
      </div>

      <div className="hidden items-center gap-3 xl:flex 2xl:gap-4">
        {navLinks.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={`rounded-pill px-3 py-2 font-sans text-sm font-500 transition-all hover:bg-primary hover:text-background ${pathName === item.href && "bg-primary text-background"}`}
          >
            {item.label}
          </Link>
        ))}

        <NavigationMenu delayDuration={0}>
          <NavigationMenuList className="items-center gap-3 xl:flex 2xl:gap-4">
            {dropdownLinks.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuTrigger
                  onClick={(e) => e.preventDefault()}
                  className={`flex items-center rounded-pill border-none px-3 py-2 font-sans text-sm font-500 transition-all duration-200 hover:bg-primary hover:text-background ${item.items.find((item) => item.href === pathName) && "!bg-primary !text-background"}`}
                >
                  {item.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent
                  forceMount={isMount}
                  className={` ${isMount ? "opacity-0" : "opacity-1"}`}
                >
                  <ul className="flex w-[250px] flex-col p-3">
                    {item.items.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        passHref
                        legacyBehavior
                      >
                        <NavigationMenuLink
                          className={`rounded-sm px-2 py-1.5 text-sm transition-all hover:bg-muted ${item.href === pathName && "font-500 !text-primary"}`}
                        >
                          {item.label}
                        </NavigationMenuLink>
                      </Link>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <CartQuantityButton setShowCart={setShowCart} />

        {isAuthLoading ? (
          <NavSkelton />
        ) : isAuthenticated ? (
          authLinks.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`flex items-center gap-2 rounded-pill bg-muted px-3 py-2 font-sans text-sm font-500 transition-all duration-200 ${item.label === "Logout" ? "hover:bg-destructive" : "hover:bg-primary"} hover:text-background ${item.href === pathName && (item.label === "logout" ? "bg-destructive text-background" : "bg-primary text-background")}`}
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
              className="flex items-center gap-2 rounded-pill bg-muted px-3 py-2 font-sans text-sm font-500 transition-all duration-200 hover:bg-primary hover:text-background"
            >
              <User size={16} />
              {item.label}
            </Link>
          ))
        )}

        {/* <DarkModeToggle /> */}

        {/* <Select defaultValue="US">
          <SelectTrigger className="flex w-max rounded-pill border-none px-3 py-2 text-sm font-500 shadow-none transition-all duration-200 hover:bg-muted">
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
        </Select> */}
      </div>

      <CartSheet showCart={showCart} setShowCart={setShowCart} />
    </>
  );
}

export default NavLinks;
