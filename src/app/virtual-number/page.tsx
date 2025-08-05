import vitualNumberHero from "@/_assets/images/virtualNumberHero.png";
import stars from "@/_assets/svgs/5Star.svg";
import appStore from "@/_assets/svgs/appStore.svg";
import client1 from "@/_assets/svgs/client1.svg";
import client2 from "@/_assets/svgs/client2.svg";
import client3 from "@/_assets/svgs/client3.svg";
import client4 from "@/_assets/svgs/client4.svg";
import client5 from "@/_assets/svgs/client5.svg";
import AdvantagesCard from "@/components/my-ui/cards/AdvantagesCard";
import AppInstall from "@/components/my-ui/presentational/AppInstall";
import FAQs from "@/components/my-ui/presentational/FAQs";
import PagesHero from "@/components/my-ui/heros/PagesHero";
import VirtualSteps from "@/components/my-ui/presentational/VirtualSteps";
import SocialsButtons from "@/components/features/auth/SocialsButtons";
import { seoData } from "@/lib/seoConfig";
import {
  BadgeInfo,
  CreditCard,
  Eye,
  Headphones,
  LayoutDashboard,
  MessageSquare,
  PhoneCall,
} from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import { PageParams } from "../page";
import Reviews from "@/components/my-ui/carousels/Reviews";

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const localizedSeo = seoData[params.locale] || seoData["en"];
  return localizedSeo.virtualNumber;
}

