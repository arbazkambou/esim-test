import vitualNumberHero from "@/_assets/images/virtualNumberHero.png";
import stars from "@/_assets/svgs/5Star.svg";
import PagesHero from "@/components/my-components/shared/PagesHero";
import SocialsButtons from "@/components/my-components/shared/SocialsButtons";
import { BadgeInfo } from "lucide-react";
import Image from "next/image";
import {
  PhoneCall,
  MessageSquare,
  CreditCard,
  Headphones,
  Eye,
  LayoutDashboard,
} from "lucide-react";
import AdvantagesCard from "@/components/my-components/cards/AdvantagesCard";
import step1 from "@/_assets/images/virtualStep1.png";
import step2 from "@/_assets/images/virtual2.png";
import step3 from "@/_assets/images/virtual3.png";
import step4 from "@/_assets/images/virtual4.png";
import AppInstall from "@/components/my-components/presentational/AppInstall";
import FAQs from "@/components/my-components/presentational/FAQs";
import Reviews from "@/components/my-components/carousels/Reviews";

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
      <section className="relative mt-16 bg-primary-gradient pb-[3.5rem] pt-[5rem] xl:container sm:rounded-[2.5rem]">
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

          <div className="col-span-1 flex w-full items-center justify-center xl:block">
            <div className="relative bottom-[100px] top-[55px] h-[364px] w-[310px] xs:w-[380px] sm:w-[560px] xl:absolute xl:bottom-[0px] xl:right-0 xl:top-[0px]">
              <Image
                src={vitualNumberHero}
                sizes="auto"
                alt="download eSIM card app"
                fill
                quality={70}
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

      {/* Virtual eSIM steps  */}
      <section className="container mt-16">
        <h2 className="max-w-[858px] font-montserrat text-h2-base font-600 leading-normal md:text-h2-md xl:text-h2-xl">
          Steps to Get Virtual Phone Number from eSIMCard
        </h2>
        <p className="mt-[1.38rem] text-body-base text-muted-foreground md:text-body-md xl:text-body-lg">
          To get a virtual phone number from EsimCard, follow these easy steps:
        </p>

        <div className="mt-[3.5rem] grid place-content-center gap-x-[15rem] gap-y-16 xl:grid-cols-2 xl:gap-y-10">
          {/* step1 image */}
          <div className="order-1 flex justify-center rounded-[1.875rem] xl:order-1">
            <div className="flex w-[340px] justify-center rounded-[1.875rem] bg-muted sm:w-[417px]">
              <div className="relative h-[360px] w-[256px]">
                <Image
                  src={step1}
                  alt="Go To Calling"
                  fill
                  sizes="auto"
                  quality={70}
                  className="rounded-[1.875rem]"
                />
              </div>
            </div>
          </div>

          {/* step1 text  */}
          <div className="order-0 flex max-w-[320px] flex-col justify-center gap-4 xl:order-1">
            <p className="text-center font-montserrat text-[2.42rem] font-500 text-foreground-light/95 md:text-[2.8125rem] xl:text-start">
              01
            </p>
            <h3 className="text-center font-montserrat text-[1.875rem] font-700 leading-tight text-primary/95 xl:text-start xl:text-[2.8125rem]">
              Go To Calling
            </h3>
            <p className="text-center text-[1.2rem] text-muted-foreground xl:text-start xl:text-[1.5rem]">
              Access the calling section in your dashboard
            </p>
          </div>

          {/* step2 text  */}
          <div className="order-2 flex xl:order-1 xl:justify-center 2xl:ms-32">
            <div className="flex max-w-[320px] flex-col justify-center gap-4">
              <p className="text-center font-montserrat text-[2.42rem] font-500 text-foreground-light/95 md:text-[2.8125rem] xl:text-start">
                02
              </p>
              <h3 className="text-center font-montserrat text-[1.875rem] font-700 leading-tight text-primary/95 xl:text-start xl:text-[2.8125rem]">
                Buy Numbers
              </h3>
              <p className="text-center text-[1.2rem] text-muted-foreground xl:text-start xl:text-[1.5rem]">
                Click on 'Buy Numbers' to view options
              </p>
            </div>
          </div>

          {/* step2 image  */}
          <div className="order-2 rounded-[1.875rem] xl:order-1">
            <div className="flex w-[340px] justify-center rounded-[1.875rem] bg-muted sm:w-[417px]">
              <div className="relative h-[360px] w-[246px]">
                <Image
                  src={step2}
                  alt="Buy Numbers"
                  fill
                  sizes="auto"
                  quality={70}
                  className="rounded-[1.875rem]"
                />
              </div>
            </div>
          </div>

          {/* step3 image  */}
          <div className="order-3 flex justify-center rounded-[1.875rem] xl:order-1">
            <div className="flex w-[340px] justify-center rounded-[1.875rem] bg-muted sm:w-[417px]">
              <div className="relative h-[360px] w-[256px]">
                <Image
                  src={step3}
                  alt="Choose Country"
                  fill
                  sizes="auto"
                  quality={70}
                  className="rounded-[1.875rem]"
                />
              </div>
            </div>
          </div>

          {/* step3 text  */}
          <div className="order-2 flex max-w-[320px] flex-col justify-center gap-4 xl:order-1">
            <p className="text-center font-montserrat text-[2.42rem] font-500 text-foreground-light/95 md:text-[2.8125rem] xl:text-start">
              03
            </p>
            <h3 className="text-center font-montserrat text-[1.875rem] font-700 leading-tight text-primary/95 xl:text-start xl:text-[2.8125rem]">
              Choose Country
            </h3>
            <p className="text-center text-[1.2rem] text-muted-foreground xl:text-start xl:text-[1.5rem]">
              Select the desired country for your virtual number
            </p>
          </div>

          {/* step4 text  */}
          <div className="order-4 flex xl:order-1 xl:justify-center 2xl:ms-32">
            <div className="flex max-w-[320px] flex-col justify-center gap-4">
              <p className="text-center font-montserrat text-[2.42rem] font-500 text-foreground-light/95 md:text-[2.8125rem] xl:text-start">
                04
              </p>
              <h3 className="text-center font-montserrat text-[1.875rem] font-700 leading-tight text-primary/95 xl:text-start xl:text-[2.8125rem]">
                Select and Activate
              </h3>
              <p className="text-center text-[1.2rem] text-muted-foreground xl:text-start xl:text-[1.5rem]">
                Pick and activate your chosen number
              </p>
            </div>
          </div>

          {/* step4 image  */}
          <div className="order-4 rounded-[1.875rem] xl:order-1">
            <div className="flex w-[340px] justify-center rounded-[1.875rem] bg-muted sm:w-[417px]">
              <div className="relative h-[360px] w-[246px]">
                <Image
                  src={step4}
                  alt="Select and Activate"
                  fill
                  sizes="auto"
                  quality={70}
                  className="rounded-[1.875rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

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
        </h2>
        <AppInstall title="Download The App Now" />
      </section>

      {/* Client reviews  */}
      <Reviews />

      {/* FAQS  */}
      <FAQs accordionsData={accordionsData} />
    </>
  );
}

export default Page;
