import CountryPackagesSection from "@/components/features/packages/CountryPackagesSection";
import AdvantagesCard from "@/components/my-ui/cards/AdvantagesCard";
import CountryRegionsHero from "@/components/my-ui/heros/CountryRegionsHero";
import AppInstall from "@/components/my-ui/presentational/AppInstall";
import { getGlobalPackages } from "@/services/packages/dataOnlyPackages";
import {
  CloudLightning,
  LineChartIcon,
  Lock,
  Rocket,
  ShieldCheckIcon,
  Wrench,
} from "lucide-react";
import { PageParams } from "../page";
import { Metadata } from "next";
import { seoData } from "@/lib/seoConfig";
import FAQs from "@/components/my-ui/presentational/FAQs";
import CountryRegionNavigation from "@/components/features/packages/CountryRegionNavigation";

export const revalidate = Number(process.env.REVALIDATE_TIME);

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const localizedSeo = seoData[params.locale] || seoData["en"];
  return localizedSeo.globalEsim;
}

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

  const accordionData = [
    {
      title: "Which is the best eSIM for International travel?",
      body: "The best eSIM for international travel depends on your needs—destination, data usage, and budget. Look for providers with wide coverage and flexible, affordable plans. We recommend eSIMCard for top international options.",
    },
    {
      title: "Where can I buy International eSIM plans?",
      body: "You can buy international eSIM plans online through eSIM providers' websites or apps. With eSIMCard, you can purchase and download eSIM profiles directly to your device—quick and hassle-free.",
    },
    {
      title: "How much does an international eSIM cost?",
      body: "International eSIM costs vary by data, coverage, and duration. Prices range from just a few dollars for short-term use to higher for broader coverage. eSIMCard plans start at just $2.40/month.",
    },
    {
      title: "Does eSIM work on international roaming?",
      body: "Yes! eSIMs support international roaming by connecting to local networks abroad. This allows you to use data and make calls without the high fees of traditional roaming.",
    },
    {
      title: "Which eSIM is best for worldwide roaming?",
      body: "The best eSIM for worldwide roaming offers wide global coverage, letting you travel across multiple countries without switching SIMs. Look for global eSIM plans like those from eSIMCard.",
    },
    {
      title: "How does a global eSIM work?",
      body: "A global eSIM lets you download a digital SIM profile and connects to local networks across supported countries. No need for a physical SIM—just activate and you're connected.",
    },
    {
      title: "What is the difference between global eSIM and local eSIM?",
      body: "Global eSIMs offer coverage in multiple countries, perfect for multi-destination trips. Local eSIMs work in one specific country or region, ideal for long stays and often more cost-effective.",
    },
  ];

  return (
    <>
      <CountryRegionsHero
        heading={
          <>
            Global eSIMs for Exotic
            <span className="inline xl:block">International Travel</span>
          </>
        }
        description="eSIM - Fast and Affordable mode of Connectivity"
      />

      {/* Local, Regional and Global pages links for data only and data voice packages */}
      <CountryRegionNavigation tabsLinks={dataOnlyLinks} />

      {/* countries packages section */}
      <section className="container mt-16">
        <CountryPackagesSection packages={globalPackages} isGlobalPage={true} />
      </section>

      {/* advantages card  */}
      <section className="container mt-16">
        <h2 className="text-center font-montserrat text-h2-base font-600 md:text-h2-md xl:text-start xl:text-h2-xl">
          Benefits & Features of Global eSIMs
        </h2>
        <div className="mt-16 grid gap-x-[4rem] gap-y-[4rem] md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {featuresData.map((item, index) => (
            <AdvantagesCard key={index} cardData={item} index={index} />
          ))}
        </div>
      </section>

      <AppInstall />

      <FAQs accordionsData={accordionData} />
    </>
  );
}

export default Page;
