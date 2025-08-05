import {
  Handshake,
  Plane,
  Clock,
  PhoneIncoming,
  DollarSign,
  Headset,
} from "lucide-react";
import AdvantagesCard from "../cards/AdvantagesCard";

function EsimAdvantages({ countryName }: { countryName: string }) {
  const cardsData = [
    {
      icon: <Handshake className="h-10 w-10" />,
      title: "Convenience",
      body: `eSIM ${countryName} offers a trouble-free experience with instant activation. eSIMCard also provides easy setup for your eSIM, no physical handling is needed.`,
    },
    {
      icon: <Plane className="h-10 w-10" />,
      title: "Travel Friendly",
      body: `${countryName} eSIM is travel-friendly for its high-speed data access at affordable rates without the burden of roaming charges. Subscribe to local data plans in ${countryName} easily.`,
    },
    {
      icon: <Clock className="h-10 w-10" />,
      title: "Instant Delivery",
      body: `eSIM Card gives instant delivery to its users so they can use the Internet throughout ${countryName} on the go.`,
    },
    {
      icon: <PhoneIncoming className="h-10 w-10" />,
      title: "Dual Standby Mode",
      body: `Local ${countryName} eSIM provides you with affordable data, and you can keep your home SIM card active to receive important calls and messages.`,
    },
    {
      icon: <DollarSign className="h-10 w-10" />,
      title: "Affordable Data Plans",
      body: `eSIM Card offers prepaid data plans to fit your budget. You only pay for the data you use. eSIMCard’s eSIM also provides Pay as You Go flexibility, so you don’t waste money on data you won’t use.`,
    },
    {
      icon: <Headset className="h-10 w-10" />,
      title: "24/7 Support",
      body: `You can get assistance anytime, anywhere with our dedicated 24/7 customer support team. Reachable via email, WhatsApp, or Live chat.`,
    },
  ];

  return (
    <section className="container mt-16">
      <h2 className="text-center font-montserrat text-h2-base font-600 text-foreground md:text-h2-md xl:text-start xl:text-h2-xl">
        Explore Top eSIM Advantages for Your <br className="hidden xl:block" />
        {countryName} Journey
      </h2>

      <div className="mt-[3.69rem] grid gap-x-[4rem] gap-y-[4rem] md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {cardsData.map((item, index) => (
          <AdvantagesCard key={index} cardData={item} />
        ))}
      </div>
    </section>
  );
}

export default EsimAdvantages;
