import clock from "@/_assets/svgs/clock.svg";
import earth from "@/_assets/svgs/earth.svg";
import sim from "@/_assets/svgs/sim.svg";
import trophy from "@/_assets/svgs/trophy.svg";
import Image from "next/image";

function EsimFeatures() {
  const eSimFeaturesData = [
    {
      title: "Affordable Plans",
      body: "Enjoy Global Connectivity without Overspending",
      imgSrc: earth,
    },
    {
      title: "Free Roaming",
      body: "Say Goodbye to Roaming Charges",
      imgSrc: clock,
    },
    {
      title: "Reliable & Fast Internet",
      body: "Stream, Browse, and Connect Faster",
      imgSrc: trophy,
    },
    {
      title: "Easy Installation",
      body: "Get Connected in a few Taps",
      imgSrc: sim,
    },
  ];

  return (
    <section className="mt-16 bg-primary-light">
      <div className="container grid gap-[1.81rem] py-12 md:grid-cols-2 xl:grid-cols-4">
        <h2 className="hidden">
          Buy Prepaid eSIMs Online for International Travel with Affordable
          Carrier
        </h2>
        {eSimFeaturesData.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-5">
            <div>
              <Image
                src={item.imgSrc}
                alt={item.title}
                height={40}
                width={40}
                sizes="auto"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-center font-montserrat text-2xl font-600 text-foreground">
                {item.title}
              </h3>
              <p className="text-center text-sm text-foreground-light">
                {item.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EsimFeatures;
