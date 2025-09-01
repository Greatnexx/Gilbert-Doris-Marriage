import LocationCard from "../Components/LocationCard";

const Location = () => {
  return (
    <div className="md:py-8">
      {/* HERO BANNER */}
      <section className="md:h-[60vh] h-[55vh] bg-slate-900 flex items-center justify-center relative overflow-hidden">
        {/* Geometric background pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-900/20 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-gradient-to-tl from-red-800/15 to-transparent"></div>
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute md:top-1/4 left-1/4 w-32 h-32 border-2 border-red-500 rotate-45 transform"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-red-500 rotate-12 transform"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 border border-white/20 rounded-full"></div>

        <div className="relative text-white text-center px-4 z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extralight mb-6 tracking-widest">
            The Venue
          </h1>
          <div className="w-24 h-px bg-red-500 mx-auto mb-6"></div>
          <p className="text-base md:text-lg font-light tracking-wider opacity-90">
            Join us for the celebration of love!
          </p>
        </div>
      </section>

      <div className="flex flex-col md:flex-row container mx-auto py-20">
        <LocationCard
          image="assets/images/location-1.jpg"
          title="CEREMONY LOCATION"
          subtitle="St. Sylvester’s parish, Olachagbaha Otukpa Benue state"
          description="St. Sylvester’s parish is a beautiful venue for the wedding ceremony.
          It features stunning architecture and a serene atmosphere, perfect for exchanging vows."
        />
        <LocationCard
          image="assets/images/location-1.jpg"
          title="RECEPTION LOCATION"
          subtitle="Lucky child international Nursery and Primary School"
          description="A fantastic venue for the wedding reception.
          It offers ample space and a vibrant atmosphere, ensuring a memorable celebration."
        />
      </div>

      {/* GOOGLE MAP */}
      <section className="pb-2 px-4">
        <div className="w-full mx-auto rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="Wedding Location Map"
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d77537.13678501702!2d7.626110996779837!3d7.121898146195495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sotukpa%20branch!5e0!3m2!1sen!2sng!4v1756647778133!5m2!1sen!2sng"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[300px] sm:h-[400px] md:h-[550px] border-none"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Location;
