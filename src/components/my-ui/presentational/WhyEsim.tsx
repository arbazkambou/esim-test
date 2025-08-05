import {
  Factory,
  Handshake,
  LayoutGrid,
  RadioTower,
  Smile,
  UserRound,
} from "lucide-react";
import PrimaryButton from "../buttons/PrimaryButton";
import AdvantagesCard from "../cards/AdvantagesCard";

function WhyEsim() {
  const cardsData = [
    {
      icon: <Handshake className="h-10 w-10" />,
      title: "eSIMCard - The Future of Connectivity",
      body: "eSIMCard is a revolutionary mode of digital communication. As a leading esim carrier, we are at the forefront of this technology. Our virtual sim card solution offers unique features that set us apart. With eSIMCard, you're adopting a future where connectivity is seamless, secure, and versatile.",
    },
    {
      icon: <Factory className="h-10 w-10" />,
      title: "Borderless Communication with eSIMCard",
      body: "In a globalized world, borderless communication is necessary. eSIMCard is your gateway to this reality. Our eSIM offers global esim options and international esim solutions that erase geographical boundaries.",
    },
    {
      icon: <RadioTower className="h-10 w-10" />,
      title: "eSIMCard offers Effortless Connectivity",
      body: "Experience effortless connectivity with eSIMCard. You can buy esim online in just a few clicks, which simplifies the purchase and activation process. Our approach to connectivity is all about ease and convenience, which ensures that you get connected without any struggle.",
    },
    {
      icon: <UserRound className="h-10 w-10" />,
      title: "eSIMCard - Your Travel Companion",
      body: "eSIMCard is a handy travel companion which offers services in over 200+ countries. We offer local, global, and regional eSIM options. If you're looking for an esim for international travel or travel in general, eSIMCard covers you.",
    },
    {
      icon: <Smile className="h-10 w-10" />,
      title: "Flexible & Budget-Friendly Plans",
      body: "At eSIMCard, we believe in fulfilling every customer's needs. That's why we offer a variety of esim data plans that are flexible and budget-friendly. With eSIMCard, you're in control of your connectivity expenses, ensuring you get the best value for your money.",
    },
    {
      icon: <LayoutGrid className="h-10 w-10" />,
      title: "eSIMCard's App (Android & IOS)",
      body: "To enhance your experience, eSIMCard has developed a user-friendly app for efficient esim management. Which eases the process of new plan activation, checking data usage, and seeking customer support. eSIMCard app possesses features like esim service activation and management.",
    },
  ];
  return (
    <section className="container mt-16 bg-background">
      <div className="flex flex-col gap-[1.31rem] xl:flex-row xl:items-start xl:justify-between">
        <div>
          <h2 className="text-center font-montserrat text-h2-base font-600 text-foreground md:text-h2-md xl:text-start xl:text-h2-xl">
            Why International Travelers Trust eSIMCard's eSIM?
          </h2>
          <p className="mt-[1.31rem] text-center text-body-sm text-muted-foreground md:text-body-md xl:text-start">
            Tour internationally with eSIMCard: eSIM’s World Knows No Borders.
            Just <br />
            One Tap to Travel Through Nations
          </p>
        </div>
        <div className="flex items-center justify-center">
          <PrimaryButton href="/esim/" label="Show Me eSlM Plans" />
        </div>
      </div>
      <div className="mt-[3.69rem] grid gap-x-[4rem] gap-y-[4rem] md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {cardsData.map((item, index) => (
          <AdvantagesCard cardData={item} key={index} index={index} />
        ))}
      </div>
    </section>
  );
}

export default WhyEsim;
