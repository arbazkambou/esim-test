import {
  getTopDestinations,
  searchPackagesList,
} from "@/services/packages/dataOnlyPackages";
import SearchPackagesListWrapper from "./SearchPackagesListWrapper";

async function SearchPackagesList() {
  const packagesListResponse = searchPackagesList();
  const topDestinationsResponse = getTopDestinations();

  const [packagesList, topDestinations] = await Promise.all([
    packagesListResponse,
    topDestinationsResponse,
  ]);

  return (
    <SearchPackagesListWrapper
      packagesList={packagesList}
      topDestinations={topDestinations}
    />
  );
}

export default SearchPackagesList;
