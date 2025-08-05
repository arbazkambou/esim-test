import { cn } from "@/lib/utils";

interface PropsType {
  children: React.ReactNode;
  className?: string;
}

function OrderItem({ children, className }: PropsType) {
  return (
    <div
      className={cn(
        `flex items-center justify-between rounded-[6px] bg-primary/15 px-[12px] py-[8px] text-base font-500 text-primary`,
        className,
      )}
    >
      {children}
    </div>
  );
}

export default OrderItem;
