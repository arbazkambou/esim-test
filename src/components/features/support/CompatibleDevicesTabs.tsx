"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SupportedDeviceType } from "@/types/misc/CheckCompatibilityTypes";
import { TabsContent } from "@radix-ui/react-tabs";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

export default function CompatibleDevicesTabs({
  supportedDevices,
}: {
  supportedDevices: SupportedDeviceType[];
}) {
  const filteredBrands = Array.from(
    new Set(supportedDevices.map((device) => device.type)),
  );

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <Tabs className="container relative mt-10" defaultValue="iphone">
      <div
        ref={scrollContainerRef}
        className="relative mx-auto flex max-w-[100%] items-center overflow-x-auto scroll-smooth scrollbar-none"
      >
        <TabsList className="flex items-center gap-2 px-4">
          {filteredBrands.map((item, index) => (
            <TabsTrigger key={index} value={item} className="whitespace-nowrap">
              {item}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
      {filteredBrands.map((item, index) => (
        <TabsContent key={index} value={item} className="mt-10">
          <Card className="h-[400px] rounded-[1.526rem] px-[1rem] py-[1.81rem]">
            <h2 className="text-body-lg font-500">Iphones that support eSIM</h2>
            <p></p>
          </Card>
        </TabsContent>
      ))}
      <Button
        className="absolute left-0 top-[35%] -translate-y-1/2 bg-muted p-0 text-foreground shadow-2xl hover:text-primary"
        onClick={() => scroll("left")}
        size={"sm"}
      >
        <ChevronLeft size={14} className="h-[24px] w-[24px]" />
      </Button>
      <Button
        className="absolute right-0 top-[35%] -translate-y-1/2 border-2 bg-muted p-0 text-foreground shadow-2xl hover:text-primary"
        onClick={() => scroll("right")}
        size={"sm"}
      >
        <ChevronRight className="h-[24px] w-[24px]" />
      </Button>
    </Tabs>
  );
}
