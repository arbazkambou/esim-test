import dashboard from "@/_assets/images/dashboard.png";
import { PageParams } from "@/app/page";
import DistributorPartnerForm from "@/components/features/support/DistributorPartnerForm";
import AdvantagesCard from "@/components/my-ui/cards/AdvantagesCard";
import AdvantagesCardPrimary from "@/components/my-ui/cards/AdvantagesCardPrimary";
import FAQs from "@/components/my-ui/presentational/FAQs";
import DistributorPartnerHero from "@/components/my-ui/heros/DistributorPartnerHero";
import PagesHero from "@/components/my-ui/heros/PagesHero";
import { Button } from "@/components/ui/button";
import { seoData } from "@/lib/seoConfig";
import {
  Activity,
  ArrowUpLeft,
  BarChart3,
  BarChart4,
  Cpu,
  FileCode,
  FileText,
  Globe,
  Globe2,
  Layers,
  Link2,
  MessageSquare,
  MonitorSmartphone,
  Package,
  ShieldCheck,
  Signal,
} from "lucide-react";
import { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const localizedSeo = seoData[params.locale] || seoData["en"];
  return localizedSeo.resellerApi;
}

function Page() {
  const cardsData = [
    {
      title: "Authentication Methods",
      body: "Without strong authentication methods in place before integration, you risk exposing user data and functionalities to unauthorized access. Addressing authentication upfront ensures Compliance with Regulations and User Trust and Confidence.",
      icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    },
    {
      title: "Regulatory Compliance",
      body: "By understanding them beforehand, you can avoid legal trouble due to non-compliance with regulations. It allows you to Avoid Fines / Penalties and Offer a Responsible Service.",
      icon: <FileText className="h-10 w-10 text-primary" />,
    },
    {
      title: "Platform Agnostic",
      body: "A platform-agnostic approach ensures your data roaming integration isn't limited to specific platforms. By designing your integration to be platform-agnostic from the outset, you can integrate it into any app or environment, including Android, iOS, Node.js, PHP, C#, C++.",
      icon: <Layers className="h-10 w-10 text-primary" />,
    },
    {
      title: "Connectivity Dashboard",
      body: "A connectivity dashboard provides essential insights from the beginning, allowing you to Optimize Performance, Identify and Address Issues.",
      icon: <BarChart3 className="h-10 w-10 text-primary" />,
    },
    {
      title: "User Interface (UI) Design",
      body: "From the start, a well-designed UI ensures a smooth experience for your users. This includes Positive Brand Image and Informed Decisions.",
      icon: <MonitorSmartphone className="h-10 w-10 text-primary" />,
    },
  ];

  const greenCardsData = [
    {
      title: "eSIMs",
      body: "Request an eSIM with your chosen roaming profile, and get activation codes for easy installation on the user's device.",
      icon: <Cpu className="h-10 w-10" />,
    },
    {
      title: "Data Packages",
      body: "Get mobile data plans for specific countries, areas, and networks. Flexibly add or eliminate packages in any combination to the same eSIM.",
      icon: <Package className="h-10 w-10" />,
    },
    {
      title: "Network Status",
      body: "Effortlessly de-activate or reactivate eSIMs globally within moments.",
      icon: <Globe className="h-10 w-10" />,
    },
    {
      title: "eSIM Status",
      body: "Access immediate updates regarding the eSIM's installation progress and data consumption.",
      icon: <Signal className="h-10 w-10" />,
    },
    {
      title: "SMS Notifications",
      body: "Dispatch SMS alerts directly to devices to inform users about critical events in the eSIM lifecycle.",
      icon: <MessageSquare className="h-10 w-10" />,
    },
    {
      title: "Real-time Reporting",
      body: "Enable real-time reporting for insightful monitoring of eSIM activities and data usage patterns.",
      icon: <BarChart4 className="h-10 w-10" />,
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
      body: 
      <>
      Most newer smartphones, as well as iPads, and many other devices are now eSIM ready. 
      Check the <a className="text-primary underline hover:text-primary/50" target="_blank" href="/esim-compatible/">eSIM Device List</a> to see if your devices are compatible.
      </>
    },
  ];

  return (
    <>
      <PagesHero
        title="eSIM Reseller API"
        description="Build your website, app, or business with our eSIM API for resellers and developers. Access eSIM Card’s data plans, purchase on demand, and sell. Get API & partner with eSIM Card today"
        btnLink={
          <Link href={"#partner-fom"}>
            <Button className="group flex items-center gap-3 bg-white/10 text-sm hover:text-primary">
              <ArrowUpLeft
                className="transition group-hover:rotate-90 group-hover:text-primary"
                size={20}
              />
              Get eSIM API
            </Button>
          </Link>
        }
      />

      {/* advantages cards  */}
      <section className="container mt-16">
        <h2 className="mb-16 font-montserrat text-h2-base font-600 md:text-h2-md xl:text-h2-xl">
          Features of the Distribution Partner Program
        </h2>
        <div className="grid gap-12 xl:grid-cols-3">
          {cardsData.map((item, index) => (
            <AdvantagesCard cardData={item} key={index} />
          ))}
        </div>
      </section>

      {/* advantages card primary green  */}
      <section className="container mt-16">
        <h2 className="mb-16 font-montserrat text-h2-base font-600 md:text-h2-md xl:text-h2-xl">
          RESTful eSIM API Endpoints
        </h2>
        <div className="grid gap-12 xl:grid-cols-3">
          {greenCardsData.map((item, index) => (
            <AdvantagesCardPrimary cardData={item} key={index} />
          ))}
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
