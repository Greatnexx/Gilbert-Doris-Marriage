import { Quote } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Footer from "../Components/Footer";

const Abouther = () => {
  return (
    <>
      <section
        className="relative w-full h-screen bg-cover bg-no-repeat bg-white"
        style={{
          backgroundImage: "url('/assets/images/doris.jpg')",
          backgroundPosition: "center 23%",
          transform: "translateZ(0)",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-20 z-0"></div>

        {/* Content */}
        <div className="absolute inset-0 flex items-end z-10">
          <div className="w-full">
            <div className="container mx-auto px-4">
              <div className="flex justify-center">
                <div className="w-full md:w-6/12 text-center mb-12">
                    <h1 className="text-white text-4xl md:text-6xl font-bold">
                      DORIS GILBERT
                    </h1>

                    <div className="flex items-center justify-center gap-4 mb-4">
                      <span className="w-16 h-[2px] bg-white"></span>
                      <i className="fa-solid fa-heart text-red-500 text-2xl"></i>
                      <i className="fa-solid fa-heart text-white text-2xl"></i>
                      <span className="w-16 h-[2px] bg-white"></span>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="content" className="py-16 bg-slate-100">
        {/* ICON */}
        <div className="flex justify-center mb-10 ">
          <div className="flex border-2 border-red-500 items-center justify-center w-20 h-20 rounded-full bg-gray-100  text-3xl">
            <Quote />
          </div>
        </div>

        {/* CONTAINER */}
        <div className="container mx-auto px-4 ">
          {/* SOCIAL NETWORK ICONS */}
          <div className="flex justify-center mb-12 space-x-4">
            <a href="#">
              <div className="flex items-center justify-center w-12 h-12 border-2  border-gray-300 rounded-full text-gray-600 hover:text-blue-600 hover:border-blue-600 transition">
                <FaFacebook />
              </div>
            </a>
            <a href="#">
              <div className="flex items-center justify-center w-12 h-12 border-2 border-gray-300 rounded-full text-gray-600 hover:text-pink-600 hover:border-pink-600 transition">
                <FaInstagram />
              </div>
            </a>
            <a href="#">
              <div className="flex items-center justify-center w-12 h-12 border-2 border-gray-300 rounded-full text-gray-600 hover:text-blue-400 hover:border-blue-400 transition">
                <FaTwitter />
              </div>
            </a>
          </div>

          {/* TEXT SECTION */}
          <div className="md:flex md:space-x-8 space-y-8 md:space-y-0 md:-[80px]">
            <div className="">
              <p className="mb-4">
                <strong>I'm Doris Owie.</strong> Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Fusce urna urna, imperdiet et
                purus ut, ultricies sollicitudin arcu. Cras placerat, arcu non
                faucibus suscipit, ex arcu consectetur enim, eu malesuada magna
                turpis sit amet mauris Morbi a condimentum quam. Nullam quis
                quam at ex eleifend feugiat. Vivamus lacinia quam quam, ac
                viverra turpis pellentesque in...
              </p>
              <p>
                I'm Gerrard Leandro Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Fusce urna urna, imperdiet et purus ut,
                ultricies sollicitudin arcu. Cras placerat, arcu non faucibus
                suscipit, ex arcu consectetur enim, eu malesuada magna turpis
                sit amet mauris Morbi a condimentum quam. Nullam quis quam at ex
                eleifend feugiat. Vivamus lacinia quam quam, ac viverra turpis
                pellentesque in...
              </p>
            </div>

            <div className="md:w-1/2">
              <p className="mb-4">
                I'm Gerrard Leandro Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Fusce urna urna, imperdiet et purus ut,
                ultricies sollicitudin arcu. Cras placerat, arcu non faucibus
                suscipit, ex arcu consectetur enim, eu malesuada magna turpis
                sit amet mauris Morbi a condimentum quam. Nullam quis quam at ex
                eleifend feugiat. Vivamus lacinia quam quam, ac viverra turpis
                pellentesque in...
              </p>
              <p>
                Integer justo nibh, ullamcorper et dolor ut, porta dapibus ante.
                Sed quis ex at felis ornare pharetra vitae id dolor. Donec
                finibus sagittis ipsum, tristique luctus tellus pharetra
                ultrices...
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer image="url('assets/images/doris3.jpg')" position="center 30%" />
    </>
  );
};

export default Abouther;
