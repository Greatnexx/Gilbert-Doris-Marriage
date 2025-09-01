import him from '/assets/images/him2.jpg'; 
const Card = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="relative bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 max-w-sm">
        {/* Image */}
        <img
          src={him} // replace with your actual image path
          alt="The Groom"
          loading="lazy"
          className="w-full object-cover"
        />

        {/* Overlay Frame */}
        <div className="absolute inset-0 border border-gray-300 m-3 pointer-events-none"></div>

        {/* Hearts */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-1">
          <span className="text-red-400 text-xl">❤</span>
          <span className="text-pink-200 text-xl">❤</span>
        </div>

        {/* Caption */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-600 text-sm tracking-widest">
          *** THE GROOM ***
        </div>
      </div>
    </div>
  );
};

export default Card;
