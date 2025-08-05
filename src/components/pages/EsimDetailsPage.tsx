"use client";

import { DataVoiceSimUsage, SimUsage } from "@/types/purchase/SimUsage";
import { CircleCheckBig, Gift, Hourglass, Package } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Spinner } from "../my-ui/fallbacks/Spinner";
import { Card } from "../ui/card";
import { formatDateTime } from "@/helpers/formatDateTime";
import { Button } from "../ui/button";
import SimDetailFull from "../features/sims/SimDetailFull";
import DataVoiceUsageChart from "../features/sims/DataVoiceUsageChart";
import DataOnlyUsageChart from "../features/sims/DataOnlyUsageChart";
import SimInstallationGuide from "../features/sims/SimInstallationGuide";
import SimDetailSkeleton from "../my-ui/fallbacks/SimDetailSkeleton";

interface PropsType {
  usage?: DataVoiceSimUsage | SimUsage;
  isUsageLoading: boolean;
}
function EsimDetailsPage({ usage, isUsageLoading }: PropsType) {
  // const { data: relatedPackages = [], isPending: isRelatedPackagesLoading } =
  //   useQuery({
  //     queryKey: [`topup-${params.slug}`],
  //     queryFn: () => getSimRelatedPackages(params.slug),
  //   });

  return (
    <div className="container mt-16">
      <h1 className="text-center font-montserrat text-h1-base font-600 md:text-start md:text-h1-md xl:text-h1-xl">
        eSIM Details
      </h1>
      <p className="mt-[1.25rem] text-center text-body-sm md:text-start md:text-body-md">
        Reach out to the world’s most reliable eSim services
      </p>

      {/* related packages  */}
      {/* <section className="mt-[3rem]">
        <h2 className="font-montserrat text-body-md">
          🎁 Available Top-up Packages
        </h2>
        <div className="mt-[1.5rem]">
          <Swiper
            spaceBetween={10}
            slidesPerView={3}
            modules={[Pagination, Navigation, Autoplay]}
            pagination={{ clickable: true, el: ".custom-pagination" }}
            className="mySwiper"
            speed={1000}
            autoplay={{
              delay: 1000,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            breakpoints={{
              1240: {
                slidesPerView: 5,
              },
              1000: {
                slidesPerView: 4,
              },
              700: {
                slidesPerView: 3,
              },

              0: {
                slidesPerView: 2,
              },
            }}
          >
            {isRelatedPackagesLoading ? (
              Array.from({ length: 6 }).map((item, index) => (
                <SwiperSlide className="mb-8" key={index}>
                  <RelatedPackagecardSkelton key={index} />
                </SwiperSlide>
              ))
            ) : relatedPackages.length > 0 ? (
              relatedPackages.map((item, index) => (
                <SwiperSlide className="mb-8" key={index}>
                  <RelatedPackageCard packageDetail={item} key={index} />
                </SwiperSlide>
              ))
            ) : (
              <SwiperSlide className="mb-8">
                <p>No related package found</p>
              </SwiperSlide>
            )}
          </Swiper>
          <div className="custom-pagination flex items-center justify-center" />
        </div>
      </section> */}

      {/* sim detail and usage  */}
      {isUsageLoading ? (
        <section className="mt-10 grid gap-20 xl:grid-cols-2">
          <SimDetailSkeleton />
          <SimDetailSkeleton />
        </section>
      ) : (
        usage && (
          <section className="mt-10 grid gap-20 xl:grid-cols-2">
            <SimDetailFull simUsage={usage} />

            {"initial_minutes" in usage?.data?.overall_usage ? (
              <DataVoiceUsageChart usage={usage.data.overall_usage} />
            ) : (
              <DataOnlyUsageChart usage={usage.data.overall_usage} />
            )}
          </section>
        )
      )}

      {/* activated packages  */}
      {usage && usage?.data.in_use_packages.length > 0 && (
        <section className="mt-16">
          <h2 className="font-montserrat text-h2-base font-500 md:text-[1.625rem]">
            Activated Packages
          </h2>
          <div className="mt-8 grid gap-10 xl:grid-cols-2 xl:gap-20">
            {usage.data.in_use_packages.map((item, index) => (
              <Card
                className="flex flex-col gap-[1.12rem] rounded-[1.8125rem] px-[1.5rem] py-[1.88rem]"
                key={index}
              >
                {/* Package Name  */}
                <div className="flex flex-col gap-1 rounded-[0.5625rem] bg-muted px-[0.81rem] py-[0.69rem] md:flex-row md:justify-between">
                  <div className="flex items-center gap-[0.81rem]">
                    <Package size={24} className="text-primary" />
                    <p className="text-base font-500">Package</p>
                  </div>
                  <div className="flex items-center gap-[0.88rem]">
                    <p className="text-base">{item.package}</p>
                  </div>
                </div>

                {/* activated at  */}
                <div className="flex flex-col gap-1 rounded-[0.5625rem] bg-muted px-[0.81rem] py-[0.69rem] md:flex-row md:justify-between">
                  <div className="flex items-center gap-[0.81rem]">
                    <CircleCheckBig size={24} className="text-primary" />
                    <p className="text-base font-500">Activated</p>
                  </div>
                  <div className="flex items-center gap-[0.88rem]">
                    <p className="text-base">
                      {formatDateTime(item.date_activated)}
                    </p>
                  </div>
                </div>

                {/* expired at at  */}
                <div className="flex flex-col gap-1 rounded-[0.5625rem] bg-muted px-[0.81rem] py-[0.69rem] md:flex-row md:justify-between">
                  <div className="flex items-center gap-[0.81rem]">
                    <Hourglass size={24} className="text-primary" />
                    <p className="text-base font-500">Expiry</p>
                  </div>
                  <div className="flex items-center gap-[0.88rem]">
                    <p className="text-base">
                      {formatDateTime(item.date_expiry)}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* completed packages  */}
      {usage && usage?.data.completed_packages.length > 0 && (
        <section className="mt-16">
          <h2 className="font-montserrat text-h2-base font-500 md:text-[1.625rem]">
            Past Packages
          </h2>
          <div className="mt-8 grid gap-10 xl:grid-cols-2 xl:gap-20">
            {usage.data.completed_packages.map((item, index) => (
              <Card
                className="flex flex-col gap-[1.12rem] rounded-[1.8125rem] px-[1.5rem] py-[1.88rem]"
                key={index}
              >
                {/* Package Name  */}
                <div className="flex flex-col gap-1 rounded-[0.5625rem] bg-muted px-[0.81rem] py-[0.69rem] md:flex-row md:justify-between">
                  <div className="flex items-center gap-[0.81rem]">
                    <Package size={24} className="text-primary" />
                    <p className="text-base font-500">Package</p>
                  </div>
                  <div className="flex items-center gap-[0.88rem]">
                    <p className="text-base">{item.package}</p>
                  </div>
                </div>

                {/* activated at  */}
                <div className="flex flex-col gap-1 rounded-[0.5625rem] bg-muted px-[0.81rem] py-[0.69rem] md:flex-row md:justify-between">
                  <div className="flex items-center gap-[0.81rem]">
                    <CircleCheckBig size={24} className="text-primary" />
                    <p className="text-base font-500">Activated</p>
                  </div>
                  <div className="flex items-center gap-[0.88rem]">
                    <p className="text-base">
                      {formatDateTime(item.date_activated)}
                    </p>
                  </div>
                </div>

                {/* expired at at  */}
                <div className="flex flex-col gap-1 rounded-[0.5625rem] bg-muted px-[0.81rem] py-[0.69rem] md:flex-row md:justify-between">
                  <div className="flex items-center gap-[0.81rem]">
                    <Hourglass size={24} className="text-primary" />
                    <p className="text-base font-500">Expiry</p>
                  </div>
                  <div className="flex items-center gap-[0.88rem]">
                    <p className="text-base">
                      {formatDateTime(item.date_expiry)}
                    </p>
                  </div>
                </div>

                {usage.data.sim.can_renew && (
                  <Button className="rounded-full">Buy Again</Button>
                )}
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* assigned packages  */}
      {usage && usage?.data.assigned_packages.length > 0 && (
        <section className="mt-16">
          <h2 className="font-montserrat text-h2-base font-500 md:text-[1.625rem]">
            Not Activated Packages
          </h2>
          <div className="mt-8 grid gap-10 xl:grid-cols-2 xl:gap-20">
            {usage.data.assigned_packages.map((item, index) => (
              <Card
                className="flex flex-col gap-[1.12rem] rounded-[1.8125rem] px-[1.5rem] py-[1.88rem]"
                key={index}
              >
                {/* Package Name  */}
                <div className="flex flex-col gap-1 rounded-[0.5625rem] bg-muted px-[0.81rem] py-[0.69rem] md:flex-row md:justify-between">
                  <div className="flex items-center gap-[0.81rem]">
                    <Package size={24} className="text-primary" />
                    <p className="text-base font-500">Package</p>
                  </div>
                  <div className="flex items-center gap-[0.88rem]">
                    <p className="text-base">{item.package}</p>
                  </div>
                </div>

                {/* quantity */}
                <div className="flex flex-col gap-1 rounded-[0.5625rem] bg-muted px-[0.81rem] py-[0.69rem] md:flex-row md:justify-between">
                  <div className="flex items-center gap-[0.81rem]">
                    <Gift size={24} className="text-primary" />
                    <p className="text-base font-500">Quantity</p>
                  </div>
                  <div className="flex items-center gap-[0.88rem]">
                    <p className="text-base">{item.quantity}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* revoked packages  */}
      {usage && usage?.data.revoked_packages.length > 0 && (
        <section className="mt-16">
          <h2 className="font-montserrat text-h2-base font-500 md:text-[1.625rem]">
            Revoked Packages
          </h2>
          <div className="mt-8 grid gap-10 xl:grid-cols-2 xl:gap-20">
            {usage.data.revoked_packages.map((item, index) => (
              <Card
                className="flex flex-col gap-[1.12rem] rounded-[1.8125rem] px-[1.5rem] py-[1.88rem]"
                key={index}
              >
                {/* Package Name  */}
                <div className="flex flex-col gap-1 rounded-[0.5625rem] bg-muted px-[0.81rem] py-[0.69rem] md:flex-row md:justify-between">
                  <div className="flex items-center gap-[0.81rem]">
                    <Package size={24} className="text-primary" />
                    <p className="text-base font-500">Package</p>
                  </div>
                  <div className="flex items-center gap-[0.88rem]">
                    <p className="text-base">{item.package}</p>
                  </div>
                </div>

                {/* revoked at */}
                <div className="flex flex-col gap-1 rounded-[0.5625rem] bg-muted px-[0.81rem] py-[0.69rem] md:flex-row md:justify-between">
                  <div className="flex items-center gap-[0.81rem]">
                    <Hourglass size={24} className="text-primary" />
                    <p className="text-base font-500">Revoked At</p>
                  </div>
                  <div className="flex items-center gap-[0.88rem]">
                    <p className="text-base">
                      {formatDateTime(item.revoked_at)}
                    </p>
                  </div>
                </div>

                {usage.data.sim.can_renew && (
                  <Button className="rounded-full">Buy Again</Button>
                )}
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* esim installation guide  */}
      <section className="mt-16">
        <h2 className="font-montserrat text-[22px] font-500">
          eSIM installation
        </h2>

        {isUsageLoading ? (
          <Spinner />
        ) : (
          usage && (
            <SimInstallationGuide
              simUsage={usage}
              isUsageLoading={isUsageLoading}
            />
          )
        )}
      </section>
    </div>
  );
}

export default EsimDetailsPage;
