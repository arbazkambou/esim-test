import AdvantagesCard from "@/components/my-ui/cards/AdvantagesCard";
import PageTextCard from "@/components/my-ui/cards/PageTextCard";
import { PackageCardSkelton } from "@/components/my-ui/fallbacks/PackageCardSkelton";
import CountryRegionsHero from "@/components/my-ui/heros/CountryRegionsHero";
import AppInstall from "@/components/my-ui/presentational/AppInstall";
import FAQs from "@/components/my-ui/presentational/FAQs";
import { Card } from "@/components/ui/card";
import { Gift, Globe, HandHeart, Headphones, Lock, Tags } from "lucide-react";
import { Suspense } from "react";
import { PageParams } from "../page";
import { Metadata } from "next";
import { seoData } from "@/lib/seoConfig";
import CountriesWithDataOnly from "@/components/features/packages/CountriesWithDataOnly";
import CountryRegionNavigation from "@/components/features/packages/CountryRegionNavigation";
import FooterLink from "@/components/my-ui/links/FooterLink";

export const revalidate = Number(process.env.REVALIDATE_TIME);

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
      body: (
        <>
          An eSIM (embedded SIM) is a digital SIM that allows you to activate a
          cellular plan from your carrier without having to use a physical
          nano-SIM.{" "}
          <FooterLink
            href={"/blog/info/what-is-esim/"}
            className="inline text-primary underline underline-offset-2"
          >
            Read More
          </FooterLink>
        </>
      ),
    },
    {
      title: "How to activate eSIM on iPhone?",
      body: (
        <>
          To activate an eSIM on your iPhone, go to Settings &gt; Cellular &gt;
          Add Cellular Plan, and then use your iPhone to scan the QR code
          provided by your carrier. Follow the on-screen instructions.{" "}
          <FooterLink
            href={"/blog/iphone/esim-card-installation-tips/"}
            className="inline text-primary underline underline-offset-2"
          >
            Read More
          </FooterLink>
        </>
      ),
    },
    {
      title: "How to get an eSIM?",
      body: (
        <>
          Getting an eSIM is easy. Just select eSIM and pick a plan that's right
          for you. Pay for it. Then enjoy your data instantly. That's all it
          takes to get connected with an eSIM!{" "}
          <FooterLink
            href={"/blog/how-to/how-to-buy-esim-online/"}
            className="inline text-primary underline underline-offset-2"
          >
            Read More
          </FooterLink>
        </>
      ),
    },
    {
      title: "How to get a QR code for eSIM?",
      body: (
        <>
          We email you a unique QR code when you buy an eSIM plan. Scan the QR
          code to instantly activate your eSIM. It's quick and easy!{" "}
          <FooterLink
            href="/blog/how-to-get-esim-qr-code/"
            className="inline text-primary underline underline-offset-2"
          >
            Read More
          </FooterLink>
        </>
      ),
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

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://esimcard.com/esim/",
        url: "https://esimcard.com/esim/",
        name: "Buy eSIM for Travel | Global, Regional, Data & Voice Plans",
        description:
          "Explore international eSIMs for 200+ countries and regions. Instant activation, secure connections, affordable travel eSIM plans from eSIMCard.",
        isPartOf: { "@id": "https://esimcard.com/#website" },
        about: { "@id": "https://esimcard.com/#organization" },
        breadcrumb: { "@id": "https://esimcard.com/esim/#breadcrumb" },
        mainEntity: { "@id": "https://esimcard.com/esim/#catalog" },
        inLanguage: "en",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://esimcard.com/esim/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://esimcard.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "eSIM Plans",
            item: "https://esimcard.com/esim/",
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://esimcard.com/#website",
        url: "https://esimcard.com/",
        name: "eSIM Card",
        description:
          "eSIM Card | Local, Regional, and Global eSIM Plans for International Travel.",
        publisher: { "@id": "https://esimcard.com/#organization" },
        alternateName: "eSIM Card LLC",
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
        legalName: "eSIM Card LLC",
        url: "https://esimcard.com/",
        logo: {
          "@type": "ImageObject",
          "@id": "https://esimcard.com/#/schema/logo/image/",
          url: "https://esimcard.com/images/logo-1x1-new.png",
          contentUrl: "https://esimcard.com/images/logo-1x1-new.png",
          caption: "eSIM Card Logo - Stay connected everywhere.",
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "Customer Support",
          email: "support@esimcard.com",
        },
        address: {
          "@type": "PostalAddress",
          addressCountry: "US",
          postalCode: "32750",
          streetAddress: "250 S. Ronald Reagan Blvd., #106, Longwood, FL",
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
        "@type": "OfferCatalog",
        "@id": "https://esimcard.com/esim/#catalog",
        name: "eSIM Categories",
        url: "https://esimcard.com/esim/",
        numberOfItems: 5,
        itemListElement: [
          {
            "@type": "OfferCatalog",
            name: "Global eSIM Plans",
            itemListElement: [
              {
                "@type": "Product",
                "@id": "https://esimcard.com/esim/global/#product",
                name: "Global eSIM",
                image:
                  "https://esimcard.com/landing/countries_images/global.jpg",
                url: "https://esimcard.com/esim/global/",
                description:
                  "Global eSIM covering 100+ countries with seamless 4G/5G connectivity.",
                offers: {
                  "@type": "Offer",
                  priceCurrency: "USD",
                  price: "5.23",
                  availability: "https://schema.org/InStock",
                },
              },
            ],
          },
          {
            "@type": "OfferCatalog",
            name: "Regional eSIM Plans",
            itemListElement: [
              {
                "@type": "Product",
                "@id": "https://esimcard.com/esim/europe/#product",
                name: "Europe eSIM",
                image: "https://esimcard.com/landing/continents_images/eu.jpg",
                url: "https://esimcard.com/esim/europe/",
                description:
                  "One eSIM for 30+ European countries with high-speed internet access.",
                offers: {
                  "@type": "Offer",
                  priceCurrency: "USD",
                  price: "2.54",
                  availability: "https://schema.org/InStock",
                },
              },
            ],
          },
          {
            "@type": "OfferCatalog",
            name: "Country-Specific eSIM Plans",
            itemListElement: [
              {
                "@type": "Product",
                "@id": "https://esimcard.com/esim/united-states/#product",
                name: "United States eSIM",
                image: "https://esimcard.com/landing/countries_images/us.jpg",
                url: "https://esimcard.com/esim/united-states/",
                description:
                  "Stay connected across the USA with high-speed LTE eSIM data plans.",
                offers: {
                  "@type": "Offer",
                  priceCurrency: "USD",
                  price: "2.71",
                  availability: "https://schema.org/InStock",
                },
              },
              {
                "@type": "Product",
                "@id": "https://esimcard.com/esim/united-kingdom/#product",
                name: "United Kingdom eSIM",
                image: "https://esimcard.com/landing/countries_images/gb.jpg",
                url: "https://esimcard.com/esim/united-kingdom/",
                description:
                  "Reliable eSIM plan for visitors traveling to the United Kingdom.",
                offers: {
                  "@type": "Offer",
                  priceCurrency: "USD",
                  price: "2.12",
                  availability: "https://schema.org/InStock",
                },
              },
            ],
          },

          {
            "@type": "OfferCatalog",
            name: "Voice + Data eSIM Plans",
            itemListElement: [
              {
                "@type": "Product",
                "@id": "https://esimcard.com/esim/global-voice-data/#product",
                name: "Global Voice + Data eSIM",
                image:
                  "https://esimcard.com/landing/countries_images/global.jpg",
                url: "https://esimcard.com/esim/global-voice-data/",
                description:
                  "Complete voice and data eSIM coverage for travelers visiting multiple countries worldwide.",
                offers: {
                  "@type": "Offer",
                  priceCurrency: "USD",
                  price: "34.29",
                  availability: "https://schema.org/InStock",
                },
              },
            ],
          },
        ],
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

      {/* hero section */}
      <CountryRegionsHero
        heading={
          <>
            eSIMs for Easy
            <span className="mt-2 inline xl:block"> Travel Connectivity</span>
          </>
        }
        description="eSIM - Fast and Affordable mode of Connectivity"
      />

      {/* Local, Regional and Global pages links for data only and data voice packages */}
      <CountryRegionNavigation tabsLinks={dataOnlyLinks} />

      {/* countries packages section with starting price */}
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
          {/* just a wrapper to fetch countries that data only packages  */}
          <CountriesWithDataOnly />
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
