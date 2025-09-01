import { Heart } from 'lucide-react';

const BrideandgroomCard = ({image, role, name, description}) => {
  return (
    <div>
      <div className="bg-white border text-center px-6 py-8 rounded-md shadow-sm max-w-sm mx-auto">
        {/* Image */}
        <div className="w-40 h-40 mx-auto mb-4">
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="rounded-full w-full h-full object-center"
          />
        </div>

        {/* Heart Icon */}
        <div className="flex justify-center mb-3">
          <Heart className="text-red-500 w-4 h-4"  />
        </div>

        {/* Role */}
        <h3 className="uppercase text-sm font-bold text-gray-800 tracking-widest mb-1">
          {role}
        </h3>

        {/* Name */}
        <h4 className="text-2xl italic font-[cursive] text-gray-400 mb-3">
          {name}
        </h4>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default BrideandgroomCard
