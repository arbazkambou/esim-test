import { heroTextVariants } from "@/lib/animations";
import Reveal from "@/components/animations/Reveal";
import { PageParams } from "@/app/page";
import AdvantagesCard from "@/components/my-ui/cards/AdvantagesCard";
import Reviews from "@/components/my-ui/carousels/Reviews";
import CountryRegionsHero from "@/components/my-ui/heros/CountryRegionsHero";
import AppInstall from "@/components/my-ui/presentational/AppInstall";
import FAQs from "@/components/my-ui/presentational/FAQs";
import WhyRegionalEsim from "@/components/my-ui/presentational/WhyRegionalEsim";
import { Skeleton } from "@/components/ui/skeleton";
import { seoData } from "@/lib/seoConfig";
import { DollarSign, Globe, List, Plane, Signal, Zap } from "lucide-react";
import { Metadata } from "next";
import { Suspense } from "react";
import appStore from "@/_assets/svgs/appStore.svg";
import client1 from "@/_assets/svgs/client1.svg";
import client2 from "@/_assets/svgs/client2.svg";
import client3 from "@/_assets/svgs/client3.svg";
import client4 from "@/_assets/svgs/client4.svg";
import client5 from "@/_assets/svgs/client5.svg";
import client6 from "@/_assets/svgs/client6.svg";
import playStore from "@/_assets/svgs/playStore.svg";
import RegionsWithDataVoice from "@/components/features/packages/RegionsWithDataVoice";
import CountryRegionNavigation from "@/components/features/packages/CountryRegionNavigation";

export const revalidate = Number(process.env.REVALIDATE_TIME);

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const localizedSeo = seoData[params.locale] || seoData["en"];
  return localizedSeo.regionalDataVoiceSms;
}

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
      body: "There is no need to change eSIMs in every country, travel the whole region with one eSIM. No more headache of finding and activating eSIM in every country you visit. Especially when you need internet throughout the region.",
    },
    {
      icon: <List className="h-10 w-10" />,
      title: "Multiple Options in Plans",
      body: "Data ranges from 1GB to 20GB with a 7 Days to 30 Days validity. So, you can choose data plans according to your data needs, in the region of your need.",
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: "Instant Set-up and Activation",
      body: "Setting up and activating Regional eSIM is quite easy, You can instantly activate your data plan. It's perfect for travelers and busy business-related people. It ensures you’re connected when you need a connection.",
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

  const reviews = [
    {
      name: "Liam Thomas",
      username: "liam_northamerica",
      date: "Sep 25, 2023",
      title: "Recommended",
      review:
        "I consider myself the most difficult person to make happy. But eSIMCard has done a great job. My job makes me travel across North America, now at least my connection headache is taken care of. Recommended.",
      store: appStore,
      imgSrc: client1,
    },
    {
      name: "Marie Dubois",
      username: "marie_d_travel",
      date: "Sep 23, 2023",
      title: "Cooperative Support",
      review:
        "I have been using eSIMCard for the last few months, but I love their customer support, which made me write this review. I got stuck while adding a new data plan to my eSIM, their support team was really cooperative and resolved it.",
      store: playStore,
      imgSrc: client2,
    },
    {
      name: "Ethan Kim",
      username: "ethan_k_global",
      date: "Aug 23, 2023",
      title: "Saved Plenty",
      review:
        "Changing my residence between Australia and Fiji. Connectivity always has been an issue for me. Changing SIM cards and data plans takes some time and money. eSIMCard has saved plenty of that. Would keep using it.",
      store: appStore,
      imgSrc: client3,
    },
    {
      name: "Sarah Jones",
      username: "sarah_downunder",
      date: "Jun 09, 2023",
      title: "Affordability",
      review:
        "I travelled the whole African Region with eSIMCard’s Regional eSIM for Africa and it didn’t drop the signals for a second. And for around $34, it lasted the whole month enough for my routine office work. If you’re looking for a good connection with affordable rates, I recommend eSIMCard.",
      store: playStore,
      imgSrc: client4,
    },
    {
      name: "Alex Chen",
      username: "alex_c_africa",
      date: "May 17, 2023",
      title: "Reliable eSIM Connection",
      review:
        "In Asia, I used to struggle to get a reliable eSIM connection, but that didn’t bother me half of the way. I tried eSIMCard during my visit to Japan, It made my experience worry-free. I usually don’t write reviews but eSIMCard was worth it. Thanks for the services.",
      store: appStore,
      imgSrc: client5,
    },
    {
      name: "Ava Rodriguez",
      username: "ava_in_europe",
      date: "Aug 23, 2023",
      title: "Affordable eSIM Plans",
      review:
        "Living in Europe means a constant struggle to get affordable eSIM plans. Getting 20GB of data in just 21£ for a month was a gift for me. On top, their app is user-friendly and has an easy-to-use interface. Loved it.",
      store: playStore,
      imgSrc: client6,
    },
  ];
  return (
    <>
      <CountryRegionsHero
        heading={<span>Regional eSIM Connecting You Across Continents</span>}
        description="Buy one eSIM, Enjoy Many Destinations!"
      />

      {/* Local, Regional and Global pages links for data only and data voice packages */}
      <CountryRegionNavigation tabsLinks={dataVoiceLinks} />

      {/* regions with data voice packages  */}
      <section className="container mt-16">
        <Reveal variants={heroTextVariants}>
          <h2 className="text-center font-montserrat text-h2-base font-600 leading-normal md:text-h2-md xl:text-start xl:text-h2-xl">
            Discover Regional eSIM{" "}
            <div className="mt-1 inline xl:block">
              Options In different Regions
            </div>
          </h2>
        </Reveal>

        <Suspense
          fallback={
            <section className="mt-16 grid gap-10 md:grid-cols-2 xl:grid-cols-3">
              {Array.from({ length: 20 }).map((item, index) => (
                <Skeleton className="h-[200px] w-full" key={index} />
              ))}
            </section>
          }
        >
          {/* just a wrapper to fetch regions that have data voice package  */}
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
            <AdvantagesCard key={index} cardData={item} index={index} />
          ))}
        </div>
      </section>

      {/* why choose section  */}
      <WhyRegionalEsim />

      <FAQs accordionsData={accordionsData} />

      <AppInstall />
      <Reviews
        reviews={reviews}
        title="What Our Customers Have to Say About eSIM Card"
      />
    </>
  );
}

export default Page;
