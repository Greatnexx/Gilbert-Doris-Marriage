import Footer from "../Components/Footer";

const Story = () => {
  return (
    <div>
      <section
        className="relative bg-center flex items-center justify-center text-white text-center px-4"
        style={{
          backgroundImage: "url('/assets/images/proposal.jpg')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          height: "100vh", // reduce height so it doesn’t stretch full screen
          width: "100%",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-10 z-0" />

        {/* Content */}
        <div className="relative z-10 max-w-3xl">
          {/* Big Heart Icon */}
          <div className="mb-6">
            <div className="w-16 h-16 border-2 border-white rounded-full mx-auto flex items-center justify-center">
              <i className="fa fa-heart text-white text-2xl"></i>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4">HE PROPOSED</h1>

          {/* Heart Divider */}
          <div className="flex items-center justify-center space-x-2 mb-6">
            <span className="w-16 h-[2px] bg-white" />
            <i className="fa fa-heart text-rose-500 text-xl" />
            <i className="fa fa-heart text-white text-sm" />
            <span className="w-16 h-[2px] bg-white" />
          </div>

       
        </div>
      </section>

      <section className="bg-white text-white p-16">
        {/* SECTION TITLE */}
        <div className="flex flex-col md:flex-row justify-center gap-8 text-gray-700 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row text-left w-full gap-8">
            <div className="md:w-1/2">
              <p className="mb-4 text-base leading-relaxed">
                I had been planning this moment for months, but nothing could
                have prepared me for the butterflies in my stomach that evening.
                I knew Doris was the one I wanted to spend forever with, but
                finding the perfect moment felt like the most important mission
                of my life.
              </p>
              <p className="mb-4 text-base leading-relaxed">
                We were at our favorite spot—the little garden where we had our
                first real conversation about our dreams and fears. As the sun
                began to set, painting the sky in shades of pink and gold, I
                realized there would never be a more perfect moment than this
                one, with the woman who had become my whole world.
              </p>
              <p className="text-base leading-relaxed">
                My hands were shaking as I got down on one knee, but the moment
                I saw her face—the surprise, the tears of joy, the radiant
                smile—I knew everything was exactly as it should be. This was
                our moment, the beginning of our forever.
              </p>
            </div>
            <div className="md:w-1/2">
              <p className="mb-4 text-base leading-relaxed">
                When I finally found the courage to speak, the words came
                straight from my heart: "Doris, you've made me believe in magic
                again. You've shown me what it means to love and be loved
                unconditionally. I can't imagine a single day without your
                laughter, your wisdom, and your beautiful soul by my side."
              </p>
              <p className="mb-4 text-base leading-relaxed">
                "You've turned my dreams into plans, my hopes into certainty,
                and my life into the most beautiful adventure I could have ever
                imagined. I want to wake up next to you every morning, face
                every challenge together, and celebrate every victory as one."
              </p>
              <p className="text-base leading-relaxed">
                "Will you marry me, Doris? Will you be my wife, my partner, and
                my best friend for all the days of our lives?" The rest, as they
                say, is history—and the beginning of our greatest chapter yet.
              </p>
            </div>
          </div>
        </div>

        {/* PARALLAX SECTION */}
        <div
          className="relative h-[760px] bg-fixed bg-center bg-cover  flex items-center justify-center"
          style={{
            backgroundImage: "url('/assets/images/gallery2.jpg')",
            backgroundPosition: "center 13%",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="z-10 text-center max-w-2xl mx-auto px-4">
            <div className="mb-6">
              <div className="w-16 h-16 border-2 border-white rounded-full mx-auto flex items-center justify-center">
                <i className="text-white text-xl">💬</i>
              </div>
            </div>
            <h2 className="text-4xl font-bold mb-4">MARRY ME DORIS</h2>
            <div className="flex items-center justify-center mb-6">
              <span className="w-16 h-[1px] bg-white"></span>
              <div className="mx-3 flex space-x-2 items-center">
                <div className="w-4 h-4 bg-pink-500 rounded-full"></div>
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <span className="w-16 h-[1px] bg-white"></span>
            </div>
            <p className="text-lg leading-relaxed">
              In that perfect moment, surrounded by the golden hour light and
              the scent of blooming flowers, time stood still. Her tears of joy,
              her whispered "yes," and the way she threw her arms around me— it
              was everything I had dreamed of and more. That evening, we didn't
              just get engaged; we promised each other a lifetime of love,
              laughter, and endless adventures together.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white text-gray-800 py-20 px-4">
        {/* Section Title */}
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            SHE HUGGED HIM
          </h2>
          <div className="flex items-center justify-center mb-6">
            <span className="w-16 h-[1px] bg-gray-300"></span>
            <div className="mx-3 flex space-x-2 items-center">
              <div className="w-4 h-4 bg-pink-500 rounded-full"></div>
              <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
            </div>
            <span className="w-16 h-[1px] bg-gray-300"></span>
          </div>
        </div>

        {/* Paragraphs */}
          <div className="container mx-auto flex flex-col md:flex-row gap-10 md:gap-20 mb-10 max-w-6xl">
            <div className="md:w-1/2">
                <p className="text-base leading-relaxed mb-4">
                    The moment I finished asking the question, time seemed to freeze. Doris's eyes filled with tears—the good kind that sparkle like diamonds in the fading sunlight. For what felt like an eternity, she just stared at me, and I could see her processing the magnitude of what I had just asked.
                </p>
                <p className="text-base leading-relaxed">
                    Then, without saying a word, she threw her arms around me with such force that we nearly tumbled over together. Her embrace was everything—relief, joy, love, and promise all wrapped into one perfect moment. I could feel her heart racing against mine, and I knew that whatever her answer would be, this hug said everything.
                </p>
            </div>
            <div className="md:w-1/2">
                <p className="text-base leading-relaxed mb-4">
                    We stayed like that for what felt like hours but was probably only minutes, holding each other as the reality of the moment washed over us. She was laughing and crying at the same time, and honestly, so was I. It was messy and beautiful and absolutely perfect—just like our love story.
                </p>
                <p className="text-base leading-relaxed">
                    When she finally pulled back to look at me, her face was glowing with pure happiness. Her smile was brighter than any sunset, more beautiful than any ring I could have chosen. In that embrace, I felt our future beginning—two hearts deciding to beat as one for the rest of our lives.
                </p>
            </div>
          </div>


        {/* Fullwidth Image */}
        <div
          className="relative bg-center flex items-center justify-center text-white text-center px-4"
          style={{
            backgroundImage: "url('/assets/images/she_said_yes.jpg')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            height: "80vh", // reduce height so it doesn’t stretch full screen
            width: "100%",
          }}
        ></div>

        {/* "And Said Yes!" */}
        <div className="container mx-auto text-center mt-24">
          <h2 className="text-3xl md:text-4xl font-bold">
            AND SAID <span className="text-[#f0394d]">"YES!"</span>
          </h2>
        </div>
      </section>

      <Footer image="url('assets/images/both2.jpg')" position="center 30%" />
    </div>
  );
}

export default Story
