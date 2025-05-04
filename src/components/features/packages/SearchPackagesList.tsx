import {
  getTopDestinations,
  searchPackagesList,
} from "@/services/packages/dataOnlyPackages";
import CountryRegionSearch from "./CountryRegionSearch";

async function SearchPackagesList() {
  const packagesListResponse = searchPackagesList();
  const topDestinationsResponse = getTopDestinations();

  const [packagesList, topDestinations] = await Promise.all([
    packagesListResponse,
    topDestinationsResponse,
  ]);
  return (
    <CountryRegionSearch
      packagesList={packagesList}
      isDataLoading={false}
      searchInputStyle="!rounded-pill"
      topDesinations={topDestinations}
    />
  );
}

export default SearchPackagesList;
