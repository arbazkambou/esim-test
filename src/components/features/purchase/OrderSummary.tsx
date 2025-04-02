"use client";

import canada from "@/_assets/flags/canada.svg";
import { Card } from "@/components/ui/card";
import { Calendar, Database, Wifi } from "lucide-react";
import Image from "next/image";
import OrderItem from "./OrderItem";

export default function OrderSummary() {
  return (
    <Card className="rounded-[0.9375rem ms-20 mt-16 flex max-w-4xl flex-col gap-[15px] p-[22px] px-[33px] shadow-sm">
      <h2 className="mb-3 text-h2-md font-500 text-foreground-light">
        Order Summaray
      </h2>
      {/* name and flag  */}
      <div className="flex items-center gap-[1.25rem]">
        <div className="relative h-[45px] w-[45px]">
          <Image src={canada} fill sizes="auto" alt="esim for canada" />
        </div>
        <span className="text-[22px] font-medium text-foreground-light">
          eSIM for Canada
        </span>
      </div>
      {/* Data  */}
      <OrderItem>
        <div className="flex items-center gap-2">
          <Database className="h-[18px] w-[18px]" />
          <span>Data</span>
        </div>
        <span>2GB</span>
      </OrderItem>

      {/* Validity   */}
      <OrderItem>
        <div className="flex items-center gap-2">
          <Calendar className="h-[18px] w-[18px]" />
          <span>Validity</span>
        </div>
        <span>15 Days</span>
      </OrderItem>

      {/* Connectivity  */}
      <OrderItem>
        <div className="flex items-center gap-2">
          <Wifi className="h-[18px] w-[18px]" />
          <span>Connectivity</span>
        </div>
        <span className="rounded-pill bg-primary-accent p-1 px-2 text-xs text-foreground">
          2G,3G,4G,5G
        </span>
      </OrderItem>

      <h2 className="text-body-lg font-500">Pricing</h2>

      {/* Price */}
      <OrderItem>
        <span>Plan Price</span>
        <span>$6.94</span>
      </OrderItem>

      {/* Coupon code apply  */}
      {/* <ApplyCouponCode
        promoCodeData={promoCodeData}
        setPromoCodeData={setPromoCodedata}
      /> */}

      {/* sub total  */}
      <OrderItem className="border-2 border-primary/80 bg-primary/5">
        <span>Sub Total</span>
        <span>$ 6.94</span>
      </OrderItem>

      {/* discount  */}
      <OrderItem>
        <span>Discount</span>
        <span>$ 6.94</span>
      </OrderItem>

      {/* Total  */}
      <OrderItem>
        <span>Total</span>
        <span>$ 6.94</span>
      </OrderItem>
    </Card>
  );
}
