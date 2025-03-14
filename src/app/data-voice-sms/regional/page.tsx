import AdvantagesCard from "@/components/my-components/cards/AdvantagesCard";
import Reviews from "@/components/my-components/carousels/Reviews";
import RegionsWithDataVoice from "@/components/my-components/data-fetching/RegionsWithDataVoice";
import CountryRegionsHero from "@/components/my-components/heros/homepage/CountryRegionsHero";
import AppInstall from "@/components/my-components/presentational/AppInstall";
import FAQs from "@/components/my-components/presentational/FAQs";
import CountryRegionNavigation from "@/components/my-components/shared/CountryRegionNavigation";
import { Skeleton } from "@/components/ui/skeleton";
import {
  DollarSign,
  Gift,
  Globe,
  List,
  Plane,
  Scale,
  Signal,
  Smartphone,
  Zap,
} from "lucide-react";
import { Suspense } from "react";

export const revalidate = 86400;

function Page() {
  const accordionsData = [
    {
      title: "What is a Regional eSIM?",
      body: "A Regional eSIM is one eSIM that covers multiple countries in a single data plan and one eSIM profile. For example, you can visit all the countries in the European region with a single eSIM profile.",
    },
    {
      title: "Can you use eSIM in different countries?",
      body: "Yes, you can use one eSIM in different countries, but it depends on which eSIM plan you are using. Local eSIMs work in one country, Regional eSIMs cover up to 34 countries, and Global eSIMs can be used in around 64 countries.",
    },
    {
      title: "In which regions does eSIMCard offer services?",
      body: "eSIMCard offers services in various regions, including Africa, Asia, Europe, North America, South America, and Oceania.",
    },
    {
      title: "Which is the best Regional eSIM Europe plan?",
      body: "eSIMCard offers different regional eSIM plans for Europe, with validity ranging from 7 to 30 days and data from 1GB to 20GB per month. The best plan is 10GB for a 30-day period, costing only $13.03.",
    },
    {
      title: "Which is the best Asia Regional eSIM plan?",
      body: "eSIMCard offers various Asia Regional eSIM plans, with validity ranging from 7 to 30 days and data from 1GB to 20GB per month. The best plan is 10GB for a 30-day period, priced at $34.70.",
    },
    {
      title: "Are these Regional eSIMs prepaid or postpaid?",
      body: "Regional eSIMs from eSIMCard are prepaid. This means you pay upfront for the data you want to use.",
    },
  ];
  const cardsData = [
    {
      icon: <Globe className="h-10 w-10" />,
      title: "Wide Availability",
      body: "eSIMCard provides coverage in different regions, including Africa, Asia, Europe, North America, South America, and Oceania.",
    },
    {
      icon: <DollarSign className="h-10 w-10" />,
      title: "Affordable Regional Data Plans",
      body: "The best regional eSIM offers the best regional data plans. Prices of prepaid regional eSIMs start from $3.17 with no extra roaming charges.",
    },
    {
      icon: <Signal className="h-10 w-10" />,
      title: "High Speed 5G Internet",
      body: "Get high-speed 5G internet with the world’s most affordable and flexible data plans. The internet speed will keep your equation of Money = Value balanced.",
    },
    {
      icon: <Plane className="h-10 w-10" />,
      title: "Travel the Whole Region with One eSIM",
      body: "No need to change eSIMs in every country. Travel the whole region with one eSIM—no more headaches of finding and activating eSIMs in every country you visit.",
    },
    {
      icon: <List className="h-10 w-10" />,
      title: "Multiple Options in Plans",
      body: "Data ranges from 1GB to 20GB with 7 to 30 days validity. Choose data plans based on your needs, in the region of your choice.",
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: "Instant Set-up and Activation",
      body: "Setting up and activating a regional eSIM is easy. You can instantly activate your data plan—perfect for travelers and business people who need reliable connections.",
    },
  ];

  const whyChooseCardsData = [
    {
      icon: <Scale className="h-10 w-10" />,
      title: "Flexible & Budget-Friendly Plans",
      body: "eSIMCard offers the most flexible regional data plans with data ranging from 1GB to 20GB and validity from 7 to 30 days. Budget-friendly prepaid plans start from just $3.17.",
    },
    {
      icon: <Smartphone className="h-10 w-10" />,
      title: "Ease of Use",
      body: "The ease of activation and user-friendly interface of the eSIMCard app, available on both the App Store and Play Store, make it stand out from the rest.",
    },
    {
      icon: <Gift className="h-10 w-10" />,
      title: "Exclusive Deals",
      body: "eSIMCard offers exclusive deals and gifts, including complimentary call minutes, texts, and data with wide coverage in over 200+ countries.",
    },
  ];

  const dataVoiceLinks = [
    {
      label: "Local eSIMs",
      href: "/data-voice-sms/",
    },
    {
      label: "Regional eSIMs",
      href: "/data-voice-sms/regional/",
    },
    {
      label: "Global eSIMs",
      href: "/international-esim/",
    },
  ];
  return (
    <>
      <CountryRegionsHero
        heading={
          <span className="leading-tight">
            Regional eSIM Connecting You Across Continents
          </span>
        }
        description="Buy one eSIM, Enjoy Many Destinations!"
      />

      {/* links */}
      <CountryRegionNavigation tabsLinks={dataVoiceLinks} />

      {/* regions with links and images  */}
      <section className="container mt-16">
        <h2 className="text-center font-montserrat text-h2-base font-600 leading-normal md:text-h2-md xl:text-start xl:text-h2-xl">
          Discover Regional eSIM{" "}
          <div className="mt-1 inline xl:block">
            Options In different Regions
          </div>
        </h2>
        <Suspense
          fallback={
            <section className="mt-16 grid gap-10 md:grid-cols-2 xl:grid-cols-3">
              {Array.from({ length: 20 }).map((item, index) => (
                <Skeleton className="h-[200px] w-full" key={index} />
              ))}
            </section>
          }
        >
          <RegionsWithDataVoice />
        </Suspense>
      </section>

      {/* advantages card  */}
      <section className="container mt-16">
        <h2 className="text-center font-montserrat text-h2-base font-600 md:text-h2-md xl:text-start xl:text-h2-xl">
          Benefits & Features of Regional eSIMs
        </h2>
        <div className="mt-16 grid gap-x-[4rem] gap-y-[4rem] md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {cardsData.map((item, index) => (
            <AdvantagesCard key={index} cardData={item} />
          ))}
        </div>
      </section>

      {/* why choose section  */}
      <section className="mt-16 rounded-[2.5rem] bg-primary-gradient p-12 text-background">
        <div className="flex flex-col gap-6">
          <h2 className="font-montserrat text-h2-base font-600 md:text-h2-md xl:text-h2-xl">
            Why Choose eSIMCard for Regional eSIM
          </h2>
          <p className="opacity-80">
            eSIMCard is a top choice among business and leisure travelers for
            prepaid regional eSIMs. It offers Wide Availability, Affordable
            Regional Data Plans, High Speed 5G Internet, and Multiple options in
            plans.
          </p>
          <p className="font-700 opacity-80">
            Here is why eSIMCard stands out:
          </p>

          <div className="mt-[3.25rem] grid place-content-center gap-12 md:grid-cols-2 xl:grid-cols-3 xl:gap-24">
            {whyChooseCardsData.map((item, index) => (
              <div className="flex flex-col gap-6" key={index}>
                <span>{item.icon}</span>
                <h3 className="text-lg font-600">{item.title}</h3>
                <p className="text-lg opacity-80">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQs accordionsData={accordionsData} />

      <AppInstall />
      <Reviews />
    </>
  );
}

export default Page;
