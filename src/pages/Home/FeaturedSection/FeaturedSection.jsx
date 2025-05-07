import React, { useEffect, useState } from "react";
import ProductCard from "../../../components/common/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router";
import { Fade } from "react-awesome-reveal";
const FeaturedSection = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div className="pt-16 transition-all duration-200">
      <div className="text-center mb-8  px-4 w-fit mx-auto">
        {/* <ScrollAnimation> */}
        <Fade direction="right" triggerOnce="true">
          <h2 className="text-4xl font-semibold">
            <span className="text-[#47aaf5ec]">Featured</span> Products
          </h2>
        </Fade>
        {/* </ScrollAnimation> */}
        {/* <ScrollAnimation direction="left"> */}
        <Fade direction="left" triggerOnce="true">
          <p className="text-gray-600">
            Discover Our Best-Selling and Most Loved Items
          </p>
        </Fade>
        {/* </ScrollAnimation> */}
      </div>

      {/* Swiper Section */}
      <div className="px-2 md:px-0">
        <div className="flex justify-end">
          <Link className="no-underline">
            <button className="mr-2 px-6 py-1 rounded-md cursor-pointer bg-[#47aaf520] text-[#47aaf5ec] hover:bg-[#47aaf5ec] hover:text-white transition-colors duration-200">
              See All
            </button>
          </Link>
        </div>
        <Swiper
          slidesPerView={1}
          //   spaceBetween={0}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          //   pagination={{
          //     clickable: true,
          //   }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 1,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 5,
            },
            // 1440: {
            //   slidesPerView: 6,
            // },
          }}
          className="mySwiper"
        >
          {products?.map((product) => (
            <SwiperSlide key={product?._id} className="p-2">
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedSection;
