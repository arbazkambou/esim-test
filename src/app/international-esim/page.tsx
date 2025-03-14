import CountryPackagesSection from "@/components/features/packages/CountryPackagesSection";
import AdvantagesCard from "@/components/my-components/cards/AdvantagesCard";
import CountryRegionsHero from "@/components/my-components/heros/homepage/CountryRegionsHero";
import AppInstall from "@/components/my-components/presentational/AppInstall";
import FAQs from "@/components/my-components/presentational/FAQs";
import CountryRegionNavigation from "@/components/my-components/shared/CountryRegionNavigation";
import { getDataVoiceGlobalPackages } from "@/services/packages/dataVoicePackages";
import {
  CloudLightning,
  LineChartIcon,
  Lock,
  Rocket,
  ShieldCheckIcon,
  Wrench,
} from "lucide-react";

export const revalidate = 86400;

async function Page() {
  const globalPackages = await getDataVoiceGlobalPackages();
  const featuresData = [
    {
      title: "Secure Connections",
      icon: <Lock className="h-10 w-10" />,
      body: "With global travel eSIMs, your online activities are safe. These SIMs use advanced security measures to protect your data, so you can browse, stream, and communicate without worrying about your privacy.",
    },
    {
      title: "Easy Setup",
      icon: <Wrench className="h-10 w-10" />,
      body: "Setting up an international eSIM is a breeze. You don't need to swap out physical SIM cards or visit a store. With just a few taps on your device, you're ready to go, making it perfect for travelers and busy people.",
    },
    {
      title: "High-Speed Connectivity",
      icon: <CloudLightning className="h-10 w-10" />,
      body: "Enjoy fast internet speeds wherever you are. Travel eSIMs connect you to the best available networks, ensuring you can quickly access websites, upload photos, and stream videos without interruption.",
    },
    {
      title: "Flexible Plans",
      icon: <LineChartIcon className="h-10 w-10" />,
      body: "Choose a plan that fits your needs. Whether you're a light user who just needs emails and maps or a heavy user who streams and games, you have a flexible plan. Plus, you can change or cancel anytime without hassle.",
    },
    {
      title: "Instant Activation",
      icon: <Rocket className="h-10 w-10" />,
      body: "Say goodbye to waiting. With the best eSIM for International travel, you can instantly activate your data plan, ensuring you're connected when needed. Perfect for last-minute trips or sudden changes in plans.",
    },
    {
      title: "Privacy Protection",
      icon: <ShieldCheckIcon className="h-10 w-10" />,
      body: "Your personal information stays private. Global eSIMs don't require you to share sensitive details with local SIM providers, offering an extra layer of privacy protection while you travel.",
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
  const accordionsData = [
    {
      title: "Which is the best eSIM for International travel?",
      body: "The best eSIM for international travel depends on your needs, such as where you're going, how much data you need, and your budget. Look for eSIM providers that offer wide coverage, flexible plans, and affordable rates. We recommend eSIMCard for the best international plans.",
    },
    {
      title: "Where can I buy International eSIM plans?",
      body: "You can buy international eSIM plans online from eSIM providers' websites or apps. eSIMCard allows you to purchase and download eSIM profiles directly to your device, making the process quick and easy.",
    },
    {
      title: "How much does an international eSIM cost?",
      body: "The cost of an international eSIM varies based on the data amount, coverage area, and plan duration. Prices can range from a few dollars for short-term, low-data plans to more for plans with extensive coverage and higher data limits. eSIMCard data plans start from 2.4$/Month.",
    },
    {
      title: "Does eSIM work on international roaming?",
      body: "Yes, eSIMs work on international roaming. When you use an eSIM abroad, it connects to local networks, allowing you to use data and make calls without the high costs typically associated with traditional roaming.",
    },
    {
      title: "Which eSIM is best for worldwide roaming?",
      body: "The best eSIM for worldwide roaming offers extensive global coverage, allowing you to use your device in multiple countries without changing SIMs. Look for eSIMs with global plans that include many countries and regions.",
    },
    {
      title: "How does a global eSIM work?",
      body: "A global eSIM works by letting you download a digital SIM profile onto your device before or during your travels. Once activated, it connects to local networks in the covered countries, giving you access to data and calls without needing a physical SIM card.",
    },
    {
      title: "What is the difference between global eSIM and local eSIM?",
      body: "The main difference is coverage. A global eSIM provides connectivity in multiple countries worldwide, ideal for travelers visiting several places. A local eSIM offers services in a specific country or region, which can be more cost-effective if you're staying in one place.",
    },
  ];

  return (
    <>
      <CountryRegionsHero
        heading={
          <span className="leading-5">
            Global eSIMs for Travelers | Stay connected worldwide at affordable
            rates
          </span>
        }
        description="eSIM - Fast and Affordable mode of Connectivity"
      />

      {/* links */}
      <CountryRegionNavigation tabsLinks={dataVoiceLinks} />

      <section className="container mt-16">
        <CountryPackagesSection packages={globalPackages} />
      </section>
      {/* advantages card  */}
      <section className="container mt-16">
        <h2 className="text-center font-montserrat text-h2-base font-600 md:text-h2-md xl:text-start xl:text-h2-xl">
          Benefits & Features of Global eSIMs
        </h2>
        <div className="mt-16 grid gap-x-[4rem] gap-y-[4rem] md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {featuresData.map((item, index) => (
            <AdvantagesCard key={index} cardData={item} />
          ))}
        </div>
      </section>

      <AppInstall />
      <FAQs accordionsData={accordionsData} />
    </>
  );
}

export default Page;
