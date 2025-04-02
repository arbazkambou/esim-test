import { cn } from "@/lib/utils";

interface PropsType {
  className?: string;
}

function OutOfStockMessage({ className }: PropsType) {
  return (
    <div
      className={cn(
        `flex min-h-[300px] items-center justify-center`,
        className,
      )}
    >
      <p className="rounded-sm bg-primary/15 px-4 py-2 text-center text-base font-500 text-primary">
        Bundles are out of stock
      </p>
    </div>
  );
}

export default OutOfStockMessage;
