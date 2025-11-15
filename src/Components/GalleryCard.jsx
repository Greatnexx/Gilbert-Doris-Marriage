import { memo } from 'react';
import OptimizedImage from './OptimizedImage';
import { useStaggeredAnimation } from '../hooks/useScrollAnimations';

const GalleryCard = memo(({ image, title, priority = false, delay = 0 }) => {
  const [cardRef, isVisible] = useStaggeredAnimation(delay);
  return (
    <div 
      ref={cardRef}
      className={`group relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl transform ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-8 scale-95'
      }`}
    >
      {/* Image with consistent aspect ratio */}
      <div className="aspect-square w-full">
        <OptimizedImage
          src={image}
          alt={title || 'Gallery image'}
          className="w-full h-full transform transition-transform duration-500 group-hover:scale-110"
          placeholder="skeleton"
          priority={priority}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center p-4">
        {title && (
          <h3 className="text-white text-lg font-semibold text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            {title}
          </h3>
        )}
      </div>

      {/* Subtle border on hover */}
      <div className="absolute inset-0 border-2 border-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
});

GalleryCard.displayName = 'GalleryCard';
export default GalleryCard;
