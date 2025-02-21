import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info } from "lucide-react";

export function MyTooltip({ message }: { message: string }) {
  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip defaultOpen={false}>
        <TooltipTrigger asChild>
          <Button variant="ghost" size={"sm"}>
            <Info size={18} />
          </Button>
        </TooltipTrigger>
        <TooltipContent className="max-w-[250px]">
          <p>{message}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
