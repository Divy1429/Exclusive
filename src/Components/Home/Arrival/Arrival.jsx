import ps5 from '../../../Assets/ps5.png';
import woman from '../../../Assets/woman.png';
import alexa from '../../../Assets/alexa.png';
import spray from '../../../Assets/spray.png';  

const NewArrival = () => {
  return (
    <div className="w-full flex items-center justify-center bg-white py-8 sm:py-12 lg:py-15">
      <div className="w-full max-w-[1170px] mx-auto ">
        
        {/* Section Header */}
        <div className="mb-6 sm:mb-8 lg:mb-12">
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
            <div className="w-4 sm:w-5 h-8 sm:h-10 bg-red-500 rounded"></div>
            <h3 className="text-red-500 font-semibold text-sm sm:text-base">Featured</h3>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold font-['Inter']">New Arrival</h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-[30px]">
          
          {/* PlayStation 5 - Large Left Card */}
          <div className="relative bg-black rounded overflow-hidden h-[400px] sm:h-[500px] lg:h-[600px] w-full group cursor-pointer">
            <img 
              src={ps5} 
              alt="PlayStation 5" 
              className="absolute bottom-0 left-1/2 -translate-x-1/2 sm:-translate-x-[55%] lg:-translate-x-[60%] min-h-[400px] sm:min-h-[511px] min-w-[500px] sm:min-w-[600px] w-auto h-auto object-contain opacity-80 group-hover:opacity-90 transition-opacity z-0"
            />
            <div className="absolute bottom-0 left-0 p-4 sm:p-6 lg:p-8 text-white z-10">
              <h3 className="text-xl sm:text-2xl font-semibold font-['Inter'] mb-2 sm:mb-3 lg:mb-4">PlayStation 5</h3>
              <p className="text-xs sm:text-sm mb-2 sm:mb-3 lg:mb-4 opacity-90 max-w-[200px] sm:max-w-[242px]">
                Black and White version of the PS5 coming out on sale.
              </p>
              <button className="text-white font-semibold underline underline-offset-8 text-xs sm:text-sm lg:text-base">
                Shop Now
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4 sm:gap-6 lg:gap-[30px] w-full">
            
            {/* Women's Collections - Top Right */}
            <div className="relative bg-black rounded overflow-hidden h-[280px] sm:h-[280px] lg:h-[284px] w-full group cursor-pointer">
              <img 
                src={woman}
                alt="Women's Collections" 
                className="absolute right-0 bottom-0 h-full w-auto -scale-x-100 object-cover opacity-70 group-hover:opacity-80 transition-opacity"
              />
              <div className="absolute bottom-0 left-0 p-4 sm:p-6 lg:p-6 text-white z-10">
                <h3 className="text-xl sm:text-2xl font-semibold font-['Inter'] mb-2 sm:mb-3 lg:mb-4">Women's Collections</h3>
                <p className="text-xs sm:text-sm mb-2 sm:mb-3 lg:mb-4 opacity-90 max-w-[200px] sm:max-w-[242px]">
                  Featured woman collections that give you another vibe.
                </p>
                <button className="text-white font-semibold underline underline-offset-8 text-xs sm:text-sm lg:text-base">
                  Shop Now
                </button>
              </div>
            </div>

            {/* Bottom Row - Speakers and Perfume */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-[30px]">
              
              {/* Speakers */}
              <div className="relative bg-[radial-gradient(circle_at_center,_#1e1e1e,_#232323,_#2c2c2c,_#2e2e2e,_#313131)] rounded overflow-hidden h-[280px] sm:h-[280px] lg:h-[284px] w-full group cursor-pointer">
                <img 
                  src={alexa}
                  alt="Speakers" 
                  className="absolute -translate-y-12 -translate-x-6 min-w-[300px] sm:min-w-[350px] lg:min-w-[400px] min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] w-full h-full object-contain opacity-80 group-hover:opacity-90 transition-opacity z-0"
                />
                <div className="absolute bottom-0 left-0 p-4 sm:p-6 text-white z-10">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3">Speakers</h3>
                  <p className="text-xs sm:text-sm mb-2 sm:mb-3 opacity-90">
                    Amazon wireless speakers
                  </p>
                  <button className="text-white font-semibold underline underline-offset-8 text-xs sm:text-sm lg:text-base">
                    Shop Now
                  </button>
                </div>
              </div>

              {/* Perfume */}
              <div className="relative bg-[radial-gradient(circle_at_center,_#1e1e1e,_#232323,_#2c2c2c,_#2e2e2e,_#313131)] rounded overflow-hidden h-[280px] sm:h-[280px] lg:h-[284px] w-full group cursor-pointer">
                <img 
                  src={spray} 
                  alt="Perfume" 
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-auto h-[80%] object-contain opacity-80 group-hover:opacity-90 transition-opacity z-0"
                />
                <div className="absolute bottom-0 left-0 p-4 sm:p-6 text-white z-10">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3">Perfume</h3>
                  <p className="text-xs sm:text-sm mb-2 sm:mb-3 opacity-90">
                    GUCCI INTENSE OUD EDP
                  </p>
                  <button className="text-white font-semibold underline underline-offset-8 text-xs sm:text-sm lg:text-base">
                    Shop Now
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default NewArrival;