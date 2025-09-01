import { Heart } from "lucide-react";
import GalleryCard from "../Components/GalleryCard";
import Footer from "../Components/Footer";

const Gallery = () => {
  const galleryItems = [
    { image: "assets/images/gallery1.jpg" },
    { image: "assets/images/gallery2.jpg" },
    { image: "assets/images/gallery3.jpg" },
    { image: "assets/images/gallery9.jpg" },
    { image: "assets/images/gallery5.jpg" },
    { image: "assets/images/gallery6.jpg" },
    { image: "assets/images/gallery7.jpg" },
    { image: "assets/images/gallery8.jpg" },
    { image: "assets/images/gallery17.jpg" },
    { image: "assets/images/gallery18.jpg" },
    { image: "assets/images/gallery14.jpg"},
    { image: "assets/images/gallery15.jpg"},
    { image: "assets/images/dorisblue.jpg"},
    { image: "assets/images/both2.jpg"},
    { image: "assets/images/owieblackNative.jpg"},
    { image: "assets/images/doris8.jpg" },
    { image: "assets/images/doris39.jpg" },
    { image: "assets/images/owie.jpg" },
    { image: "assets/images/doris5.jpg" },
    { image: "assets/images/motor.jpg" }
  ];

  return (
    <>
      <section className="py-32 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Gallery</h2>
          <div className="flex items-center justify-center mb-[20px] space-x-3  ">
            <span className="w-16 h-px bg-gray-400 "></span>
            <Heart className="w-5 h-5 text-red-500 fill-current" />
            <Heart className="w-4 h-4 text-gray-400" />
            <span className="w-16 h-px bg-gray-400"></span>
          </div>
          <div className="flex justify-center mb-10">
            <p>Go through our gallery and explore greater view</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {galleryItems.map((item, index) => (
              <GalleryCard key={index} image={item.image} title={item.title} />
            ))}
          </div>
        </div>
      </section>

      <Footer
        image="url('assets/images/footer4.jpg')"
        backgroundPosition="center 40%"
      />
    </>
  );
};

export default Gallery;
