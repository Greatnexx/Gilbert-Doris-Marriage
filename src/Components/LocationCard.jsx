
export default function LocationCard({image,title, subtitle, description}) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-xl mx-auto text-left">
      {/* Title */}
      <h2 className="text-xl font-semibold text-gray-800 uppercase mb-2">
       {title}
      </h2>

      {/* Subtitle */}
      <p className="text-gray-700 mb-4">{subtitle}</p>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed mb-6">
      {description}

      </p>

      {/* Image */}
      <img
        src={image}
        loading="lazy"
        alt="Ceremony"
        className="w-full h-auto rounded-md"
      />
    </div>
  );
}
