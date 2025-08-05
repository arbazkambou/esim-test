import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Smartphone } from "lucide-react";
import { useState } from "react";
import CompatibleDevices from "./CompatibleDevices";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

function CheckCompatibilityModal() {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop)
    return (
      <Dialog open={open} onOpenChange={(value) => setOpen(value)}>
        <DialogTrigger className="flex items-center gap-2 transition-colors hover:cursor-pointer hover:text-primary">
          <Smartphone size={22} />
          <p className="font-montserrat text-body-base">
            Check if your device supports eSIMs
          </p>
        </DialogTrigger>
        <DialogContent className="flex flex-col gap-3 sm:gap-5">
          <CompatibleDevices setOpen={setOpen} />
        </DialogContent>
      </Dialog>
    );

  return (
    <Drawer open={open} onOpenChange={setOpen} repositionInputs={false}>
      <DrawerTrigger className="flex items-center gap-2 transition-colors hover:cursor-pointer hover:text-primary">
        <Smartphone size={22} />
        <p className="font-montserrat text-body-base">
          Check if your device supports eSIMs
        </p>
      </DrawerTrigger>
      <DrawerContent className="flex flex-col gap-3 p-3 sm:gap-5">
        <CompatibleDevices setOpen={setOpen} />
      </DrawerContent>
    </Drawer>
  );
}

export default CheckCompatibilityModal;
