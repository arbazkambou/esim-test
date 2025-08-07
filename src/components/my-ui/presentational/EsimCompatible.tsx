import esimSS from "@/_assets/images/esimSS.png";
import { Button } from "@/components/ui/button";
import { ArrowUpLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function EsimCompatible() {
  const sampleDevices = [
    "Pixel 4 and Later",
    "iPhone XS and Later",
    "Huawei P40 and Later",
    "Samsung Galaxy S20 - S23 Series",
  ];
  return (
    <section className="mt-16 bg-primary-gradient">
      <div className="container flex flex-col items-center gap-[2.31rem] px-[2rem] py-[3rem] md:gap-[2.88rem] md:px-[4.25rem] md:py-[5.38rem] xl:grid xl:grid-cols-[1fr_minmax(600px,680px)] xl:items-start xl:gap-x-[3rem] xl:gap-y-[2rem] xl:px-[2rem] xl:py-[4rem] xxl:gap-y-[2rem] 2xl:grid-cols-[1fr_minmax(600px,778px)]">
        {/* text section  */}
        <div className="flex flex-col gap-[1.31rem] xl:mt-4 xl:gap-[3.06rem]">
          <h2 className="text-center font-montserrat text-h2-base font-500 text-background md:text-h2-md xl:text-start xl:text-h2-xl">
            Check if your phone is eSIM Compatible
          </h2>
          <p className="text-center text-body-sm text-background/80 md:text-body-md xl:text-start">
            As you feel the need to use eSIM on your phone, the first question
            that arises is: does your mobile support eSIMs? And do
            eSIM-compatible devices work in all regions worldwide?
          </p>
          <Link href={"/esim-compatible"} className="hidden xl:block">
            <Button className="group flex items-center gap-3 bg-white/10 text-sm hover:text-primary">
              <ArrowUpLeft
                className="transition group-hover:rotate-90 group-hover:text-primary"
                size={20}
              />
              All eSlM-compatible phones
            </Button>
          </Link>
        </div>

        {/* sample devices on mobile  */}
        <div className="grid place-content-start gap-[0.56rem] sm:grid-cols-2 xl:hidden">
          <h3 className="sr-only">Some phones that support eSIM technology</h3>
          {sampleDevices.map((item, index) => (
            <div
              className={`w-max place-self-center rounded-pill bg-background px-[1.5rem] py-[1rem] text-body-sm font-500 text-foreground/80 ${index % 2 === 0 ? "sm:place-self-end" : `sm:place-self-start`}`}
              key={index}
            >
              {item}
            </div>
          ))}
        </div>

        {/* link button on mobile  */}
        <Link href={"/esim-compatible"} className="xl:hidden">
          <div>
            <Button className="group flex items-center gap-3 bg-white/10 text-sm hover:text-primary">
              <ArrowUpLeft
                className="transition group-hover:rotate-90 group-hover:text-primary"
                size={20}
              />
              All eSlM-compatible phones
            </Button>
          </div>
        </Link>

        <div className="hidden w-full sm:block">
          {/* hero image  */}
          <div className="relative h-[412px] w-full">
            <Image
              src={esimSS}
              alt="Distribution Partner with eSIMCard eSIM"
              fill
              sizes="auto"
              className="rounded-[2rem] object-cover transition-all hover:scale-105"
              quality={70}
            />
          </div>

          <div className="hidden xl:flex xl:items-center xl:justify-between xl:gap-1">
            <h3 className="sr-only">
              Some phones that support eSIM technology
            </h3>

            {/* devices on desktop  */}
            {sampleDevices.map((item, index) => (
              <div key={index} className="mt-4">
                <p className="w-max rounded-pill bg-background px-[1rem] py-[0.5rem] text-xs font-500 text-foreground/80 md:place-self-end 2xl:text-body-sm">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default EsimCompatible;
