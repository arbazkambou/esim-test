// components/FloatingWhatsApp.tsx

import Link from "next/link";
import Image from "next/image";
import whatsapp from "@/_assets/images/whatsapp.png";

const FloatingWhatsApp = () => {
  return (
    <div className="fixed bottom-24 right-5 z-50 xl:bottom-5">
      <Link
        href="https://api.whatsapp.com/send/?phone=14437462273&text&type=phone_number&app_absent=0"
        target="_blank"
        className="block rounded-full shadow-lg transition hover:scale-105"
      >
        <div className="relative h-[60px] w-[60px]">
          <Image
            src={whatsapp}
            alt="WhatsApp Chat"
            fill
            className="object-contain"
            quality={75}
            sizes="auto"
          />
        </div>
      </Link>
    </div>
  );
};

export default FloatingWhatsApp;