function Page() {
  const virtaulNumberFeatures = [
    {
      title: "Cost-Effective Connectivity",
      body: "Cuts international call costs, Maintain quality",
      icon: <PhoneCall className="h-10 w-10" />,
    },
    {
      title: "Two-way Communication",
      body: "Send and receive messages and calls easily",
      icon: <MessageSquare className="h-10 w-10" />,
    },
    {
      title: "Flexible Payment",
      body: "Secure payment method, accept cards",
      icon: <CreditCard className="h-10 w-10" />,
    },
    {
      title: "24/7 Customer Support",
      body: "Always available, quick response team",
      icon: <Headphones className="h-10 w-10" />,
    },
    {
      title: "Transparent Conditions",
      body: "No hidden charges, straightforward costs",
      icon: <Eye className="h-10 w-10" />,
    },
    {
      title: "User-friendly Interface",
      body: "Intuitive design, supports multiple languages",
      icon: <LayoutDashboard className="h-10 w-10" />,
    },
  ];
  const accordionsData = [
    {
      title:
        "What is a virtual mobile number and how is it different from a regular phone number?",
      body: "A virtual mobile number is a phone number that operates via the internet, rather than being tied to a specific physical phone line or SIM card. Unlike regular phone numbers, virtual numbers offer greater flexibility, allowing users to make and receive calls from anywhere in the world, often at lower costs and with added features like number forwarding.",
    },
    {
      title: "Can I use EsimCard virtual phone number for my business?",
      body: "Yes, EsimCard's virtual phone numbers are ideal for business use. They provide a professional and efficient way to manage calls, especially for businesses with international clients or remote teams.",
    },
    {
      title: "What is the benefit of having a second phone number?",
      body: "Having a second phone number offers numerous benefits, such as enhanced privacy, separate lines for personal and professional use, and the ability to have local numbers in different countries, which can be more accessible and cost-effective for clients in those regions.",
    },
    {
      title:
        "Can I receive SMS messages on a virtual phone number from EsimCard?",
      body: "Yes, EsimCard's virtual phone numbers are capable of receiving SMS messages, providing a comprehensive communication solution.",
    },
    {
      title: "How to Activate Your Virtual Phone Number on EsimCard?",
      body: (
        <>
          To activate your virtual phone number from EsimCard, follow these
          steps:
          <ul className="mx-9 list-disc">
            <li>Make sure you sign up with EsimCard before starting</li>
            <li>Access the calling section in your dashboard</li>
            <li>Click on 'Buy Numbers' to view options</li>
            <li>Select the desired country for your virtual number</li>
            <li>Pick and activate your chosen number</li>
          </ul>
        </>
      ),
    },
    {
      title: "How do I get a virtual phone number from EsimCard?",
      body: "The process to get a virtual phone number from EsimCard is the same as the activation process mentioned above.",
    },
    {
      title: "What is the cost of a virtual phone number?",
      body: "The cost varies, starting from as low as $2.4, depending on the country and specific plan chosen.",
    },
  ];

  const reviews = [
    {
      name: "Sunita Patel",
      username: "sunita_patel",
      date: "Aug 23, 2023",
      title: "Excellent Customer Support",
      review:
        "During my stay in Toronto, I had trouble syncing my contacts with eSIMCard. Their support team was a chat away and quickly helped me sort it out. Post that, calling my friends back in India was as easy as calling a neighbor – a real game-changer for international communication.",
      store: appStore,
      imgSrc: client1,
    },
    {
      name: "Carlos Rodríguez",
      username: "carlos_rod",
      date: "Sep 25, 2023",
      title: "Reliable Services",
      review:
        "Working remotely from Spain, I frequently use eSIMCard for conference calls with my team in the UK. The clarity and reliability of the service make it feel like we're in the same office, not in different countries. It's become an essential tool for my international collaborations.",
      store: appStore,
      imgSrc: client2,
    },
    {
      name: "David Smith",
      username: "david_smith",
      date: "Sep 23, 2023",
      title: "Hassle-Free",
      review:
        "On a family holiday in the Caribbean, eSIMCard was our lifeline back home. Setting it up was straightforward, and we didn't have to deal with the hassle of traditional calling cards. It made staying in touch with our relatives back home effortless and enjoyable.",
      store: appStore,
      imgSrc: client3,
    },
    {
      name: "John Smith",
      username: "john_smith",
      date: "Jul 09, 2023",
      title: "Easy to use",
      review:
        "On a business trip to London, I urgently needed to call my team back in the States. With eSIMCard, it was as simple as dialing a local number. I was amazed at how easy it was to make an international call without any complex steps or high costs. The clarity of the call was like they were in the same room, not across the ocean.",
      store: appStore,
      imgSrc: client4,
    },
    {
      name: "José García",
      username: "jose_garcia",
      date: "May 17, 2023",
      title: "Premium Quality Calling",
      review:
        "I remember being at my daughter's graduation in the US and needing to call my parents in Mexico to share the moment. eSIMCard made it feel like they were with us, celebrating. The app was user-friendly, and the call quality was so good that my parents felt like they were part of the ceremony.",
      store: appStore,
      imgSrc: client5,
    },
  ];

  return (
    <>
      <PagesHero
        title="Virtual Phone Numbers"
        description="Virtual phone number services offer a flexible way to manage calls and messages. Ideal for both personal and business use. Choose a virtual number today to simplify your communication needs, and keep your personal and business lives separate and secure."
      />

      {/* warning message  */}
      <section className="mt-16 md:container">
        <p className="flex items-center gap-4 rounded-[0.625rem] bg-destructive/10 px-[1.5rem] py-[1.5rem] text-body-base text-destructive md:text-body-md xl:px-[2.38rem]">
          <BadgeInfo className="h-[24px] w-[24px] shrink-0" />
          Our calling feature is undergoing maintenance. If you experience any
          issues, we will try to resolve them as soon as possible.
        </p>
      </section>

      {/* top countries of virtual number  */}
      <section className="container mt-16">
        <h2 className="max-w-[858px] font-montserrat text-h2-base font-600 leading-normal md:text-h2-md xl:text-h2-xl">
          Top Countries of eSIMCard&apos;s Virtual Number Service
        </h2>
        <p className="mt-[1.38rem] text-body-base text-muted-foreground md:text-body-md xl:text-body-lg">
          Virtual phone numbers offer a flexible, cost-effective solution for
          global communication.
        </p>
      </section>

      {/* app installation section */}
      <section className="relative mt-16 bg-primary-gradient pt-[5rem] xl:container xl:rounded-[2.5rem] xl:pb-[3.5rem]">
        <div className="grid gap-x-12 gap-y-8 xl:grid-cols-3">
          <div className="col-span-2 flex flex-col items-center gap-8 xl:items-start xl:ps-8">
            <div className="flex items-center gap-4">
              <div className="relative h-[21.5px] w-[120px]">
                <Image src={stars} alt="5 stars rating" fill sizes="auto" />
              </div>
              <p className="text-body-sm font-700 text-background">
                500,000+ Downloads
              </p>
            </div>

            <div>
              <h2 className="text-center font-montserrat text-h2-base font-600 text-background md:text-h2-md xl:text-start xl:text-h2-xl">
                eSIMCard Virtual Numbers
              </h2>
              <p className="mt-[1.31rem] text-center text-body-sm text-background opacity-80 xl:text-start xl:text-body-md">
                The ideal Solution for uninterrupted connectivity.
              </p>
            </div>
            <div className="z-50">
              <SocialsButtons />
            </div>
          </div>

          <div className="col-span-2 flex w-full items-center justify-center xl:col-span-1 xl:block">
            {/* <div className="relative bottom-[100px] top-[55px] h-[364px] w-[310px] xs:w-[380px] sm:w-[560px] xl:absolute xl:bottom-0px] xl:right-0 xl:top-[0px]"> */}
            <div className="relative bottom-[0px] h-[250px] w-[340px] xs:w-[380px] sm:w-[560px] lg:h-[364px] xl:absolute xl:bottom-0 xl:right-0 xl:top-0">
              <Image
                src={vitualNumberHero}
                sizes="auto"
                alt="download eSIM card app"
                fill
                quality={70}
                className="object-cover sm:object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Phone Number Advantages card  */}
      <section className="container mt-16">
        <h2 className="max-w-[858px] font-montserrat text-h2-base font-600 leading-normal md:text-h2-md xl:text-h2-xl">
          Features of eSIMCard’s Virtual Phone Number
        </h2>
        <div className="mt-10 grid gap-x-[4rem] gap-y-[4rem] md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {virtaulNumberFeatures.map((item, index) => (
            <AdvantagesCard key={index} cardData={item} />
          ))}
        </div>
      </section>

      <VirtualSteps />

      {/* Why eSIMCard Stands Out for Virtual Phone Numbers  */}
      <section className="container mt-16">
        <h2 className="max-w-[858px] font-montserrat text-h2-base font-600 leading-normal md:text-h2-md xl:text-h2-xl">
          Why eSIMCard Stands Out for Virtual Phone Numbers
        </h2>
        <p className="mt-[1.38rem] text-body-base text-muted-foreground md:text-body-md xl:text-body-lg">
          eSIMCard is renowned as the top choice for acquiring a virtual phone
          number, known for its quick and simple process that grants immediate
          access. This service is ideal for various needs:
        </p>

        <p className="mt-[1.8rem] rounded-[0.625rem] bg-primary/10 p-3 text-body-base text-primary md:text-body-md xl:px-[2rem] xl:py-3">
          <span className="font-semibold">Global Reach:</span> With the option
          to buy virtual phone numbers from multiple countries, eSIMCard is
          perfect for achieving worldwide connectivity.
        </p>
        <p className="mt-[1rem] rounded-[0.625rem] bg-primary/10 p-3 text-body-base text-primary md:text-body-md xl:px-[2rem] xl:py-3">
          <span className="font-semibold">SMS Functionality:</span> The service
          includes virtual phone number SMS features, ensuring comprehensive
          connectivity through both voice and text.
        </p>
        <p className="mt-[1rem] rounded-[0.625rem] bg-primary/10 p-3 text-body-base text-primary md:text-body-md xl:px-[2rem] xl:py-3">
          <span className="font-semibold">Business-Friendly:</span>
          The virtual business phone number service from eSIMCard is especially
          beneficial for companies looking to maintain a professional image.
        </p>

        <p className="mt-[1.38rem] text-body-base text-muted-foreground md:text-body-md xl:text-body-lg">
          In addition to these features, eSIMCard significantly enhances your
          communication capabilities. <br />
          Overall, the virtual phone numbers from eSIMCard present a flexible,
          cost-effective, and all-encompassing solution, streamlining your
          international communication needs effortlessly.
        </p>
      </section>

      {/* App Install  */}
      <section className="container mt-16">
        <h2 className="max-w-[958px] font-montserrat text-h2-base font-600 leading-normal md:text-h2-md xl:text-h2-xl">
          Take Control of Your Virtual Numbers: Install the App for Easy
          Management
        </h2>
        <AppInstall title="Download The App Now" />
      </section>

      {/* Client reviews  */}
      <Reviews
        reviews={reviews}
        title="What Our Customers Have to Say About eSIMCard"
      />

      {/* FAQS  */}
      <FAQs accordionsData={accordionsData} />
    </>
  );
}

export default Page;
