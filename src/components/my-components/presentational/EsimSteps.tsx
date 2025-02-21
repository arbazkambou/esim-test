import step1 from "@/_assets/images/step1.svg";
import step2 from "@/_assets/images/step2.svg";
import step3 from "@/_assets/images/step3.svg";
import EsimStep from "../cards/EsimStep";
function EsimSteps() {
  const stepsData = [
    {
      imgSrc: step1,
      title: "Buy a data plan",
      body: "Search for your destination and pick any data pack",
    },
    {
      imgSrc: step2,
      title: "Install the eSIM",
      body: "Easy installation via QR code",
    },
    {
      imgSrc: step3,
      title: "Activate your plan",
      body: "Only activate when you are ready to use data",
    },
  ];
  return (
    <section className="container mt-16 bg-background">
      <div className="flex flex-col gap-[1.31rem]">
        <h2 className="text-center font-montserrat text-h2-base font-600 md:text-h2-md xl:text-start xl:text-h2-xl">
          How does eSIMCard eSIM work?
        </h2>
        <p className="text-center text-body-sm text-muted-foreground md:text-body-md xl:text-start">
          Your Personnel eSIM Carrier for Global Connectivity takes your Digital
          Communication to the next level. Buy Your eSIM Online from eSIMCard.
        </p>
      </div>

      {/* steps  */}
      <div className="mt-[3.5rem] grid place-items-center gap-x-4 gap-y-8 md:grid-cols-2 xl:grid-cols-3 xl:px-0">
        {stepsData.map((item, index) => (
          <EsimStep key={index} step={item} />
        ))}
      </div>
    </section>
  );
}

export default EsimSteps;
