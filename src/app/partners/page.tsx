import dashboard from "@/_assets/images/dashboard.png";
import DistributorPartnerForm from "@/components/features/support/DistributorPartnerForm";
import AdvantagesCard from "@/components/my-ui/cards/AdvantagesCard";
import FAQs from "@/components/my-ui/presentational/FAQs";
import DistributorPartnerHero from "@/components/my-ui/heros/DistributorPartnerHero";
import PagesHero from "@/components/my-ui/heros/PagesHero";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowUpLeft,
  BarChart3,
  CreditCard,
  DollarSign,
  Headset,
  Store,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PageParams } from "../page";
import { Metadata } from "next";
import { seoData } from "@/lib/seoConfig";

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const localizedSeo = seoData[params.locale] || seoData["en"];
  return localizedSeo.partners;
}

function Page() {
  const cardsData = [
    {
      title: "White Label eSIM Store",
      body: "Launch your own eSIM store and sell eSIMs with your brand identity using our white-label eSIM store feature.",
      icon: <Store className="h-10 w-10 text-primary" />,
    },
    {
      title: "Wholesale Pricing",
      body: "Get competitive wholesale rates with exclusive volume discounts and wholesale pricing. Create data packages that suit your audience.",
      icon: <DollarSign className="h-10 w-10 text-primary" />,
    },
    {
      title: "Reseller Connectivity Dashboard",
      body: "Track your Sales, Customer Activity, Usage Trends, and Customer Experience in one place.",
      icon: <BarChart3 className="h-10 w-10 text-primary" />,
    },
  ];

  const cardsData2 = [
    {
      title: "White Label eSIM Store",
      body: "You can sell eSIMs under your own brand name, choosing the pricing yourself. Integrate it through API on your Website, Distributor Dashboard.",
      icon: <Store className="h-10 w-10 text-primary" />,
    },
    {
      title: "Process Payments Safely",
      body: "Process your payments with eSIMCard for improved acceptance rates. Standard rates and fees apply.",
      icon: <CreditCard className="h-10 w-10 text-primary" />,
    },
    {
      title: "Customer Support for End User",
      body: "eSIMCard will handle all the customer support matters for you. Charges applied.",
      icon: <Headset className="h-10 w-10 text-primary" />,
    },
  ];

  const accordionsData = [
    {
      title: "What is the process of becoming an eSIM Distributor?",
      body: "After you fill out the form and provide us with the information, like the Legal Company name and your requirements, our team will contact you and you will be asked to sign an NDA. Once the NDA is signed, we will plan the launch of your service.",
    },
    {
      title: "Does eSIMCard Store or share our data?",
      body: "You remain in control of your data. We never share it. We utilize industry-leading security to safeguard all user information. In compliance with regulations, we maintain records solely for tracking connection details like time, data usage (MB), and cellular provider use.",
    },
    {
      title: "Does eSIMCard offer eSIMs that work in more than one country?",
      body: "Yes, eSIMCard offers various Regional and Global data plans. These plans cover multiple countries of certain regions.",
    },
    {
      title: "How do users receive eSIMs?",
      body: "Once your customer purchases an eSIM, we generate a convenient QR code. Retrieve them automatically through our API or shopping cart integrations, and easily deliver them to your customer by email or within your website/app. Alternatively, access the QR codes anytime in the Connectivity Dashboard for copying or downloading.",
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
        title="Become a Distribution/Reseller Partner"
        description="Become an eSIMCard Distribution or Reseller Partner to grow your business. By integrating our API into your website, you can easily sell eSIMs to your existing customers at your own prices, while buying from us at discounted prices."
        btnLink={
          <Link href={"#partner-fom"}>
            <Button className="group flex items-center gap-3 bg-white/10 text-sm hover:text-primary">
              <ArrowUpLeft
                className="transition group-hover:rotate-90 group-hover:text-primary"
                size={20}
              />
              Become a Partner
            </Button>
          </Link>
        }
      />
      {/* card text  */}
      <section className="container mt-16">
        <Card className="grid gap-[1.8rem] rounded-[0.9375rem] border px-[1rem] py-[1.56rem] shadow-md transition-all hover:scale-95 hover:border-primary xl:grid-cols-2 xl:gap-[4rem]">
          <h2 className="font-montserrat text-h2-base font-600 leading-normal md:text-h2-md xl:mt-6 xl:px-[2.38rem] xl:text-h2-xl">
            What does it mean to become a Distribution Partner?
          </h2>
          <p className="text-body-md text-muted-foreground">
            Being a distribution partner with eSIMCard, You can resell our eSIMs
            to your existing Customers. Whether you’re a reseller, a travel
            agency owner, a small business or want to private label the eSIMs.
            Or anybody in the telecommunications, travel, or IoT Space, Can join
            our Partner Program. Have a different Business model? We are
            available to chat and guide you if there is an opportunity to
            partner with us for you.
          </p>
        </Card>
      </section>

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

      {/* dashboard display  */}
      <section className="mt-16 bg-primary-gradient">
        <div className="container flex flex-col gap-8 px-2 pb-14 pt-14 text-background sm:px-10 md:pb-0 xl:gap-10">
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
          Run Successful Distribution Business
        </h2>
        <div className="grid gap-12 xl:grid-cols-3">
          {cardsData2.map((item, index) => (
            <AdvantagesCard cardData={item} key={index} />
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
