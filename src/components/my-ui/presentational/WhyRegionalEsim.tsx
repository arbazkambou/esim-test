"use client";

import { cardVariantPrimary, heroTextVariants } from "@/lib/animations";
import Reveal from "@/components/animations/Reveal";
import { Gift, Scale, Smartphone } from "lucide-react";

function WhyRegionalEsim() {
  const whyChooseCardsData = [
    {
      icon: <Scale className="h-10 w-10" />,
      title: "Flexible & Budget-Friendly Plans",
      body: "eSIMCard offers the most flexible regional data plans with data ranging from 1GB to 20GB and validity from 7 to 30 days. Budget-friendly prepaid plans start from just $3.17.",
    },
    {
      icon: <Smartphone className="h-10 w-10" />,
      title: "Ease of Use",
      body: "The ease of activation and user-friendly interface of the eSIMCard app, available on both the App Store and Play Store, make it stand out from the rest.",
    },
    {
      icon: <Gift className="h-10 w-10" />,
      title: "Exclusive Deals",
      body: "eSIMCard offers exclusive deals and gifts, including complimentary call minutes, texts, and data with wide coverage in over 200+ countries.",
    },
  ];
  return (
    <section className="mt-16 rounded-none bg-primary-gradient px-4 py-8 text-background sm:p-12">
      <div className="container flex flex-col gap-6">
        <Reveal className="flex flex-col gap-6" variants={heroTextVariants}>
          <h2 className="font-montserrat text-h2-base font-600 md:text-h2-md xl:text-h2-xl">
            Why Choose eSIMCard for Regional eSIM
          </h2>
          <p className="opacity-80">
            eSIMCard is a top choice among business and leisure travelers for
            prepaid regional eSIMs. It offers Wide Availability, Affordable
            Regional Data Plans, High Speed 5G Internet, and Multiple options in
            plans.
          </p>
          <h3 className="font-700 opacity-80">
            Here is why eSIMCard stands out:
          </h3>
        </Reveal>

        <div className="mt-[3.25rem] grid place-content-center gap-12 md:grid-cols-2 xl:grid-cols-3 xl:gap-24">
          {whyChooseCardsData.map((item, index) => (
            <Reveal
              className="flex flex-col gap-6"
              key={index}
              custom={index}
              variants={cardVariantPrimary}
            >
              <span>{item.icon}</span>
              <p className="text-lg font-600">{item.title}</p>
              <p className="text-lg opacity-80">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyRegionalEsim;
