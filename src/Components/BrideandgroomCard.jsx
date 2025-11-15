import { Heart } from 'lucide-react';

const BrideandgroomCard = ({image, name}) => {
  return (
    <div className="group">
      <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
        {/* Image */}
        <div className="bg-gray-50 p-4">
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="w-full h-auto rounded-lg group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content */}
        <div className="px-6 py-4 text-center">
          {/* Heart Icon */}
          <div className="flex justify-center mb-3">
            <Heart className="text-red-500 w-5 h-5" fill="currentColor" />
          </div>

          {/* Name */}
          <h4 className="text-2xl italic font-[cursive] text-gray-600">
            {name}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default BrideandgroomCard
