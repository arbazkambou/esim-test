import aeroplane from "@/_assets/images/aeroplane.png";
import aeroplaneMob from "@/_assets/images/aeroplaneMob.png";
import alexandar from "@/_assets/images/alexandar.png";
import americaMen from "@/_assets/images/americaMen.png";
import authImage from "@/_assets/images/authHero.png";
import dubai from "@/_assets/images/dubai.png";
import worldLocations from "@/_assets/images/worldLocations.png";
import worldLocationsMob from "@/_assets/images/worldLocationsMob.png";
import android from "@/_assets/svgs/android.svg";
import globe from "@/_assets/svgs/globe.svg";
import ios from "@/_assets/svgs/ios.svg";
import AdvantagesCard from "@/components/my-ui/cards/AdvantagesCard";
import PageTextCard from "@/components/my-ui/cards/PageTextCard";
import CountryRegionsHero from "@/components/my-ui/heros/CountryRegionsHero";
import { seoData } from "@/lib/seoConfig";
import { Headphones, Leaf, Wifi } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import { PageParams } from "../page";

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const localizedSeo = seoData[params.locale] || seoData["en"];
  return localizedSeo.aboutUs;
}

function Page() {
  const images = [
    {
      imgSrc: americaMen,
      text: "New York",
    },
    {
      imgSrc: alexandar,
      text: "Brazil",
    },
    {
      imgSrc: dubai,
      text: "Dubai",
    },
  ];

  const eSimLaunchedCards = [
    {
      imgSrc: android,
      date: "2020.08",
      text: "eSIM Card App was launched for Android Devices",
    },
    {
      imgSrc: ios,
      date: "2021.05",
      text: "eSIM Card App was launched for iOS Devices",
    },
    {
      imgSrc: globe,
      date: "2021.04",
      text: "Purchase for eSIM Card is available on our website",
    },
  ];

  const pageTextCardData = {
    paras: [
      "As eSIM adoption continues to expand, esimcard has embraced this technology and taken it to the next level. The esimcard is seamlessly integrated into our esimcard S2, a global mobile WiFi router that ensures stable connections, providing you with internet access wherever you are. Our esimcard also supports our esimcard T1, a global tracker featuring multi-border positioning capabilities, all powered by our e-SIM global data network. And now, the esimcard is prepared to serve end users, making connections more convenient and opening up new possibilities for IoT and consumer devices.",
    ],
  };

  const features = [
    {
      title: "We help you wherever you are",
      body: "We believe that providing exceptional customer service is as important as offering quality products. Our support team is available 24/7 so you can enjoy your trip without stress.",
      icon: <Headphones className="h-10 w-10" />,
    },
    {
      title: "We care about your planet",
      body: "We are committed to reducing our carbon footprint and implementing sustainable practices in all areas of our business. The future must be preserved for future generations.",
      icon: <Leaf className="h-10 w-10" />,
    },
    {
      title: "We help you wherever you are",
      body: "Activation in just a few clicks, the best network in each country, unlimited data, management of your eSIM from the app… We do everything we can to make your internet connection easy and without surprises.",
      icon: <Wifi className="h-10 w-10" />,
    },
  ];

  return (
    <>
      <CountryRegionsHero
        heading="About Our Company"
        description="eSIM - Fast and Affordable mode of Connectivity"
      />

      {/* country images section  */}
      <section className="container mt-16">
        <div className="flex flex-col gap-[1rem]">
          <h2 className="font-montserrat text-h2-base font-600 md:text-h2-md xl:text-h2-xl">
            The Esimcard Narrative
          </h2>
          <p className="text-body-sm text-muted-foreground md:text-body-md">
            We are dedicated to creating a future where companies can
            efficiently,
            <span className="inline xl:block">
              securely, and openly oversee their telecommunications services.
            </span>
          </p>

          <div className="relative h-[387px] w-full transition-all hover:scale-105 hover:opacity-90 md:hidden">
            <Image
              src={aeroplaneMob}
              fill
              sizes="auto"
              alt="eSIM Card Narrative"
              quality={70}
              className="rounded-[2.5rem]"
              placeholder="blur"
            />
          </div>

          <div className="relative hidden h-[387px] w-full transition-all hover:opacity-90 md:block">
            <Image
              src={aeroplane}
              fill
              sizes="auto"
              className="rounded-[2.5rem]"
              alt="eSIM Card Narrative"
              quality={70}
            />
          </div>
          <div className="mt-4 grid gap-[2rem] xl:grid-cols-3">
            {images.map((item, index) => (
              <div
                className="group relative h-[311px] w-full transition-all hover:scale-105 hover:opacity-90"
                key={index}
              >
                <Image
                  src={item.imgSrc}
                  fill
                  sizes="auto"
                  alt={`${item.text} image`}
                  className="rounded-[2.5rem]"
                  placeholder="blur"
                  quality={70}
                />
                <p className="absolute left-[1.9rem] top-[1rem] z-40 text-body-lg font-700 text-background">
                  {item.text}
                </p>
                <div className="absolute inset-0 rounded-[2.5rem] bg-image-overlay-light"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* eSIM Was Launched For Ease section  */}
      <section className="container mt-16">
        <div className="flex flex-col gap-[2rem]">
          <h2 className="font-montserrat text-h2-base font-600 md:text-h2-md xl:text-h2-xl">
            eSIM Was Launched For Ease
          </h2>
          <p className="text-body-sm text-muted-foreground md:text-body-md">
            We are dedicated to creating a future where companies can
            efficiently,
            <span className="inline xl:block">
              securely, and openly oversee their telecommunications services.
            </span>
          </p>
          <div className="grid gap-[2rem] xl:grid-cols-2">
            <div className="relative h-[503px] w-full xl:block xl:w-[90%]">
              <div className="absolute inset-0 z-10 rounded-[1rem] bg-image-overlay-light"></div>
              <Image
                src={authImage}
                fill
                sizes="auto"
                quality={70}
                alt="eSIM Card"
                className="rounded-[1rem]"
              />
            </div>
            <div className="grid gap-x-[2rem] gap-y-[3rem] xl:grid-cols-2 xl:place-items-center">
              {eSimLaunchedCards.map((item, index) => (
                <div className="flex flex-col items-start gap-2" key={index}>
                  <div className="flex shrink-0 items-center gap-2">
                    <Image
                      src={item.imgSrc}
                      alt={`${item.text}`}
                      height={40}
                      width={40}
                      sizes="auto"
                    />
                    <h3 className="text-xl font-600 text-muted-foreground">
                      {item.date}
                    </h3>
                  </div>
                  <p className="text-lg text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <PageTextCard
            cardData={pageTextCardData}
            className="text-muted-foreground"
          />
        </div>
      </section>

      {/* Our distinctive feature lies in section */}

      <section className="container mt-16 flex flex-col gap-[1rem]">
        <h2 className="font-montserrat text-h2-base font-600 md:text-h2-md xl:text-h2-xl">
          Our distinctive feature lies in...
        </h2>
        <p className="text-body-sm text-muted-foreground md:text-body-md">
          We are dedicated to creating a future where companies can efficiently,
          <span className="inline xl:block">
            securely, and openly oversee their telecommunications services.
          </span>
        </p>
        <div className="mt-10 grid gap-x-[4rem] gap-y-[4rem] md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {features.map((item, index) => (
            <AdvantagesCard key={index} cardData={item} />
          ))}
        </div>
      </section>

      {/* world locations image section  */}
      <section className="container relative mt-16 hidden h-[484px] xl:block">
        <Image
          src={worldLocations}
          fill
          alt="world locations"
          sizes="auto"
          placeholder="blur"
          className="rounded-[2rem]"
          quality={70}
        />
      </section>
      <section className="relative mt-16 h-[886px] sm:container xl:hidden">
        <div className="rounded-none sm:rounded-[2rem] overflow-hidden w-full h-full relative">
          <Image
            src={worldLocationsMob}
            fill
            alt="world locations"
            sizes="auto"
            placeholder="blur"
            className="object-cover"
            quality={70}
          />
        </div>
      </section>

      {/* <section className="relative mt-16 h-[886px] sm:container xl:hidden">
        <Image
          src={worldLocationsMob}
          fill
          alt="world locations"
          sizes="auto"
          placeholder="blur"
          className="lg:rounded-[2rem] rounded-none"
          quality={70}
        />
      </section> */}
    </>
  );
}

export default Page;
