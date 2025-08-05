"use client";

import { TabsTrigger } from "@/components/ui/tabs";
import { usePathname } from "next/navigation";

interface PropsType {
  linksToMatch: string[];
  children: React.ReactNode;
}

function TabTrigger({ linksToMatch, children }: PropsType) {
  const pathName = usePathname();
  return (
    <TabsTrigger
      value=""
      className={`${linksToMatch.includes(pathName) && "bg-primary text-background"} font-500`}
    >
      {children}
    </TabsTrigger>
  );
}

export default TabTrigger;
