import { Link } from "react-router-dom";

export default function RSVPSection() {
  return (
    <section id="rsvp" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center">
          {/* Heart Divider */}
          <div className="flex justify-center items-center gap-2 mb-4">
            <i className="fa-solid fa-heart text-red-500 text-2xl"></i>
            <i className="fa-solid fa-heart text-gray-400 text-2xl"></i>
          </div>

          {/* Title */}
          <h2 className="text-3xl  md:text-4xl font-bold uppercase">
            ARE YOU ATTENDING?
          </h2>

          {/* Description */}
          <p className="text-gray-600 max-w-xl mx-auto mt-4">
            Please reserve before{" "}
            <span className="font-semibold">DECEMBER 30th, 2025</span>. Don't
            miss out on this special day!
          </p>

          {/* view location */}
          <div className="text-center mt-8">
            <Link
              to="/location"
              className="inline-block px-6 py-3 bg-red-500 text-white text-lg font-medium uppercase tracking-wide rounded hover:bg-pink-600 transition duration-300"
            >
              View Location
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
