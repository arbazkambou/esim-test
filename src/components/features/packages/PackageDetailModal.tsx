import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import useMediaQuery from "@/hooks/useMediaQuery";
import {
  CountryInfoAndPackages,
  Package,
} from "@/types/packages/data-only/DataOnlyCountryPackages";
import PackageDetail from "./PackageDetail";

interface PropsType {
  packageDetail: Package;
  countryInfoAndPackages: CountryInfoAndPackages;
  children: React.ReactNode;
}

function PackageDetailModal({
  packageDetail,
  countryInfoAndPackages,
  children,
}: PropsType) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop)
    return (
      <Dialog>
        <DialogTrigger className="group flex items-center gap-3 text-xs text-primary">
          {children}
        </DialogTrigger>
        <DialogContent
          className="flex max-h-[90vh] flex-col gap-3 overflow-auto scrollbar-thin sm:gap-5"
          onOpenAutoFocus={(event) => event.preventDefault()}
        >
          <PackageDetail
            packageDetail={packageDetail}
            countryInfoAndPackages={countryInfoAndPackages}
          />
        </DialogContent>
      </Dialog>
    );

  return (
    <Drawer repositionInputs={false}>
      <DrawerTrigger className="group flex items-center gap-3 text-xs text-primary">
        {children}
      </DrawerTrigger>

      <DrawerContent className="flex max-h-[80vh] flex-col gap-3 overflow-scroll p-3 sm:gap-6">
        <PackageDetail
          packageDetail={packageDetail}
          countryInfoAndPackages={countryInfoAndPackages}
        />
      </DrawerContent>
    </Drawer>
  );
}

export default PackageDetailModal;
