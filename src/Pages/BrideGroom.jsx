import BrideandgroomCard from "../Components/BrideandgroomCard";
import Footer from "../Components/Footer";
import { groomsmenData } from "../utils/GroomMen";

const BrideGroom = () => {
  return (
    <>

    <section className="pt-24 pb-16 bg-gray-100">
      <div className="text-center mb-12 px-4">
        <h1 className="text-3xl md:text-4xl font-bold">GROOMSMEN</h1>
        <div className="flex justify-center items-center gap-2 my-4">
          <span className="w-16 h-[2px] bg-gray-300"></span>
          <i className="fa fa-heart text-rose-500" />
          <i className="fa fa-heart text-gray-400" />
          <span className="w-16 h-[2px] bg-gray-300"></span>
        </div>
        <p className="max-w-2xl mx-auto text-gray-600">
         Take a look of our handsome grooms to spice up our celebration
        </p>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 gap-2">
          {groomsmenData.map((man, index) => (
            <BrideandgroomCard key={index} {...man} />
          ))}
        </div>
      </div>
    </section>
    <Footer image="url('assets/images/footer5.jpg')"
            position="center 30%"
          />


    </>
  );
};

export default BrideGroom;
