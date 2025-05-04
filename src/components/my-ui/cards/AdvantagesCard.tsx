"use client";

import Reveal from "@/components/animations/Reveal";
import { Card } from "../../ui/card";
import { cardVariantPrimary } from "@/lib/animations";

interface PropsType {
  icon: React.ReactNode;
  title: string;
  body: string;
}

function AdvantagesCard({
  cardData,
  index,
}: {
  cardData: PropsType;
  index?: number;
}) {
  const { title, icon, body } = cardData;
  return (
    <Reveal variants={cardVariantPrimary} custom={index}>
      <Card className="flex h-full flex-col gap-[0.81rem] rounded-md border border-transparent px-[1.5rem] pb-[1.88rem] pt-[2.38rem] shadow-myCard transition-all hover:scale-105 hover:border-primary">
        <div className="text-primary">{icon}</div>
        <h3 className="font-montserrat text-xl font-500 text-foreground">
          {title}
        </h3>
        <p className="text-body-base leading-normal text-muted-foreground">
          {body.split("\n").map((item, index) => (
            <span key={index} className="block">
              {item}
            </span>
          ))}
          <br />
        </p>
      </Card>
    </Reveal>
  );
}

export default AdvantagesCard;
