import { ArrowUpLeft } from "lucide-react";
import { Button } from "../../ui/button";
import compatiblePhones from "@/_assets/images/compatiblePhones.png";
import Image from "next/image";
import Link from "next/link";

function EsimCompatible() {
  return (
    <section className="my-16 bg-primary">
      <div className="container pt-16 xl:pt-0">
        <div className="grid place-items-center xl:grid-cols-2 xl:gap-x-4">
          {/* text side  */}
          <div>
            <h2 className="text-center text-h2-base font-500 text-background md:text-h2-md xl:text-start xl:text-h2-xl">
              Check if your phone is eSIM Compatible
            </h2>
            <p className="mt-[1.31rem] text-center text-xs text-background opacity-80 md:text-body-sm xl:text-start xl:text-body-md">
              As you feel the need to use eSIM on your phone, the first question
              that arises is: does your mobile support eSIMs? And do
              eSIM-compatible devices work in all regions worldwide?{" "}
            </p>
            <p className="mt-7 text-center text-xs text-background opacity-80 md:text-body-sm xl:text-start xl:text-body-md">
              Some phones that support eSIM technology:
            </p>
            <div className="mt-[2.5rem] flex flex-col gap-6 text-center text-body-sm font-600 text-background md:text-body-base xl:text-start">
              <p>iPhone XS and Later</p>
              <p>Pixel 4 and Later</p>
              <p>Samsung Galaxy S20 - S23 Series</p>
              <p>Huawei P40 and Later</p>
            </div>
            <div className="mt-[2.5rem] flex items-center justify-center xl:justify-start">
              <Link href={"/esim-compatible"}>
                <Button className="group flex items-center gap-3 bg-white/10 text-sm hover:text-primary">
                  <ArrowUpLeft
                    className="transition group-hover:rotate-90 group-hover:text-primary"
                    size={20}
                  />
                  All eSlM-compatible phones
                </Button>
              </Link>
            </div>
          </div>

          {/* image side */}
          <div className="relative mt-8 h-[400px] w-[308px] md:h-[715px] md:w-[561px] xl:mt-0">
            <Image
              src={compatiblePhones}
              alt="Check if your phone is eSIM Compatible"
              fill
              quality={50}
              sizes="auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default EsimCompatible;
