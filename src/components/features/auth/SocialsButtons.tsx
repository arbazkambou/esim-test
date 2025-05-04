import Image from "next/image";
import Link from "next/link";
import appleLink from "@/_assets/svgs/appleLink.svg";
import playLink from "@/_assets/svgs/playLink.svg";

function SocialsButtons() {
  return (
    <div className="flex items-center gap-4">
      <Link
        href={
          "https://play.google.com/store/apps/details?id=com.activatewireless.esim_card"
        }
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="relative h-[50px] w-[150px] transition-all hover:opacity-80 xl:h-[45px] xl:w-[170px]">
          <Image src={playLink} fill alt="eSIM Card android app" sizes="auto" />
        </div>
      </Link>
      <Link
        href={"https://apps.apple.com/app/id1627173767"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="relative h-[50px] w-[150px] transition-all hover:opacity-80 xl:h-[45px] xl:w-[170px]">
          <Image src={appleLink} fill alt="eSIM Card ios app" sizes="auto" />
        </div>
      </Link>
    </div>
  );
}

export default SocialsButtons;
