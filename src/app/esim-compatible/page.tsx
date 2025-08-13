import compatibleSvg from "@/_assets/svgs/compatibleSvg.svg";
import CompatibleDeviceSearch from "@/components/features/support/CompatibleDeviceSearch";
// import CompatibleDevicesTabs from "@/components/features/support/CompatibleDevicesTabs";
// import { iphone } from '@/public/images/iphone.png';
import { getSupportedDeviceList } from "@/services/misc/supportedDeviceList";
import Image from "next/image";
import { PageParams } from "../page";
import { Metadata } from "next";
import { seoData } from "@/lib/seoConfig";
import { Smartphone } from "lucide-react";
import CompatibleTable from "@/components/my-ui/table/CompatibleTable";
import FAQs from "@/components/my-ui/presentational/FAQs";
import ShowPromotionalBanner from "@/components/my-ui/shared/ShowPromotionalBanner";

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const localizedSeo = seoData[params.locale] || seoData["en"];
  return localizedSeo.esimCompatible;
}

const accordionsData = [
  {
    title: "Can I make my device eSIM compatible?",
    body: (
      <span>
        Unfortunately, you can't just wave a magic wand to make your phone eSIM
        compatible. <br />
        It’s a bit like asking if you can turn a toaster into a coffee maker –
        they’re just built differently. <br />
        eSIM compatibility is determined by your device’s hardware and software,
        so if it wasn’t designed with an eSIM in mind, it’s a no go.
      </span>
    ),
  },
  {
    title: "How do I know if my phone is eSIM compatible?",
    body: (
      <span>
        Checking if your phone is eSIM compatible? Just take a peek at the
        settings or specifications of your device. <br />
        For iPhones, go to Settings &gt; General &gt; About and look for eSIM
        details. <br />
        Or simply search online with your phone model to check if it supports
        eSIM — quick and easy!
      </span>
    ),
  },
  {
    title: "Does iPhone 12 support eSIM?",
    body: (
      <span>
        Yes, the iPhone 12 series supports both physical nanoSIMs and eSIMs.{" "}
        <br />
        So, you can use one for business and another for personal calls, or for
        traveling abroad.
      </span>
    ),
  },
  {
    title: "Is eSIM better than physical SIM?",
    body: (
      <span>
        "Better" is a strong word; let's say eSIMs are more sleek, without the
        need for a physical card, making it faster to switch carriers or plans.{" "}
        <br />
        Plus, they're a traveler’s best friend, letting you hop onto local data
        plans without swapping SIM cards. <br />
        But remember, just like physical SIMs, eSIMs need your device’s support
        to work.
        <span>
          {" "}
          <a
            className="text-primary underline hover:text-primary/50"
            target="_blank"
            href="/blog/travel-tips/is-esim-better-than-physical-sim/"
          >
            See more
          </a>
        </span>
      </span>
    ),
  },
];

