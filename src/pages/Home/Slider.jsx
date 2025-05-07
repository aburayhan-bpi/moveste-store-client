import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slider = () => {
  const heroProducts = [
    {
      _id: 1,
      product_title: "title1",
      product_price: 120.0,
      product_img:
        "https://i.ibb.co/DDLD30pS/461606847-1054678223333536-959540623611547712-n.jpg",
    },
    {
      _id: 2,
      product_title: "title2",
      product_price: 150.0,
      product_img:
        "https://i.ibb.co/DDLD30pS/461606847-1054678223333536-959540623611547712-n.jpg",
    },
    {
      _id: 3,
      product_title: "title3",
      product_price: 100.0,
      product_img:
        "https://i.ibb.co/DDLD30pS/461606847-1054678223333536-959540623611547712-n.jpg",
    },
  ];

  return (
    <div className="w-full h-[500px] md:h-[90vh] relative">
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        rewind={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-full"
      >
        {heroProducts.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full relative">
              <img
                src={product?.product_img}
                alt={product?.product_title}
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 bg-opacity-40 flex flex-col justify-center items-center text-center p-4">
                <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
                  New Arrivals
                </h2>
                <p className="text-white text-lg md:text-xl mb-6">
                  Check out the latest collections now.
                </p>
                <button className="text-[#F85837] hover:bg-[#F85837] hover:text-white bg-[#ffffff] px-6 py-3 rounded-md text-lg font-semibold transition-colors duration-300 hover:cursor-pointer">
                  Shop Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
