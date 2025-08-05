"use client";

import stripe from "@/_assets/images/stripeImg.png";
import amazonExpressPay from "@/_assets/svgs/americanExpressPay.svg";
import googlePay from "@/_assets/svgs/applePay.svg";
import applePay from "@/_assets/svgs/googlePay.svg";
import masterPay from "@/_assets/svgs/masterPay.svg";
import visaPay from "@/_assets/svgs/visaPay.svg";
import discoverPay from "@/_assets/svgs/discoverPay.svg";
import { LockKeyhole } from "lucide-react";
import Image from "next/image";

function PaymentMethods() {
  const paymentMethods = [
    {
      name: "Google Pay",
      imgSrc: googlePay,
    },
    {
      name: "Apple Pay",
      imgSrc: applePay,
    },
    {
      name: "Amazon Express Pay",
      imgSrc: amazonExpressPay,
    },
    {
      name: "Visa Card Pay",
      imgSrc: visaPay,
    },
    {
      name: "Master Card Pay",
      imgSrc: masterPay,
    },
    {
      name: "Discover Pay",
      imgSrc: discoverPay,
    },
  ];

  return (
    <div className="mt-4 flex flex-col items-center gap-4">
      <div className="flex items-center gap-[19px]">
        <span>
          <LockKeyhole size={24} />
        </span>
        <p className="text-xs sm:text-sm">Guaranteed safe & secure checkout</p>
        <div className="relative h-[21px] w-[42px]">
          <Image src={stripe} alt="stripe payment" sizes="auto" fill />
        </div>
      </div>

      <div className="flex items-center gap-6">
        {paymentMethods.map((item, index) => (
          <Image
            src={item.imgSrc}
            height={30}
            width={35}
            alt={item.name}
            key={index}
            sizes="auto"
          />
        ))}
      </div>
    </div>
  );
}

export default PaymentMethods;
