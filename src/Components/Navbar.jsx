import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [weddingDropdown, setWeddingDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <nav className="text-[13px] fixed top-0 w-full backdrop-blur-md bg-black py-2 sm:py-4 text-[#fff] z-50 border-b border-b-white shadow-md">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex items-center justify-between h-12 sm:h-14">
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 hover:bg-gray-800 rounded-md transition-colors"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                ) : (
                  <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                )}
              </button>
            </div>

            {/* Centered Logo for Mobile */}
            <div className="md:hidden absolute left-1/2 transform -translate-x-1/2">
              <div className="bg-rose-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full font-bold text-sm">
                G ♥ D
              </div>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center justify-center w-full space-x-4 lg:space-x-6 xl:space-x-8">
              {/* Home */}
              <div className="flex items-center space-x-1 lg:space-x-2">
                <Link
                  to="/"
                  className="hover:text-rose-500 transition-colors duration-300 font-medium text-xs lg:text-sm whitespace-nowrap"
                >
                  HOME
                </Link>
                <Heart className="w-3 h-3 lg:w-4 lg:h-4 text-rose-500" />
              </div>

              {/* About Dropdown */}
              <div className="flex items-center space-x-1 lg:space-x-2">
                <div
                  className="relative"
                  onMouseEnter={() => setAboutDropdown(true)}
                  onMouseLeave={() => setAboutDropdown(false)}
                >
                  <button className="hover:text-rose-500 transition-colors duration-300 font-medium text-xs lg:text-sm whitespace-nowrap">
                    ABOUT
                  </button>
                  {aboutDropdown && (
                    <div className="absolute top-full left-0  mt-1 w-48 lg:w-30 bg-white shadow-lg rounded-b-md overflow-hidden">
                      <div className="bg-rose-500 text-white px-4 lg:px-6 py-2 lg:py-3 text-xs lg:text-sm font-medium flex items-center">
                        ABOUT
                        <Heart className="w-3 h-3 lg:w-4 lg:h-4 ml-2" />
                      </div>
                      <div className="py-1 lg:py-2">
                        <Link
                          to="/about-him"
                          className="block px-4 lg:px-6 py-2 lg:py-3 text-gray-600 hover:text-white hover:bg-rose-500 transition-all duration-200 text-xs lg:text-sm font-medium tracking-wide"
                        >
                          ABOUT HIM
                        </Link>
                        <Link
                          to="/about-her"
                          className="block px-4 lg:px-6 py-2 lg:py-3 text-gray-600 hover:text-white hover:bg-rose-500 transition-all duration-200 text-xs lg:text-sm font-medium tracking-wide"
                        >
                          ABOUT HER
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
                <Heart className="w-3 h-3 lg:w-4 lg:h-4 text-rose-500" />
              </div>

              {/* Gallery */}
              <div className="flex items-center space-x-1 lg:space-x-2">
                <Link
                  to="/gallery"
                  className="hover:text-rose-500 transition-colors duration-300 font-medium text-xs lg:text-sm whitespace-nowrap"
                >
                  GALLERY
                </Link>
                <Heart className="w-3 h-3 lg:w-4 lg:h-4 text-rose-500" />
              </div>

              {/* G ♥ D Logo */}
              <div className="bg-rose-500 text-white px-4 lg:px-6 py-1.5 lg:py-2 rounded-full font-bold text-sm lg:text-base">
                G ♥ D
              </div>

              {/* The Story */}
              <div className="flex items-center space-x-1 lg:space-x-2">
                <Link
                  to="/story"
                  className="hover:text-rose-500 transition-colors duration-300 font-medium text-xs lg:text-sm whitespace-nowrap"
                >
                  THE STORY
                </Link>
                <Heart className="w-3 h-3 lg:w-4 lg:h-4 text-rose-500" />
              </div>

              {/* Gift Us */}
              <div className="flex items-center space-x-1 lg:space-x-2">
                <Link
                  to="/gift"
                  className="hover:text-rose-500 transition-colors duration-300 font-medium text-xs lg:text-sm whitespace-nowrap"
                >
                  GIFT US
                </Link>
                <Heart className="w-3 h-3 lg:w-4 lg:h-4 text-rose-500" />
              </div>

              {/* The Wedding Dropdown */}
              <div className="flex items-center space-x-1 lg:space-x-2">
                <div
                  className="relative"
                  onMouseEnter={() => setWeddingDropdown(true)}
                  onMouseLeave={() => setWeddingDropdown(false)}
                >
                  <button className="hover:text-rose-500 transition-colors duration-300 font-medium text-xs lg:text-sm whitespace-nowrap">
                    THE WEDDING
                  </button>
                  {weddingDropdown && (
                    <div className="absolute top-full right-0 left-0 mt-1  w-48 lg:w-30 bg-white shadow-lg rounded-b-md overflow-hidden">
                      <div className="bg-rose-500 text-white px-4 lg:px-6 py-2 lg:py-3 text-xs lg:text-sm font-medium flex items-center">
                        THE WEDDING
                        <Heart className="w-3 h-3 lg:w-4 lg:h-4 ml-2" />
                      </div>
                      <div className="py-1 lg:py-2">
                        <Link
                          to="/location"
                          className="block px-4 lg:px-6 py-2 lg:py-3 text-gray-600 hover:text-white hover:bg-rose-500 transition-all duration-200 text-xs lg:text-sm font-medium tracking-wide"
                        >
                          LOCATION
                        </Link>
                        <Link
                          to="/bridesmaid"
                          className="block px-4 lg:px-6 py-2 lg:py-3 text-gray-600 hover:text-white hover:bg-rose-500 transition-all duration-200 text-xs lg:text-sm font-medium tracking-wide"
                        >
                          BRIDESMAID
                        </Link>
                        <Link
                          to="/groom"
                          className="block px-4 lg:px-6 py-2 lg:py-3 text-gray-600 hover:text-white hover:bg-rose-500 transition-all duration-200 text-xs lg:text-sm font-medium tracking-wide"
                        >
                          GROOMSMEN
                        </Link>
                        
                      </div>
                    </div>
                  )}
                </div>
                <Heart className="w-3 h-3 lg:w-4 lg:h-4 text-rose-500" />
              </div>
            </div>

            {/* Empty space for mobile layout balance */}
            <div className="md:hidden w-10"></div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="bg-black border-t border-gray-700">
            <div className="flex flex-col items-center space-y-1 py-4 text-sm">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 px-6 w-full text-center hover:bg-gray-800 hover:text-rose-500 transition-colors duration-200 rounded-md mx-4"
              >
                HOME
              </Link>

              {/* Mobile About Section */}
              <div className="w-full px-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setAboutDropdown(!aboutDropdown);
                  }}
                  className="flex items-center justify-between w-full py-3 px-6 hover:bg-gray-800 hover:text-rose-500 transition-colors duration-200 rounded-md"
                >
                  <span>ABOUT</span>
                  <span className="text-rose-500 font-bold text-lg">
                    {aboutDropdown ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    aboutDropdown
                      ? "max-h-32 opacity-100 mb-2"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="flex flex-col space-y-1 pl-4 mt-2">
                    <Link
                      to="/about-him"
                      onClick={() => setMobileMenuOpen(false)}
                      className="py-2 px-4 text-gray-300 hover:text-rose-500 hover:bg-gray-800 transition-colors duration-200 rounded-md text-left"
                    >
                      ABOUT HIM
                    </Link>
                    <Link
                      to="/about-her"
                      onClick={() => setMobileMenuOpen(false)}
                      className="py-2 px-4 text-gray-300 hover:text-rose-500 hover:bg-gray-800 transition-colors duration-200 rounded-md text-left"
                    >
                      ABOUT HER
                    </Link>
                  </div>
                </div>
              </div>

              <Link
                to="/gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 px-6 w-full text-center hover:bg-gray-800 hover:text-rose-500 transition-colors duration-200 rounded-md mx-4"
              >
                GALLERY
              </Link>

              <Link
                to="/story"
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 px-6 w-full text-center hover:bg-gray-800 hover:text-rose-500 transition-colors duration-200 rounded-md mx-4"
              >
                THE STORY
              </Link>

              {/* Gift Us Mobile Link */}
              <Link
                to="/gift"
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 px-6 w-full text-center hover:bg-gray-800 hover:text-rose-500 transition-colors duration-200 rounded-md mx-4"
              >
                GIFT US
              </Link>

              {/* Mobile Wedding Section */}
              <div className="w-full px-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setWeddingDropdown(!weddingDropdown);
                  }}
                  className="flex items-center justify-between w-full py-3 px-6 hover:bg-gray-800 hover:text-rose-500 transition-colors duration-200 rounded-md"
                >
                  <span>THE WEDDING</span>
                  <span className="text-rose-500 font-bold text-lg">
                    {weddingDropdown ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    weddingDropdown
                      ? "max-h-48 opacity-100 mb-2"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="flex flex-col space-y-1 pl-4 mt-2">
                    <Link
                      to="/location"
                      onClick={() => setMobileMenuOpen(false)}
                      className="py-2 px-4 text-gray-300 hover:text-rose-500 hover:bg-gray-800 transition-colors duration-200 rounded-md text-left"
                    >
                      LOCATION
                    </Link>
                    <Link
                      to="/bridesmaid"
                      onClick={() => setMobileMenuOpen(false)}
                      className="py-2 px-4 text-gray-300 hover:text-rose-500 hover:bg-gray-800 transition-colors duration-200 rounded-md text-left"
                    >
                      BRIDESMAID
                    </Link>
                    <Link
                      to="/groom"
                      onClick={() => setMobileMenuOpen(false)}
                      className="py-2 px-4 text-gray-300 hover:text-rose-500 hover:bg-gray-800 transition-colors duration-200 rounded-md text-left"
                    >
                      GROOMSMEN
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Overlay for mobile menu */}
        {mobileMenuOpen && (
          <div
            className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 mt-12 sm:mt-16"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </nav>
    </div>
  );
};

export default Navbar;
