import Image, { StaticImageData } from "next/image";

interface PropsType {
  title: string;
  body: string;
  imgSrc: StaticImageData;
}

function EsimStep({ step }: { step: PropsType }) {
  return (
    <div className="h-full min-w-[320px] max-w-[320px] bg-muted sm:min-w-[360px] sm:max-w-[360px]">
      <div className="relative h-[275px] max-w-[320px] sm:h-[309px] sm:max-w-[360px]">
        <Image
          src={step.imgSrc}
          fill
          alt={step.title}
          className="bg-primary-light"
          sizes="auto"
        />
      </div>
      <div className={`flex flex-col gap-3 bg-muted px-[1.5rem] py-[2.5rem]`}>
        <h3 className="text-3xl font-500">{step.title}</h3>
        <p className="text-body-sm text-muted-foreground">{step.body}</p>
      </div>
    </div>
  );
}

export default EsimStep;
