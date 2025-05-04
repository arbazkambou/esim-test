import Reveal from "@/components/animations/Reveal";
import Accordions from "../accordions/Accordions";
import PrimaryButton from "../buttons/PrimaryButton";
import { heroTextVariants } from "@/lib/animations";

export interface Accordion {
  title: string;
  body: string | React.ReactNode;
}
function FAQs({
  countryName,
  accordionsData,
  heading,
}: {
  countryName?: string;
  accordionsData: Accordion[];
  heading?: string;
}) {
  return (
    <section className="container mt-16 bg-background">
      <div className="flex flex-col items-center justify-center gap-6 xl:flex-row xl:justify-between">
        <Reveal variants={heroTextVariants}>
          <h2 className="text-center font-montserrat text-h2-base font-600 md:text-h2-md xl:text-start xl:text-h2-xl">
          {heading ? heading : `Frequently asked questions${countryName ? ` about ${countryName} eSIM` : ""}`}
            {/* Frequently asked questions{" "}
            {countryName && `about ${countryName} eSIM`} */}
          </h2>
          <p className="mt-[1.2rem] text-center text-body-sm text-muted-foreground md:text-body-md xl:text-start">
            Find quick answers to common queries.
          </p>
        </Reveal>
        <PrimaryButton label="Get Support" href="/help-center" />
      </div>

      <Accordions data={accordionsData} />
    </section>
  );
}

export default FAQs;
