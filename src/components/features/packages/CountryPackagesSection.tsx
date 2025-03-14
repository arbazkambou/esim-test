import { PackagesData } from "@/types/packages/data-only/DataOnlyCountryPackages";
import CountryPackagesList from "./CountryPackagesList";

function CountryPackagesSection({ packages }: { packages: PackagesData }) {
  return <CountryPackagesList packages={packages} />;
}

export default CountryPackagesSection;
