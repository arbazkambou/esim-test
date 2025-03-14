import logo from "@/_assets/logo.png";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  UserPen,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import FooterLink from "../my-components/links/FooterLink";
import { Badge } from "../ui/badge";
import SocialsButtons from "../my-components/shared/SocialsButtons";
import googlePay from "@/_assets/svgs/applePay.svg";
import applePay from "@/_assets/svgs/googlePay.svg";
import amazonExpressPay from "@/_assets/svgs/americanExpressPay.svg";
import visaPay from "@/_assets/svgs/visaPay.svg";
import masterPay from "@/_assets/svgs/masterPay.svg";
import DarkModeToggle from "../my-components/shared/DarkModeToggle";
import Link from "next/link";
function Footer() {
  const supportLinks = [
    {
      href: "#",
      children: (
        <>
          <MapPin className="h-6 w-6" />
          <p className="text-body-base">Orlando, FL</p>
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
      href: "mailto:sales@esimcard.com",
      children: (
        <>
          <Mail className="h-6 w-6" />
          <div className="flex items-center gap-1 text-body-base">
            <p> sales@esimcard.com </p>
            <Badge className="bg-primary">Business</Badge>
          </div>
        </>
      ),
    },
    {
      href: "mailto:support@esimcard.com",
      children: (
        <>
          <UserPen className="h-6 w-6" />
          <div className="flex items-center gap-1 text-body-base">
            <p>support@esimcard.com</p>
            <Badge className="bg-primary">Customer</Badge>
          </div>
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
      label: "United KIngdom",
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
      href: "/",
    },
    {
      label: "FAQs",
      href: "/about-us",
    },
    {
      label: "Help Center",
      href: "/esim",
    },
    {
      label: "Redeem eSIM",
      href: "/careers",
    },
    {
      label: "Server Status",
      href: "/partners",
    },
    {
      label: "What is an eSIM",
      href: "/blog",
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
      <div className="grid grid-cols-6 gap-2 md:grid-cols-6 md:gap-0 xl:grid-cols-9">
        <div className="col-span-6 md:col-span-6 xl:col-span-3">
          <div className="flex flex-col gap-9">
            <Link className="relative h-[57px] w-[137px]" href={"/"}>
              <Image src={logo} alt="eSIM Card Logo" fill sizes="auto" />
            </Link>
            <div className="flex flex-col gap-3">
              <p className="mb-2 text-body-sm text-muted-foreground">
                Contact Info
              </p>

              {supportLinks.map((item, index) => (
                <FooterLink key={index} href={item.href}>
                  {item.children}
                </FooterLink>
              ))}
            </div>
            <div className="flex items-center gap-10">
              {socialLinks.map((item, index) => (
                <FooterLink href={item.href} key={index} target="_blank">
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

      <div className="my-10 grid gap-y-10 xl:grid-cols-3">
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
          <DarkModeToggle />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
