import { Heart } from "lucide-react";
import him from '/assets/images/myGUY.jpg'; // replace with your actual image path
import her from '/assets/images/doris.jpg'; // replace with your actual image path

export default function CoupleSection() {
  return (
    <section className="py-36 pb-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center">
          {/* Section Title */}
          <div className="w-full md:w-10/12 text-center mb-16">
            <div className="section-title">
              <h1 className="text-4xl font-[pacifo]  md:text-5xl font-bold text-gray-800 mb-6 ">
                THE HAPPY COUPLE
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-lg">
                Two hearts, two souls, and two journeys that have become one.
                Their story is a beautiful reminder that love always finds its
                way, and today they step into forever, hand in hand, surrounded
                by the people they cherish most.
              </p>

              {/* Heart Divider */}
              <div className="flex items-center justify-center mt-8 space-x-3">
                <span className="w-16 h-px bg-gray-400"></span>
                <Heart className="w-5 h-5 text-red-500 fill-current" />
                <Heart className="w-4 h-4 text-gray-400" />
                <span className="w-16 h-px bg-gray-400"></span>
              </div>
            </div>
          </div>

          {/* Couple Container */}
          <div className="w-full flex flex-col lg:flex-row justify-center items-start gap-12 lg:gap-16">
            {/* Groom */}
            <div className="w-full lg:w-5/12 max-w-md mx-auto lg:mx-0 ">
              <div className="relative overflow-hidden group rounded-lg shadow-2xl mb-8">
                <div className="aspect-[5/5] bg-gradient-to-br from-gray-200 to-gray-300">
                  <img
                    src={him}
                    alt="Groom - Gerrard Leandro"
                    className="w-full  object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 border border-white m-4 opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6"></div>

                {/* Caption */}
                <div className="absolute inset-0 border border-white m-4 opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <div className="flex justify-center mb-4">
                    <Heart className="w-5 h-5 text-red-500 fill-current mr-1" />
                    <Heart className="w-4 h-4 text-white fill-current" />
                  </div>
                  <h4 className="text-white uppercase tracking-[4px] text-center font-semibold text-sm">
                    *** THE GROOM ***
                  </h4>
                </div>

                {/* Link */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity delay-150 duration-500">
                  <button className="border-2 border-white text-white py-3 px-8 hover:bg-red-500  hover:text-white transition-all duration-300 uppercase tracking-wider font-semibold">
                    ABOUT HIM
                  </button>
                </div>
              </div>

              <div className="text-center lg:text-left">
                <p className="text-gray-700 leading-relaxed">
                  <strong className="text-2xl font-['Pacifico'] text-red-500 block mb-4 transform -rotate-3">
                    I'm Gilbert Idoko
                  </strong>
                  A dreamer, a believer, and now the happiest man alive. From
                  the very first moment I met her, I knew my life had found its
                  missing piece. She inspires me to be better every day, and
                  with her by my side, I have discovered the true meaning of
                  love, laughter, and forever.
                </p>
              </div>
            </div>

            {/* Bride */}
            <div className="w-full lg:w-5/12 max-w-md mx-auto lg:mx-0">
              <div className="relative overflow-hidden group rounded-lg shadow-2xl mb-8">
                <div className="aspect-[5/5] bg-gradient-to-br from-gray-200 to-gray-300">
                  <img
                    src={her}
                    alt="Bride - Dianne Anna"
                    className="w-full  object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Caption */}
                <div className="absolute inset-0 border border-white m-4 opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <div className="flex justify-center mb-4">
                    <Heart className="w-5 h-5 text-red-500 fill-current mr-1" />
                    <Heart className="w-4 h-4 text-white fill-current" />
                  </div>
                  <h4 className="text-white uppercase tracking-[4px] text-center font-semibold text-sm">
                    *** THE BRIDE ***
                  </h4>
                </div>

                {/* Link */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity delay-150 duration-500">
                  <button className="border-2 border-white text-white py-3 px-8 hover:bg-red-500 hover:text-white  transition-all duration-300 uppercase tracking-wider font-semibold">
                    ABOUT HER
                  </button>
                </div>
              </div>

              <div className="text-center lg:text-left">
                <p className="text-gray-700 leading-relaxed">
                  <strong className="text-2xl font-['Pacifico'] text-red-500 block mb-4 transform rotate-2">
                    I'm Doris Owie
                  </strong>
                  A lover of laughter, kindness, and all things beautiful. When
                  I met Gilbert, I found not just a partner, but my best friend,
                  my safe place, and my greatest blessing. With him, every day
                  feels like a new adventure, and I cannot wait to begin this
                  journey of forever together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
