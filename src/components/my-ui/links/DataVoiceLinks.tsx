"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

function DataVoiceLinks() {
  // const pathName = usePathname();
  return (
    <div className="flex items-center justify-between md:gap-[1.56rem]">
      <Link href={"#"}>
        <Button variant={"secondary"} className="rounded-full px-6 font-500">
          Data Only eSIMs
        </Button>
      </Link>
      <Link href={"#"} className="relative">
        <Button variant={"secondary"} className="rounded-full px-6 font-500">
          Data + Voice eSIMs
        </Button>
        <span className="absolute -top-3 left-1 rounded-pill bg-primary-accent px-1 text-body-sm font-600">
          Popular
        </span>
      </Link>
    </div>
  );
}

export default DataVoiceLinks;
