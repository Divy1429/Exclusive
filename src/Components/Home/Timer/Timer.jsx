import React, { useState, useEffect } from 'react';
import jbl from '../../../assets/jbl.png';

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    days: 5,
    minutes: 59,
    seconds: 35
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, days, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }
        
        return { hours, days, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-white py-8 sm:py-12 md:py-14 lg:py-16 xl:py-[70px]">
      <div className="max-w-[1170px] w-full mx-auto px-4 lg:px-6 xl:px-0">
        <div className="w-full bg-gradient-to-r from-black via-[#1a1a1a] to-[#2d2d2d] rounded-lg overflow-hidden shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center lg:items-stretch">
            
            {/* Left Content */}
            <div className="flex-1 w-full px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14 py-8 sm:py-10 md:py-12 lg:py-14 xl:py-[69px] text-white">
              <div className="max-w-[500px] space-y-5 sm:space-y-6 md:space-y-7 lg:space-y-8">
                <h3 className="text-[#00FF66] text-sm sm:text-base font-semibold">
                  Categories
                </h3>
                
                <h1 className="font-['Inter'] text-[26px] sm:text-[32px] md:text-[38px] lg:text-[42px] xl:text-[48px] font-semibold leading-[1.2] sm:leading-[1.2] md:leading-[1.25]">
                  Enhance Your<br />Music Experience
                </h1>
                
                {/* Timer Circles - Wraps on small screens */}
                <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                  <div className="bg-white rounded-full w-[58px] h-[58px] sm:w-[62px] sm:h-[62px] md:w-[66px] md:h-[66px] lg:w-[62px] lg:h-[62px] flex flex-col items-center justify-center text-black shadow-lg">
                    <div className="text-[13px] sm:text-[15px] md:text-base font-semibold leading-tight">
                      {String(timeLeft.hours).padStart(2, '0')}
                    </div>
                    <div className="text-[9px] sm:text-[10px] md:text-[11px]">Hours</div>
                  </div>
                  
                  <div className="bg-white rounded-full w-[58px] h-[58px] sm:w-[62px] sm:h-[62px] md:w-[66px] md:h-[66px] lg:w-[62px] lg:h-[62px] flex flex-col items-center justify-center text-black shadow-lg">
                    <div className="text-[13px] sm:text-[15px] md:text-base font-semibold leading-tight">
                      {String(timeLeft.days).padStart(2, '0')}
                    </div>
                    <div className="text-[9px] sm:text-[10px] md:text-[11px]">Days</div>
                  </div>
                  
                  <div className="bg-white rounded-full w-[58px] h-[58px] sm:w-[62px] sm:h-[62px] md:w-[66px] md:h-[66px] lg:w-[62px] lg:h-[62px] flex flex-col items-center justify-center text-black shadow-lg">
                    <div className="text-[13px] sm:text-[15px] md:text-base font-semibold leading-tight">
                      {String(timeLeft.minutes).padStart(2, '0')}
                    </div>
                    <div className="text-[9px] sm:text-[10px] md:text-[11px]">Minutes</div>
                  </div>
                  
                  <div className="bg-white rounded-full w-[58px] h-[58px] sm:w-[62px] sm:h-[62px] md:w-[66px] md:h-[66px] lg:w-[62px] lg:h-[62px] flex flex-col items-center justify-center text-black shadow-lg">
                    <div className="text-[13px] sm:text-[15px] md:text-base font-semibold leading-tight">
                      {String(timeLeft.seconds).padStart(2, '0')}
                    </div>
                    <div className="text-[9px] sm:text-[10px] md:text-[11px]">Seconds</div>
                  </div>
                </div>
                
                {/* Buy Now Button */}
                <div className="pt-2 sm:pt-3 md:pt-4">
                  <button className="bg-[#00FF66] hover:bg-[#00cc52] text-white font-medium px-8 sm:px-10 md:px-11 lg:px-12 py-3 sm:py-3.5 md:py-4 rounded text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 cursor-pointer">
                    Buy Now!
                  </button>
                </div>
              </div>
            </div>
            
            {/* Right Content - Speaker Image */}
            <div className="flex-1 max-lg:hidden w-full relative min-h-[260px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[400px] xl:min-h-[420px]">
              <div className="absolute inset-0 flex items-center justify-center lg:justify-end overflow-hidden">
                {/* Radial gradient background for depth */}
                <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/20"></div>
                
                <div className="relative h-full w-full flex items-center justify-center  py-6 sm:py-8 lg:py-0">
                  <img 
                    src={jbl} 
                    alt="JBL Speaker" 
                    className="h-[85%] sm:h-[90%] md:h-[92%] lg:h-[95%] xl:h-full w-auto max-w-none object-contain drop-shadow-2xl lg:mr-0 xl:mr-4"
                    style={{ transform: 'scaleX(-1)' }}
                  />
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;