async function page() {
  const supportedDevices = await getSupportedDeviceList();

  return (
    <>
      <ShowPromotionalBanner />

      <section className="container mt-16 grid bg-primary px-[3.12rem] py-[1.94rem] text-base text-background xl:grid-cols-5 xl:rounded-[2.5rem]">
        <div className="col-span-5 xl:col-span-4">
          <div className="flex h-full flex-col justify-center gap-[2.5rem]">
            <h1 className="text-center font-montserrat text-h1-base font-600 tracking-wide md:text-h1-md xl:text-start xl:text-h1-xl">
              eSIM Compatible Phones
            </h1>
            <CompatibleDeviceSearch supportedDevices={supportedDevices} />
          </div>
        </div>
        <div className="relative hidden h-[274px] w-[186px] xl:block">
          <Image
            src={compatibleSvg}
            alt="eSIM Compatible Phones"
            fill
            sizes="auto"
          />
        </div>
      </section>
      <section className="container mt-10 flex flex-col gap-4 text-base">
        <p>
          In 2025, More than half phones Worldwide are eSIM compatible, Ofcousre
          for the convenience of the users and fulfilling the demand of the
          technology enthusiasts. Graph of the eSIM compatible phones launching
          is forward and upward.
        </p>
        <p>
          {" "}
          As the usage of eSIM compatible phones increases, the question rises,
          which mobiles support eSIMs? And are eSIM compatible devices available
          in all regions worldwide? In this Article, we will leave you with no
          questions left to answer.
        </p>
      </section>

      {/* <CompatibleDevicesTabs supportedDevices={supportedDevices} /> */}

      {/* Buy Esim section for large screen */}

      <div className="hidden md:block">
        <div className="mx-auto my-16 grid w-5/6 gap-x-[3rem] gap-y-[1.5rem] rounded-[0.70494rem] border px-[1.59rem] py-[2rem] xl:grid-cols-3 xl:gap-y-[2rem]">
          {/* First Block */}
          <div className="col-span-3 flex flex-col items-center gap-3 xl:col-span-1 xl:items-start">
            <div className="flex items-center gap-2">
              <p className="text-[1.17488rem] font-600 text-foreground/80">
                4.9
              </p>
              <Image
                className="h-auto w-auto"
                width={100}
                height={100}
                alt="4.9 rating"
                src="https://dev.esimcard.com/images/rating-star.svg"
              />
            </div>
            <p className="mt-3 w-max rounded-[0.3995rem] bg-primary/10 px-[0.65rem] py-[0.41rem] text-[0.93225rem] font-500 text-primary">
              Highly Rated
            </p>
            <p className="text-center text-body-base -tracking-[0.02656rem] text-foreground/80 xl:text-start">
              Based on 500,000+ customer reviews
            </p>
          </div>

          {/* Second Block */}
          <div className="col-span-3 flex flex-col items-center gap-3 xl:col-span-1 xl:items-start">
            <div className="flex items-center gap-2">
              <Image
                className="h-auto w-auto"
                src="https://dev.esimcard.com/images/users.png"
                height={100}
                width={100}
                alt="rated people"
              />
            </div>
            <p className="w-max rounded-[0.3995rem] bg-primary/10 px-[0.65rem] py-[0.43rem] text-[0.93225rem] font-500 text-primary">
              Trusted worldwide
            </p>
            <p className="text-center text-body-base -tracking-[0.02656rem] text-foreground/80 xl:text-start">
              Over 1 million travelers across the globe have trusted us
            </p>
          </div>

          {/* Third Block */}
          <div className="col-span-3 flex flex-col items-center gap-3 xl:col-span-1 xl:items-start">
            <div className="flex items-center gap-2">
              <Image
                className="h-auto w-auto"
                width={45}
                height={45}
                alt="travel friendly"
                src="https://dev.esimcard.com/images/globe.svg"
              />
            </div>
            <p className="mt-3 w-max rounded-[0.3995rem] bg-primary/10 px-[0.65rem] py-[0.41rem] text-[0.93225rem] font-500 text-primary">
              Travel Friendly
            </p>
            <p className="text-center text-body-base -tracking-[0.02656rem] text-foreground/80 xl:text-start">
              No swaps, global connectivity ensured
            </p>
          </div>

          {/* Bottom Call-to-Action */}
          <div className="col-span-3 flex flex-col items-center justify-center gap-3 xl:flex-row xl:justify-between">
            <p className="text-center text-[0.9225rem] font-semibold text-foreground/80 xl:text-start xl:text-body-lg">
              With eSIM Card, you can save 100% on roaming fees
            </p>
            <a href="/esim/" rel="nofollow" className="anchor-hover text-color">
              <button className="shrink-0 rounded-pill bg-primary px-[1rem] py-[0.8rem] text-sm text-background">
                Buy eSIM
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Iphones section */}
      <section className="my-16 text-base">
        <div className="container">
          <div className="flex flex-col items-start gap-6 md:flex-row">
            <div className="relative mb-6 hidden h-[300px] w-full shrink-0 md:block md:w-[40%]">
              <Image
                className=""
                src={"/images/iphone.png"}
                alt="iphone-mob"
                quality={75}
                // width={300}
                // height={320}
                // sizes="auto"
                fill
              />
            </div>

            <div className="w-full px-3 pb-3 md:w-[60%]">
              {/* <div className="container pb-3"> */}
              <h2 className="pb-3 font-sans text-h2-md font-medium">
                Iphones that support eSIM
              </h2>
              <p className="py-2">
                iPhone XR and above Iphones are eSIM embedded.The iPhone XR was
                the first to step into the eSIM world, followed by the XS and XS
                Max. Then the iPhone 11 series and SE 2 said hello to eSIM in
                2020.
              </p>
              <p>
                Now the iPhone 12, 13 and 14 series have taken it up a notch.
                For those who like to stay ahead, the iPhone 15 series is also
                in the game.
              </p>
              <div className="mb-10 mt-4 inline-block rounded-sm bg-primary/20 px-3">
                <p className="my-1 py-1 text-primary">
                  {" "}
                  <strong>Note:</strong> Iphones from only Hong Kong and China
                  region are not eSIM Compatible.
                </p>
              </div>
              <p className="font-semibold">
                Here's The List Of All eSIM Compatible Iphones:
              </p>
            </div>
          </div>

          <div className="my-4 px-2">
            <ul className="grid grid-cols-2 gap-2 text-base sm:grid-cols-3 md:grid-cols-4 md:gap-4 lg:grid-cols-5">
              {[
                "iPhone XS",
                "iPhone XS Max",
                "iPhone XR",
                "iPhone 11",
                "iPhone 11 Pro",
                "iPhone 11 Pro Max",
                "iPhone SE(2020)",
                "iPhone 12 mini",
                "iPhone 16",
                "iPhone 16 Pro Max",
                "iPhone 12",
                "iPhone 12 Pro",
                "iPhone 12 Pro Max",
                "iPhone 13 mini",
                "iPhone 13",
                "iPhone 13 Pro",
                "iPhone 13 Pro Max",
                "iPhone SE(2022)",
                "iPhone 16 Plus",
                "iPhone 14",
                "iPhone 14 Plus",
                "iPhone 14 Pro",
                "iPhone 14 Pro Max",
                "iPhone 15",
                "iPhone 15 Plus",
                "iPhone 15 Pro",
                "iPhone 15 Pro Max",
                "iPhone 16 Pro",
              ].map((phone, index) => (
                <li key={index} className="flex items-center gap-2 px-2">
                  <Smartphone />
                  <span>{phone}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden border-b border-grey py-10 md:block"></div>
        </div>
      </section>

      {/* iPads section */}
      <section className="my-16 text-base">
        <div className="container">
          <div className="flex flex-col items-start gap-6 md:flex-row">
            <div className="relative mb-6 hidden h-[300px] w-full shrink-0 md:block md:w-[40%]">
              <Image
                className=""
                src={"/images/ipad.png"}
                alt="iphone-mob"
                quality={75}
                // width={300}
                // height={320}
                // sizes="auto"
                fill
              />
            </div>
            <div className="w-full px-3 pb-5 md:w-[60%]">
              <h2 className="pb-3 font-sans text-h2-md font-medium">
                iPads with eSIM (Cellular Models)
              </h2>
              <p className="pb-8 pt-2">
                You might wonder, "Is my iPad model eSIM compatible?" Good news:
                many recent models are. From the iPad Pro to the iPad Air, and
                even the iPad mini, there's likely an eSIMready iPad that fits
                your hand and your lifestyle.
              </p>
              <p className="mt-0 font-semibold md:mt-[115px]">
                Here is the list of iPads with eSIM technology:
              </p>
            </div>
          </div>

          <div className="my-3 px-2">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 md:grid-cols-5 md:gap-4">
              <ul className="">
                <p className="mb-8 mt-2 font-semibold">iPad Pro 11inch</p>
                <li className="my-4 flex items-center gap-2">
                  {" "}
                  <Smartphone /> 1st generation{" "}
                </li>
                <li className="my-4 flex items-center gap-2">
                  {" "}
                  <Smartphone /> 2nd generation{" "}
                </li>
                <li className="my-4 flex items-center gap-2">
                  {" "}
                  <Smartphone /> 3rd generation{" "}
                </li>
                <li className="my-4 flex items-center gap-2">
                  {" "}
                  <Smartphone /> 4th generation{" "}
                </li>
              </ul>
              <ul className="">
                <p className="mb-8 font-semibold">iPad Air</p>
                <li className="my-4 flex items-center gap-2">
                  {" "}
                  <Smartphone /> 3rd generation{" "}
                </li>
                <li className="my-4 flex items-center gap-2">
                  {" "}
                  <Smartphone /> 4th generation{" "}
                </li>
                <li className="my-4 flex items-center gap-2">
                  {" "}
                  <Smartphone /> 5th generation{" "}
                </li>
                <li className="my-4 flex items-center gap-2">
                  {" "}
                  <Smartphone /> iPad Air 6th generation{" "}
                </li>
              </ul>

              <ul className="">
                <p className="mb-8 font-semibold">iPad Mini</p>
                <li className="my-4 flex items-center gap-2">
                  {" "}
                  <Smartphone /> 5th generation{" "}
                </li>
                <li className="my-4 flex items-center gap-2">
                  {" "}
                  <Smartphone /> 6th generation{" "}
                </li>
              </ul>

              <ul className="">
                <p className="mb-8 font-semibold">iPad Pro 12.9inch</p>
                <li className="my-4 flex items-center gap-2">
                  {" "}
                  <Smartphone /> 3rd generation{" "}
                </li>
                <li className="my-4 flex items-center gap-2">
                  {" "}
                  <Smartphone /> 4th generation{" "}
                </li>
                <li className="my-4 flex items-center gap-2">
                  {" "}
                  <Smartphone /> 5th generation{" "}
                </li>
                <li className="my-4 flex items-center gap-2">
                  {" "}
                  <Smartphone /> 6th generation{" "}
                </li>
              </ul>

              <ul className="">
                <p className="font-semibold">iPad</p>
                <li className="my-4 flex items-center gap-2">
                  {" "}
                  <Smartphone /> 7th generation{" "}
                </li>
                <li className="my-4 flex items-center gap-2">
                  {" "}
                  <Smartphone /> 8th generation{" "}
                </li>
                <li className="my-4 flex items-center gap-2">
                  {" "}
                  <Smartphone /> 9th generation{" "}
                </li>
                <li className="my-4 flex items-center gap-2">
                  {" "}
                  <Smartphone /> 10th generation{" "}
                </li>
              </ul>
            </div>
          </div>

          <div className="hidden border-b border-grey py-10 md:block"></div>
        </div>
      </section>

      {/* samsung section */}
      <section className="my-16 text-base">
        <div className="container">
          <div className="flex flex-col items-start gap-6 md:flex-row">
            <div className="relative mb-6 hidden h-[300px] w-full shrink-0 md:block md:w-[40%]">
              <Image
                className=""
                src={"/images/samsung-mob.png"}
                alt="samsung-mob"
                quality={75}
                // width={300}
                // height={320}
                // sizes="auto"
                fill
              />
            </div>
            <div className="w-full px-3 pb-3 md:w-[60%]">
              <h2 className="pb-3 font-sans text-h2-md font-medium">
                Samsung phones that support eSIM
              </h2>
              <p className="py-2">
                Isn't it nice when things are built in and ready to go? That's
                the beauty of eSIM technology in these Samsung phones. With eSIM
                on Samsung phones, you're ready to connect to your network with
                just a few taps. Now the question pops up, which Samsung phone
                has esim technology?
              </p>
              <p className="mt-0 font-semibold md:mt-[141px]">
                So, Here is the Complete list of Samsung phones with esim
                technology
              </p>
            </div>
          </div>

          <div className="my-3 px-2">
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-5">
              {[
                "Samsung Galaxy S23",
                "Samsung Galaxy S23+",
                "Samsung Galaxy S23",
                "Samsung Galaxy S22",
                "Samsung Galaxy S22+",
                "Samsung Galaxy S22 Ultra",
                "Samsung Galaxy S21",
                "Samsung Galaxy S21+",
                "Samsung Galaxy Z Fold5 5G",
                "Samsung Galaxy S24 Ultra",
                "Samsung Galaxy S21 Ultra",
                "Samsung Galaxy S20",
                "Samsung Galaxy S20+",
                "Samsung Galaxy S2 Ultra",
                "Samsung Galaxy S23",
                "Samsung Galaxy Note 20",
                "Samsung Galaxy Note 20 Ultra",
                "Samsung Galaxy Fold",
                "Samsung Galaxy S24",
                "Samsung Galaxy Z Flip 6",
                "Samsung Galaxy Fold 2",
                "Samsung Galaxy Fold 3",
                "Samsung Galaxy Fold 4",
                "Samsung Galaxy Flip 1",
                "Samsung Galaxy Flip 3",
                "Samsung Galaxy Flip 4",
                "Samsung Galaxy S20 Hybrid Dual SIM",
                "Samsung Galaxy Z Flip5 5G",
                "Samsung Galaxy S24 Plus",
                "Samsung Galaxy XCover 7",
                "Samsung Galaxy S25",
                "Samsung Galaxy S25+",
                "Samsung Galaxy S25 Ultra",
                "Samsung Galaxy S25 Edge",
                "Samsung Galaxy S25 Slim",
                "Samsung Galaxy S24 FE",
                "Samsung Galaxy A54 5G",
                "Samsung Galaxy S23FE",
                "Samsung Galaxy S23 Ultra",
                "Samsung Galaxy S22 Ultra",
                "Samsung Galaxy A55 5G",
                "Samsung Galaxy Z Fold6",
                "Samsung Galaxy Z Fold4",
                "Samsung Galaxy Flip4",
                "Samsung Galaxy Z Fold3",
                "Samsung Galaxy Flip3",
                "Samsung Galaxy Z Fold2",
                "Samsung Galaxy Z Flip 5G",
                "Samsung Galaxy Z Flip",
              ].map((phone, index) => (
                <li key={index} className="flex items-center gap-2 px-2">
                  <Smartphone />
                  <span>{phone}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden border-b border-grey py-10 md:block"></div>
        </div>
      </section>

      {/* google pixel section */}
      <section className="my-16 text-base">
        <div className="container">
          <div className="flex flex-col items-start gap-6 md:flex-row">
            <div className="relative mb-6 hidden h-[300px] w-full shrink-0 md:block md:w-[40%]">
              <Image
                className=""
                src={"/images/google-pixel-mob.png"}
                alt="google-pixel-mob"
                quality={75}
                // width={300}
                // height={320}
                // sizes="auto"
                fill
              />
            </div>

            <div className="w-full px-3 pb-3 md:w-[60%]">
              <h2 className="pb-3 font-sans text-h2-md font-medium">
                Google Pixel phones
              </h2>
              <p className="py-2">
                If you've got a Google Pixel in your pocket, you might already
                be set for the eSIM revolution. Isn't it nice when things are
                just simple? Now, here's a question to address: Is my Google
                pixel phone esim compatible?
              </p>
              <div className="mb-8 mt-4 inline-block rounded-sm bg-primary/20 px-3">
                <p className="py-1 text-primary">
                  Pixel 3a from countries in South East Asia Doesn’t support
                  eSIM.
                </p>
              </div>
              <p className="mt-0 font-semibold md:mt-[60px]">
                Here it is addressed! By providing list of esim compatible
                Google Pixel phones
              </p>
            </div>
          </div>

          <div className="my-3 px-2">
            <ul className="grid grid-cols-1 gap-4 text-base sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {[
                "Google Pixel 2",
                "Google Pixel 2 XL",
                "Google Pixel 3",
                "Google Pixel 3 XL",
                "Google Pixel 3a",
                "Google Pixel 3a XL",
                "Google Pixel Fold",
                "Google Pixel 9",
                "Google Pixel 7a",
                "Google Pixel 4",
                "Google Pixel 4 XL",
                "Google Pixel 4a 5G",
                "Google Pixel 5",
                "Google Pixel 5a",
                "Google Pixel 6",
                "Google Pixel 9 Pro",
                "Google Pixel 9 Pro Fold",
                "Google Pixel 6 Pro",
                "Google Pixel 6a",
                "Google Pixel 7",
                "Google Pixel 7 Pro",
                "Google Pixel 8",
                "Google Pixel 8 Pro",
                "Google Pixel 9 Pro XL",
                "Google Pixel 8a",
              ].map((phone, index) => (
                <li key={index} className="flex items-center gap-2 px-2">
                  <Smartphone />
                  <span>{phone}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden border-b border-grey py-10 md:block"></div>
        </div>
      </section>

      {/* Huawei phones section */}
      <section className="my-16 text-base">
        <div className="container">
          <div className="flex flex-col items-start gap-6 md:flex-row">
            <div className="relative mb-6 hidden h-[300px] w-full shrink-0 md:block md:w-[40%]">
              <Image
                className=""
                src={"/images/huawei-mob.png"}
                alt="huawei-mob"
                quality={75}
                // width={300}
                // height={320}
                // sizes="auto"
                fill
              />
            </div>

            <div className="w-full px-3 pb-3 md:w-[60%]">
              <h2 className="pb-3 font-sans text-h2-md font-medium">
                Huawei phones that support eSIM
              </h2>
              <p className="py-2">
                Does Huawei Phone support eSIM? Not all Huawei models supports
                eSIM, but some Huawei phones are eSIM-compatible. Check out the
                Huawei eSIM compatible phones list to see if your device
                supports eSIM.
              </p>
              <div className="mb-2 inline-block rounded-sm bg-primary/20 px-3 md:mt-[130px]">
                <p className="py-1 text-primary">
                  <a
                    className="underline hover:text-primary/50"
                    target="_blank"
                    href="https://consumer.huawei.com/en/community/details/Huawei-P40-and-P40-Pro%3A-eSIM-%E2%80%93-Virtual-SIM-Card/topicId_84159/"
                    rel="noopener noreferrer"
                  >
                    Huawei P40 Pro+
                  </a>{" "}
                  doesn’t support eSIM
                </p>
              </div>
              {/* <p className="font-semibold">Here it is addressed! By providing list of esim compatible Google Pixel phones</p> */}
            </div>
          </div>

          <div className="my-3 px-2">
            <ul className="grid grid-cols-1 gap-3 text-base sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
              {[
                "Huawei P40",
                "Huawei P40 Pro",
                "Huawei Pura 70 Pro",
                "Huawei P50 Pro",
                "Huawei Mate 40 Pro",
                "Huawei Mate Xs 2",
                "Huawei Mate X2",
              ].map((phone, index) => (
                <li key={index} className="flex items-center gap-2 px-2">
                  <Smartphone />
                  <span>{phone}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden border-b border-grey py-10 md:block"></div>
        </div>
      </section>

      {/* Oppo mob section */}
      <section className="my-16 text-base">
        <div className="container">
          <div className="flex flex-col items-start gap-6 md:flex-row">
            <div className="relative mb-6 hidden h-[300px] w-full shrink-0 md:block md:w-[40%]">
              <Image
                className=""
                src={"/images/oppo-mob.png"}
                alt="oppo-mob"
                quality={75}
                // width={300}
                // height={320}
                // sizes="auto"
                fill
              />
            </div>

            <div className="w-full px-3 pb-3 md:w-[60%]">
              <h2 className="pb-3 font-sans text-h2-md font-medium">
                Oppo mobiles that support eSIM
              </h2>
              <p className="pb-14 pt-3">
                Does Oppo Phone support eSIM? Check out this Oppo eSIM
                Compatible Phone List to see which device keeps you connected
                effortlessly.{" "}
              </p>
              <div className="mt-6 px-2">
                {/* <ul className="text-base grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"> */}
                <ul className="grid grid-cols-1 gap-4 text-base md:grid-cols-3">
                  {[
                    "Oppo Find X3 Pro",
                    "Oppo Reno 5A",
                    "Oppo Find X5",
                    "Oppo Find X5 Pro",
                    "Oppo Find X3",
                    "Oppo Reno 6 Pro 5G",
                    "Oppo Find X3 Pro",
                    "Oppo Find X5",
                    "Oppo Find X5 Pro",
                  ].map((phone, index) => (
                    <li key={index} className="flex items-center gap-2 px-2">
                      <Smartphone />
                      <span>{phone}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="my-3 px-5 sm:w-[60%] sm:w-full">
            <ul className="grid grid-cols-1 gap-4 text-base md:grid-cols-5">
              {[
                "Oppo A55s 5G",
                "Oppo Find X8",
                "Oppo Reno6 Pro 5G",
                "Oppo Find N2 Flip",
                "Oppo Find N3",
                "Oppo Find N3 Flip",
                "Oppo Reno 9A",
              ].map((phone, index) => (
                <li key={index} className="flex items-center gap-2 px-2">
                  <Smartphone />
                  <span>{phone}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden border-b border-grey py-10 md:block"></div>
        </div>
      </section>

      {/* Sony Phone section */}
      <section className="my-16 text-base">
        <div className="container">
          <div className="flex flex-col items-start gap-6 md:flex-row">
            <div className="relative mb-6 hidden h-[300px] w-full shrink-0 md:block md:w-[40%]">
              <Image
                className=""
                src={"/images/sony.png"}
                alt="samsung-mob"
                quality={75}
                // width={300}
                // height={320}
                // sizes="auto"
                fill
              />
            </div>

            <div className="w-full px-3 pb-3 md:w-[60%]">
              <h2 className="pb-3 font-sans text-h2-md font-medium">
                Sony phones with eSIM
              </h2>
              <p className="pb-6 pt-2">
                Struggling to find a Sony phone with eSIM support? Not all
                models are eSIM competible. Check out the Sony eSIM compatible
                phones list to see if your device supports eSIM.
              </p>
              <div className="mt-6 px-2">
                <ul className="grid grid-cols-1 gap-4 text-base md:grid-cols-3">
                  {[
                    "Sony Xperia 10 III Lite",
                    "Sony Xperia 1 IV",
                    "Sony Xperia 10 IV",
                    "Sony Xperia 10 VI",
                    "Sony Xperia 5 IV",
                    "Sony Xperia 1 V",
                    "Sony Xperia 1 VI",
                    "Sony Xperia 10 V",
                    "Sony Xperia Ace III",
                    "Sony Xperia 5 V",
                  ].map((phone, index) => (
                    <li key={index} className="flex items-center gap-2 px-2">
                      <Smartphone />
                      <span>{phone}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="hidden border-b border-grey py-10 md:block"></div>
        </div>
      </section>

      {/* Xiamoi phone section */}
      <section className="my-16 text-base">
        <div className="container">
          <div className="flex flex-col items-start gap-6 md:flex-row">
            <div className="relative mb-6 hidden h-[300px] w-full shrink-0 md:block md:w-[40%]">
              <Image
                className=""
                src={"/images/xiaomi-mob.png"}
                alt="samsung-mob"
                quality={75}
                // width={300}
                // height={320}
                // sizes="auto"
                fill
              />
            </div>

            <div className="w-full px-3 pb-0 md:w-[60%] md:pb-3">
              <h2 className="pb-3 font-sans text-h2-md font-medium">
                Xiaomi phones with eSIM
              </h2>
              <p className="pb-6 pt-2">
                Explore the Xiaomi eSIM phone list to see which Xiaomi phones
                support eSIM and enjoy seamless digital connectivity without the
                need for a physical SIM.
              </p>
              <div className="mt-6 px-2">
                {/* <ul className="text-base grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"> */}
                <ul className="grid grid-cols-1 gap-4 text-base md:grid-cols-3">
                  {[
                    "Xiaomi 12T Pro",
                    "Xiaomi 13",
                    "Xiaomi 14",
                    "Xiaomi 13T",
                    "Xiaomi 15",
                    "Redmi Note 14 Pro+",
                    "Xiaomi 13 Lite",
                    "Xiaomi 13 Pro",
                    "Xiaomi 14 Pro",
                    "Xiaomi 15 Ultra",
                    "Xiaomi 14T Pro",
                    "Redmi Note 14 Pro",
                  ].map((phone, index) => (
                    <li key={index} className="flex items-center gap-2 px-2">
                      <Smartphone />
                      <span>{phone}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="my-3 px-5 sm:w-[60%] sm:w-full">
            <ul className="grid grid-cols-1 gap-2 text-base md:grid-cols-5 md:gap-1">
              {[
                "Xiaomi 13T Pro",
                "Xiaomi Blackshark 3",
                "Xiaomi 15 Pro",
                "Xiaomi Redmi Note 13 Pro+",
                "Redmi Note 13 Pro 5G",
                "Xiaomi Redmi Note 11 Pro 5G (Japan only)",
              ].map((phone, index) => (
                <li key={index} className="flex items-center gap-2 px-2">
                  <Smartphone />
                  <span>{phone}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden border-b border-grey py-10 md:block"></div>
        </div>
      </section>

      {/* Motorolla phones section */}
      <section className="my-16 text-base">
        <div className="container">
          <div className="flex flex-col items-start gap-6 md:flex-row">
            <div className="relative mb-6 hidden h-[300px] w-full shrink-0 md:block md:w-[40%]">
              <Image
                className=""
                src={"/images/motorola.png"}
                alt="motorola"
                quality={75}
                // width={300}
                // height={320}
                // sizes="auto"
                fill
              />
            </div>

            <div className="w-full px-3 pb-0 md:w-[60%] md:pb-4">
              <h2 className="pb-3 font-sans text-h2-md font-medium">
                Motorola phones with eSIM
              </h2>
              <p className="pb-6 pt-2">
                Check the Motorola eSIM compatible phone list to see which
                Motorola phones support eSIM and stay connected wherever your
                journey takes you.
              </p>
              <div className="mt-6 px-2">
                {/* <ul className="text-base grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"> */}
                <ul className="grid grid-cols-1 gap-4 text-base md:grid-cols-3">
                  {[
                    "Motorola Razr 2019",
                    "Motorola Razr 5G",
                    "Motorola Razr 2022",
                    "Motorola Razr 40",
                    "Motorola Edge 40",
                    "Motorola Razr+",
                    "Motorola Edge 2022",
                    "Motorola Edge 2023",
                    "Motorola Edge+ (2023)",
                    "Motorola Edge 40 Pro",
                    "Motorola Edge 40 Neo",
                    "Motorola Edge 50 Pro",
                  ].map((phone, index) => (
                    <li key={index} className="flex items-center gap-2 px-2">
                      <Smartphone />
                      <span>{phone}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="my-3 px-5 sm:w-[60%] sm:w-full md:px-5">
            <ul className="grid grid-cols-1 gap-4 text-base md:grid-cols-5">
              {[
                "Motorola Edge 50 Ultra",
                "Motorola Edge 50 Fusion",
                "Motorola Moto G Power 5G (2024)",
                "Motorola G52J 5G",
                "Motorola G52J 5G Ⅱ",
                "Motorola Razr 40 Ultra",
                "Motorola G53J 5G",
                "Moto G54 5G",
                "Motorola G84",
                "Motorola G34",
                "Motorola Moto G53",
                "Motorola Moto G54",
                "Motorola Razr 2019",
                "Motorola Razr 5G",
                "Motorola Moto G Stylus 5G",
              ].map((phone, index) => (
                <li key={index} className="flex items-center gap-2 px-2">
                  <Smartphone />
                  <span>{phone}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden border-b border-grey py-10 md:block"></div>
        </div>
      </section>

      {/* Honor Phone section */}
      <section className="my-16 text-base">
        <div className="container">
          <div className="flex flex-col items-start gap-6 md:flex-row">
            <div className="relative mb-6 hidden h-[300px] w-full shrink-0 md:block md:w-[40%]">
              <Image
                className=""
                src={"/images/honor-mob.png"}
                alt="samsung-mob"
                quality={75}
                // width={300}
                // height={320}
                // sizes="auto"
                fill
              />
            </div>

            <div className="w-full px-3 pb-4 md:w-[60%]">
              <h2 className="pb-3 font-sans text-h2-md font-medium">
                Honor phones with eSIM
              </h2>
              <p className="pt-2">
                Looking for eSIM-compatible phones rather than expensive
                flagship models? Honor has launched some eSIM-compatible models
                that are affordable to everyone. Check out the list of Honoe
                eSIM-compatible phones list.
              </p>
              <div className="mt-6 p-0">
                {/* <ul className="text-base grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"> */}
                <ul className="grid grid-cols-1 gap-4 text-base md:grid-cols-3">
                  {[
                    "HONOR Magic4 Pro",
                    "HONOR Magic7 Pro",
                    "HONOR Magic V3",
                    "HONOR Magic7 Lite",
                    "HONOR Magic5 Pro",
                    "HONOR Magic Vs",
                    "HONOR 90",
                    "HONOR Magic6 Pro",
                    "HONOR Magic V2",
                    "HONOR 200",
                  ].map((phone, index) => (
                    <li key={index} className="flex items-center gap-2 px-2">
                      <Smartphone />
                      <span>{phone}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="hidden border-b border-grey py-10 md:block"></div>
        </div>
      </section>

      {/*Other android section  */}
      <section className="my-16 text-base">
        <div className="container">
          <div className="flex flex-col items-start gap-6 md:flex-row">
            <div className="relative mb-6 hidden h-[300px] w-full shrink-0 md:block md:w-[40%]">
              <Image
                className=""
                src={"/images/android.png"}
                alt="android"
                quality={75}
                // width={300}
                // height={320}
                // sizes="auto"
                fill
              />
            </div>

            <div className="w-full px-3 pb-0 md:w-[60%] md:pb-4">
              <h2 className="pb-3 font-sans text-h2-md font-medium">
                Other Android mobiles that support eSIM
              </h2>
              <p className="pb-20 pt-3">
                Which other Android phones support eSIM? From Surface Pro
                tablets to Sharp Aquos, from Gemini PDA to Rakuten and Honor
                Magic, more devices offer Other Android eSIM-compatible phones
                for seamless connectivity.
              </p>
              <div className="mt-6 p-0">
                {/* <ul className="text-base grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"> */}
                <ul className="grid grid-cols-1 gap-4 text-base md:grid-cols-3">
                  {[
                    "Motorola Razr 2019",
                    "Motorola Razr 5G",
                    "Gemini PDA",
                    "Rakuten Mini",
                    "Rakuten BigS",
                    "OnePlus 12",
                  ].map((phone, index) => (
                    <li key={index} className="flex items-center gap-2 px-2">
                      <Smartphone />
                      <span>{phone}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="my-3 px-3 sm:w-[60%] sm:w-full md:px-2">
            <ul className="grid grid-cols-1 gap-4 text-base md:grid-cols-5 md:gap-4">
              {[
                "Rakuten Big",
                "Rakuten Hand",
                "Rakuten Hand 5G",
                "Surface Pro X",
                "Surface Duo",
                "Fairphone 4",
                "Sharp Aquos Sense 6s",
                "Sharp Aquos Wish",
                "DOOGEE V30",
                "Nuu Mobile X5",
                "Fairphone 5",
              ].map((phone, index) => (
                <li key={index} className="flex items-center gap-2 px-2">
                  <Smartphone />
                  <span>{phone}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden border-b border-grey py-10 md:block"></div>
        </div>
      </section>

      {/* Buy Esim section for small screen */}
      <div className="block md:hidden">
        <div className="mx-auto my-16 grid w-5/6 gap-x-[3rem] gap-y-[1.5rem] rounded-[0.70494rem] border px-[1.59rem] py-[2rem] xl:grid-cols-3 xl:gap-y-[2rem]">
          {/* First Block */}
          <div className="col-span-3 flex flex-col items-center gap-3 xl:col-span-1 xl:items-start">
            <div className="flex items-center gap-2">
              <p className="text-[1.17488rem] font-600 text-foreground/80">
                4.9
              </p>
              <Image
                className="h-auto w-auto"
                width={100}
                height={100}
                alt="4.9 rating"
                src="https://dev.esimcard.com/images/rating-star.svg"
              />
            </div>
            <p className="mt-3 w-max rounded-[0.3995rem] bg-primary/10 px-[0.65rem] py-[0.41rem] text-[0.93225rem] font-500 text-primary">
              Highly Rated
            </p>
            <p className="text-center text-body-base -tracking-[0.02656rem] text-foreground/80 xl:text-start">
              Based on 500,000+ customer reviews
            </p>
          </div>

          {/* Second Block */}
          <div className="col-span-3 flex flex-col items-center gap-3 xl:col-span-1 xl:items-start">
            <div className="flex items-center gap-2">
              <Image
                className="h-auto w-auto"
                src="https://dev.esimcard.com/images/users.png"
                height={100}
                width={100}
                alt="rated people"
              />
            </div>
            <p className="w-max rounded-[0.3995rem] bg-primary/10 px-[0.65rem] py-[0.43rem] text-[0.93225rem] font-500 text-primary">
              Trusted worldwide
            </p>
            <p className="text-center text-body-base -tracking-[0.02656rem] text-foreground/80 xl:text-start">
              Over 1 million travelers across the globe have trusted us
            </p>
          </div>

          {/* Third Block */}
          <div className="col-span-3 flex flex-col items-center gap-3 xl:col-span-1 xl:items-start">
            <div className="flex items-center gap-2">
              <Image
                className="h-auto w-auto"
                width={45}
                height={45}
                alt="travel friendly"
                src="https://dev.esimcard.com/images/globe.svg"
              />
            </div>
            <p className="mt-3 w-max rounded-[0.3995rem] bg-primary/10 px-[0.65rem] py-[0.41rem] text-[0.93225rem] font-500 text-primary">
              Travel Friendly
            </p>
            <p className="text-center text-body-base -tracking-[0.02656rem] text-foreground/80 xl:text-start">
              No swaps, global connectivity ensured
            </p>
          </div>

          {/* Bottom Call-to-Action */}
          <div className="col-span-3 flex flex-col items-center justify-center gap-3 xl:flex-row xl:justify-between">
            <p className="text-center text-[0.9225rem] font-semibold text-foreground/80 xl:text-start xl:text-body-lg">
              With eSIM Card, you can save 100% on roaming fees
            </p>
            <a href="/esim/" rel="nofollow" className="anchor-hover text-color">
              <button className="shrink-0 rounded-pill bg-primary px-[1rem] py-[0.8rem] text-sm text-background">
                Buy eSIM
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Supported by Smartphones */}
      <section className="my-16 text-base">
        <div className="container">
          <h2 className="pb-3 text-h2-base font-semibold text-foreground/80">
            Number of eSIMs Supported by Smartphones and Wearables
          </h2>
          <p className="py-2">
            The number of eSIMs supported by smartphones varies depending on the
            manufacturer and the specific model of the device. Most modern
            smartphones, particularly flagship models from major brands like
            Apple, Samsung, and Google, typically support at least one eSIM.
            However, some models, especially newer ones, may support more eSIMs.
            Which enables users to have separate cellular plans or numbers on
            the same device.
          </p>
          <p>
            The exact number of eSIMs supported can usually be found in the
            device's specifications. But for your convenience, We have listed
            theNumber of eSIMs supported by each device.
          </p>

          <CompatibleTable />
        </div>
      </section>

      {/* setup steps of esim */}

      <section className="my-16 text-base">
        <div className="container">
          <h2 className="py-3 font-montserrat text-h2-base font-600 md:text-h2-md xl:text-start xl:text-h2-xl">
            Set up steps of eSIMs
          </h2>
          <p className="pb-8">
            Setting up an eSIM on your iPhone is a step towards a more
            integrated tech experience. Here's a friendly guide to get you
            started.
          </p>
          <div className="container bg-primary/10 text-center">
            <p className="border-b border-grey py-2 text-primary">
              Check Compatibility
            </p>
            <p className="border-b border-grey py-2 text-primary">
              Contact your carrier to get a QR code.
            </p>
            <p className="border-b border-grey py-2 text-primary">
              Scan the QR code.
            </p>
            <p className="border-b border-grey py-2 text-primary">
              When the Cellular Plan Detected notification appears, tap it
            </p>
            <p className="border-b border-grey py-2 text-primary">
              Tap Continue, at the bottom of the screen.
            </p>
            <p className="border-b border-grey py-2 text-primary">
              Tap Add Cellular Plan. If you're asked to enter a confirmation
              code to activate the eSIM, enter the number that your carrier
              provided
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}

      <FAQs
        heading="FAQs on eSIM Compatibility and Usage"
        accordionsData={accordionsData}
      />
    </>
  );
}

export default page;
