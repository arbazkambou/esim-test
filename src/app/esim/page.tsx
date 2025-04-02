import AdvantagesCard from "@/components/my-components/cards/AdvantagesCard";
import PageTextCard from "@/components/my-components/cards/PageTextCard";
import CountriesWithStarting from "@/components/my-components/data-fetching/CountriesWithDataOnly";
import { PackageCardSkelton } from "@/components/my-components/fallbacks/PackageCardSkelton";
import CountryRegionsHero from "@/components/my-components/heros/homepage/CountryRegionsHero";
import AppInstall from "@/components/my-components/presentational/AppInstall";
import FAQs from "@/components/my-components/presentational/FAQs";
import CountryRegionNavigation from "@/components/my-components/shared/CountryRegionNavigation";
import { Card } from "@/components/ui/card";
import { Gift, Globe, HandHeart, Headphones, Lock, Tags } from "lucide-react";
import { Suspense } from "react";
import { PageParams } from "../page";
import { Metadata } from "next";
import { seoData } from "@/lib/seoConfig";

export const revalidate = 86400;

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const localizedSeo = seoData[params.locale] || seoData["en"];
  return localizedSeo.esim;
}

function Page() {
  const cardsData = [
    {
      title: "Why eSIM ?",
      paras: [
        "The future of connectivity is digital sim cards. These virtual sim cards offer unparalleled convenience by eliminating the need of physical SIM cards.Travelers can benefit from Global esim cards which provide instant access to networks across many Countries. With online eSIM you can easily switch between carriers to find the best coverage and rates.",
        "These eSim services streamline your communication needs into one simple, seamless experience. Join the eSIM revolution and unlock the world of stress-free connectivity today!",
      ],
    },
    {
      title: "As eSIM providing company where do we stand?",
      paras: [
        "In a world where connectivity is no longer a luxury but a necessity, choosing the right eSIM provider can make all the difference in your international travel.We cover over 200+ countries worldwide And this is just the beginning.",
        "Each of our prepaid eSIMs is designed with the local infrastructure in mind, ensuring you get the best possible service wherever you land. Whether you need a regional eSIM for multi-country trips within specific parts of the world or a country-specific eSIM for a focused visit, we have got you covered.",
        "Our prepaid eSIM is designed for travelers in mind and those who value convenience, flexibility, and reliability.This eSIM company fulfills your connectivity needs so that you can focus on what truly matters: your journey. From instant activation to dedicated customer support, we are committed to providing you with a smooth digital experience.",
      ],
    },
  ];

  const featuresData = [
    {
      title: "Secure and Private",
      icon: <Lock className="h-10 w-10" />,
      body: "Our eSIM safeguards your data like an impenetrable fortress. We keep your personal info private while connected globally with our eSIM.",
    },
    {
      title: "Cost-Effective",
      icon: <Tags className="h-10 w-10" />,
      body: "Our rates stretch your data dollars further, maximizing every bit. With our eSIM, no roaming charges and no hidden charges.",
    },
    {
      title: "Convenience",
      icon: <HandHeart className="h-10 w-10" />,
      body: "Our eSIMs deliver ultimate speed, simplicity, and flexibility for global & local connectivity. With quick online purchase, instant delivery, and activation via digital QR code.",
    },
    {
      title: "Global Coverage",
      icon: <Globe className="h-10 w-10" />,
      body: "One eSIM, 200+ Countries. Enjoy endless data possibilities anywhere your heart desires. Our Global eSIM follows you across the globe.",
    },
    {
      title: "Exclusive Deals",
      icon: <Gift className="h-10 w-10" />,
      body: "We offer exclusive deals and gifts to our customers like complementary call minutes, text, and data. So buy now and enjoy free text and call gifts with every data bundle activation.",
    },
    {
      title: "Support and Service",
      icon: <Headphones className="h-10 w-10" />,
      body: "Our dedicated support team offers you 24/7 assistance. We also help across time zones for smooth worldwide coverage.",
    },
  ];

  const accordionData = [
    {
      title: "What is an eSIM?",
      body: "An eSIM (embedded SIM) is a digital SIM that allows you to activate a cellular plan from your carrier without having to use a physical nano-SIM.",
    },
    {
      title: "How to activate eSIM on iPhone?",
      body: "To activate an eSIM on your iPhone, go to Settings > Cellular > Add Cellular Plan, and then use your iPhone to scan the QR code provided by your carrier. Follow the on-screen instructions.",
    },
    {
      title: "How to get an eSIM?",
      body: "Getting an eSIM is easy. Just select eSIM and pick a plan that's right for you. Pay for it. Then enjoy your data instantly. That's all it takes to get connected with an eSIM!",
    },
    {
      title: "How to get a QR code for eSIM?",
      body: "We email you a unique QR code when you buy an eSIM plan. Scan the QR code to instantly activate your eSIM. It's quick and easy!",
    },
  ];

  const dataOnlyLinks = [
    {
      label: "Local eSIMs",
      href: "/esim/",
    },
    {
      label: "Regional eSIMs",
      href: "/regional/",
    },
    {
      label: "Global eSIMs",
      href: "/global/",
    },
  ];

  return (
    <>
      {/* hero  */}
      <CountryRegionsHero
        heading={
          <>
            eSIMs for Easy
            <span className="mt-2 inline xl:block"> Travel Connectivity</span>
          </>
        }
        description="eSIM - Fast and Affordable mode of Connectivity"
      />

      {/* links */}
      <CountryRegionNavigation tabsLinks={dataOnlyLinks} />

      {/* countries starting price list  */}
      <section className="container mt-16">
        <h2 className="mb-16 text-center font-montserrat text-h2-base font-600 leading-normal md:text-h2-base xl:max-w-[693px] xl:text-start xl:text-h2-xl">
          Explore Our Range of Data eSIMs for 200+ Destinations
        </h2>
        <Suspense
          fallback={
            <div className="grid gap-x-[1.2rem] gap-y-[1rem] sm:grid-cols-2 md:gap-y-[1.5rem] lg:grid-cols-3 xl:grid-cols-4">
              {Array.from({ length: 20 }).map((item, index) => (
                <PackageCardSkelton key={index} />
              ))}
            </div>
          }
        >
          <CountriesWithStarting />
        </Suspense>
      </section>

      {/* Page text  */}
      <section className="container mt-16 flex flex-col gap-10">
        {cardsData.map((item, index) => (
          <PageTextCard cardData={item} key={index} />
        ))}
      </section>

      {/* Advantages text  */}
      <section className="container mt-10">
        <Card className="flex flex-col gap-6 px-[2.62rem] py-[2.31rem] shadow-md">
          <h2 className="font-montserrat text-h2-base font-600 text-primary">
            Why should you choose our eSIM?
          </h2>

          <p className="text-body-base opacity-80 xl:text-body-md">
            Join the connectivity revolution - eSIM is the future and we are at
            the forefront. Here are some obvious reasons why you should choose
            our eSIM.
          </p>
        </Card>
        <div className="mt-16 grid gap-x-[4rem] gap-y-[4rem] md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {featuresData.map((item, index) => (
            <AdvantagesCard key={index} cardData={item} index={index} />
          ))}
        </div>
      </section>

      <FAQs accordionsData={accordionData} />
      <AppInstall />
    </>
  );
}

export default Page;
