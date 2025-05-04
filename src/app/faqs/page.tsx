import FaqPageAccordions from "@/components/my-ui/accordions/FaqPageAccordions";
import PagesHero from "@/components/my-ui/heros/PagesHero";
import { PageParams } from "../page";
import { Metadata } from "next";
import { seoData } from "@/lib/seoConfig";

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const localizedSeo = seoData[params.locale] || seoData["en"];
  return localizedSeo.faqs;
}

function Page() {
  const pageData = [
    {
      heading: "Tell me more about eSimCard",
      accordionsData: [
        {
          title: "What does eSimCard provide?",
          body: "eSimCard provides eSIM profiles that you can monetize with no upfront commitment. We offer all the eSIM-enabling infrastructure needed to simplify the rollout of eSIM services for a seamless customer experience. Our platform API allows for bulk eSIM profile orders, ensuring fast QR code delivery and activation. With a pay-as-you-go model, there are no setup fees or subscriptions, giving you full flexibility. The eSIM Go technology is designed for flexibility, speed, and scalability, offering multi-network, multi-country coverage tailored to your needs.",
        },
        {
          title: "What is eSimCard?",
          body: "eSimCard enables the travel industry to capitalize on the eSIM revolution quickly and easily. Our platform integrates competitive rates with seamless eSIM QR code delivery. Travel brands can connect via our API and start offering eSIM services to their customers through websites and apps within days.",
        },
        {
          title: "Who's behind eSimCard?",
          body: "The management team behind eSimCard consists of telecom experts with over 18 years of leadership experience in the global mobile industry. Having witnessed the rapid evolution of digital markets and emerging business models, we recognized eSIM as a game changer long before traditional operators. eSIM technology allows global connectivity within minutes—eliminating the need for physical SIM cards, logistics, and number loss while promoting a greener, more sustainable solution for the planet.",
        },
      ],
    },
    {
      heading: "How does eSimCard work?",
      accordionsData: [
        {
          title: "How are eSIM profiles priced?",
          body: "Our eSIM profiles are priced very competitively. Customers range from those purchasing hundreds or thousands of eSIM profile QR codes at a time to those buying in lower volumes. Naturally, bulk purchases benefit from economies of scale. The cost includes not just the eSIM profile but also our QR code delivery system and API access, making the process seamless and efficient.",
        },
        {
          title: "What exactly are eSIM profiles?",
          body: "An eSIM profile is a virtual profile containing stored subscription information and network settings. It allows users to connect to a mobile network and utilize their allocated data package, providing a seamless connectivity experience.",
        },
        {
          title: "How can I define and order eSIM profiles?",
          body: "Defining and ordering eSIM profiles is simple with our 24/7 self-service platform. You can configure exactly what you need and purchase profiles for immediate delivery with no upfront commitment. eSIMCARD allows you to customize eSIM bundles rather than just choosing from predefined options. For further assistance, our experts are available, and you can also integrate our API to automate eSIM delivery on your website.",
        },
        {
          title: "How can I access the API?",
          body: "You can access our API by becoming an eSIMCARD customer. Once you place your first order, we’ll provide access to our API. Before that, you’ll need to complete a standard NDA process to ensure security and confidentiality.",
        },
        {
          title: "How are eSIM profiles delivered?",
          body: "eSIMCARD utilizes the latest QR code push technology to activate services instantly. Once you select the eSIM profiles (based on territory, data limit, time period, etc.), we reserve them on our infrastructure and provide QR codes for activation. Users simply scan the QR code on their device, and they’re ready to connect.",
        },
        {
          title: "What eSIM profiles are available from eSIMCARD?",
          body: "We offer hundreds of variations based on network, geographic coverage, data limits, and duration. You can select from country-specific and regional eSIM options, ordering anywhere from tens to thousands of eSIM profiles at a time. If you don’t find what you need, reach out to us. Our platform is highly flexible, and we continuously add new connectivity partners to expand our offerings.",
        },
      ],
    },
    {
      heading: "Tell me more about eSIMs",
      accordionsData: [
        {
          title: "What is an eSIM?",
          body: "eSIM is the replacement for traditional SIM cards. It is an 'embedded SIM' that stores and updates mobile network information directly on the device, eliminating the need for physical SIM cards. This means no more lost or damaged SIMs, and no need to use paperclips to access SIM trays.",
        },
        {
          title: "Why is eSIM a great opportunity for travel and hospitality?",
          body: "eSIM allows travel companies to extend customer relationships by offering mobile data services under their own brand. The mass-market adoption of eSIM in billions of devices enables seamless global connectivity. Additionally, post-Brexit EU roaming charges make eSIM an essential tool for UK travelers seeking the best mobile data deals abroad.",
        },
        {
          title: "How many eSIM profiles can be stored at once?",
          body: "This depends on the handset. For example, the iPhone 12 allows up to 10 eSIM profiles to be stored, but only one can be used at a time. Devices with a SIM card slot can use a regular SIM card and an eSIM simultaneously, known as 'Dual SIM with an eSIM.'",
        },
        {
          title: "Is eSIM needed for 5G?",
          body: "No, but eSIM and 5G evolution are linked. Currently, 40% of eSIM smartphones are 5G-capable, with average retail prices around €800. The introduction of sub-€500 eSIM phones by Apple and Google is expected to drive mass adoption of 5G smartphones. eSIM technology also helps free up space for antennas and batteries, accelerating the launch of eSIM-only devices.",
        },
        {
          title:
            "Is this the same with an eSIM-only phone like the Motorola Razr?",
          body: "Yes, but even simpler. eSIM-only phones do not require physical SIM cards, and users can switch between eSIM profiles effortlessly.",
        },
        {
          title: "How many mobile operators offer eSIM services?",
          body: "As of the end of 2020, at least 175 mobile service providers in 69 countries have commercial eSIM offerings. Europe leads with 41% of these operators. By 2025, 90% of mobile operators worldwide plan to offer eSIM services, with an estimated 2.4 billion eSIM smartphone connections globally.",
        },
        {
          title: "Which device brands support eSIM?",
          body: "By the end of 2020, 110 eSIM-enabled consumer devices were available, including smartphones, smartwatches, laptops, and tablets. Apple leads with 25 models, including iPads and iPhones (XR, XS, 11, 12, and SE). Other brands supporting eSIM include Google Pixel, Samsung, Microsoft Surface Duo, Huawei P40, Lenovo Yoga, HP Spectre Folio, and Motorola Razr.",
        },
        {
          title:
            "What happens to voice/SMS services when an eSIM data plan is added?",
          body: "Existing voice and SMS services remain active unless the user configures their phone otherwise. Devices allow users to set primary and secondary SIM profiles, meaning they can define which SIM to use for calls, SMS, and data. Some devices also support dual phone numbers simultaneously.",
        },
        {
          title: "What advantages does eSIM offer over traditional SIM cards?",
          body: "eSIM technology removes the logistical challenges of physical SIM cards, making it easier for travel and hospitality brands to offer mobile data services. Customers benefit from keeping their home SIM for calls and SMS while using an eSIM for mobile data, ensuring seamless connectivity without switching SIM cards.",
        },
        {
          title: "How do you add data plans to an eSIM?",
          body: "Adding a data plan to an eSIM is simple. Users just need to scan a QR code, and within 30 seconds, their data plan is installed and activated on their device.",
        },
        {
          title: "How easy is it to switch between multiple SIM profiles?",
          body: "Switching between SIM profiles is very easy. eSIM-enabled phones are designed to help users navigate their settings effortlessly while preventing accidental misconfiguration.",
        },
        {
          title: "How many mobile devices currently support eSIM?",
          body: "Hundreds of millions of devices support eSIM, with rapid growth. In 2020 alone, 32 million eSIM devices were shipped in Western Europe, and Samsung shipped over 200 million eSIM-enabled devices globally. eSIM profile downloads grew by 300% in 2020, and the technology is commercially available to more than 2 billion mobile users worldwide.",
        },
      ],
    },
  ];
  return (
    <>
      <PagesHero title="Frequently Ask Question" />

      {pageData.map((item, index) => (
        <section className="container mb-16 flex flex-col" key={index}>
          <h2 className="text-center font-montserrat text-h2-base font-600 md:text-h2-md xl:text-start xl:text-h2-xl">
            {item.heading}
          </h2>
          <FaqPageAccordions data={item.accordionsData} />
        </section>
      ))}
    </>
  );
}

export default Page;
