import email from "@/_assets/images/email.png";
import Image from "next/image";
function EmailReceive() {
  return (
    <section className="mt-16 rounded-none bg-primary xl:container xl:rounded-[40px]">
      <div className="grid gap-x-[10rem] gap-y-[2.5rem] px-[25px] py-[60px] sm:px-[68px] sm:py-[86px] xl:grid-cols-[1fr_minmax(290px,290px)] xl:px-[75px] xl:py-[65px]">
        <div className="flex flex-col gap-8">
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
          <a
            className="rounded-md p-1 px-2 text-center text-body-sm text-background opacity-80 md:text-body-md xl:w-max xl:bg-background xl:text-start xl:text-body-md xl:text-primary xl:opacity-100"
            href={
              "/blog/info/what-is-esim/#:~:text=How%20to%20Activate,via%20QR%20Code"
            }
          >
            ➡️ Installation instructions for QR code & Manual installation
          </a>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative h-[312px] w-[290px]">
            <Image
              src={email}
              alt="You will receive your eSIM Profile through e-mail or in the App"
              quality={70}
              fill
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default EmailReceive;
