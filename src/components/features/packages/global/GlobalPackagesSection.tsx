import { GlobalPackagesMeta } from "@/types/packages/data-only/DataOnlyGlobalPackages";
import GlobalPackagesList from "./GlobalPackagesList";

function GlobalPackagesSection({ packages }: { packages: GlobalPackagesMeta }) {
  return <GlobalPackagesList packages={packages} />;
}

export default GlobalPackagesSection;
