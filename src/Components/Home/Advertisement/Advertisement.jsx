const Services = () => {
  return (
    <div className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-[135px]">
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
          
          {/* Free Delivery */}
          <div className="flex flex-col items-center text-center group">
            <div className="relative mb-6">
              {/* Outer Circle - Light Gray */}
              <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center">
                {/* Middle Circle - Gray */}
                <div className="w-[58px] h-[58px] rounded-full bg-gray-400 flex items-center justify-center">
                  {/* Inner Circle - Black with Icon */}
                  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
                    <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                      <g clipPath="url(#clip0_1222_335)">
                        <path d="M12.1667 31.6667C14.0076 31.6667 15.5 30.1743 15.5 28.3333C15.5 26.4924 14.0076 25 12.1667 25C10.3257 25 8.83334 26.4924 8.83334 28.3333C8.83334 30.1743 10.3257 31.6667 12.1667 31.6667Z" stroke="#FAFAFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M28.8333 31.6667C30.6743 31.6667 32.1667 30.1743 32.1667 28.3333C32.1667 26.4924 30.6743 25 28.8333 25C26.9924 25 25.5 26.4924 25.5 28.3333C25.5 30.1743 26.9924 31.6667 28.8333 31.6667Z" stroke="#FAFAFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8.83331 28.3335H7.49998C6.39541 28.3335 5.49998 27.4381 5.49998 26.3335V21.6668M3.83331 8.3335H20.1666C21.2712 8.3335 22.1666 9.22893 22.1666 10.3335V28.3335M15.5 28.3335H25.5M32.1667 28.3335H33.5C34.6046 28.3335 35.5 27.4381 35.5 26.3335V18.3335M35.5 18.3335H22.1666M35.5 18.3335L31.0826 10.9712C30.7211 10.3688 30.0701 10.0002 29.3676 10.0002H22.1666" stroke="#FAFAFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M5.5 11.8184H12.1667" stroke="#FAFAFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2.31818 15.4546H8.98484" stroke="#FAFAFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M5.5 19.0908H12.1667" stroke="#FAFAFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_1222_335">
                          <rect width="40" height="40" fill="white" transform="translate(0.5)"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold font-['Inter'] mb-2 uppercase">
              FREE AND FAST DELIVERY
            </h3>
            <p className="text-sm text-gray-600">
              Free delivery for all orders over $140
            </p>
          </div>

          {/* Customer Service */}
          <div className="flex flex-col items-center text-center group">
            <div className="relative mb-6">
              {/* Outer Circle - Light Gray */}
              <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center">
                {/* Middle Circle - Gray */}
                <div className="w-[58px] h-[58px] rounded-full bg-gray-400 flex items-center justify-center">
                  {/* Inner Circle - Black with Icon */}
                  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                      <g clipPath="url(#clip0_1222_352)">
                        <path d="M13.3334 24.9998C13.3334 23.1589 11.841 21.6665 10 21.6665C8.15907 21.6665 6.66669 23.1589 6.66669 24.9998V28.3332C6.66669 30.1741 8.15907 31.6665 10 31.6665C11.841 31.6665 13.3334 30.1741 13.3334 28.3332V24.9998Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M33.3334 24.9998C33.3334 23.1589 31.841 21.6665 30 21.6665C28.1591 21.6665 26.6667 23.1589 26.6667 24.9998V28.3332C26.6667 30.1741 28.1591 31.6665 30 31.6665C31.841 31.6665 33.3334 30.1741 33.3334 28.3332V24.9998Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6.66669 24.9998V19.9998C6.66669 16.4636 8.07145 13.0722 10.5719 10.5717C13.0724 8.07126 16.4638 6.6665 20 6.6665C23.5362 6.6665 26.9276 8.07126 29.4281 10.5717C31.9286 13.0722 33.3334 16.4636 33.3334 19.9998V24.9998" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M30 31.6665C30 32.9926 28.9464 34.2644 27.0711 35.202C25.1957 36.1397 22.6522 36.6665 20 36.6665" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_1222_352">
                          <rect width="40" height="40" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold font-['Inter'] mb-2 uppercase">
              24/7 CUSTOMER SERVICE
            </h3>
            <p className="text-sm text-gray-600">
              Friendly 24/7 customer support
            </p>
          </div>

          {/* Money Back Guarantee */}
          <div className="flex flex-col items-center text-center group sm:col-span-2 lg:col-span-1">
            <div className="relative mb-6">
              {/* Outer Circle - Light Gray */}
              <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center">
                {/* Middle Circle - Gray */}
                <div className="w-[58px] h-[58px] rounded-full bg-gray-400 flex items-center justify-center">
                  {/* Inner Circle - Black with Icon */}
                  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                      <path d="M19.983 2.5874C21.0046 2.5874 22.004 2.73663 22.7574 3.01807L31.0748 6.13525H31.0758C33.2953 6.96202 35.0504 9.50761 35.0504 11.8667V24.2495C35.0504 25.3367 34.7062 26.5895 34.1237 27.7485C33.5777 28.8348 32.8403 29.8024 32.0309 30.4556L31.8678 30.5825L24.7008 35.9321L24.6949 35.937C23.4122 36.9261 21.7236 37.4331 19.9996 37.4331C18.2769 37.433 16.5846 36.9263 15.2643 35.9478H15.2633L8.09924 30.5991C7.22654 29.9484 6.4252 28.9208 5.84241 27.7593C5.25956 26.5976 4.91663 25.3447 4.91663 24.2661V11.8667C4.91663 9.50749 6.67157 6.96189 8.89124 6.13525H8.89221L17.2086 3.01807C17.962 2.73655 18.9614 2.58743 19.983 2.5874ZM20.0006 4.08545C19.202 4.08763 18.3751 4.19487 17.7418 4.43115L17.7408 4.43213L9.42444 7.54834H9.42346C8.59596 7.85993 7.85473 8.52245 7.32385 9.29053C6.79277 10.0589 6.43323 10.9898 6.43323 11.8833V24.2661C6.43323 25.1606 6.74381 26.1893 7.20081 27.1011C7.65769 28.0126 8.29305 28.8726 9.00061 29.4009L16.1676 34.7505C17.2294 35.5444 18.628 35.9252 20.0016 35.9253C21.3755 35.9253 22.7778 35.5442 23.8473 34.7515L23.8492 34.7505L31.0153 29.4009L31.0162 29.3999C31.731 28.8638 32.3666 28.0049 32.8219 27.0942C33.2772 26.1836 33.5836 25.1596 33.5836 24.2661V11.8667C33.5836 10.9807 33.2232 10.0539 32.693 9.28662C32.1625 8.51907 31.422 7.85386 30.5973 7.53369L30.5924 7.53174L22.275 4.41455L22.2662 4.41162C21.6281 4.18643 20.8 4.08327 20.0006 4.08545Z" fill="#FAFAFA" stroke="#FAFAFA"/>
                      <path d="M24.4039 14.77C24.692 14.4822 25.1755 14.482 25.4635 14.77C25.7514 15.058 25.7513 15.5415 25.4635 15.8296L18.2965 22.9966C18.1452 23.1478 17.9574 23.2163 17.7662 23.2163C17.5752 23.2162 17.3881 23.1477 17.2369 22.9966L14.5533 20.313C14.2655 20.0249 14.2654 19.5414 14.5533 19.2534C14.8414 18.9654 15.3248 18.9655 15.6129 19.2534L17.7662 21.4067L18.1207 21.0532L24.4039 14.77Z" fill="#FAFAFA" stroke="#FAFAFA"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold font-['Inter'] mb-2 uppercase">
              MONEY BACK GUARANTEE
            </h3>
            <p className="text-sm text-gray-600">
              We return money within 30 days
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Services;