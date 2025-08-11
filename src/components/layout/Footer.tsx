import logo from "@/_assets/logo.png";
import amazonExpressPay from "@/_assets/svgs/americanExpressPay.svg";
import googlePay from "@/_assets/svgs/applePay.svg";
import applePay from "@/_assets/svgs/googlePay.svg";
import masterPay from "@/_assets/svgs/masterPay.svg";
import visaPay from "@/_assets/svgs/visaPay.svg";
import {
  BriefcaseBusiness,
  Building2,
  Facebook,
  Headset,
  Info,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SocialsButtons from "../features/auth/SocialsButtons";
import FooterLink from "../my-ui/links/FooterLink";
import { Badge } from "../ui/badge";

function Footer() {
  const supportLinks = [
    {
      href: "#",
      children: (
        <>
          <Building2 className="h-6 w-6" />
          <p className="text-base">eSIM Card LLC</p>
        </>
      ),
    },

    {
      href: "https://api.whatsapp.com/send/?phone=14072126950&text&type=phone_number&app_absent=0",
      children: (
        <>
          <Phone className="h-6 w-6" />
          <p className="text-body-base">+1 (407) 212- 6950</p>
        </>
      ),
    },
    {
      href: "mailto:support@esimcard.com",
      children: (
        <>
          <Info className="h-6 w-6" />
          <div className="flex items-center gap-1 text-body-base">
            <p>support@esimcard.com</p>
            <Badge className="bg-primary">General</Badge>
          </div>
        </>
      ),
    },
    {
      href: "mailto:tickets@esimcard.com",
      children: (
        <>
          <Headset className="h-6 w-6" />
          <div className="flex items-center gap-1 text-body-base">
            <p>tickets@esimcard.com</p>
            <Badge className="bg-primary">Support</Badge>
          </div>
        </>
      ),
    },
    {
      href: "mailto:sales@esimcard.com",
      children: (
        <>
          <BriefcaseBusiness className="h-6 w-6" />
          <div className="flex items-center gap-1 text-body-base">
            <p>sales@esimcard.com</p>
            <Badge className="bg-primary">Business</Badge>
          </div>
        </>
      ),
    },
    {
      href: "#",
      children: (
        <>
          <MapPin className="h-6 w-6 shrink-0" />
          <p className="text-body-base">
            250 S. Ronald Reagan Blvd., #106, Longwood, FL 32750
          </p>
        </>
      ),
    },
  ];

  const socialLinks = [
    {
      href: "https://twitter.com/EsimcardApp",
      children: <Twitter className="h-6 w-6" />,
    },
    {
      href: "https://www.instagram.com/esimcard.official",
      children: <Instagram className="h-6 w-6" />,
    },
    {
      href: "https://www.facebook.com/Esimcardcom",
      children: <Facebook className="h-6 w-6" />,
    },
    {
      href: "https://www.linkedin.com/company/esimcard",
      children: <Linkedin className="h-6 w-6" />,
    },
    {
      href: "https://www.youtube.com/@esimcardofficial",
      children: <Youtube className="h-6 w-6" />,
    },
  ];

  const popularDestinationsLinks = [
    {
      href: "/esim/united-states",
      label: "United States",
    },
    {
      href: "/esim/canada",
      label: "Canada",
    },
    {
      href: "/esim/united-kingdom",
      label: "United Kingdom",
    },
    {
      href: "/esim/japan",
      label: "Japan",
    },
    {
      href: "/esim/indonesia",
      label: "Indonesia",
    },
    {
      href: "/esim/italy",
      label: "Italy",
    },
    {
      href: "/esim/turkey",
      label: "Turkey",
    },
    {
      href: "/esim/france",
      label: "France",
    },
    {
      href: "/esim/spain",
      label: "Spain",
    },
  ];

  const pageLinks = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About Us",
      href: "/about-us",
    },
    {
      label: "Buy eSIM",
      href: "/esim",
    },
    {
      label: "Careers",
      href: "/careers",
    },
    {
      label: "Distributions Partner",
      href: "/partners",
    },
    {
      label: "Blog",
      href: "/blog",
    },
  ];

  const otherLinks = [
    {
      label: "eSIM Compatible Phones",
      href: "/esim-compatible/",
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
      label: "Redeem eSIM",
      href: "/redeem/",
    },

    {
      label: "What is an eSIM",
      href: "/blog/info/what-is-esim/",
    },
  ];

  const paymentMethods = [
    {
      name: "Google Pay",
      imgSrc: googlePay,
    },
    {
      name: "Apple Pay",
      imgSrc: applePay,
    },
    {
      name: "Amazon Express Pay",
      imgSrc: amazonExpressPay,
    },
    {
      name: "Visa Card Pay",
      imgSrc: visaPay,
    },
    {
      name: "Master Card Pay",
      imgSrc: masterPay,
    },
  ];

  const policyLinks = [
    {
      label: "Terms of Service ",
      href: "/terms",
    },
    {
      label: "Privacy Policy",
      href: "/privacy-policy",
    },
    {
      label: "Refund Policy",
      href: "/refund-policy",
    },
  ];
  return (
    <footer className="container mt-16 border-t-2 bg-background pt-8">
      <div className="grid grid-cols-6 gap-6 md:grid-cols-6 md:gap-0 xl:grid-cols-9">
        <div className="col-span-6 md:col-span-6 xl:col-span-3">
          <div className="group flex flex-col gap-9">
            <Link className="relative h-[57px] w-[137px]" href={"/"}>
              <Image
                src={logo}
                alt="eSIM Card Logo"
                fill
                sizes="auto"
                className="object-cover"
              />
            </Link>
            <div className="flex flex-col gap-3">
              <p className="mb-2 text-body-sm text-muted-foreground">
                Contact Info
              </p>

              {supportLinks.map((item, index) => (
                <FooterLink
                  key={index}
                  href={item.href}
                  rel="noopener noreferrer"
                  className="items-start"
                >
                  {item.children}
                </FooterLink>
              ))}
            </div>
            <div className="flex items-center gap-10">
              {socialLinks.map((item, index) => (
                <FooterLink
                  href={item.href}
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.children}
                </FooterLink>
              ))}
            </div>
            <div>
              <SocialsButtons />
            </div>
          </div>
        </div>
        <div className="col-span-3 mt-8 md:col-span-2 xl:col-span-2 xl:mt-0">
          <p className="text-base text-muted-foreground">
            Popular Destinations
          </p>
          <div className="mt-5 flex-col gap-4">
            {popularDestinationsLinks.map((item, index) => (
              <FooterLink href={item.href} key={index}>
                {item.label}
              </FooterLink>
            ))}
          </div>
        </div>
        <div className="col-span-3 mt-8 md:col-span-2 xl:col-span-2 xl:mt-0">
          <p className="text-base text-muted-foreground">Links</p>
          <div className="mt-5 flex-col gap-4">
            {pageLinks.map((item, index) => (
              <FooterLink href={item.href} key={index}>
                {item.label}
              </FooterLink>
            ))}
          </div>
        </div>

        <div className="col-span-6 mt-8 md:col-span-2 xl:col-span-2 xl:mt-0">
          <p className="text-base text-muted-foreground">Support</p>
          <div className="mt-5 flex-col gap-4">
            {otherLinks.map((item, index) => (
              <FooterLink href={item.href} key={index}>
                {item.label}
              </FooterLink>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-[6rem] mt-5 flex flex-col gap-y-10 md:mb-10 md:mt-10 xl:grid xl:grid-cols-3">
        <p className="flex items-center justify-center text-sm xl:justify-start">
          © {new Date().getFullYear()}{" "}
          <FooterLink href="/" className="mx-1">
            eSIM Card.
          </FooterLink>
          All Rights Reserved
        </p>
        <div className="hidden items-center gap-6 xl:flex">
          {paymentMethods.map((item, index) => (
            <Image
              src={item.imgSrc}
              height={30}
              width={35}
              alt={item.name}
              key={index}
              sizes="auto"
            />
          ))}
        </div>
        <div className="flex items-center justify-between gap-6">
          {policyLinks.map((item, index) => (
            <FooterLink key={index} href={item.href} className="text-sm">
              {item.label}
            </FooterLink>
          ))}
          {/* <DarkModeToggle /> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
