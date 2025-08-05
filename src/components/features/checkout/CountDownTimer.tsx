import { addHours, differenceInSeconds, intervalToDuration } from "date-fns";
import { useEffect, useState } from "react";

interface CountdownTimerProps {
  createdAt: string;
}

function CountdownTimer({ createdAt }: CountdownTimerProps) {
  const targetDate = addHours(new Date(createdAt), 24);

  function calculateTimeLeft() {
    const now = new Date();
    const difference = differenceInSeconds(targetDate, now);

    if (difference <= 0) {
      return { hours: 0, minutes: 0, seconds: 0 };
    }

    const duration = intervalToDuration({ start: now, end: targetDate });

    return {
      hours: duration.hours || 0,
      minutes: duration.minutes || 0,
      seconds: duration.seconds || 0,
    };
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [createdAt]);

  return (
    <div className="flex items-center justify-between px-[24px] pb-[20px] pt-[18px] sm:px-[33px]">
      {/* Hours */}
      <div className="flex flex-col gap-1">
        <span className="text-[45px] font-600 text-primary">
          {String(timeLeft.hours).padStart(2, "0")}
        </span>
        <span className="text-muted-foreground">Hour</span>
      </div>

      {/* Minutes */}
      <div className="flex flex-col gap-1">
        <span className="text-[45px] font-600 text-primary">
          {String(timeLeft.minutes).padStart(2, "0")}
        </span>
        <span className="text-muted-foreground">Mins</span>
      </div>

      {/* Seconds */}
      <div className="flex flex-col gap-1">
        <span className="min-w-[50px] text-[45px] font-600 text-primary">
          {String(timeLeft.seconds).padStart(2, "0")}
        </span>
        <span className="text-muted-foreground">Sec</span>
      </div>
    </div>
  );
}

export default CountdownTimer;
