import CountryRegionsHero from "@/components/my-ui/heros/CountryRegionsHero";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import whatsapp from "@/_assets/images/whatsapp.png";
import chat from "@/_assets/images/bubbleChat.png";
import { BriefcaseBusiness } from "lucide-react";
import ContactUsForm from "@/components/features/support/ContactUsForm";
import contactUsHero from "@/_assets/images/contactUsHero.png";
import Link from "next/link";
import FAQs from "@/components/my-ui/presentational/FAQs";
import FooterLink from "@/components/my-ui/links/FooterLink";
import hero from "@/_assets/svgs/contactUsHero.svg";
import { PageParams } from "../page";
import { Metadata } from "next";
import { seoData } from "@/lib/seoConfig";

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const localizedSeo = seoData[params.locale] || seoData["en"];
  return localizedSeo.contactUs;
}

function Page() {
  const accordionsData = [
    {
      title: "Do you offer refunds or money-back guarantees?",
      body: (
        <p>
          Yes! We surely do. If our eSIM doesn&apos;t delight you, we make
          returns easy. Check out our simple
          <FooterLink
            href="/refund-policy/"
            className="ms-1 inline-block text-primary"
          >
            refund policy
          </FooterLink>{" "}
          and buy with confidence. 100% satisfaction guaranteed.
        </p>
      ),
    },
    {
      title: "How can I reach your customer support team?",
      body: (
        <p>
          Reach us anytime via live chat or email at{" "}
          <FooterLink
            href="mailto:support@esimcard.com"
            className="ms-1 inline-block text-primary"
          >
            support@esimcard.com.
          </FooterLink>
        </p>
      ),
    },
    {
      title: "What About Considering Customers Suggestions?",
      body: "Absolutely! We highly value our customers' perspectives. Send us your ideas via email, and our leadership team will carefully review each suggestion to constantly improve.",
    },
    {
      title: "How to contact EsimCard for business purposes?",
      body: (
        <p>
          Contact our enterprise team at{" "}
          <FooterLink
            href="mailto:support@esimcard.com"
            className="ms-1 inline-block text-primary"
          >
            sales@esimcard.com.
          </FooterLink>{" "}
          to discuss how eSIM can transform connectivity for your organization.
        </p>
      ),
    },
  ];

  return (
    <>
      <CountryRegionsHero
        heading={<>Contact Our Team</>}
        description="eSIM - Fast and Affordable mode of Connectivity"
        imageSrc={hero}
      />
      <section className="container mt-16">
        <div className="mx-4 grid gap-10 xl:grid-cols-2">
          <Card className="rounded-[0.9375rem] px-[2.75rem] py-[1.88rem] shadow-md transition-all hover:scale-105 hover:border hover:border-primary">
            <Link
              href={
                "https://api.whatsapp.com/send/?phone=14072126950&text&type=phone_number&app_absent=0"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-[3.25rem] sm:flex-row sm:items-center"
            >
              <div className="relative h-[92px] w-[92px] shrink-0">
                <Image
                  src={whatsapp}
                  quality={75}
                  fill
                  sizes="auto"
                  alt="contact us on whatsapp"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-montserrat text-[1.5625rem] font-600 text-foreground-light">
                  +1 (407) 212 - 6950
                </p>
                <p className="text-[1.125rem] text-muted-foreground">
                  24/7 Online Support
                </p>
              </div>
            </Link>
          </Card>

          <Card className="smitems-center flex flex-col gap-[3.25rem] rounded-[0.9375rem] px-[2.75rem] py-[1.88rem] shadow-md transition-all hover:scale-105 hover:border hover:border-primary md:flex-row">
            <div className="relative h-[92px] w-[92px] shrink-0">
              <Image
                src={chat}
                quality={75}
                fill
                sizes="auto"
                alt="contact us on whatsapp"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-base font-600 text-muted-foreground">
                Live Chat
              </p>
              <p className="font-montserrat text-[1.5625rem] font-600 text-foreground-light">
                Start buying with eSimCard that can provide everything
              </p>
              <p className="text-[1.125rem] text-muted-foreground">
                24/7 Online Support
              </p>
            </div>
          </Card>
        </div>
      </section>

      <section className="container mt-16">
        <div className="rounded-[0.9375rem] bg-primary p-[1.62rem] text-background/90">
          <Link
            className="flex items-center justify-center gap-2"
            href={"mailto:support@esimcard.com"}
            target="_blank"
          >
            <BriefcaseBusiness className="h-[19px] w-[19px]" />
            <p className="text-[0.92rem] underline-offset-2 transition-all hover:underline md:text-lg">
              For Business: sales@esimcard.com
            </p>
          </Link>
        </div>
      </section>
      <section className="container mt-16 grid gap-14 xl:grid-cols-2">
        <div className="relative -mt-2 hidden h-[458px] w-full transition-all hover:scale-105 hover:text-opacity-95 xl:block">
          <div className="absolute inset-0 z-10 rounded-[2.4375rem] bg-image-overlay-light"></div>
          <Image
            src={contactUsHero}
            sizes="auto"
            fill
            alt="contact us"
            quality={75}
          />
        </div>
        <div>
          <ContactUsForm />
          <p className="mt-4 text-[1.125rem] text-muted-foreground">
            We look forward to hearing from you and helping resolve any problems
            or questions you may have.
          </p>
        </div>
      </section>
      <FAQs
        heading="Have a Question? Check Here First"
        accordionsData={accordionsData}
      />
    </>
  );
}

export default Page;
