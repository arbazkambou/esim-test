import esimSS from "@/_assets/images/esimSS.png";
import Image from "next/image";

function DistributorPartnerHero() {
  return (
    <section className="mt-16 bg-primary-gradient text-background xl:container xl:rounded-[2.5rem]">
      <div className="grid gap-14 px-4 py-[3.62rem] sm:px-[2.19rem] xl:grid-cols-3">
        <div className="flex flex-col gap-6 xl:col-span-2 xl:gap-10">
          <h2 className="font-montserrat text-h2-base font-600 md:text-h2-md xl:text-h2-xl">
            Become a Distribution Partner with eSIMCard eSIM
          </h2>
          <p className="text-lg text-background/80">
            Become an eSIM Distributor with eSIMCard, a leading eSIM Provider
            with Coverage in 200+ Countries. Provide your customers with the
            Best Global Connectivity options with Local, Regional, and Global
            eSIM Data Plans.
          </p>
          <p className="text-lg text-background/80">
            Join our growing network and benefit from our expertise. With
            competitive wholesale rates, Connectivity API, Reseller Dashboard,
            and a dedicated support team.
          </p>
        </div>
        <div className="relative h-[336px] max-w-[604px]">
          <Image
            src={esimSS}
            alt="Distribution Partner with eSIMCard eSIM"
            fill
            sizes="auto"
            className="opacity-90 transition-all hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}

export default DistributorPartnerHero;
