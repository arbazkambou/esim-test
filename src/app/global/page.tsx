import CountryPackagesSection from "@/components/features/packages/CountryPackagesSection";
import AdvantagesCard from "@/components/my-components/cards/AdvantagesCard";
import CountryRegionsHero from "@/components/my-components/heros/homepage/CountryRegionsHero";
import AppInstall from "@/components/my-components/presentational/AppInstall";
import CountryRegionNavigation from "@/components/my-components/shared/CountryRegionNavigation";
import { getGlobalPackages } from "@/services/packages/dataOnlyPackages";
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
  const globalPackages = await getGlobalPackages();
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
      <CountryRegionsHero
        heading={
          <>
            Global eSIMs for Exotic
            <span className="mt-2 inline xl:block">International Travel</span>
          </>
        }
        description="eSIM - Fast and Affordable mode of Connectivity"
      />

      {/* links */}
      <CountryRegionNavigation tabsLinks={dataOnlyLinks} />

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
    </>
  );
}

export default Page;
