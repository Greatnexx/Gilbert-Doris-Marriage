import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react'
import CoupleSection from '../Components/CoupleSection';
import LocationCountdown from '../Components/LocationCountdown';
import RSVPSection from '../Components/RSVPSection';
import Footer from '../Components/Footer';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadedImages, setLoadedImages] = useState(new Set());
  
  const heroSlides = [
    {
      image: "/assets/images/gallery7.jpg",
      title: "Save The Date",
      subtitle: "19.12.16",
      description: "WE ARE GETTING MARRIED",
    },
    {
      image: "/assets/images/gallery9.jpg",
      title: "Our Love Story",
      subtitle: "Forever Begins",
      description: "TWO HEARTS BECOMING ONE",
    },
    {
      image: "/assets/images/hero2.jpg",
      title: "Join Us",
      subtitle: "Celebrate With Us",
      description: "ON OUR SPECIAL DAY",
    },
  ];

  // Preload images for better performance
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = heroSlides.map((slide) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => {
            setLoadedImages(prev => new Set([...prev, slide.image]));
            resolve(slide.image);
          };
          img.onerror = reject;
          img.src = slide.image;
        });
      });

      try {
        await Promise.all(imagePromises);
        setImagesLoaded(true);
      } catch (error) {
        console.log('Some images failed to load:', error);
        setImagesLoaded(true); // Still show content even if some images fail
      }
    };

    preloadImages();
  }, []);
    
  useEffect(() => { 
    if (!imagesLoaded) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [imagesLoaded]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Hero Slider */}
        <div className="relative h-screen overflow-hidden">
          {/* Loading state */}
          {!imagesLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-rose-500 via-rose-600 to-pink-800 flex items-center justify-center z-30">
              <div className="text-center text-white">
                <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-xl font-light">Loading your love story...</p>
              </div>
            </div>
          )}

          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* Mobile-optimized background */}
              <div className="w-full h-full relative">
                {/* Background image - optimized for mobile */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    backgroundPosition: "center 33%",
                    backgroundAttachment: "scroll", // Changed from bg-fixed for mobile
                    transform: "translate3d(0, 0, 0)", // Hardware acceleration
                  }}
                >
                  {/* Fallback image for very slow connections */}
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover opacity-0"
                    loading="lazy"
                    onLoad={(e) => {
                      e.target.style.opacity = '0'; // Keep hidden, just for preloading
                    }}
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30"></div>
                
                {/* Content */}
                <div className="relative top-16 sm:top-20 md:top-24 z-10 h-full flex items-center justify-center text-center text-white">
                  <div className="max-w-4xl mx-auto px-4 sm:px-6">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-[Pacifico] font-light mb-2 sm:mb-4 tracking-wider animate-fade-in-up delay-500">
                      {slide.title}
                    </h1>
                    <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[Pacifico] font-light mb-6 sm:mb-8 tracking-widest animate-fade-in-up delay-700">
                      {slide.subtitle}
                    </div>

                    {/* Floating animation dots - Optimized for mobile */}
                    <div className="hidden sm:block">
                      <div className="absolute top-1/4 right-1/4 w-2 sm:w-3 h-2 sm:h-3 bg-red-500 rounded-full animate-float-medium"></div>
                      <div className="absolute bottom-1/5 left-1/8 w-1 h-1 rounded-full bg-red-500 animate-float-fast opacity-70"></div>
                      <div className="absolute top-1/3 right-1/6 w-1 h-1 rounded-full bg-red-500 animate-float-slow opacity-60"></div>
                      <div className="absolute bottom-1/6 right-1/5 w-1 h-1 bg-red-500 rounded-full animate-float-medium opacity-50"></div>
                    </div>

                    {/* Decorative line with hearts */}
                    <div className="flex items-center justify-center space-x-2 sm:space-x-4 mb-6 sm:mb-8 animate-fade-in-up delay-1000">
                      <div className="w-8 sm:w-12 md:w-24 h-px bg-red-500 animate-expand-width delay-1200"></div>
                      <Heart className="w-4 h-4 sm:w-6 sm:h-6 text-red-500 fill-current animate-pulse-scale delay-1300" />
                      <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-white animate-pulse delay-1400"></div>
                      <Heart className="w-4 h-4 sm:w-6 sm:h-6 text-red-500 fill-current animate-pulse-scale delay-1500" />
                      <div className="w-8 sm:w-12 md:w-24 h-px bg-white animate-expand-width delay-1600"></div>
                    </div>

                    <p className="text-lg sm:text-xl md:text-2xl font-light tracking-widest animate-fade-in-up delay-1800">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Save the Date Card - Mobile optimized */}
          <div className="absolute right-3 sm:right-6 top-16 sm:top-20 md:top-40 z-20 animate-fade-in-right"
               style={{
                 animationDelay: "2s",
                 animationFillMode: "forwards",
               }}>
            <div className="backdrop-blur-md rounded-lg px-3 py-2 sm:px-4 sm:py-3 text-white border border-white/20 opacity-90 shadow-lg w-32 sm:w-40">
              <div className="text-center">
                <div className="text-[8px] sm:text-[9px] font-semibold tracking-widest text-red-500">
                  SAVE THE DATE
                </div>
                <div className="text-xs sm:text-sm font-bold text-white">DECEMBER</div>
                <div className="text-lg sm:text-xl font-extrabold text-red-200">25</div>
                <div className="text-[9px] sm:text-[10px] font-medium text-red-400">2025</div>
                <div className="mt-1 pt-1 border-t border-white/10">
                  <div className="text-[8px] sm:text-[9px] text-white font-light">
                    BENUE, NIGERIA
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows - Hidden on mobile for better UX */}
          <button
            onClick={prevSlide}
            className="hidden lg:block absolute left-6 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors z-20 bg-black/20 rounded-full p-2 backdrop-blur-sm"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="hidden lg:block absolute right-6 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors z-20 bg-black/20 rounded-full p-2 backdrop-blur-sm"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-red-500 scale-125"
                    : "bg-white/50 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <CoupleSection />
      <LocationCountdown />
      <RSVPSection />
      <Footer
        image="url('assets/images/footerimg.jpg')"
        position="center 30%"
      />

  
    </>
  );
}

export default Home;