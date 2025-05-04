import cameraMan from "@/_assets/images/cameraMan.png";
import drone from "@/_assets/images/drone.png";
import laptop from "@/_assets/images/laptop.png";
import newspaper from "@/_assets/images/newspaper.png";
import { PageParams } from "@/app/page";
import AffiliatePartnerForm from "@/components/features/support/AffiliatePartnerForm";
import AdvantagesCard from "@/components/my-ui/cards/AdvantagesCard";
import AdvantagesCardPrimary from "@/components/my-ui/cards/AdvantagesCardPrimary";
import FAQs from "@/components/my-ui/presentational/FAQs";
import PagesHero from "@/components/my-ui/heros/PagesHero";
import { Button } from "@/components/ui/button";
import { seoData } from "@/lib/seoConfig";
import {
  ArrowUpLeft,
  BarChart,
  CreditCard,
  DollarSign,
  Headphones,
  Megaphone,
  Pencil,
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
  return localizedSeo.affiliate;
}

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
      body: ( 
        <>
        Get access to a dedicated <a className="underline" href="/contact-us">support team</a> and a range of promotional materials to help you succeed.
        </>
      ),
      icon: <Headphones className="h-10 w-10" />,
    },
  ];

  const affiliateSteps = [
    {
      title: "Sign Up",
      body: "1. Fill out a simple application form and tell us about your platform.\n2. Once approved, you’ll receive your unique affiliate link and access to our affiliate dashboard.",
      icon: <Pencil className="h-10 w-10 text-primary" />,
    },
    {
      title: "Promote",
      body: "1. Share your affiliate link on your website, blog, or social media.\n2. Use our banners, images, and text links to attract potential customers.",
      icon: <Megaphone className="h-10 w-10 text-primary" />,
    },
    {
      title: "Earn",
      body: "1. Earn commissions up to 25% for every sale made through your affiliate link.\n2. Track your earnings and performance in real-time through our dashboard.",
      icon: <DollarSign className="h-10 w-10 text-primary" />,
    },
  ];

  const whoShouldJoinCardsData = [
    {
      title: "Bloggers",
      body: "Perfect for bloggers with an audience interested in travel or technology.",
      image: cameraMan,
    },
    {
      title: "Content Creators",
      body: "Ideal for creators whose followers would benefit from easy mobile connectivity.",
      image: drone,
    },
    {
      title: "Tech and Comparison Websites",
      body: "Great for sites that focus on eSIM technology and tech trends & Product Comparison.",
      image: newspaper,
    },
    {
      title: "Online Businesses",
      body: "Suitable for businesses with customers interested in travel solutions.",
      image: laptop,
    },
  ];
  const affiliateFAQs = [
    {
      title: "How do I apply to become an eSIMCard affiliate?",
      body: "The application process is quick and easy. Simply fill out the application form and tell us about your platform. Once approved, you’ll receive your unique affiliate link.",
    },
    {
      title: "Is there a fee to join the eSIMCard Affiliate Program?",
      body: "No, joining our affiliate program is completely free!",
    },
    {
      title: "How much can I earn as an eSIMCard affiliate?",
      body: "We offer competitive commission rates up to 25% on every eSIM data plan sold through your affiliate link.",
    },
    {
      title: "Does the eSIMCard Affiliate Program offer an API?",
      body: "Yes, we do offer an API that allows you to integrate eSIMCard data plan information and functionality directly into your website or application.",
    },
  ];

  return (
    <>
      <PagesHero
        title="Become eSIMCard Affiliate Partner"
        description="Welcome to the eSIMCard Affiliate Program! Join the eSIMCard Affiliate Program and start earning commissions for every sale you generate. Whether you’re a blogger, influencer, or business, our program offers you the opportunity to monetize your platform while promoting a product you believe in."
        btnLink={
          <Link href={"#partner-form"}>
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
      <section className="mt-16 bg-primary-gradient text-background">
        <div className="container flex flex-col gap-10 px-[2.19rem] py-[3.62rem]">
          <h2 className="text-h2-base md:text-h2-md xl:text-h2-xl">
            Who Should Join?
          </h2>
          <p className="text-lg text-background/80">
            Our affiliate program is perfect for bloggers with audiences
            interested in travel or technology. Content creators whose followers
            would benefit from easy mobile connectivity will find great value
            here. Tech and comparison websites focusing on eSIM technology and
            the latest tech trends can greatly benefit. Online businesses
            catering to customers seeking travel solutions will also find
            affiliate program suitable. Join us to provide your audience with
            seamless, connectivity options.
          </p>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {whoShouldJoinCardsData.map((item, index) => (
              <div
                key={index}
                className="flex h-full flex-col shadow-xl transition-all hover:scale-105"
              >
                <div className="relative h-[190px] w-full rounded-t-[0.9375rem]">
                  <Image
                    src={item.image}
                    alt="cameraman"
                    fill
                    sizes="auto"
                    className="rounded-t-[0.9375rem] object-cover"
                    quality={75}
                  />
                </div>
                <div className="flex flex-grow flex-col rounded-b-[0.9375rem] bg-background p-[1.5rem] text-foreground">
                  <h3 className="text-body-lg font-500">{item.title}</h3>
                  <p className="text-lg text-muted-foreground">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mt-16">
        <h2 className="mb-16 font-montserrat text-h2-base font-600 md:text-h2-md xl:text-h2-xl">
          How Does It Work?
        </h2>
        <div className="grid gap-12 xl:grid-cols-3">
          {affiliateSteps.map((item, index) => (
            <AdvantagesCard cardData={item} key={index} />
          ))}
        </div>
      </section>

      {/* partner form  */}
      <section className="container mt-16" id="partner-form">
        <h2 className="mb-16 font-montserrat text-h2-base font-600 md:text-h2-md xl:text-h2-xl">
          Fill in the form below to join our Affiliates Program
        </h2>
        <AffiliatePartnerForm />
      </section>

      <FAQs accordionsData={affiliateFAQs} />
    </>
  );
}

export default Page;
