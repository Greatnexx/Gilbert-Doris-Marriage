import React, { useState, useEffect } from "react";

// Note: This assumes you have framer-motion installed
// If not available, I've included CSS animation fallbacks
const Preloader = ({ onComplete, duration = 4000 }) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);
  const [showHearts, setShowHearts] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const loadingTexts = [
    "D & G",
    "Loading Love...",
    "Almost Ready...",
    "Welcome to Our Story",
  ];

  useEffect(() => {
    // Show floating hearts after 1 second
    const heartsTimer = setTimeout(() => setShowHearts(true), 1000);

    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            setIsVisible(false);
            onComplete && onComplete();
          }, 800);
          return 100;
        }
        return prev + 100 / (duration / 100);
      });
    }, 100);

    // Text rotation
    const textInterval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % loadingTexts.length);
    }, 1200);

    return () => {
      clearTimeout(heartsTimer);
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, [duration, onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-rose-500 via-rose-600 to-pink-800 z-[9999] overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          >
            <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
          </div>
        ))}

        {/* Floating hearts */}
        {showHearts &&
          [...Array(6)].map((_, i) => (
            <div
              key={`heart-${i}`}
              className="absolute text-white opacity-30 animate-bounce"
              style={{
                left: `${15 + Math.random() * 70}%`,
                top: `${10 + Math.random() * 80}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1.5 + Math.random()}s`,
                fontSize: `${16 + Math.random() * 16}px`,
              }}
            >
              💕
            </div>
          ))}

        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-pink-400 to-rose-300 rounded-full opacity-20 animate-pulse blur-xl"></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-gradient-to-r from-rose-300 to-pink-400 rounded-full opacity-15 animate-pulse blur-2xl"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center">
        {/* Main photo container with multiple rings */}
        <div className="relative mb-8">
          {/* Outer rotating ring */}
          <div className="absolute inset-0 w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52">
            <div
              className="w-full h-full rounded-full border-4 border-white opacity-30 animate-spin"
              style={{ animationDuration: "4s" }}
            ></div>
          </div>

          {/* Middle rotating ring */}
          <div className="absolute inset-2 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48">
            <div
              className="w-full h-full rounded-full border-2 border-rose-200 opacity-50"
              style={{
                animation: "spin 3s linear infinite reverse",
              }}
            ></div>
          </div>

          {/* Progress ring */}
          <div className="absolute inset-3 w-30 h-30 sm:w-38 sm:h-38 md:w-46 md:h-46">
            <svg className="w-full h-full -rotate-90">
              <circle
                cx="50%"
                cy="50%"
                r="45%"
                fill="none"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="3"
              />
              <circle
                cx="50%"
                cy="50%"
                r="45%"
                fill="none"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 45}`}
                strokeDashoffset={`${2 * Math.PI * 45 * (1 - progress / 100)}`}
                className="transition-all duration-300 ease-out"
              />
            </svg>
          </div>

          {/* Main photo */}
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-white shadow-2xl">
            <img
              src="/assets/images/gallery14.jpg"
              alt="D & G"
              className="w-full h-full object-cover animate-pulse"
              style={{ animationDuration: "2s" }}
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
            <div className="w-full h-full bg-gradient-to-br from-rose-300 to-pink-400 hidden items-center justify-center">
              <span className="text-white text-4xl">💑</span>
            </div>

            {/* Shimmer effect overlay */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 animate-pulse"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                animation: "shimmer 2s infinite",
              }}
            ></div>
          </div>

          {/* Small rotating hearts around the photo */}
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute w-8 h-8 flex items-center justify-center"
              style={{
                top: "50%",
                left: "50%",
                transform: `translate(-50%, -50%) rotate(${
                  i * 90
                }deg) translateY(-100px) rotate(-${i * 90}deg)`,
                animation: `orbit 4s linear infinite`,
                animationDelay: `${i * 0.5}s`,
              }}
            >
              <span className="text-white text-xl animate-pulse">💖</span>
            </div>
          ))}
        </div>

        {/* Dynamic text with smooth transitions */}
        <div className="mb-6 h-8">
          <h2
            key={currentText}
            className="text-white text-xl sm:text-2xl md:text-3xl font-bold tracking-wider animate-pulse"
          >
            {loadingTexts[currentText]}
          </h2>
        </div>

        {/* Progress percentage */}
        <div className="text-white text-sm font-medium opacity-80">
          {Math.round(progress)}%
        </div>
      </div>

    </div>
  );
};

// Demo component


export default Preloader;
