import planeGlobe from "@/_assets/images/planeGlobe.png";
import stars from "@/_assets/svgs/5Star.svg";
import Image, { StaticImageData } from "next/image";

interface PropsType {
  heading: React.ReactNode;
  description: string | React.ReactNode;
  imageSrc?: StaticImageData;
}
function CountryRegionsHero({ heading, description, imageSrc }: PropsType) {
  return (
    <section className="mt-16 xl:container">
      <div className="grid gap-y-[2.5rem] bg-primary px-[1rem] py-[1.5rem] md:px-[3.12rem] xl:grid-cols-2 xl:rounded-[2.5rem]">
        <div className="flex flex-col justify-center gap-[1rem] text-background xl:col-span-1">
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
          <div className="flex items-center justify-center gap-4 xl:justify-start">
            <div className="relative h-[21.5px] w-[120px]">
              <Image src={stars} alt="5 stars rating" fill sizes="auto" />
            </div>
            <p className="text-body-sm font-700 text-background">
              500,000+ Downloads
            </p>
          </div>
          <h1 className="text-center font-montserrat text-h1-base font-600 leading-normal text-background md:text-h1-md xl:text-start xl:text-h1-xl">
            {heading}
          </h1>
          <p className="text-center text-xs leading-normal opacity-80 md:text-[1.25rem] xl:text-start">
            {description}
          </p>
        </div>
        <div className="hidden xl:col-span-1 xl:flex xl:items-center xl:justify-end">
          <div className="relative h-[300px] w-[433px]">
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt="eSIMs for Easy Travel Connectivity"
                fill
                sizes="auto"
              />
            ) : (
              <Image
                src={planeGlobe}
                alt="eSIMs for Easy Travel Connectivity"
                quality={60}
                fill
                sizes="auto"
                priority
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CountryRegionsHero;
