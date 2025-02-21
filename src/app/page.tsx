import CountriesSection from "@/components/features/packages/country/CountriesSection";
import EsimFeatures from "@/components/my-components/cards/EsimFeatures";
import Reviews from "@/components/my-components/carousels/Reviews";
import HomeHero from "@/components/my-components/heros/homepage/HomeHero";
import AppInstall from "@/components/my-components/presentational/AppInstall";
import EsimCompatible from "@/components/my-components/presentational/EsimCompatible";
import EsimSteps from "@/components/my-components/presentational/EsimSteps";
import FAQs from "@/components/my-components/presentational/FAQs";
// import SiteMapSection from "@/components/my-components/presentational/SiteMapSection";
import WhyEsim from "@/components/my-components/presentational/WhyEsim";

export const revalidate = 3600;
function Page() {
  const accordionData = [
    {
      title: "Is eSIM good for travel?",
      body: "Absolutely! eSIM is fantastic for travel. It lets you hop from one country to another without the hassle of swapping SIM cards. Plus, you get to enjoy local data rates!",
    },
    {
      title: "Which eSIM is best for Travelling?",
      body: "eSIMCard is an excellent choice for travelers. It offers global, regional, and local eSIM options so that you can stay connected almost anywhere in the world.",
    },
    {
      title: "Can you install eSIM before Travelling?",
      body: "Yes, you can! Setting up your eSIMCard before you start your journey is super easy. Just scan a QR code or enter the activation code provided by email, and you're all set to go.",
    },
    {
      title: "Can I use eSIM in any country?",
      body: "eSIMCard has got you covered in nearly every corner of the globe, with coverage in over 200+ countries. While most countries support eSIM, checking if your destination is on the list is always good.",
    },
    {
      title: "Which devices are eSIM Compatible?",
      body: "Many modern devices are eSIM compatible. This includes the latest iPhone series, Samsung Galaxy S20 to S23, Google Pixel 4 and later, and even some iPads. Check the list of all eSIM-supported devices.",
    },
    {
      title: "How do I know if my eSIM is active?",
      body: "Once you've installed your eSIMCard, you can check your device's network settings. You're good to go if it shows the network name and you've got signal bars!",
    },
    {
      title: "What countries don't accept eSIM?",
      body: "While eSIM is widely accepted, a few places might still be catching up. Like use of eSIM in India and Russia is not common. It's best to check eSIMCard's country list on our website or app for the latest info.",
    },
  ];

  return (
    <>
      <HomeHero />
      <EsimFeatures />
      <CountriesSection />
      <EsimSteps />
      <EsimCompatible />
      <WhyEsim />
      <Reviews />
      {/* <SiteMapSection /> */}
      <FAQs accordionsData={accordionData} />
      <AppInstall />
    </>
  );
}

export default Page;
