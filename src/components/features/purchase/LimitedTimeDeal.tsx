import React from "react";
import CountdownTimer from "./CountDownTimer";

function LimitedTimeDeal() {
  // Set the target date for the deal (e.g., 4 hours from now)
  const targetDate = new Date();
  targetDate.setHours(targetDate.getHours() + 4);

  return (
    <div className="rounded-[15px] border border-t-0 border-primary">
      {/* Discount Badge */}
      <div className="grid grid-cols-[1fr_auto] rounded-[15px] bg-primary-gradient text-background">
        <div className="flex flex-col gap-2 py-[20px] ps-[30px] leading-none">
          <p className="text-[24px] font-600">Limited Time deal</p>
          <p className="text-[12px] font-600">Don’t Miss Big Discounts</p>
        </div>
        <div className="flex items-center rounded-[15px] bg-destructive p-[10px] text-[17px] font-700 leading-normal">
          Get 15% <br /> Cashback
        </div>
      </div>

      {/* Countdown Timer */}
      <CountdownTimer targetDate={targetDate} />
    </div>
  );
}

export default LimitedTimeDeal;
