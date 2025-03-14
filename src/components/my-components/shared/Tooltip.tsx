import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info } from "lucide-react";
import { useState } from "react";

export function MyTooltip({ message }: { message: string }) {
  const [open, setOpen] = useState(false);
  return (
    <TooltipProvider>
      <Tooltip open={open} onOpenChange={setOpen}>
        <TooltipTrigger asChild onClick={() => setOpen(true)}>
          <Button variant="ghost" size={"sm"}>
            <Info size={18} />
          </Button>
        </TooltipTrigger>
        <TooltipContent
          className="max-w-[200px]"
          side="left"
          avoidCollisions
          onPointerDownOutside={(e) => e.preventDefault()}
        >
          <p>{message}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
