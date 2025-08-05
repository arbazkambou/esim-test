import { Check } from "lucide-react";

function CheckoutProgressSteps() {
  return (
    <div className="relative flex items-center justify-between">
      {/* Step 1: completed */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary">
          <Check className="h-6 w-6 text-background" />
        </div>
        <span className="text-sm font-medium">Shopping cart</span>
      </div>

      {/* Progress line 1-2 */}
      <div className="absolute left-[calc(16.67%+12px)] right-[calc(50%+12px)] top-6 h-0.5 bg-primary"></div>
      {/* Step 2: Checkout details  */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary">
          <span className="font-medium text-background">2</span>
        </div>
        <span className="text-sm font-medium">Checkout details</span>
      </div>

      {/* Progress line 2-3 */}
      <div className="absolute left-[calc(50%+12px)] right-[calc(16.67%+12px)] top-6 h-0.5 bg-grey"></div>
      {/* Step 3: Order complete (upcoming) */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
          <span className="font-medium text-muted-foreground/80">3</span>
        </div>
        <span className="text-sm text-muted-foreground/80">Order complete</span>
      </div>
    </div>
  );
}

export default CheckoutProgressSteps;
