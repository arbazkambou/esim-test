// import SiteMapSection from "@/components/my-ui/presentational/SiteMapSection";
import appStore from "@/_assets/svgs/appStore.svg";
import client1 from "@/_assets/svgs/client1.svg";
import client2 from "@/_assets/svgs/client2.svg";
import client3 from "@/_assets/svgs/client3.svg";
import client4 from "@/_assets/svgs/client4.svg";
import client5 from "@/_assets/svgs/client5.svg";
import client6 from "@/_assets/svgs/client6.svg";
import playStore from "@/_assets/svgs/playStore.svg";
import CountriesSection from "@/components/features/packages/CountriesSection";
import EsimFeatures from "@/components/my-ui/cards/EsimFeatures";
import Reviews from "@/components/my-ui/carousels/Reviews";
import HomeHero from "@/components/my-ui/heros/HomeHero";
import AppInstall from "@/components/my-ui/presentational/AppInstall";
import EsimCompatible from "@/components/my-ui/presentational/EsimCompatible";
import EsimSteps from "@/components/my-ui/presentational/EsimSteps";
import FAQs from "@/components/my-ui/presentational/FAQs";
import SiteMapSection from "@/components/my-ui/presentational/SiteMapSection";
import WhyEsim from "@/components/my-ui/presentational/WhyEsim";
import { seoData } from "@/lib/seoConfig";
import { Metadata } from "next";

export const revalidate = Number(process.env.REVALIDATE_TIME);

export interface PageParams {
  locale: string;
}

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const localizedSeo = seoData[params.locale] || seoData["en"];
  return localizedSeo.home;
}

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

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://esimcard.com/",
        url: "https://esimcard.com/",
        name: "eSIM Card | Local & Regional eSIM Data for International Travel",
        isPartOf: { "@id": "https://esimcard.com/#website" },
        about: { "@id": "https://esimcard.com/#organization" },
        description:
          "Buy Local, Regional & Global eSIM for international Travel. Enjoy fast and reliable coverage at traveler-friendly prices with eSIMCard. Get your desired eSIM now.",
        breadcrumb: { "@id": "https://esimcard.com/#breadcrumb" },
        inLanguage: "en",
        potentialAction: [
          {
            "@type": "ReadAction",
            target: ["https://esimcard.com/"],
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://esimcard.com/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://esimcard.com/",
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://esimcard.com/#website",
        url: "https://esimcard.com/",
        name: "eSIM Card",
        description:
          "eSIMCard | Local & Regional eSIM Data for International Travel",
        publisher: { "@id": "https://esimcard.com/#organization" },
        alternateName: "eSIMCard LLC",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://esimcard.com/?s={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
        inLanguage: "en",
      },
      {
        "@type": "Organization",
        "@id": "https://esimcard.com/#organization",
        name: "eSIM Card",
        legalName: "eSIMCard LLC",
        url: "https://esimcard.com/",
        logo: {
          "@type": "ImageObject",
          "@id": "https://esimcard.com/#/schema/logo/image/",
          url: "https://esimcard.com/images/logo-1x1-new.png",
          contentUrl: "https://esimcard.com/images/logo-1x1-new.png",
          caption: "Stay connected everywhere, anytime",
        },
        image: { "@id": "https://esimcard.com/#/schema/logo/image/" },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: "support@esimcard.com",
        },
        address: {
          "@type": "PostalAddress",
          addressCountry: "US",
          postalCode: "32750",
          streetAddress: "2250 S. Ronald Reagan Blvd., #106, Longwood, FL",
        },
        foundingDate: "2021",
        founders: [
          { "@type": "Person", name: "Muhammad Hammad" },
          { "@type": "Person", name: "Faseih Saad" },
        ],
        sameAs: [
          "https://www.youtube.com/@esimcardofficial",
          "https://twitter.com/EsimcardApp",
          "https://www.linkedin.com/company/esimcard",
          "https://www.instagram.com/esimcard.official",
          "https://www.facebook.com/Esimcardcom",
        ],
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://esimcard.com/#ios-app",
        name: "eSIM Card",
        operatingSystem: "iOS",
        applicationCategory: "SocialNetworking",
        inLanguage: "en",
        downloadUrl: "https://apps.apple.com/app/id1627173767",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.7",
          ratingCount: "156",
        },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://esimcard.com/#android-app",
        name: "eSIM Card",
        operatingSystem: "ANDROID",
        applicationCategory: "Communication",
        inLanguage: "en",
        downloadUrl:
          "https://play.google.com/store/apps/details?id=com.activatewireless.esim_card",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          ratingCount: "230",
        },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "Service",
        "@id": "https://esimcard.com/#service",
        serviceType: "eSIM Packages for Travelers",
        provider: {
          "@type": "Organization",
          name: "eSIM Card",
          url: "https://esimcard.com/",
        },
        areaServed: {
          "@type": "GeoCircle",
          geoMidpoint: {
            "@type": "GeoCoordinates",
            latitude: "20.0",
            longitude: "0.0",
          },
          geoRadius: "20000",
        },
        description:
          "Buy reliable eSIM packages for travelers including local, regional, and global data plans. Instant activation and global coverage.",
        inLanguage: "en",
      },
      {
        "@type": "Product",
        "@id": "https://esimcard.com/#product",
        name: "eSIM for International Travel",
        description:
          "Instant eSIM for travelers. Buy Local, Regional, and Global eSIM Plans for fast and reliable coverage.",
        image: "https://esimcard.com/landing/assets/logo.png",
        sku: "esim-001",
        brand: { "@type": "Brand", name: "eSIM Card" },
        offers: {
          "@type": "Offer",
          url: "https://esimcard.com/",
          priceCurrency: "USD",
          price: "2.71",
          priceValidUntil: "2027-12-31",
          itemCondition: "https://schema.org/NewCondition",
          availability: "https://schema.org/InStock",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          reviewCount: "500",
        },
      },
    ],
  };

  return (
    <>
      {/* script to add sceham org from api  */}
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaMarkup),
        }}
        type="application/ld+json"
      />
      <HomeHero />
      <EsimFeatures />
      <CountriesSection />
      <EsimSteps />
      <EsimCompatible />
      <WhyEsim />
      <Reviews
        title="What Our Customers Have to Say About eSIMCard"
        reviews={reviews}
      />
      <SiteMapSection />
      <FAQs accordionsData={accordionData} />
      <AppInstall />
    </>
  );
}

export default Page;
