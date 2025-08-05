import stars from "@/_assets/svgs/5Star.svg";
import {
  heroImageVariants,
  heroTextVariants,
  socialButtonsVariants,
} from "@/lib/animations";
import Reveal from "@/components/animations/Reveal";
import RevealAuto from "@/components/animations/RevealAuto";
import Image from "next/image";
import SocialsButtons from "../../features/auth/SocialsButtons";

interface PropsType {
  title?: string;
  description?: string;
}

function AppInstall({ title, description }: PropsType) {
  return (
    <section className="relative mt-16 bg-primary-gradient pb-[3rem] pt-[3.5rem] xl:container sm:rounded-[2.5rem] xl:mt-36">
      <div className="grid gap-x-12 gap-y-8 xl:grid-cols-2">
        <Reveal
          className="flex flex-col items-center gap-8 xl:items-start xl:ps-8"
          variants={heroTextVariants}
        >
          {/* <p className="flex items-center justify-center gap-4 text-xs text-background xl:justify-start">
            <span className="font-700">Excellent</span>
            <span>
              <span className="font-700">4.8</span> out of 5
            </span>
            <span className="flex items-center gap-1 font-700">
              <Image
                src={whiteStar}
                alt="Trustpilot Rating"
                height={14}
                width={13}
                sizes="auto"
              />
              Trustpilot
            </span>
          </p> */}
          <div className="flex items-center gap-4">
            <div className="relative h-[21.5px] w-[120px]">
              <Image
                src={stars || "/placeholder.svg"}
                alt="5 stars rating"
                fill
                sizes="auto"
              />
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
          {/* Mobile phone image - visible on smaller screens */}
          <RevealAuto
            className="relative h-[360px] w-full xl:hidden"
            variants={heroImageVariants}
          >
            <Image
              src="/images/phones.png"
              alt="Mobile app on phones"
              fill
              sizes="(max-width: 1279px) 100vw, 0vw"
              className="object-contain"
            />
          </RevealAuto>

          {/* Desktop phone image - visible only on xl screens and above */}
          <Reveal
            className={`absolute -right-0 -top-[8.5rem] hidden h-[490px] w-full xl:block`}
            variants={heroTextVariants}
          >
            <Image
              src="/images/phoneLg.png"
              alt="Mobile app on phone"
              fill
              sizes="(min-width: 1280px) 50vw, 0vw"
              className="object-contain object-right"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default AppInstall;
