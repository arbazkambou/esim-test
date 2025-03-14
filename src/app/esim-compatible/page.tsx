import compatibleSvg from "@/_assets/svgs/compatibleSvg.svg";
import CompatibleDeviceSearch from "@/components/features/support/CompatibleDeviceSearch";
import CompatibleDevicesTabs from "@/components/features/support/CompatibleDevicesTabs";
import { getSupportedDeviceList } from "@/services/misc/CheckComaptibilityApi";
import Image from "next/image";

async function page() {
  const supportedDevices = await getSupportedDeviceList();

  return (
    <>
      <section className="container mt-16 grid bg-primary px-[3.12rem] py-[1.94rem] text-background xl:grid-cols-5 xl:rounded-[2.5rem]">
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
          In 2024, More than half phones Worldwide are eSIM compatible, Ofcousre
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
      <CompatibleDevicesTabs supportedDevices={supportedDevices} />
    </>
  );
}

export default page;
