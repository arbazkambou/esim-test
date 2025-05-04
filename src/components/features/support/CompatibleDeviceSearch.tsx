"use client";

import CompatibilitySuccessModal from "@/components/my-ui/modals/CompatibilitySuccessModal";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cleanString } from "@/helpers/cleanString";
import { SupportedDeviceType } from "@/types/misc/CheckCompatibilityTypes";
import { Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface PropsType {
  supportedDevices: SupportedDeviceType[];
}
function CompatibleDeviceSearch({ supportedDevices }: PropsType) {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState("");
  //   const [selectedBrand, setSelectedBrand] = useState("");
  //   const filteredBrands = Array.from(
  //     new Set(supportedDevices.map((device) => device.type)),
  //   );
  const filteredDevices = supportedDevices.filter((device) => {
    return (
      cleanString(device.type).includes(cleanString(searchQuery)) ||
      cleanString(device.model).includes(cleanString(searchQuery))
    );
  });

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleSearchQuery(e: React.ChangeEvent<HTMLInputElement>) {
    const query = cleanString(e.target.value);
    setSearchQuery(query);
    if (query) {
      setShowSuggestions(true);
    }
  }

  return (
    <>
      <div className="relative max-w-[478px]" ref={containerRef}>
        <Input
          placeholder="Search compatible phones"
          className="w-full rounded-[1.4375rem] bg-background text-muted-foreground shadow focus-within:shadow-xl"
          onChange={handleSearchQuery}
          value={searchQuery}
        />
        <Search className="absolute right-3 top-1/2 -translate-y-1/2 transform text-primary" />
        {showSuggestions && searchQuery && (
          <Card className="bar absolute top-[3.4rem] z-50 flex max-h-[260px] w-full flex-col overflow-auto bg-background p-4 shadow-2xl">
            {filteredDevices.length > 0 ? (
              filteredDevices.map((item, index) => (
                <p
                  className="flex items-center gap-3 rounded-full p-2 text-sm hover:bg-secondary"
                  key={index}
                  onClick={() => {
                    setSelectedDevice(item.model);
                    setShowSuccessModal(true);
                    setShowSuggestions(false);
                  }}
                >
                  {item.model}
                </p>
              ))
            ) : (
              <p className="text-sm"> No device found 🙂</p>
            )}
          </Card>
        )}
      </div>
      <CompatibilitySuccessModal
        showSuccessModal={showSuccessModal}
        setShowSuccessModal={setShowSuccessModal}
        deviceName={selectedDevice}
      />
    </>
  );
}

export default CompatibleDeviceSearch;
