import CountryPackagesSection from "@/components/features/packages/CountryPackagesSection";
import Reviews from "@/components/my-components/carousels/Reviews";
import AppInstall from "@/components/my-components/presentational/AppInstall";
import EmailReceive from "@/components/my-components/presentational/EmailReceive";
import EsimAdvantages from "@/components/my-components/presentational/EsimAdvantages";
import EsimSteps from "@/components/my-components/presentational/EsimSteps";
import FAQs from "@/components/my-components/presentational/FAQs";
import { getPackagesOfRegion } from "@/services/packages/dataOnlyPackages";

export const revalidate = 86400;

// export async function generateStaticParams() {
//   const response = await getContinentsThatHavePackages();

//   return response.map((item) => ({ slug: item.slug }));
// }

async function Page({ params }: { params: { slug: string } }) {
  const packages = await getPackagesOfRegion(params.slug);
  const packagesData = packages.data;
  const { name } = packagesData;

  const accordionData = [
    {
      title: `Which eSIM data plan should I choose for ${name}?`,
      body: "Choose a plan based on your data needs and length of stay. eSIMCard offers various local, regional, and global plans from a duration of 1 to 30 days.",
    },
    {
      title: `How to buy eSIM in ${name}?`,
      body: "You can purchase an eSIM online from eSIMCard's website or app available for iOS and Android. Just select your desired plan, and follow the checkout process.",
    },
    {
      title: `How to activate eSIM for ${name}?`,
      body: "After purchasing, you can activate your eSIM through eSIMCard's app, available on both Android and iOS. The process involves scanning the eSIM QR code provided after purchase.",
    },
    {
      title: `How to use eSIM in ${name}?`,
      body: "Ensure your device is eSIM-supported. Install the eSIM using the provided QR code and choose it as your active cellular plan in your device settings.",
    },
    {
      title: "When does my data plan start?",
      body: "Once you have reached your destination and consumed the first byte of data, your eSIM data plan is considered active. From this point, the data usage is counted towards your plan's allowance.",
    },
    {
      title: "Can I top-up or extend the data on my eSIM?",
      body: "Yes, you can top-up or extend your data plan through the eSIMCard app, where you can manage your plans and purchase additional data as needed.",
    },
    {
      title: "Can I get a refund from eSIMCard?",
      body: "At eSIMCard, refunds are available for coverage issues, technical issues, or incorrect charges. Refund requests must be submitted within 12 days, and if approved, the amount will be returned within 1 to 3 business days.",
    },
    {
      title: "What is the fair usage policy for eSIM unlimited data plans?",
      body: "According to the Fair Usage Policy (FUP), in rare scenarios, internet speed may be reduced after using 1 GB of data daily. Normal speeds resume the next day to ensure consistent service for all users.",
    },
    {
      title: "Can I use my SIM card and eSIMCard eSIM at the same time?",
      body: "Yes, if your device supports dual SIM functionality, you can use both a physical SIM card and an eSIM simultaneously.",
    },
    {
      title: "Can I tether/use a Personal Hotspot?",
      body: "Yes, you can use tethering and set up a personal hotspot with your eSIM from eSIMCard. This allows you to share your internet connection with other devices while traveling.",
    },
  ];

  return (
    <section className="container mt-16">
      <CountryPackagesSection packages={packages} />
      <EsimSteps />
      <EsimAdvantages countryName={name} />
      <EmailReceive />
      <FAQs countryName={name} accordionsData={accordionData} />
      <Reviews />
      <AppInstall />
    </section>
  );
}

export default Page;
