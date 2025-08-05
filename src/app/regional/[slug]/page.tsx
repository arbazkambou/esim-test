import appStore from "@/_assets/svgs/appStore.svg";
import client1 from "@/_assets/svgs/client1.svg";
import client2 from "@/_assets/svgs/client2.svg";
import client3 from "@/_assets/svgs/client3.svg";
import client4 from "@/_assets/svgs/client4.svg";
import client5 from "@/_assets/svgs/client5.svg";
import client6 from "@/_assets/svgs/client6.svg";
import playStore from "@/_assets/svgs/playStore.svg";
import CountryPackagesSection from "@/components/features/packages/CountryPackagesSection";
import Reviews from "@/components/my-ui/carousels/Reviews";
import AppInstall from "@/components/my-ui/presentational/AppInstall";
import EmailReceive from "@/components/my-ui/presentational/EmailReceive";
import EsimAdvantages from "@/components/my-ui/presentational/EsimAdvantages";
import EsimSteps from "@/components/my-ui/presentational/EsimSteps";
import FAQs from "@/components/my-ui/presentational/FAQs";
import { cleanString } from "@/helpers/cleanString";
import { generateDynamicSeo } from "@/helpers/generateDynamicSeo";
import {
  getContinentsThatHavePackages,
  getPackagesOfRegion,
} from "@/services/packages/dataOnlyPackages";
import { notFound } from "next/navigation";

export const revalidate = Number(process.env.REVALIDATE_TIME);

export async function generateStaticParams() {
  const response = await getContinentsThatHavePackages();

  return response.map((item) => ({ slug: item.slug }));
}

interface PropsType {
  params: { slug: string };
}

export async function generateMetadata({ params }: PropsType) {
  let packagesResponse;

  try {
    packagesResponse = await getPackagesOfRegion(params.slug);
  } catch (error) {
    if (
      error instanceof Error &&
      cleanString(error.message).includes("not found")
    ) {
      return notFound();
    } else {
      throw error;
    }
  }

  const {
    meta_title,
    meta_description,
    meta_keywords,

    data: { image_url, created_at, updated_at },
  } = packagesResponse;

  return generateDynamicSeo({
    meta_title,
    meta_description,
    meta_keywords,
    url: `https://esimcard.com/regional/${params.slug}/`,
    image: image_url || "https://esimcard.com/images/logo-1x1-new.png",
    publishedTime: created_at || updated_at || new Date().toISOString(),
    modifiedTime: created_at || updated_at || new Date().toISOString(),
  });
}

async function Page({ params }: PropsType) {
  let packages;

  try {
    packages = await getPackagesOfRegion(params.slug);
  } catch (error) {
    if (
      error instanceof Error &&
      cleanString(error.message).includes("not found")
    ) {
      return notFound();
    } else {
      throw error;
    }
  }
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

  const reviews = [
    {
      name: "Fajri H",
      username: "fajri_h23",
      date: "Aug 23, 2023",
      title: "Ease of Internet Access",
      review:
        "I have recently traveled to Spain and used this esim service. This esim service was my lifesaver. It makes it easy to access the internet during my trip. If you're gonna travel abroad, I recommend this service.",
      store: appStore,
      imgSrc: client1,
    },
    {
      name: "Sakura",
      username: "sakura_travels",
      date: "Sep 25, 2023",
      title: "Big Savings",
      review:
        "This is the first pay-as-you-go eSIM I have ever used. After I got a stint of $60 for roaming in Turkey, I decided to discover some affordable alternatives. On my next trip to Uzbekistan, I used eSIMCard and found it very reasonable and had a good connection. I Recommend this eSIM for international travel.",
      imgSrc: client2,
      store: playStore,
    },
    {
      name: "Fergus E",
      username: "fergus_explorer",
      date: "Sep 23, 2023",
      title: "Convenience",
      review:
        "I used to travel with local eSIM for every country. Then, I discovered their Global and Regional eSIM, with which I can travel to multiple countries with one package. Super Useful and genuinely exceptional. It's definitely a thing to keep and use again.",
      imgSrc: client4,
      store: appStore,
    },
    {
      name: "Amelia J",
      username: "amelia_journey",
      date: "Aug 23, 2023",
      title: "Excellent Customer Service",
      review:
        "At first, I felt frustrated when I had some issues with activation. But when I contacted their support team, I found out that the problem was on my side. Thanks to the clear instructions from the support team, my issue got resolved in minutes. After that, I experienced high-quality internet. Satisfied!",
      imgSrc: client6,
      store: appStore,
    },
    {
      name: "David Andrew",
      username: "david_andrew_90",
      date: "Jun 09, 2023",
      title: "Affordability",
      review:
        "Right after landing in Barcelona, Spain, I activated my eSIMCard connection. It was a smooth experience, and immediate access to texts, WhatsApp, and more. I became a fan of unthrottled connectivity and affordable packages. I highly recommend eSIMCard for travelers.",
      imgSrc: client5,
      store: appStore,
    },
    {
      name: "John William",
      username: "john_w_traveler",
      date: "May 17, 2023",
      title: "Multiple Plans",
      review:
        "I enjoyed eSIMCard’s service during my visit to Europe. I traveled Europe with a single Regional eSIM plan. No High roaming charges and no change of plan during the entire tour. I am completely satisfied and will use it again.",
      imgSrc: client3,
      store: appStore,
    },
  ];

  return (
    <>
      {/* for injecting sceham markup from api  */}
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(packages.scriptData),
        }}
        type="application/ld+json"
      />

      {/* country data only packages  */}
      <section className="container mt-16">
        <CountryPackagesSection packages={packages} />
      </section>

      {/* animated three steps  */}
      <EsimSteps
        title={`How does eSIM ${name} Work?`}
        description={`Search for “${name}” and Pick your data plan.`}
      />

      {/* advantages section  */}
      <EsimAdvantages countryName={name} />

      {/* email receieve component  */}
      <EmailReceive />

      {/* faq component  */}
      <FAQs countryName={name} accordionsData={accordionData} />

      {/* app install component */}
      <AppInstall />

      {/* reviews of client  */}
      <Reviews
        reviews={reviews}
        title="What Our Customers Have to Say About eSIM Card"
      />
    </>
  );
}

export default Page;
