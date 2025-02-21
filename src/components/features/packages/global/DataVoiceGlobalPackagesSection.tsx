import { GlobalPackage } from "@/types/packages/data-only/DataOnlyGlobalPackages";
import DataVoiceGlobalPackagesList from "./DataVoiceGlobalPackagesList";

function DataVoiceGlobalPackagesSection({
  packages,
}: {
  packages: GlobalPackage[];
}) {
  return <DataVoiceGlobalPackagesList packages={packages} />;
}

export default DataVoiceGlobalPackagesSection;
