import Image from "next/image";
import logo from "@/_assets/logo.png";
import Link from "next/link";

function Logo() {
  return (
    <Link
      href={"/"}
      className="relative h-[40px] w-[100px] md:h-[57px] md:w-[137px]"
    >
      <Image
        src={logo}
        fill
        alt="eSIM Card logo"
        sizes="auto"
        quality={70}
        priority
      />
    </Link>
  );
}

export default Logo;
