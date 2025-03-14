import stars from "@/_assets/svgs/5Star.svg";
import Image from "next/image";
import SocialsButtons from "../shared/SocialsButtons";
import Reveal from "@/animations/Reveal";
import {
  heroTextVariants,
  socialButtonsVariants,
} from "@/animations/animations";

interface PropsType {
  title?: string;
  description?: string;
}

function AppInstall({ title, description }: PropsType) {
  return (
    <section className="relative mt-16 bg-primary-gradient pb-[3.5rem] pt-[5rem] xl:container sm:rounded-[2.5rem] xl:mt-36">
      <div className="grid gap-x-12 gap-y-8 xl:grid-cols-2">
        <Reveal
          className="flex flex-col items-center gap-8 xl:items-start xl:ps-8"
          variants={heroTextVariants}
        >
          <div className="flex items-center gap-4">
            <div className="relative h-[21.5px] w-[120px]">
              <Image src={stars} alt="5 stars rating" fill sizes="auto" />
            </div>
            <p className="text-body-sm font-700 text-background">
              500,000+ Downloads
            </p>
          </div>

          <div>
            {title ? (
              <h3 className="text-center font-montserrat text-h2-base font-600 text-background md:text-h2-md xl:text-start xl:text-[2.3rem] 2xl:text-h2-xl">
                {title}
              </h3>
            ) : (
              <h2 className="text-center font-montserrat text-h2-base font-600 text-background md:text-h2-md xl:text-start xl:text-[2.3rem] 2xl:text-h2-xl">
                Download The App Now
              </h2>
            )}
            {description ? (
              <p className="mt-[1.31rem] text-center text-body-sm text-background opacity-80 xl:text-start xl:text-body-md">
                {description}
              </p>
            ) : (
              <p className="mt-[1.31rem] text-center text-body-sm text-background opacity-80 xl:text-start xl:text-body-md">
                To Use Virtual Number & International Calling Features. Buy,
                Setup, and manage your eSIMs easily.
              </p>
            )}
          </div>
          <Reveal className="z-50" variants={socialButtonsVariants}>
            <SocialsButtons />
          </Reveal>
        </Reveal>
        <div>
          <div className="h-[360px] w-full bg-[url('/images/phones.png')] bg-center bg-no-repeat object-cover xl:hidden"></div>
          <div
            className={`absolute -right-0 -top-[8.5rem] hidden ${title ? "h-[500px]" : "h-[530px]"} w-full bg-[url('/images/phoneLg.png')] bg-right bg-no-repeat object-cover xl:block`}
          ></div>
        </div>
      </div>
    </section>
  );
}

export default AppInstall;
