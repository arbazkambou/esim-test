import appStore from "@/_assets/svgs/appStore.svg";
import client1 from "@/_assets/svgs/client1.svg";
import client2 from "@/_assets/svgs/client2.svg";
import client3 from "@/_assets/svgs/client3.svg";
import client4 from "@/_assets/svgs/client4.svg";
import client5 from "@/_assets/svgs/client5.svg";
import AdvantagesCard from "@/components/my-ui/cards/AdvantagesCard";
import AdvantagesCardPrimary from "@/components/my-ui/cards/AdvantagesCardPrimary";
import Reviews from "@/components/my-ui/carousels/Reviews";
import AppInstall from "@/components/my-ui/presentational/AppInstall";
import FAQs from "@/components/my-ui/presentational/FAQs";
import PagesHero from "@/components/my-ui/heros/PagesHero";
import { seoData } from "@/lib/seoConfig";
import {
  DollarSign,
  Eye,
  Globe,
  MessageCircle,
  PhoneCall,
  Smartphone,
  Unlock,
  Wallet,
} from "lucide-react";
import { Metadata } from "next";
import { PageParams } from "../page";

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const localizedSeo = seoData[params.locale] || seoData["en"];
  return localizedSeo.internationalCalling;
}

function Page() {
  const topFeaturesCards = [
    {
      title: "Call Abroad For Less",
      body: "With eSIMCard, calling abroad has never been more affordable. Our service offers you the convenience of making international calls at significantly reduced rates. eSIMCard ensures you can reach out to friends, family, or business contacts without worrying about excessive costs.",
      icon: <PhoneCall className="h-10 w-10" />,
    },
    {
      title: "See Rate Before Calling",
      body: "Enjoy complete transparency with eSIMCard's app, where prices per minute are clearly listed. Before you make a call, simply check the app to see the exact rate you'll be charged. With eSIMCard, there are no hidden fees or unexpected costs.",
      icon: <Eye className="h-10 w-10" />,
    },
    {
      title: "No Boundness with Contracts",
      body: "Experience the Freedom of No Contract Boundaries: Our service is all about giving you the flexibility and freedom you deserve. With no contracts to tie you down, you're free to explore, connect, and communicate on your terms.",
      icon: <Unlock className="h-10 w-10" />,
    },
    {
      title: "Flexible & Budget-Friendly",
      body: "Discover the freedom of flexibility with our budget-friendly plans, designed to fit your unique travel needs. Our flexible options ensure that you only pay for what you use, making international connectivity both affordable and adaptable. Our plans cater to every kind of journey, offering you the perfect balance of cost-efficiency and convenience.",
      icon: <Wallet className="h-10 w-10" />,
    },
    {
      title: "International Texting",
      body: "eSIMCard’s International Texting feature is designed for seamless communication. Our eSIM ensures you can send and receive texts globally without the worry of exorbitant roaming charges. Experience the ease of keeping in touch with family, friends, and colleagues from anywhere in the world.",
      icon: <MessageCircle className="h-10 w-10" />,
    },
  ];

  const whyEsimcards = [
    {
      title: "Affordable Rates",
      body: "eSIMCard offers some of the most cheap international calls in the market, allowing you to connect globally without worrying about high costs.",
      icon: <DollarSign className="h-10 w-10" />,
    },
    {
      title: "Ease of Use",
      body: "Learning how to call internationally is straightforward with eSIMCard. Our user-friendly interface ensures a hassle-free experience, whether you're calling international from the US or any other part of the world.",
      icon: <Smartphone className="h-10 w-10" />,
    },
    {
      title: "Versatile Solutions",
      body: "The service includes an international calling app, which simplifies the process of making calls abroad. This app is a modern alternative to traditional international calling cards, offering greater flexibility and convenience.",
      icon: <Globe className="h-10 w-10" />,
    },
  ];

  const accordionData = [
    {
      title: "What does eSIMCard provide?",
      body: "eSIM profile that you can monetize with no upfront commitment. Plus, we have all the eSIM-enabling infrastructure you need to make eSIM services simple to roll out for a seamless customer experience. Connect to our platform API and bulk order eSIM profiles for fast, easy QR code delivery and activation by our customers. And because ordering is on a pay-as-you-go basis, you won't get tied in. Zero setup fees—no subscription. The eSIM Go technology approach is built for flexibility, speed, and scale using market-leading components and multi-network, multi-country eSIM coverage you can tailor to your precise needs!",
    },
    {
      title: "How to Call an International Number with eSIMCard?",
      body: "While the website doesn't provide specific instructions, typically, making an international call with an eSIM would involve selecting the eSIM as your primary data plan and dialing the international number, possibly with the required country code.",
    },
    {
      title: "How Can eSIMCard Help Make Cheap International Calls?",
      body: "eSIMCard offers cost-effective data plans that could be used for internet-based calling services like VoIP, which can reduce the cost of international calls.",
    },
    {
      title: "Tips for Making International Phone Calls with eSIMCard?",
      body: "Ensure a stable internet connection, check for any roaming charges, and use VoIP services for cheaper rates.",
    },
    {
      title: "Where to Find eSIMCard's International Call Rates?",
      body: "You can get through the information on eSIMCard App. After going to `Calling`, select the `Calling Rates` tab. There you can see inbound and outbound Calling and SMS Rates for each country.",
    },
  ];

  const reviews = [
    {
      name: "Olivia",
      username: "olivia_world",
      date: "May 23, 2023",
      title: "Understanding Global eSIMs",
      review:
        "Before I switched, I didn't fully grasp how a global eSIM worked. Now, I can't imagine traveling without it. The ability to connect in most countries with a single setup is just amazing. It's like having a universal key to the internet, no matter where you are.",
      store: appStore,
      imgSrc: client1,
    },
    {
      name: "Liam",
      username: "liam_globetrotter",
      date: "Jan 23, 2024",
      title: "Local vs. Global: A Clear Winner",
      review:
        "I used to juggle between local SIMs every time I traveled. After trying a global eSIM, I'll never go back. The convenience of staying connected across multiple countries with one eSIM is unmatched. It's clear to me now; global eSIMs are the way to go for international travel.",
      store: appStore,
      imgSrc: client2,
    },
    {
      name: "Alex",
      username: "alex_nomad",
      date: "Jul 09, 2023",
      title: "Traveling Made Simple",
      review:
        "Switching to an international eSIM was a game-changer for my travels. I visited three countries last month, and not once did I have to worry about finding a local SIM card. The easy setup had me connected the moment I landed. It's incredible how seamless the whole process is!",
      store: appStore,
      imgSrc: client3,
    },
    {
      name: "Samantha",
      username: "samantha_traveler",
      date: "May 17, 2023",
      title: "Cost-Effective Connectivity",
      review:
        "I always dreaded my phone bills after international trips, but not anymore. With my international eSIM, I knew exactly how much I was spending. The flexible plans meant I could choose one that suited my needs without overpaying. No surprises, just straightforward, affordable rates.",
      store: appStore,
      imgSrc: client4,
    },
    {
      name: "Jordan",
      username: "jordan_adventure",
      date: "Aug 23, 2023",
      title: "High-Speed Internet Everywhere",
      review:
        "From the streets of Tokyo to the beaches of Bali, my connection was consistently fast. I could share photos, navigate maps, and stay in touch with family without any lag. The high-speed connectivity of my international eSIM never let me down.",
      store: appStore,
      imgSrc: client5,
    },
    {
      name: "Mia",
      username: "mia_consultant",
      date: "Sep 25, 2023",
      title: "Privacy and Security on the Go",
      review:
        "As someone who values privacy, the international eSIM was a perfect fit. Not having to register my details with local SIM providers in every country I visited was a relief. Plus, the secure connections gave me peace of mind while accessing my emails and bank accounts abroad.",
      store: appStore,
      imgSrc: client1,
    },
    {
      name: "Ethan",
      username: "ethan_sales",
      date: "Sep 23, 2023",
      title: "Worldwide Roaming Without the Hassle",
      review:
        "My job requires me to be on call, even when I'm halfway across the world. Switching to an international eSIM meant I could keep my home number active for calls and use data in over 60 countries without swapping SIMs. It's the best solution for worldwide roaming I've found.",
      store: appStore,
      imgSrc: client2,
    },
  ];

  return (
    <>
      <PagesHero
        title="The Best International Calling App"
        description="eSIMCard offers crystal-clear voice quality and reliable connections. Calling from the US made easy with a user-friendly interface and affordable rates of International Calling App. Our international calling plans are designed to provide you with the freedom to make cheap international calls without compromising on quality."
        title2="Clear Rates for International Calls"
        description2="The price you see is exactly what you'll pay"
      />
      <AppInstall
        title="Download, Dial, Done!"
        description="Download The App for Clear International Rates."
      />

      {/* Top features card  */}
      <section className="container mt-16">
        <h2 className="max-w-[858px] font-montserrat text-h2-base font-600 leading-normal md:text-h2-md xl:text-h2-xl">
          Top Features of eSIMCard’s International Calling App
        </h2>
        <div className="mt-10 grid gap-x-[4rem] gap-y-[4rem] md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {topFeaturesCards.map((item, index) => (
            <AdvantagesCard key={index} cardData={item} />
          ))}
        </div>
      </section>

      {/* Why Choose eSIMCard for International Calling */}
      <section className="container mt-16">
        <h2 className="max-w-[858px] font-montserrat text-h2-base font-600 leading-normal md:text-h2-md xl:text-h2-xl">
          Why Choose eSIMCard for International Calling
        </h2>
        <p className="mt-[1.38rem] text-body-base text-muted-foreground md:text-body-md xl:text-body-lg">
          eSIMCard emerges as a top choice for those seeking efficient and
          cost-effective international calling solutions. With competitive
          international call rates, eSIMCard is ideal for both personal and
          business users who frequently engage in international phone calls.
        </p>
        <h3 className="mt-[2rem] font-montserrat text-h2-base font-500 md:text-h2-md">
          Here’s why eSIMCard stands out:
        </h3>
        <div className="mt-10 grid gap-x-[4rem] gap-y-[4rem] md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {whyEsimcards.map((item, index) => (
            <AdvantagesCardPrimary key={index} cardData={item} isPara={true} />
          ))}
        </div>
        <p className="mt-[1.38rem] text-body-base text-muted-foreground md:text-body-md xl:text-body-lg">
          In addition to these benefits, eSIMCard&apos;s service is designed to
          cater to a variety of needs. Our commitment to customer satisfaction,
          combined with transparent pricingandexcellent call quality, makes
          eSIMCard a leading choice for international calling.
        </p>
      </section>

      {/* Why eSIMCard should be Your Top Choice for International Calling  */}
      <section className="container mt-16">
        <h2 className="max-w-[858px] font-montserrat text-h2-base font-600 leading-normal md:text-h2-md xl:text-h2-xl">
          Why eSIMCard should be Your Top Choice for International Calling
        </h2>
        <p className="mt-[1.38rem] text-body-base text-muted-foreground md:text-body-md xl:text-body-lg">
          Choose eSIMCard for your international calling needs and enjoy global
          reach at competitive rates. Ideal for both personal and business use,
          eSIMCard offers seamless connectivity, ensuring clear and
          uninterrupted communication with remote teams or loved ones abroad.
          Its user-friendly setup gets you started in minutes, complete with a
          virtual phone number for immediate use.
        </p>
      </section>

      <AppInstall />

      <Reviews
        reviews={reviews}
        title="What Our Customers Have to Say About eSIMCard"
      />

      <FAQs accordionsData={accordionData} />
    </>
  );
}

export default Page;
