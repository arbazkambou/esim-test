import Image from "next/image";
import Link from "next/link";
import appleLink from "@/_assets/svgs/appleLink.svg";
import playLink from "@/_assets/svgs/playLink.svg";

function SocialsButtons() {
  return (
    <div className="flex items-center gap-5 lg:gap-8">
      <Link
        href={
          "https://play.google.com/store/apps/details?id=com.activatewireless.esim_card"
        }
      >
        <div className="relative h-[60px] w-[150px] xl:h-[50px] xl:w-[170px]">
          <Image src={playLink} fill alt="eSIM Card android app" sizes="auto" />
        </div>
      </Link>
      <Link href={"https://apps.apple.com/app/id1627173767"}>
        <div className="relative h-[60px] w-[150px] xl:h-[50px] xl:w-[170px]">
          <Image src={appleLink} fill alt="eSIM Card ios app" sizes="auto" />
        </div>
      </Link>
    </div>
  );
}

export default SocialsButtons;
