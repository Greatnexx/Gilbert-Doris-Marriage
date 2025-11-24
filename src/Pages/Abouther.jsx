import { Quote } from "lucide-react";
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
                    DORIS ABUTU
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
         

          {/* TEXT SECTION */}
          <div className="md:flex md:space-x-8 space-y-8 md:space-y-0 md:px-[80px]">
            <div className="md:flex md:space-x-8 space-y-8 md:space-y-0 md:px-[80px]">
              <div className="">
                <p className="mb-4">
                  <strong>I'm Doris Abutu.</strong> A woman who thought she understood love until Gilbert walked into
                  my life and redefined everything. He didn't just capture my
                  heart; he awakened parts of my soul I never knew existed.
                </p>
                <p className="mb-4">
                  Before Gilbert, I was complete in my own way. But with him, I
                  discovered what it truly means to be whole. He challenges me
                  to be better, celebrates my victories as if they were his own,
                  and stands by me through every storm with unwavering grace.
                  His laughter is my favorite symphony, his smile my daily
                  sunrise.
                </p>
                <p className="mb-4">
                  Together, we've created a love story that feels both destined
                  and chosen destined because it feels like the universe
                  conspired to bring us together, and chosen because every day
                  we wake up and decide to love each other deeper than the day
                  before.
                </p>
                <p>
                  As I prepare to call him my husband, I'm filled with excitement
                  for all the adventures, quiet moments, and beautiful chaos
                  that awaits us. Gilbert isn't just my future he's my home, my
                  peace, and my greatest blessing. In him, I've found my
                  greatest adventure, and I can't wait to see where our journey
                  takes us next.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer image="url('assets/images/doris3.jpg')" position="center 30%" />
    </>
  );
};

export default Abouther;
