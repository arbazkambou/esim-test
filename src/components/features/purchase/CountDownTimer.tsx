import React, { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: Date;
}

function CountdownTimer(props: CountdownTimerProps) {
  // Calculate the remaining time
  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = props.targetDate.getTime() - now;

    if (difference <= 0) {
      return { hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(
    function () {
      const timer = setInterval(function () {
        setTimeLeft(calculateTimeLeft());
      }, 1000);

      return function () {
        clearInterval(timer);
      };
    },
    [props.targetDate],
  );

  return (
    <div className="flex items-center justify-between px-[24px] pb-[20px] pt-[18px] sm:px-[33px]">
      {/* Hours */}
      <div className="flex flex-col gap-1">
        <span className="text-[45px] font-600 text-primary">
          {timeLeft.hours}
        </span>
        <span className="text-muted-foreground">Hour</span>
      </div>

      {/* Minutes */}
      <div className="flex flex-col gap-1">
        <span className="text-[45px] font-600 text-primary">
          {timeLeft.minutes}
        </span>
        <span className="text-muted-foreground">Mins</span>
      </div>

      {/* Seconds */}
      <div className="flex flex-col gap-1">
        <span className="min-w-[50px] text-[45px] font-600 text-primary">
          {timeLeft.seconds}
        </span>
        <span className="text-muted-foreground">Sec</span>
      </div>
    </div>
  );
}

export default CountdownTimer;
