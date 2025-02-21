import dashboard from "@/_assets/images/dashboard.png";
import DistributorPartnerForm from "@/components/features/support/DistributorPartnerForm";
import AdvantagesCardPrimary from "@/components/my-components/cards/AdvantagesCardPrimary";
import FAQs from "@/components/my-components/presentational/FAQs";
import DistributorPartnerHero from "@/components/my-components/shared/DistributorPartnerHero";
import PagesHero from "@/components/my-components/shared/PagesHero";
import { Button } from "@/components/ui/button";
import {
  Activity,
  ArrowUpLeft,
  BarChart,
  CreditCard,
  DollarSign,
  FileCode,
  Globe2,
  Headphones,
  Layers,
  Link2,
} from "lucide-react";
import cameraMan from "@/_assets/images/cameraMan.png";
import Image from "next/image";
import Link from "next/link";

function Page() {
  const greenCardsData = [
    {
      title: "High Commission Rates",
      body: "Earn competitive commissions up to 25% on every sale generated through your affiliate link.",
      icon: <DollarSign className="h-10 w-10" />,
    },
    {
      title: "Real-Time Tracking",
      body: "Monitor your performance with our real-time tracking and reporting dashboard.",
      icon: <BarChart className="h-10 w-10" />,
    },
    {
      title: "Monthly Payouts",
      body: "Receive timely payments every month via your preferred method like G-Pay, PayPal, Apple Pay.",
      icon: <CreditCard className="h-10 w-10" />,
    },
    {
      title: "Support",
      body: "Get access to a dedicated support team and a range of promotional materials to help you succeed.",
      icon: <Headphones className="h-10 w-10" />,
    },
  ];

  const greenCardsData2 = [
    {
      title: "Real-time eSIM Monitoring",
      body: "Get instant updates on your eSIM's status, including data usage, activation, and real-time connectivity insights, ensuring you stay informed without delay.",
      icon: <Activity className="h-10 w-10" />,
    },
    {
      title: "Global Network Management",
      body: "Manage your phone's connection from anywhere in the world. Seamlessly switch networks, troubleshoot issues, and maintain connectivity with ease.",
      icon: <Globe2 className="h-10 w-10" />,
    },
    {
      title: "Direct Integration",
      body: "Seamlessly integrate this service into your existing systems or apps with minimal effort, ensuring smooth and efficient functionality.",
      icon: <Link2 className="h-10 w-10" />,
    },
    {
      title: "Platform Agnostic",
      body: "Compatible with any device or operating system, ensuring effortless integration across different platforms without compatibility issues.",
      icon: <Layers className="h-10 w-10" />,
    },
    {
      title: "Detailed Developer Documentation",
      body: "Comprehensive guides and resources designed for developers to easily integrate and utilize the service in their applications.",
      icon: <FileCode className="h-10 w-10" />,
    },
  ];
  const accordionsData = [
    {
      title: "How can I get access to the Reseller Connectivity API?",
      body: "After you fill out the form and provide us with the information, like the Legal Company name and your requirements, our team will contact you and you will be asked to sign an NDA. Once the NDA is signed, we will start the process of providing you with eSIM API.",
    },
    {
      title: "Does an eSIM Card Store or share our data?",
      body: "You remain in control of your data. We never share it. We utilize industry-leading security to safeguard all user information. In compliance with regulations, we maintain records solely for tracking connection details like time, data usage (MB), and cellular provider use.",
    },
    {
      title: "Does eSIM Card offer eSIMs that work in more than one country?",
      body: "Yes, eSIMCard offers various Regional and Global data plans. These plans cover multiple countries of certain regions.",
    },
    {
      title: "How do users receive eSIMs?",
      body: "Once your customer purchases an eSIM, we generate a convenient QR code. Retrieve them automatically through our API or shopping cart integrations, and easily deliver them within your website/app. Alternatively, access the QR codes anytime in the Connectivity Dashboard for copying or downloading.",
    },
    {
      title: "Which phones are compatible with eSIMCard?",
      body: "Most newer smartphones, as well as iPads, and many other devices, are now eSIM-ready. Check the eSIM compatible devices list to see if your device is compatible.",
    },
  ];

  return (
    <>
      <PagesHero
        title="Become eSIMCard Affiliate Partner"
        description="Welcome to the eSIMCard Affiliate Program! Join the eSIMCard Affiliate Program and start earning commissions for every sale you generate. Whether you’re a blogger, influencer, or business, our program offers you the opportunity to monetize your platform while promoting a product you believe in."
        btnLink={
          <Link href={"#partner-fom"}>
            <Button className="group flex items-center gap-3 bg-white/10 text-sm hover:text-primary">
              <ArrowUpLeft
                className="transition group-hover:rotate-90 group-hover:text-primary"
                size={20}
              />
              Join Us
            </Button>
          </Link>
        }
      />

      {/* advantages cards  */}
      {/* <section className="container mt-16">
        <h2 className="mb-16 font-montserrat text-h2-base font-600 md:text-h2-md xl:text-h2-xl">
          Features of the Distribution Partner Program
        </h2>
        <div className="grid gap-12 xl:grid-cols-3">
          {cardsData.map((item, index) => (
            <AdvantagesCard cardData={item} key={index} />
          ))}
        </div>
      </section> */}

      {/* advantages card primary green  */}
      <section className="container mt-16">
        <h2 className="mb-16 font-montserrat text-h2-base font-600 md:text-h2-md xl:text-h2-xl">
          Why Join the eSIMCard Affiliate Program?
        </h2>
        <div className="grid gap-12 xl:grid-cols-3">
          {greenCardsData.map((item, index) => (
            <AdvantagesCardPrimary cardData={item} key={index} />
          ))}
        </div>
      </section>

      {/* who should join section  */}
      <section className="mt-16 flex flex-col gap-8 bg-primary-gradient px-[2.19rem] py-[3.62rem] text-background">
        <h2 className="text-h2-base md:text-h2-md xl:text-h2-xl">
          Who Should Join?
        </h2>
        <p className="text-lg text-background/80">
          Our affiliate program is perfect for bloggers with audiences
          interested in travel or technology. Content creators whose followers
          would benefit from easy mobile connectivity will find great value
          here. Tech and comparison websites focusing on eSIM technology and the
          latest tech trends can greatly benefit. Online businesses catering to
          customers seeking travel solutions will also find affiliate program
          suitable. Join us to provide your audience with seamless, connectivity
          options.
        </p>
        <div className="rounded-t-[0.9375rem]">
          <div className="relative h-[157px] rounded-t-[0.9375rem]">
            <Image
              src={cameraMan}
              alt="cameraman"
              fill
              sizes="auto"
              className="rounded-t-[0.9375rem]"
            />
          </div>
          <div className="rounded-b-[0.9375rem] bg-background p-[1.5rem] text-foreground">
            <h3 className="text-body-lg font-500">Bloggers</h3>
            <p className="text-lg text-muted-foreground">
              Perfect for bloggers with an audience interested in travel or
              technology.
            </p>
          </div>
        </div>
      </section>
      {/* dashboard display  */}
      <section className="mt-16 bg-primary-gradient">
        <div className="container flex flex-col gap-8 px-10 pb-14 pt-14 text-background md:pb-0 xl:gap-10">
          <h2 className="text-h2-base font-600 leading-normal md:text-h2-md xl:text-h2-xl">
            eSIMCard Distributor Connectivity Dashboard Features
          </h2>
          <p className="text-body-md text-background/80">
            One Dedicated Dashboard where you can manage customers, monitor data
            usage, and gain valuable insights:
          </p>
          <div className="grid gap-10 xl:grid-cols-2">
            <div className="flex flex-col gap-6">
              <ul className="text-bd ms-6 text-background/80">
                <li className="list-disc">Easy to Manage Reseller Dashboard</li>
                <li className="list-disc">Custom Data Packages</li>
                <li className="list-disc">Real-time Data Usage & Billing</li>
                <li className="list-disc">Troubleshooting & Diagnostics</li>
                <li className="list-disc">Usage Reports & Analytics API</li>
                <li className="list-disc">API Integration</li>
                <li className="list-disc">Top-up Account</li>
              </ul>
              <Link href={"#partner-fom"}>
                <Button className="group flex items-center gap-3 bg-white/10 text-sm hover:text-primary">
                  <ArrowUpLeft
                    className="transition group-hover:rotate-90 group-hover:text-primary"
                    size={20}
                  />
                  Join Now
                </Button>
              </Link>
            </div>

            <div className="relative h-[360px] w-full">
              <Image
                src={dashboard}
                alt="eSIMCard Dashboard"
                fill
                sizes="auto"
                quality={75}
              />
            </div>
          </div>
        </div>
      </section>
      {/* advantages card  */}
      <section className="container mt-16">
        <h2 className="mb-16 font-montserrat text-h2-base font-600 md:text-h2-md xl:text-h2-xl">
          eSIM Reseller API Features
        </h2>
        <div className="grid gap-12 xl:grid-cols-3">
          {greenCardsData2.map((item, index) => (
            <AdvantagesCardPrimary cardData={item} key={index} />
          ))}
        </div>
      </section>
      {/* become distributor partner hero */}
      <DistributorPartnerHero />
      {/* partner form  */}
      <section className="container mt-16" id="partner-fom">
        <div className="flex flex-col gap-6 px-4 xl:px-0">
          <h2 className="font-montserrat text-h2-base font-600 leading-normal md:text-h2-md xl:text-h2-xl">
            Partner with us Today!
          </h2>
          <p className="text-lg text-muted-foreground">
            Do you want to become a distribution or reseller partner? Simply
            fill out the form below with details about your business. We’ll get
            to you within the next 24 Hours.
          </p>
          <p className="text-lg font-700 text-foreground-light/80">
            You will use these credentials to log in to the portal, so please
            make sure you remember them.
          </p>
          <DistributorPartnerForm />
        </div>
      </section>
      <FAQs accordionsData={accordionsData} />
    </>
  );
}

export default Page;
