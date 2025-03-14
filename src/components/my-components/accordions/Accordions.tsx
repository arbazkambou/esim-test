"use client";

import Reveal from "@/animations/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import { cardVariantPrimary } from "@/animations/animations";

interface PropsType {
  title: string;
  body: string | React.ReactNode;
}
function Accordions({ data }: { data: PropsType[] }) {
  return (
    <div className="mt-12">
      <Accordion
        type="multiple"
        className="grid gap-x-10 gap-y-6 lg:grid-cols-2"
      >
        {data.map((item, index) => (
          <Reveal key={index} variants={cardVariantPrimary}>
            <AccordionItem
              value={`${index}`}
              key={index}
              className="group h-full rounded-lg border-2 border-transparent transition-all data-[state=open]:border-primary data-[state=open]:bg-muted"
            >
              <AccordionTrigger className="text-body-md font-500 transition-all group-hover:text-primary data-[state=open]:text-primary xl:text-body-lg">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="text-body-sm text-muted-foreground xl:text-body-md">
                {item.body}
              </AccordionContent>
            </AccordionItem>
          </Reveal>
        ))}
      </Accordion>
    </div>
  );
}

export default Accordions;
