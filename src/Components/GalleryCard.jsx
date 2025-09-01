const GalleryCard = ({ image, title }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl shadow-lg transition-transform hover:scale-105 hover:shadow-2xl">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full object-cover transform transition-transform duration-300 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <h3 className="text-white text-lg font-semibold">{title}</h3>
      </div>
    </div>
  );
};

export default GalleryCard;
