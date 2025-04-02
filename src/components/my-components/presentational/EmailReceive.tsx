import email from "@/_assets/images/email.png";
import { heroTextVariants } from "@/animations/animations";
import Reveal from "@/animations/Reveal";
import Image from "next/image";
function EmailReceive() {
  return (
    <section className="container mt-16 grid bg-primary px-8 py-20 sm:rounded-[2.5rem]">
      <div className="grid gap-y-[2.5rem] xl:grid-cols-3">
        <Reveal
          className="flex flex-col gap-8 xl:col-span-2"
          variants={heroTextVariants}
        >
          <h2 className="text-center font-montserrat text-h2-base font-600 text-background md:text-h2-md xl:text-start xl:text-h2-xl xl:font-700">
            You will receive your eSIM Profile through e-mail or in the App
          </h2>
          <p className="text-center text-body-sm text-background opacity-80 md:text-body-md xl:text-start xl:text-body-md">
            As soon as you complete your purchase, we’ll send you the
            instructions to install and activate your Canada eSIM. Get ready to
            enjoy affordable data during your travels. <br />
            <br />
            We’ll share with you:
          </p>
          <p className="rounded-md p-1 px-2 text-center text-body-sm text-background opacity-80 md:text-body-md xl:w-max xl:bg-background xl:text-start xl:text-body-md xl:text-primary xl:opacity-100">
            ➡️ Installation instructions for QR code & Manual installation
          </p>
        </Reveal>
        <div className="flex items-center justify-center xl:col-span-1">
          <Reveal
            className="relative h-[312px] w-[290px]"
            variants={heroTextVariants}
          >
            <Image
              src={email}
              alt="You will receive your eSIM Profile through e-mail or in the App"
              quality={70}
              fill
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default EmailReceive;
