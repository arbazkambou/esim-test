import { PackagesData } from "@/types/packages/data-only/DataOnlyCountryPackages";
import CountryPackagesList from "./CountryPackagesList";

function CountryPackagesSection({
  packages,
  isGlobalPage,
}: {
  packages: PackagesData;
  isGlobalPage?: boolean;
}) {
  return (
    <CountryPackagesList packages={packages} isGlobalPage={isGlobalPage} />
  );
}

export default CountryPackagesSection;
