import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-08-31T15:00:00').getTime();

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

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-8">
      <div className="countdown-box">
        <div className="text-3xl font-bold text-white">{timeLeft.days}</div>
        <div className="text-sm uppercase text-white/80">Jours</div>
      </div>
      <div className="countdown-box">
        <div className="text-3xl font-bold text-white">{timeLeft.hours}</div>
        <div className="text-sm uppercase text-white/80">Heures</div>
      </div>
      <div className="countdown-box">
        <div className="text-3xl font-bold text-white">{timeLeft.minutes}</div>
        <div className="text-sm uppercase text-white/80">Minutes</div>
      </div>
      <div className="countdown-box">
        <div className="text-3xl font-bold text-white">{timeLeft.seconds}</div>
        <div className="text-sm uppercase text-white/80">Secondes</div>
      </div>
    </div>
  );
};

export default CountdownTimer;