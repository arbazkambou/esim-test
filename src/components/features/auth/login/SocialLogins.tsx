import facebook from "@/_assets/images/facebook.svg";
import google from "@/_assets/images/google.svg";
import { Button } from "@/components/ui/button";
import Image from "next/image";

function SocialLogins() {
  return (
    <div className="flex items-center justify-between gap-1 text-sm font-500 text-foreground-light xs:gap-4">
      <Button variant={"outline"} className="xs:w-full">
        <Image
          height={20}
          width={20}
          alt="sign in with google"
          src={google}
          sizes="auto"
          className="shrink-0"
        />
        Google
      </Button>
      <Button variant={"outline"} className="xs:w-full">
        <Image
          height={20}
          width={20}
          alt="sign in with facebook"
          src={facebook}
          sizes="auto"
          className="shrink-0"
        />
        Facebook
      </Button>
      <Button variant={"outline"} className="xs:w-full">
        <Apple />
        Apple
      </Button>
    </div>
  );
}

export default SocialLogins;

function Apple() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="20"
      viewBox="0 0 16 20"
      fill="none"
    >
      <g clipPath="url(#clip0_1605_14820)">
        <path
          d="M15.4909 6.87568C15.3769 6.96404 13.3641 8.09706 13.3641 10.6164C13.3641 13.5304 15.9253 14.5613 16.002 14.5869C15.9902 14.6497 15.5951 15.9987 14.6516 17.3733C13.8103 18.5829 12.9317 19.7905 11.5951 19.7905C10.2585 19.7905 9.9145 19.0149 8.3715 19.0149C6.86781 19.0149 6.33317 19.816 5.11057 19.816C3.88796 19.816 3.03489 18.6968 2.05405 17.3222C0.917936 15.7081 0 13.2006 0 10.8206C0 7.00331 2.48452 4.9788 4.92973 4.9788C6.22899 4.9788 7.31204 5.83102 8.12776 5.83102C8.90418 5.83102 10.115 4.92775 11.5931 4.92775C12.1533 4.92775 14.1661 4.9788 15.4909 6.87568ZM10.8914 3.31168C11.5027 2.5871 11.9351 1.58171 11.9351 0.576332C11.9351 0.436913 11.9233 0.295532 11.8978 0.181641C10.9032 0.21895 9.7199 0.843386 9.00639 1.67008C8.44619 2.3063 7.92334 3.31168 7.92334 4.3308C7.92334 4.48397 7.94889 4.63713 7.96069 4.68622C8.02359 4.698 8.1258 4.71175 8.22801 4.71175C9.12039 4.71175 10.2428 4.1148 10.8914 3.31168Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_1605_14820">
          <rect
            width="16"
            height="19.6364"
            fill="white"
            transform="translate(0 0.181641)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
