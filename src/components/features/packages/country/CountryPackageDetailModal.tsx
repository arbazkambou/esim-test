import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Antenna,
  ArrowUpRight,
  Calendar,
  Database,
  MessageCircle,
  MessageSquareWarning,
  Phone,
  Rocket,
  Search,
} from "lucide-react";

import { Country } from "@/helpers/generateSiteMap";
import { CountryPackage } from "@/types/packages/data-only/DataOnlyCountryPackages";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { cleanString } from "@/helpers/cleanString";
import { MyTooltip } from "@/components/my-components/shared/Tooltip";

function CountryPackageDetailModal({
  countryPackages,
  packageDetail,
}: {
  countryPackages: Country;
  packageDetail: CountryPackage;
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const { image_url } = countryPackages;
  const {
    data_quantity,
    data_unit,
    package_validity,
    package_validity_unit,
    throttling,
    tether,
    coverage,
    countries,
    sms_quantity,
    voice_quantity,
    voice_unit,
    provider,
    name,
  } = packageDetail;

  const filteredCoverage = countries.map((country) => ({
    country_name: country.name,
    package_name: packageDetail.name,

    country_coverage: coverage.filter(
      (item) => item.country_name === country.name,
    ),
  }));

  let filterCoverageByQuery = filteredCoverage;
  if (searchQuery) {
    filterCoverageByQuery = filteredCoverage.filter((item) =>
      item.country_coverage.some(
        (item) =>
          cleanString(item.country_name).includes(cleanString(searchQuery)) ||
          cleanString(item.network_name).includes(cleanString(searchQuery)),
      ),
    );
  }

  const providers = ["ultimate_mobile", "Phonico"];
  return (
    <Dialog>
      <DialogTrigger className="group flex items-center gap-3 text-xs text-primary">
        View Details
        <ArrowUpRight
          size={19}
          className="transition-transform duration-300 group-hover:rotate-45"
        />
      </DialogTrigger>
      <DialogContent
        className="barMini flex max-h-[99vh] flex-col gap-3 overflow-auto sm:gap-7"
        onOpenAutoFocus={(event) => event.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Image
              src={image_url}
              alt="Japan Package"
              width={38}
              height={38}
              sizes="auto"
              className="rounded-full object-cover shadow-md"
            />
            <p className="text-body-lg font-500">{name}</p>
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-3 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-6">
          <div className="flex items-center justify-between rounded-sm border bg-secondary px-3 py-3 text-base">
            <div className="flex items-center gap-2">
              <Database size={19} className="text-primary" />
              <p className="font-500">Data</p>
            </div>
            <p>
              {data_quantity === -1 ? "Unlimited" : data_quantity} {data_unit}
            </p>
          </div>
          <div className="flex items-center justify-between rounded-sm border bg-secondary px-3 py-3 text-base">
            <div className="flex items-center gap-2">
              <Calendar size={19} className="text-primary" />
              <p className="text-base font-500">Validity</p>
            </div>
            <p>
              {package_validity} {package_validity_unit}
              {package_validity > 1 && "s"}
            </p>
          </div>
          <div className="flex items-center justify-between rounded-sm border bg-secondary px-3 py-3 text-base">
            <div className="flex items-center gap-3">
              <Rocket size={19} className="text-primary" />
              <p className="text-base font-500">Speed Limit</p>
            </div>
            <p className="flex items-center">
              {throttling ? (
                <>
                  <span>Yes</span>
                  <MyTooltip message="2GB/day high-speed data, then unlimited data at 2Mbps. The data limit resets every 24 hours from the first use." />
                </>
              ) : (
                "No"
              )}
            </p>
          </div>
          <div className="flex items-center justify-between rounded-sm border bg-secondary px-3 py-3 text-base">
            <div className="flex items-center gap-2">
              <Antenna size={19} className="text-primary" />
              <p className="text-base font-500">Tethering/Hotspot</p>
            </div>
            <p>{tether ? "Yes" : "No"}</p>
          </div>
        </div>
        {sms_quantity !== 0 && (
          <div className="flex items-center justify-between rounded-sm border bg-secondary px-3 py-3 text-base">
            <div className="flex items-center gap-2">
              <MessageCircle size={19} className="text-primary" />
              <p className="text-base font-500">SMS</p>
            </div>
            <p>
              {providers.includes(provider) ? "Unlimited" : "Incoming Only"}
            </p>
          </div>
        )}

        {voice_quantity !== 0 && (
          <div className="flex items-center justify-between rounded-sm border bg-secondary px-3 py-3 text-base">
            <div className="flex items-center gap-2">
              <Phone size={19} className="text-primary" />
              <p className="text-base font-500">{voice_unit}</p>
            </div>
            <p>{voice_quantity < 0 ? "Unlimited" : voice_quantity}</p>
          </div>
        )}
        <div className="flex flex-col gap-6">
          <div
            className={`grid gap-4 ${filteredCoverage.length > 2 && "xl:grid-cols-2"} `}
          >
            <p className="text-xl font-500">Supported Countries & Networks</p>
            {filteredCoverage.length > 2 && (
              <div
                className={`relative w-full scale-100 transition duration-500`}
              >
                <Input
                  placeholder="Search country or netwrok"
                  className="w-full p-0"
                  onChange={(e) => setSearchQuery(e.target.value)}
                  value={searchQuery}
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 transform text-primary" />
              </div>
            )}
          </div>
          <div className="barMini max-h-[200px] min-h-[200px] overflow-auto rounded-[0.6rem] border bg-secondary p-4">
            <div className="flex flex-col gap-6">
              {filterCoverageByQuery.map((item, index) => (
                <div className="flex flex-wrap gap-1" key={index}>
                  <p className="me-6 text-body-md font-500">
                    {item.country_name}
                  </p>
                  {item.country_coverage.map((countryCoverage, index) => (
                    <div
                      className="flex items-center gap-[0.62rem] rounded-[0.6rem] border bg-background p-1 text-sm"
                      key={index}
                    >
                      <p>{countryCoverage.network_name}</p>
                      <p className="rounded-[0.6rem] bg-primary-accent px-1">
                        {countryCoverage.supported_networks_coverages.join(
                          ", ",
                        )}
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center rounded-sm bg-primary p-2 text-background">
          <div className="flex items-center gap-3">
            <MessageSquareWarning size={20} className="flex-shrink-0" />
            <p className="text-sm sm:text-base">
              eSim will be activated when first byte of data is consumed.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default CountryPackageDetailModal;
