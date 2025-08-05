"use client";

import fiveg from "@/_assets/svgs/5g.svg";
import { Card } from "@/components/ui/card";
import { Package } from "@/types/packages/data-only/DataOnlyCountryPackages";
import { Calendar, Globe } from "lucide-react";
import Image from "next/image";

function RelatedPackageCard({ packageDetail }: { packageDetail: Package }) {
  const {
    data_unit,
    data_quantity,
    package_validity,
    package_validity_unit,
    price,
    discounted_price,
    discount_percentage,
    highest_connectivity,
    countries,
    original_price,
  } = packageDetail;
  return (
    <Card
      className={`group relative rounded-md bg-primary text-background shadow-none transition-all hover:cursor-pointer hover:shadow-xl`}
    >
      {/* Price Card  */}
      <div className="relative flex flex-col gap-3 p-3">
        <div className="flex items-center justify-between"></div>
        <div className="flex flex-col gap-[0.19rem]">
          <div className="flex items-center justify-between">
            <p className="text-body-md font-500 leading-[100%]">
              {data_quantity === -1
                ? `Unlimited ${data_unit && data_unit !== "Standard" ? data_unit : "Data"}`
                : `${data_quantity} ${data_unit}`}
            </p>
            {discount_percentage === 0 && highest_connectivity === "5G" && (
              <Image
                src={fiveg}
                alt="5G Supported"
                height={17}
                width={20}
                sizes="auto"
              />
            )}
          </div>
          <p className="flex items-center gap-1 text-xs leading-[100%] text-background/80">
            <Calendar size={14} className="opacity-80" /> {package_validity}{" "}
            {package_validity_unit}
            {package_validity > 1 && "s"}
          </p>
        </div>
        <div>
          <p className="flex items-center text-body-md font-500">
            ${discount_percentage > 0 ? discounted_price : price}
            <span className="ms-1 text-xs text-background/80">USD</span>
            {packageDetail.discounted_price > 0 && (
              <span className="ms-2 text-xs text-background line-through opacity-70 xl:text-body-sm">
                ${original_price}
              </span>
            )}
          </p>
          <p className="flex items-center gap-1 text-xs leading-[100%] text-background/80">
            <Globe size={14} className="opacity-80" />
            <span className="flex items-center gap-1">
              {countries.length === 1 && countries[0].name}

              {countries.length > 1 &&
                countries
                  .slice(0, 3)
                  .map((item, index) => (
                    <Image
                      key={index}
                      src={item.image_url}
                      height={10}
                      width={16}
                      alt="japan"
                      sizes="auto"
                      className="rounded-[2px] object-cover shadow-md"
                    />
                  ))}

              {countries.slice(4).length > 1 && (
                <span className="ml-0.5 rounded-full text-xs">
                  +{countries.slice(4).length}
                </span>
              )}
            </span>
          </p>
        </div>
        <div className="flex flex-col gap-2 xs:flex-row xs:items-center">
          <span className="group flex items-center justify-center gap-1 rounded-pill bg-background/50 px-1.5 py-[0.5] text-xs text-background transition-all hover:bg-background/40">
            Add Topup
          </span>
          {/* <PackageDetailModal packageDetail={packageDetail}>
            <span className="group flex items-center justify-center gap-1 rounded-pill bg-background/50 px-1.5 py-[0.5] text-xs text-background transition-all hover:bg-background/40">
              Details
            </span>
          </PackageDetailModal> */}
        </div>
      </div>
    </Card>
  );
}

export default RelatedPackageCard;
