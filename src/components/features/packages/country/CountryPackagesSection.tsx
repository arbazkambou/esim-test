import { CountryPackagesMeta } from "@/types/packages/data-only/DataOnlyCountryPackages";
import CountryPackagesList from "./CountryPackagesList";

function CountryPackagesSection({
  packages,
}: {
  packages: CountryPackagesMeta;
}) {
  return <CountryPackagesList packages={packages} />;
}

export default CountryPackagesSection;
