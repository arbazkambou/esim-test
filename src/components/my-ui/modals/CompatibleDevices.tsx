import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getSupportedDeviceList } from "@/services/misc/supportedDeviceList";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";
import { Spinner } from "../fallbacks/Spinner";
import FooterLink from "../links/FooterLink";

function CompatibleDevices({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");

  const { data: supportedDevices = [], isLoading } = useQuery({
    queryKey: ["supported-devices"],
    queryFn: getSupportedDeviceList,
  });
  const filteredBrands = Array.from(
    new Set(supportedDevices.map((device) => device.type)),
  );
  const filteredDevices = supportedDevices.filter((device) => {
    return (
      device.type
        .toLowerCase()
        .trim()
        .includes(selectedBrand.toLowerCase().trim()) &&
      device.model
        .toLowerCase()
        .trim()
        .includes(searchQuery.toLowerCase().trim())
    );
  });
  return (
    <>
      <p className="text-body-lg font-500">Compatible Devices with eSIM</p>
      <p className="flex flex-col gap-1 text-sm opacity-80 sm:flex-row">
        Here you can write your device name, Or check our {" "}
        <FooterLink
          href="/esim-compatible/"
          className="text-primary underline underline-offset-4"
        >
          Supported Devices Page
        </FooterLink>
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        <Input
          placeholder="Search for your device"
          className="rounded-[0.6rem] border shadow-none"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Select
          value={selectedBrand}
          onValueChange={(value) => setSelectedBrand(value)}
        >
          <SelectTrigger className="h-full rounded-[0.6rem] border shadow-none">
            <SelectValue placeholder="Choose a brand" />
          </SelectTrigger>
          <SelectContent>
            {filteredBrands.map((brand, index) => (
              <SelectItem key={index} value={brand}>
                {brand}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="barMini max-h-[280px] min-h-[280px] overflow-auto rounded-[0.6rem] border px-2 py-4">
        <div className="flex flex-col gap-1">
          {isLoading ? (
            <Spinner />
          ) : filteredDevices.length > 0 ? (
            filteredDevices.map((device, index) => (
              <p
                className="cursor-pointer rounded-[0.6rem] px-3 py-2 text-body-base transition-all hover:bg-muted"
                key={index}
                onClick={() => {
                  toast.success(
                    <div>
                      <strong>Congratulations 🎉</strong>
                      <br />
                      Your device is eSIM compatible
                    </div>,
                  );
                  setOpen(false);
                }}
              >
                {device.model}
              </p>
            ))
          ) : (
            <p className="cursor-pointer rounded-[0.6rem] px-3 py-2 text-body-base transition-all hover:bg-muted">
              No device found 🙂
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default CompatibleDevices;
