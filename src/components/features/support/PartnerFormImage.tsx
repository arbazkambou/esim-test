import partnerFormImage from "@/_assets/images/partnerFormImage.png";
import Image from "next/image";

function PartnerFormImage() {
  return (
    <div className="relative hidden h-full w-full xl:block">
      <div className="absolute inset-0 z-10 rounded-[2.4rem] rounded-br-none rounded-tr-none bg-image-overlay-light"></div>
      <Image
        src={partnerFormImage}
        fill
        sizes="auto"
        quality={80}
        alt="eSIM Card"
        className="rounded-[2.4rem] rounded-br-none rounded-tr-none shadow-lg"
      />
      <div className="absolute bottom-10 z-50 m-0 ms-6 flex flex-col gap-[1.5rem] p-0 leading-none">
        <span className="font-montserrat text-[3.8rem] font-700 leading-10 text-background">
          Base <span className="block">payout</span>
        </span>
        <span className="w-max rounded-[2.5rem] bg-primary-accent px-[1.69rem] py-1 text-[1.5rem] font-700 text-foreground">
          10-25%
        </span>
        <span className="-mt-2 text-[1.25rem] font-500 text-background/90">
          Earn bonuses by selling featured data packages
        </span>
      </div>
    </div>
  );
}

export default PartnerFormImage;
