import { Heart } from "lucide-react";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero slides data - Using your beautiful couple photo
  const heroSlides = [
    {
      image: "https://your-actual-image-url.jpg", // Replace with your actual Grace & David photo URL
      title: "Grace & David",
      subtitle: "Join Us",
      description: "CELEBRATE WITH US ON OUR SPECIAL DAY",
    },
    {
      image: "https://your-actual-image-url.jpg", // Same beautiful photo
      title: "Our Love Story",
      subtitle: "A Beautiful Journey",
      description: "FROM FRIENDS TO SOULMATES FOREVER",
    },
    {
      image: "https://your-actual-image-url.jpg", // Same beautiful photo
      title: "Forever Begins",
      subtitle: "Together as One",
      description: "WHERE TWO HEARTS BECOME ONE",
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000); // Changed to 6 seconds for better viewing
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );

  return (
    <>
      {/* Enhanced Hero Slider */}
      <div className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          >
            <div
              className="w-full h-full bg-cover bg-center relative"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundPosition: "center 35%", // Adjusted for perfect Grace & David positioning
                backgroundAttachment: "fixed",
                backgroundSize: "cover",
              }}
            >
              {/* Optimized overlay for traditional red outfits - maintains vibrant colors */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/40"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 via-transparent to-red-900/10"></div>

              {/* Subtle vignette that complements the traditional attire */}
              <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/20"></div>

              {/* Romantic floating elements - positioned to not interfere with couple */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/6 left-1/6 w-2 h-2 bg-rose-300/30 rounded-full animate-float-slow opacity-60"></div>
                <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-white/20 rounded-full animate-float-medium opacity-40"></div>
                <div className="absolute bottom-1/5 left-1/8 w-1 h-1 bg-rose-400/40 rounded-full animate-float-fast opacity-70"></div>
                <div className="absolute top-1/3 right-1/6 w-1 h-1 bg-white/30 rounded-full animate-float-slow opacity-60"></div>
                <div className="absolute bottom-1/6 right-1/5 w-2 h-2 bg-rose-200/20 rounded-full animate-float-medium opacity-50"></div>
              </div>

              {/* Main Content - Positioned above Grace & David for perfect visibility */}
              <div className="relative z-10 h-full flex items-start justify-center text-center text-white px-4 pt-24 sm:pt-28">
                <div className="max-w-7xl mx-auto">
                  {/* Main Title - Positioned above the couple */}
                  <div className="mb-6">
                    <h1
                      className="text-5xl sm:text-6xl md:text-7xl lg:text-5xl xl:text-[8rem] font-serif font-light mb-4 tracking-wider opacity-0 animate-fade-in-up"
                      style={{
                        animationDelay: "0.5s",
                        animationFillMode: "forwards",
                        fontFamily: "Playfair Display, serif",
                        textShadow:
                          "4px 4px 8px rgba(0,0,0,0.8), 0 0 25px rgba(0,0,0,0.4)",
                        fontWeight: "300",
                        lineHeight: "0.85",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {slide.title}
                    </h1>

                    {/* Subtitle positioned strategically */}
                    <div
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light mb-8 tracking-widest text-red-200 opacity-0 animate-fade-in-up"
                      style={{
                        animationDelay: "0.8s",
                        animationFillMode: "forwards",
                        fontFamily: "Dancing Script, cursive",
                        textShadow:
                          "3px 3px 6px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)",
                        fontWeight: "600",
                        letterSpacing: "0.3em",
                      }}
                    >
                      {slide.subtitle}
                    </div>
                  </div>

                  {/* Enhanced Decorative Separator - Matching red theme */}
                  <div
                    className="flex items-center justify-center space-x-6 sm:space-x-8 mb-8 opacity-0 animate-fade-in-up"
                    style={{
                      animationDelay: "1.1s",
                      animationFillMode: "forwards",
                    }}
                  >
                    <div className="w-24 sm:w-36 lg:w-48 h-px bg-gradient-to-r from-transparent via-red-300 to-red-400 animate-shimmer"></div>

                    <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-red-300 fill-current animate-heartbeat drop-shadow-xl" />

                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-red-300 via-red-400 to-red-600 animate-gentle-pulse shadow-2xl border-2 border-white/40"></div>

                    <Heart
                      className="w-6 h-6 sm:w-8 sm:h-8 text-red-300 fill-current animate-heartbeat drop-shadow-xl"
                      style={{ animationDelay: "0.3s" }}
                    />

                    <div
                      className="w-24 sm:w-36 lg:w-48 h-px bg-gradient-to-l from-transparent via-red-300 to-red-400 animate-shimmer"
                      style={{ animationDelay: "0.5s" }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Description positioned at bottom to avoid couple area */}
              <div className="absolute bottom-28 sm:bottom-32 left-0 right-0 z-10 px-4">
                <div className="text-center max-w-5xl mx-auto">
                  <p
                    className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light tracking-widest opacity-0 animate-fade-in-up leading-relaxed text-white"
                    style={{
                      animationDelay: "1.4s",
                      animationFillMode: "forwards",
                      textShadow:
                        "3px 3px 6px rgba(0,0,0,0.9), 0 0 15px rgba(0,0,0,0.6)",
                      letterSpacing: "0.3em",
                      fontWeight: "300",
                    }}
                  >
                    {slide.description}
                  </p>
                </div>
              </div>

              {/* Elegant Call to Action Button - Bottom positioned */}
              <div
                className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in-up z-10"
                style={{
                  animationDelay: "1.7s",
                  animationFillMode: "forwards",
                }}
              >
             
              </div>
            </div>
          </div>
        ))}

        {/* Enhanced Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 sm:left-6 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white transition-all duration-300 z-20 bg-black/20 backdrop-blur-sm rounded-full p-2 sm:p-3 hover:bg-rose-500/30 hover:scale-110 group"
          aria-label="Previous slide"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 sm:right-6 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white transition-all duration-300 z-20 bg-black/20 backdrop-blur-sm rounded-full p-2 sm:p-3 hover:bg-rose-500/30 hover:scale-110 group"
          aria-label="Next slide"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Enhanced Slide Indicators */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 sm:space-x-4 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-500 rounded-full ${
                index === currentSlide
                  ? "w-10 sm:w-12 h-2 sm:h-3 bg-gradient-to-r from-rose-400 to-rose-600 shadow-lg"
                  : "w-2 sm:w-3 h-2 sm:h-3 bg-white/40 hover:bg-white/60 hover:scale-125"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      
      
      </div>

      {/* Custom CSS for enhanced animations */}
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600;700&family=Playfair+Display:wght@300;400;500;600;700&display=swap");

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 0.6;
          }
          25% {
            transform: translate(15px, -15px) rotate(90deg);
            opacity: 0.8;
          }
          50% {
            transform: translate(-10px, -25px) rotate(180deg);
            opacity: 0.4;
          }
          75% {
            transform: translate(-20px, -10px) rotate(270deg);
            opacity: 0.7;
          }
        }

        @keyframes float-medium {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.5;
          }
          50% {
            transform: translate(25px, -20px) scale(1.3);
            opacity: 0.8;
          }
        }

        @keyframes float-fast {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 0.7;
          }
          33% {
            transform: translate(-20px, 15px) rotate(120deg);
            opacity: 0.4;
          }
          66% {
            transform: translate(15px, -20px) rotate(240deg);
            opacity: 0.9;
          }
        }

        @keyframes heartbeat {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        @keyframes gentle-pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.05);
            opacity: 1;
          }
        }

        @keyframes shimmer {
          0% {
            opacity: 0.4;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.4;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out;
        }

        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
        }

        .animate-float-medium {
          animation: float-medium 8s ease-in-out infinite;
        }

        .animate-float-fast {
          animation: float-fast 6s ease-in-out infinite;
        }

        .animate-heartbeat {
          animation: heartbeat 2s ease-in-out infinite;
        }

        .animate-gentle-pulse {
          animation: gentle-pulse 3s ease-in-out infinite;
        }

        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }

        .bg-radial-gradient {
          background: radial-gradient(
            ellipse at center,
            transparent 0%,
            transparent 60%,
            rgba(0, 0, 0, 0.3) 100%
          );
        }
      `}</style>
    </>
  );
};

export default HeroSection;
