import notFoundImg from "@/_assets/svgs/404.svg";
import SearchPackagesList from "@/components/features/packages/SearchPackagesList";
import FooterLink from "@/components/my-ui/links/FooterLink";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Page Not Found",
};
export default function NotFound() {
  const links = [
    {
      text: "Explore All eSIM Destinations",
      link: "/esim/",
    },
    {
      text: "Visit Our Blog",
      link: "/blog/",
    },
    {
      text: "Contact Us",
      link: "/contact-us/",
    },
    {
      text: "Help Center",
      link: "/help-center/",
    },

    {
      text: "FAQs",
      link: "/faqs/",
    },
    {
      text: "Back to Homepage",
      link: "/",
    },
  ];
  return (
    <>
      <section className="container mt-16 grid gap-32 xl:grid-cols-[1fr_auto]">
        <div className="mt-4 flex flex-col gap-[1.62rem]">
          <h1 className="font-montserrat text-h1-base font-600 md:text-h1-md xl:text-h1-xl">
            Oops! Page Not Found
          </h1>
          <div className="max-w-[550px]">
            <SearchPackagesList />
          </div>
          <p className="text-[0.875rem] text-primary md:text-base">
            Looks like the page you're looking for doesn't exist anymore — or
            maybe it never did. But don’t worry, we’re here to keep you
            connected. Let’s get you back on track!
          </p>

          <p className="font-montserrat text-[1.25rem] font-600 md:text-[1.5rem]">
            Popular Pages You Might Be Looking For:
          </p>

          <div className="flex flex-col gap-[0.8rem]">
            {links.map((item, index) => (
              <FooterLink
                href={item.link}
                key={index}
                className="text-sm text-primary"
              >
                {item.text}
              </FooterLink>
            ))}
          </div>
        </div>
        <div className="relative hidden h-[415px] w-[491px] rounded-[30px] bg-muted xl:block">
          <Image src={notFoundImg} alt="page not found" fill sizes="auto" />
        </div>
      </section>
    </>
  );
}
