import { CountryPackagesMeta } from "@/types/packages/data-only/DataOnlyCountryPackages";
import DataVoiceCountryPackagesList from "./DataVoiceCountryPackagesList";

function DataVoiceCountryPackagesSection({
  packages,
}: {
  packages: CountryPackagesMeta;
}) {
  return <DataVoiceCountryPackagesList packages={packages} />;
}

export default DataVoiceCountryPackagesSection;
