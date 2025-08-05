"use client";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

interface PropsType {
  item: {
    href: string;
    label: string;
  };
}
function NavigationButton({ item }: PropsType) {
  const pathName = usePathname();
  return (
    <Button
      variant={"secondary"}
      className={`rounded-full border border-muted-foreground ${pathName === item.href && "border-primary bg-primary text-background"} text-sm font-400 hover:bg-primary`}
      size={"link"}
    >
      {item.label}
    </Button>
  );
}

export default NavigationButton;
