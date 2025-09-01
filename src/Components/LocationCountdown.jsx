import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

export default function LocationCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Set your target date here
  const targetDate = new Date("2025-12-31T23:59:59");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="location-countdown"
      className="relative bg-cover bg-center py-16"
      style={{ backgroundImage: "url('assets/images/parallax-image-1a.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 "></div>

      <div className="relative container mx-auto text-center text-white">
        {/* Banner Text */}

        <div className="uppercase tracking-[3px] font-medium text-lg md:text-xl mb-6 animate-fadeInUp">
          <div className="w-[60%] mb-1 h-px bg-white animate-expand-width delay-1200 m-auto"></div>
          <div className="w-[60%] mb-4 h-px bg-white animate-expand-width delay-1200 m-auto"></div>
          <h4 className="uppercase">
            *** St. Sylvester’s parish, Olachagbaha Otukpa Benue state ***
          </h4>
          <div className="w-[60%] mb-1 h-px bg-white animate-expand-width delay-1200 m-auto mt-3"></div>
          <div className="w-[60%] mb-10 h-px bg-white animate-expand-width delay-1200 m-auto"></div>
        </div>

        {/* "Counting Down" */}
        <div className="text-center font-[Pacifico] -rotate-[10deg] pr-8 mb-6">
          <div className="text-[65px] leading-[50px]">Counting</div>
          <div className="text-[55px] leading-[65px]">Down</div>
        </div>

        {/* Heart Divider */}
        <div className="flex justify-center items-center  mb-4">
          <div className="w-10 h-px bg-white animate-expand-width delay-1200 mr-2"></div>
          <Heart className="w-5 h-5 text-red-500 fill-current mr-1" />
          <Heart className="w-4 h-4 text-white fill-current" />
          <div className="w-10 ml-2 h-px bg-white animate-expand-width delay-1600"></div>
        </div>

        {/* Countdown */}
        <div className="flex justify-center gap-6 mt-6 font-[Oswald]">
          <div className="text-center">
            <span className="text-2xl">{timeLeft.days}</span>
            <div className="text-sm">Days</div>
          </div>
          <div className="text-center">
            <span className="text-2xl">{timeLeft.hours}</span>
            <div className="text-sm">Hours</div>
          </div>
          <div className="text-center">
            <span className="text-2xl">{timeLeft.minutes}</span>
            <div className="text-sm">Minutes</div>
          </div>
          <div className="text-center">
            <span className="text-2xl">{timeLeft.seconds}</span>
            <div className="text-sm">Seconds</div>
          </div>
        </div>
      </div>
    </section>
  );
}
