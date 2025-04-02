import Image, { StaticImageData } from "next/image";

interface PropsType {
  title: string;
  body: string;
  imgSrc: StaticImageData;
}

function EsimStep({ step }: { step: PropsType }) {
  return (
    <>
      <div className="flex justify-end">
        <div className="relative h-[360px] w-full sm:w-[417px]">
          <Image
            src={step.imgSrc}
            alt={step.title}
            fill
            sizes="auto"
            quality={70}
            className="rounded-[1.875rem]"
          />
        </div>
      </div>

      <div className="flex max-w-[320px] flex-col justify-center gap-4">
        <p className="text-[2.8125rem] font-500 text-foreground-light/95">01</p>
        <h3 className="font-montserrat text-[2.8125rem] font-700 leading-tight text-primary/95">
          {step.title}
        </h3>
        <p className="text-[1.5rem] text-muted-foreground">{step.body}</p>
      </div>
    </>
  );
}

export default EsimStep;
