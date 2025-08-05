"use client";

import step2 from "@/_assets/images/virtual2.png";
import step3 from "@/_assets/images/virtual3.png";
import step4 from "@/_assets/images/virtual4.png";
import step1 from "@/_assets/images/virtualStep1.png";
import Image from "next/image";
import { useRef } from "react";

interface PropsType {
  title?: string;
  description?: string;
}
function VirtualSteps({ title, description }: PropsType) {
  // Use placeholder images instead of the imports that don't exist
  const steps = [
    {
      number: "01",
      title: "Go To Calling",
      description: "Access the calling section in your dashboard",
      image: step1,
    },
    {
      number: "02",
      title: "Buy Numbers",
      description: "Click on 'Buy Numbers' to view options",
      image: step2,
    },
    {
      number: "03",
      title: "Choose Country",
      description: "Select the desired country for your virtual number",
      image: step3,
    },
    {
      number: "04",
      title: "Select and Activate",
      description: " Pick and activate your chosen number",
      image: step4,
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>(steps.map(() => null));

  return (
    <section className="container mt-16 bg-background">
      <div className="flex flex-col gap-[1.31rem]">
        <h2 className="max-w-[858px] text-center font-montserrat text-h2-base font-600 md:text-h2-md xl:text-start xl:text-h2-xl">
          {title ? title : "Steps to Get Virtual Phone Number from eSIMCard"}
        </h2>
        <p className="text-center text-body-sm text-muted-foreground md:text-body-md xl:text-start">
          {description ? (
            description
          ) : (
            <>
              To get a virtual phone number from EsimCard, follow these easy
              steps:
            </>
          )}
        </p>
      </div>

      {/* steps with progress line */}
      <div
        ref={containerRef}
        className="relative mx-auto mt-[4rem] flex max-w-[1000px] flex-col gap-16"
      >
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
            ref={(el) => {
              stepRefs.current[index] = el;
            }}
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

export default VirtualSteps;

{
  /* old Virtual eSIM steps  */
}
//  <section className="container mt-16">
//  <h2 className="max-w-[858px] font-montserrat text-h2-base font-600 leading-normal md:text-h2-md xl:text-h2-xl">
//    Steps to Get Virtual Phone Number from eSIMCard
//  </h2>
//  <p className="mt-[1.38rem] text-body-base text-muted-foreground md:text-body-md xl:text-body-lg">
//    To get a virtual phone number from EsimCard, follow these easy steps:
//  </p>

//  <div className="mt-[3.5rem] grid place-content-center gap-x-[15rem] gap-y-16 xl:grid-cols-2 xl:gap-y-10">
//    {/* step1 image */}
//    <div className="order-1 flex justify-center rounded-[1.875rem] xl:order-1">
//      <div className="flex w-[340px] justify-center rounded-[1.875rem] bg-muted sm:w-[417px]">
//        <div className="relative h-[360px] w-[256px]">
//          <Image
//            src={step1}
//            alt="Go To Calling"
//            fill
//            sizes="auto"
//            quality={70}
//            className="rounded-[1.875rem]"
//          />
//        </div>
//      </div>
//    </div>

//    {/* step1 text  */}
//    <div className="order-0 flex justify-center lg:justify-start xl:order-1 xl:justify-center 2xl:ms-32">
//      <div className="flex max-w-[320px] flex-col justify-center gap-4 sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px]">
//        <p className="text-center font-montserrat text-[2.42rem] font-medium text-foreground-light/95 md:text-[2.8125rem] lg:text-[3rem] xl:text-start">
//          01
//        </p>
//        <h3 className="text-center font-montserrat text-[1.875rem] font-bold leading-tight text-primary/95 md:text-[2.25rem] lg:text-[2.5rem] xl:text-start xl:text-[2.8125rem]">
//          Go To Calling
//        </h3>
//        <p className="text-center text-[1.2rem] text-muted-foreground md:text-[1.3rem] lg:text-[1.4rem] xl:text-start xl:text-[1.5rem]">
//          Access the calling section in your dashboard
//        </p>
//      </div>
//    </div>

//    {/* step2 text  */}
//    <div className="order-2 flex justify-center lg:justify-start xl:order-1 xl:justify-center 2xl:ms-32">
//      <div className="flex max-w-[320px] flex-col justify-center gap-4 sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px]">
//        <p className="text-center font-montserrat text-[2.42rem] font-medium text-foreground-light/95 md:text-[2.8125rem] lg:text-[3rem] xl:text-start">
//          02
//        </p>
//        <h3 className="text-center font-montserrat text-[1.875rem] font-bold leading-tight text-primary/95 md:text-[2.25rem] lg:text-[2.5rem] xl:text-start xl:text-[2.8125rem]">
//        Buy Numbers
//        </h3>
//        <p className="text-center text-[1.2rem] text-muted-foreground md:text-[1.3rem] lg:text-[1.4rem] xl:text-start xl:text-[1.5rem]">
//        Click on 'Buy Numbers' to view options
//        </p>
//      </div>
//    </div>

//    {/* step2 image  */}
//    <div className="order-2 flex justify-center rounded-[1.875rem] xl:order-1">
//      <div className="flex w-[340px] justify-center rounded-[1.875rem] bg-muted sm:w-[417px]">
//        <div className="relative h-[360px] w-[256px]">
//          <Image
//            src={step2}
//            alt="Buy Numbers"
//            fill
//            sizes="auto"
//            quality={70}
//            className="rounded-[1.875rem]"
//          />
//        </div>
//      </div>
//    </div>

//    {/* step3 image  */}
//    <div className="order-3 flex justify-center rounded-[1.875rem] xl:order-1">
//      <div className="flex w-[340px] justify-center rounded-[1.875rem] bg-muted sm:w-[417px]">
//        <div className="relative h-[360px] w-[256px]">
//          <Image
//            src={step3}
//            alt="Choose Country"
//            fill
//            sizes="auto"
//            quality={70}
//            className="rounded-[1.875rem]"
//          />
//        </div>
//      </div>
//    </div>

//    {/* step3 text  */}

//    <div className="order-2 flex justify-center lg:justify-start xl:order-1 xl:justify-center 2xl:ms-32">
//      <div className="flex max-w-[320px] flex-col justify-center gap-4 sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px]">
//        <p className="text-center font-montserrat text-[2.42rem] font-medium text-foreground-light/95 md:text-[2.8125rem] lg:text-[3rem] xl:text-start">
//          03
//        </p>
//        <h3 className="text-center font-montserrat text-[1.875rem] font-bold leading-tight text-primary/95 md:text-[2.25rem] lg:text-[2.5rem] xl:text-start xl:text-[2.8125rem]">
//          Choose Country
//        </h3>
//        <p className="text-center text-[1.2rem] text-muted-foreground md:text-[1.3rem] lg:text-[1.4rem] xl:text-start xl:text-[1.5rem]">
//          Select the desired country for your virtual number
//        </p>
//      </div>
//    </div>

//    {/* step4 text  */}
//    <div className="order-4 flex justify-center lg:justify-start xl:order-1 xl:justify-center 2xl:ms-32">
//      <div className="flex max-w-[320px] flex-col justify-center gap-4 sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px]">
//        <p className="text-center font-montserrat text-[2.42rem] font-medium text-foreground-light/95 md:text-[2.8125rem] lg:text-[3rem] xl:text-start">
//          04
//        </p>
//        <h3 className="text-center font-montserrat text-[1.875rem] font-bold leading-tight text-primary/95 md:text-[2.25rem] lg:text-[2.5rem] xl:text-start xl:text-[2.8125rem]">
//          Select and Activate
//        </h3>
//        <p className="text-center text-[1.2rem] text-muted-foreground md:text-[1.3rem] lg:text-[1.4rem] xl:text-start xl:text-[1.5rem]">
//          Pick and activate your chosen number
//        </p>
//      </div>
//    </div>

//    {/* step4 image  */}
//    <div className="order-4 flex justify-center rounded-[1.875rem] xl:order-1">
//      <div className="flex w-[340px] justify-center rounded-[1.875rem] bg-muted sm:w-[417px]">
//        <div className="relative h-[360px] w-[256px]">
//          <Image
//            src={step4}
//            alt="Select and Activate"
//            fill
//            sizes="auto"
//            quality={70}
//            className="rounded-[1.875rem]"
//          />
//        </div>
//      </div>
//    </div>
//  </div>
// </section>
