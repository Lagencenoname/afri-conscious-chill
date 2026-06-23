import { useState, useEffect } from "react";
import { EVENT_DATE_TARGET } from "@/lib/constants";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date(EVENT_DATE_TARGET).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const units = [
    { value: timeLeft.days, label: "Jours" },
    { value: timeLeft.hours, label: "Heures" },
    { value: timeLeft.minutes, label: "Min" },
    { value: timeLeft.seconds, label: "Sec" },
  ];

  return (
    <div className="flex justify-center gap-2 sm:gap-4 w-full max-w-md mx-auto">
      {units.map((u) => (
        <div key={u.label} className="cd-unit">
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tabular-nums">
            {String(u.value).padStart(2, "0")}
          </div>
          <div className="text-[10px] sm:text-xs uppercase tracking-wider text-white/70 mt-1">
            {u.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
