import authImage from "@/_assets/images/authHero.png";
import users from "@/_assets/images/users.png";
import Image from "next/image";

function AuthImage() {
  return (
    <div className="relative hidden h-full w-full xl:block">
      <div className="absolute inset-0 z-10 rounded-[2.4rem] rounded-br-none rounded-tr-none bg-image-overlay-light"></div>
      {/* <div className="mt-6 flex items-center justify-center"> */}
      {/* <p className="relative z-50 flex items-center justify-center gap-4 text-xs text-background opacity-95 xl:justify-start">
          <span className="font-700">Excellent</span>
          <span>
            <span className="font-700">4.8</span> out of 5
          </span>
          <span className="flex items-center gap-1 font-700">
            <Image
              src={greenStar}
              alt="Trustpilot Rating"
              height={14}
              width={13}
              sizes="auto"
            />
            Trustpilot
          </span>
        </p> */}
      {/* </div> */}

      <div className="relative bottom-10 z-50 flex h-full items-end justify-center gap-4">
        <div className="relative h-[57px] w-[200px]">
          <Image src={users} alt="Client reviews" fill sizes="auto" />
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
          <p className="text-body-sm -tracking-[0.05rem] text-background">
            Rated 4.9 stars by 14k+ customers
          </p>
        </div>
      </div>
      <Image
        src={authImage}
        fill
        sizes="auto"
        quality={80}
        alt="eSIM Card"
        className="rounded-[2.4rem] rounded-br-none rounded-tr-none shadow-xl"
      />
    </div>
  );
}

export default AuthImage;

function Star() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="21"
      viewBox="0 0 23 21"
      fill="none"
    >
      <path
        d="M11.4646 0.419922L13.9899 8.19195H22.1619L15.5506 12.9953L18.0759 20.7674L11.4646 15.964L4.8533 20.7674L7.37859 12.9953L0.767303 8.19195H8.9393L11.4646 0.419922Z"
        fill="white"
      />
    </svg>
  );
}
