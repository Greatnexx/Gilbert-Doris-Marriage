
export default function Footer({image,position}) {
  return (
    <footer>
      <div
        className="relative h-[550px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:image,
          backgroundPosition: position,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Content */}
        <div className="relative text-center text-white ">
         

          {/* Heart Divider */} 
           <div className="flex items-center justify-center gap-4 mt-80">
            <span className="w-16 h-[2px] bg-white"></span>
            <i className="fa-solid fa-heart text-red-500 text-2xl"></i>
            <i className="fa-solid fa-heart text-white text-2xl"></i>
            <span className="w-16 h-[2px] bg-white"></span>
          </div>

          {/* Couple Names */}
          <div
            id="footer-couple-name"
            className="font-[Oswald] text-lg tracking-[3px] mt-4"
          >
            GILBERT &amp; DORIS
          </div>
        </div>
      </div>

      <div>
        <div className="text-center text-gray-500 text-sm py-4">
          &copy; {new Date().getFullYear()} Gilbert &amp; Doris Wedding. All
          rights reserved.
        </div>
        <div className="text-center text-gray-500 text-sm pb-4">
          Designed by{" "}
      
            {" "}
            Danny's Global
          
        </div>
      </div>
    </footer>
  );
}
