import step3 from "@/_assets/images/activatePlan.png";
import step1 from "@/_assets/images/buyDataPlan.png";
import step2 from "@/_assets/images/installEsim.png";
import Image from "next/image";

interface PropsType {
  title?: string;
  description?: string;
}

function EsimSteps({ title, description }: PropsType) {
  // Use placeholder images instead of the imports that don't exist
  const steps = [
    {
      number: "01",
      title: "Buy a data plan",
      description: "Search for your destination and pick any data pack",
      image: step1,
    },
    {
      number: "02",
      title: "Install the eSIM",
      description: "Easy installation via QR code",
      image: step2,
    },
    {
      number: "03",
      title: "Activate your plan",
      description: "Only activate when you are ready to use data",
      image: step3,
    },
  ];

  return (
    <section className="container mt-16 bg-background">
      <div className="flex flex-col gap-[1.31rem]">
        <h2 className="text-center font-montserrat text-h2-base font-600 md:text-h2-md xl:text-start xl:text-h2-xl">
          {title ? title : " How does eSIMCard eSIM work?"}
        </h2>
        <p className="text-center text-body-sm text-muted-foreground md:text-body-md xl:text-start">
          {description ? (
            description
          ) : (
            <>
              To get a virtual phone number from eSIMCard, follow these easy
              steps:
              <span className="inline sm:block">
                Communication to the next level. Buy Your eSIM Online from
                eSIMCard.
              </span>
            </>
          )}
        </p>
      </div>

      {/* steps with progress line */}
      <div className="relative mx-auto mt-[4rem] flex max-w-[1000px] flex-col gap-16">
        {/* Progress Line - Hidden on mobile, visible on md and up */}
        <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 xl:block">
          <div className="h-full w-full rounded-full bg-muted">
            {steps.map((_, index) => {
              return (
                <div
                  key={`line-${index}`}
                  className="absolute w-full rounded-full bg-primary"
                />
              );
            })}
          </div>
        </div>

        {/* Steps Content */}
        {steps.map((step, index) => (
          <div
            key={step.number}
            className="flex flex-col items-center gap-8 md:flex-row md:justify-between"
          >
            {index % 2 === 0 ? (
              <>
                <div className="relative order-1 h-[360px] w-full sm:w-[417px] md:order-none">
                  <Image
                    src={step.image || "/placeholder.svg"}
                    alt={`${step.title} image`}
                    fill
                    sizes="auto"
                    quality={70}
                    className="rounded-[1.875rem] object-contain"
                  />
                </div>

                <div className="flex max-w-[320px] flex-col gap-4">
                  <p className="text-center font-montserrat text-[2.42rem] font-500 text-foreground-light/95 md:text-start md:text-[2.8125rem]">
                    {step.number}
                  </p>
                  <h3 className="S text-center font-montserrat text-[30px] font-700 leading-tight text-primary/95 md:text-start">
                    {step.title}
                  </h3>
                  <p className="text-center text-[1.2rem] text-muted-foreground md:text-start md:text-[1.5rem]">
                    {step.description}
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="flex max-w-[320px] flex-col gap-4">
                  <p className="text-center font-montserrat text-[2.42rem] font-500 text-foreground-light/95 md:text-start md:text-[2.8125rem]">
                    {step.number}
                  </p>
                  <h3 className="text-center font-montserrat text-[30px] font-700 leading-tight text-primary/95 md:text-start">
                    {step.title}
                  </h3>
                  <p className="text-center text-[1.2rem] text-muted-foreground md:text-start md:text-[1.5rem]">
                    {step.description}
                  </p>
                </div>

                <div className="relative h-[360px] w-full sm:w-[417px]">
                  <Image
                    src={step.image || "/placeholder.svg"}
                    alt={`${step.title} image`}
                    fill
                    sizes="auto"
                    quality={70}
                    className="rounded-[1.875rem] object-contain"
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default EsimSteps;
