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
      topDesinations={topDestinations}
      isDataLoading={false}
      searchInputStyle="!rounded-pill"
    />
  );
}

export default SearchPackagesList;
