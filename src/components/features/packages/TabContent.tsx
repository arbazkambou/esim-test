"use client";

import { TabsContent } from "@/components/ui/tabs";
import { useEffect, useState } from "react";

function TabContent({
  children,
  value,
}: {
  children: React.ReactNode;
  value: string;
}) {
  const [isMount, setIsMount] = useState<true | undefined>(true);

  useEffect(function () {
    setIsMount(undefined);
  }, []);

  return (
    <TabsContent value={value} forceMount={isMount}>
      {children}
    </TabsContent>
  );
}

export default TabContent;
