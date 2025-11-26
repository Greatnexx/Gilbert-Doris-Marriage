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
            {/* Mobile Layout - Everything Left Aligned */}
            <div className="md:hidden flex items-center space-x-[120px]">
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
              <div className="bg-rose-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full font-bold text-sm flex items-center">
                <span>G</span>
                <Heart className="w-3 h-3 mx-1" />
                <span>D</span>
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
                    <div className="absolute top-full left-0 w-48 lg:w-30 bg-white shadow-lg rounded-b-md overflow-hidden">
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
                    <div className="absolute top-full right-0 left-0 w-48 lg:w-30 bg-white shadow-lg rounded-b-md overflow-hidden">
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

            {/* Desktop Right Side - Empty for balance */}
            <div className="hidden md:block"></div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          } z-50`}
        >
          <div
            className="bg-black border-t border-gray-700 relative z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col space-y-2 py-4 px-4">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center space-x-2 py-3 px-4 hover:bg-gray-800 hover:text-rose-500 transition-colors duration-200 rounded-lg text-left group"
              >
                <Heart className="w-4 h-4 text-rose-500 group-hover:scale-110 transition-transform" />
                <span className="font-medium">HOME</span>
              </Link>

              {/* Mobile About Section */}
              <div className="space-y-1">
                <button
                  onClick={() => setAboutDropdown(!aboutDropdown)}
                  className="flex items-center justify-between w-full py-3 px-4 hover:bg-gray-800 hover:text-rose-500 transition-colors duration-200 rounded-lg group"
                >
                  <div className="flex items-center space-x-2">
                    <Heart className="w-4 h-4 text-rose-500 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">ABOUT</span>
                  </div>
                  <span className="text-rose-500 font-bold text-lg transition-transform duration-200">
                    {aboutDropdown ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    aboutDropdown ? "max-h-32 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="flex flex-col space-y-1 pl-6 mt-1">
                    <Link
                      to="/about-him"
                      onClick={() => setMobileMenuOpen(false)}
                      className="py-2 px-4 text-gray-300 hover:text-rose-500 hover:bg-gray-800 transition-colors duration-200 rounded-md text-left text-sm"
                    >
                      ABOUT HIM
                    </Link>
                    <Link
                      to="/about-her"
                      onClick={() => setMobileMenuOpen(false)}
                      className="py-2 px-4 text-gray-300 hover:text-rose-500 hover:bg-gray-800 transition-colors duration-200 rounded-md text-left text-sm"
                    >
                      ABOUT HER
                    </Link>
                  </div>
                </div>
              </div>

              <Link
                to="/gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center space-x-2 py-3 px-4 hover:bg-gray-800 hover:text-rose-500 transition-colors duration-200 rounded-lg text-left group"
              >
                <Heart className="w-4 h-4 text-rose-500 group-hover:scale-110 transition-transform" />
                <span className="font-medium">GALLERY</span>
              </Link>

              {/* Mobile Wedding section */}
              <div className="space-y-1">
                <button
                  onClick={() => setWeddingDropdown(!weddingDropdown)}
                  className="flex items-center justify-between w-full py-3 px-4 hover:bg-gray-800 hover:text-rose-500 transition-colors duration-200 rounded-lg group"
                >
                  <div className="flex items-center space-x-2">
                    <Heart className="w-4 h-4 text-rose-500 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">THE WEDDING</span>
                  </div>
                  <span className="text-rose-500 font-bold text-lg transition-transform duration-200">
                    {weddingDropdown ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    weddingDropdown
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="flex flex-col space-y-1 pl-6 mt-1">
                    <Link
                      to="/location"
                      onClick={() => setMobileMenuOpen(false)}
                      className="py-2 px-4 text-gray-300 hover:text-rose-500 hover:bg-gray-800 transition-colors duration-200 rounded-md text-left text-sm"
                    >
                      LOCATION
                    </Link>
                    <Link
                      to="/bridesmaid"
                      onClick={() => setMobileMenuOpen(false)}
                      className="py-2 px-4 text-gray-300 hover:text-rose-500 hover:bg-gray-800 transition-colors duration-200 rounded-md text-left text-sm"
                    >
                      BRIDESMAID
                    </Link>
                    <Link
                      to="/groom"
                      onClick={() => setMobileMenuOpen(false)}
                      className="py-2 px-4 text-gray-300 hover:text-rose-500 hover:bg-gray-800 transition-colors duration-200 rounded-md text-left text-sm"
                    >
                      GROOMSMEN
                    </Link>
                  </div>
                </div>
              </div>

              <Link
                to="/story"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center space-x-2 py-3 px-4 hover:bg-gray-800 hover:text-rose-500 transition-colors duration-200 rounded-lg text-left group"
              >
                <Heart className="w-4 h-4 text-rose-500 group-hover:scale-110 transition-transform" />
                <span className="font-medium">THE STORY</span>
              </Link>

              <Link
                to="/gift"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center space-x-2 py-3 px-4 hover:bg-gray-800 hover:text-rose-500 transition-colors duration-200 rounded-lg text-left group"
              >
                <Heart className="w-4 h-4 text-rose-500 group-hover:scale-110 transition-transform" />
                <span className="font-medium">GIFT US</span>
              </Link>
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
