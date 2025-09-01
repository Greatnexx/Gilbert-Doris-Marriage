import LocationCard from "../Components/LocationCard";

const Location = () => {
  return (
    <div>
      {/* HERO BANNER */}
      <section
        className="h-[60vh] bg-cover bg-gray-100 bg-center flex items-center justify-center relative"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=1400&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">The Venue</h1>
          <p className="text-lg md:text-xl">
            Join us for the celebration of love!
          </p>
        </div>
      </section>

      <div className="flex flex-col md:flex-row container mx-auto py-20">
        <LocationCard
          image="assets/images/location-1.jpg"
          title="CEREMONY LOCATION"
        />
        <LocationCard
          image="assets/images/location-1.jpg"
          title="RECEPTION LOCATION"
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
}

export default Location
