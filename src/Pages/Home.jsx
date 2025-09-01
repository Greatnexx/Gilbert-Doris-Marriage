import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react'
import CoupleSection from '../Components/CoupleSection';
import LocationCountdown from '../Components/LocationCountdown';
import RSVPSection from '../Components/RSVPSection';
import Footer from '../Components/Footer';
const Home = () => {
 const [currentSlide, setCurrentSlide] = useState(0);
  
    
    useEffect(() => { 
   const timer = setInterval(() => {
     setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
   }, 5000);
   return () => clearInterval(timer);
 }, []);

 const nextSlide = () => {
   setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
 };

 const prevSlide = () => {
   setCurrentSlide(
     (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
   );
 };


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

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Navigation */}

        {/* Hero Slider */}
        <div className="relative h-screen overflow-hidden">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <div
                className="w-full h-full bg-cover bg-center bg-fixed relative"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundPosition: "center 33%",
                }}
              >
                <div className="absolute inset-0 bg-black/30"></div>
                {/* Content */}
                <div className="relative top-24 z-10 h-full  flex items-center justify-center text-center text-white">
                  <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-6xl md:text-8xl font-[Pacifico] font-light mb-4 tracking-wider animate-fade-in-up delay-500">
                      {slide.title}
                    </h1>
                    <div className="text-3xl font-[Pacifico] md:text-5xl font-light mb-8 tracking-widest animate-fade-in-up delay-700">
                      {slide.subtitle}
                    </div>

                    {/* animation */}
                    
                    <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-red-500  rounded-full  animate-float-medium "></div>
                    <div className="absolute bottom-1/5 left-1/8 w-1 h-1  rounded-full bg-red-500  animate-float-fast opacity-70"></div>
                    <div className="absolute top-1/3 right-1/6 w-1 h-1 rounded-full bg-red-500 animate-float-slow opacity-60"></div>
                    <div className="absolute bottom-1/6 right-1/5 w-1 h-1 bg-red-500  rounded-full animate-float-medium opacity-50"></div>

                    {/* Decorative line with hearts */}
                    <div className="flex items-center justify-center space-x-4  mb-8 animate-fade-in-up delay-1000">
                      <div className="md:w-24 w-12 h-px bg-red-500 animate-expand-width delay-1200"></div>
                      <Heart
                        className={`w-6 h-6 text-red-500   fill-current animate-pulse-scale delay-1300`}
                      />
                      <div className="w-6 h-6 rounded-full bg-white animate-pulse delay-1400"></div>
                      <Heart
                        className={`w-6 h-6 text-red  fill-current animate-pulse-scale delay-1500`}
                      />
                      <div className="md:w-24 w-12 h-px bg-white animate-expand-width delay-1600"></div>
                    </div>

                    <p className="text-xl md:text-2xl font-light tracking-widest animate-fade-in-up delay-1800">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div
            className="backdrop-blur-md rounded-lg px-3 py-2 text-white border border-white/20 opacity-90 absolute right-6 md:top-40 top-20 animate-fade-in-right z-10 shadow-lg w-40"
            style={{
              animationDelay: "2s",
              animationFillMode: "forwards",
            }}
          >
            <div className="text-center md:space-y-30">
              <div className="text-[9px] font-semibold tracking-widest text-red-500 ">
                SAVE THE DATE
              </div>
              <div className="text-sm font-bold text-white">DECEMBER</div>
              <div className="text-xl font-extrabold text-red-200">25</div>
              <div className="text-[10px] font-medium text-red-400">2025</div>
              <div className="mt-1 pt-1 border-t border-white/10">
                <div className="text-[9px] text-white font-light">
                  BENUE, NIGERIA
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className=" hidden md:block absolute left-6 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors z-20"
          >
            <svg
              className="w-12 h-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className=" hidden md:blockabsolute right-6 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors z-20"
          >
            <svg
              className="w-12 h-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? `bg-red-500 scale-125`
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

export default Home
