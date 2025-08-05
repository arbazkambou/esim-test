"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ",
);

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={`absolute start-1 top-2 z-10 origin-[0] -translate-y-4 transform appearance-none bg-card px-2 text-sm font-400 text-muted-foreground duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-sm peer-placeholder-shown:font-400 peer-placeholder-shown:text-muted-foreground peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-90 peer-focus:px-2 peer-focus:text-primary rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 ${cn(labelVariants(), className)}`}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
