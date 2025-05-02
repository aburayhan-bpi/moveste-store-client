import { div } from "framer-motion/client";
import React from "react";
import { FaStar } from "react-icons/fa";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { TbRosetteDiscountCheck, TbTruckDelivery } from "react-icons/tb";
import { Link } from "react-router";

const ProductCard = ({ product = {} }) => {
  return (
    <div>
      {/* <Link to="https://facebok.com" className="no-underline"> */}
      <div className="group flex flex-col w-full md:w-full h-fit mx-auto border border-gray-200 rounded-md hover:shadow hover:cursor-pointer transition-all duration-200 bg-white">
        {/* Image Section */}
        <div className="h-60 w-full overflow-hidden">
          <img
            className="group-hover:scale-105 transition-all duration-300 w-full h-full object-fill md:object-cover cursor-pointer"
            src={product?.image}
            alt={product?.title}
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col flex-1 p-3 gap-y-2">
          {/* Top Row: Discount + Bookmark */}
          <div className="flex items-center justify-between">
            <p className="bg-[#d3ecff] text-[#0091ffec] text-xs px-2 py-1 rounded-lg">
              Up to {product?.discount} off
            </p>
            <div className="relative cursor-pointer">
              <p className="text-2xl">
                {product?.bookmarked ? <MdFavorite /> : <MdFavoriteBorder />}
              </p>
              {/* Tooltip */}
              <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 hidden hover:block bg-black text-white text-xs rounded py-1 px-2 whitespace-nowrap z-10">
                Bookmark
              </div>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-sm font-semibold cursor-pointer hover:text-gray-700 leading-tight">
            {product?.title}
          </h2>

          {/* Rating */}
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }, (_, index) => (
              <FaStar
                key={index}
                className={`${
                  product?.rating?.score > index
                    ? "text-yellow-500"
                    : "text-gray-300"
                }`}
              />
            ))}
            <div className="flex gap-1 ml-2 text-xs text-gray-600">
              <span>{product?.rating?.score}</span>
              <span>({product?.rating?.reviews})</span>
            </div>
          </div>

          {/* Delivery Info */}
          <div className="flex items-center justify-between text-xs text-gray-500">
            <p className="flex items-center gap-1 text-xs">
              <TbTruckDelivery /> {product?.deliveryInfo}
            </p>
            <p className="flex items-center gap-1 text-xs">
              <TbRosetteDiscountCheck /> {product?.tag}
            </p>
          </div>

          {/* Price and Add to Cart */}
          <div className="flex items-center justify-between pt-2 mt-auto">
            <p className="text-base font-bold">${product?.price}</p>
            <button className="text-[#47aaf5ec] text-sm font-semibold hover:underline hover:cursor-pointer">
              Add to cart
            </button>
          </div>
        </div>
      </div>
      {/* </Link> */}
    </div>
  );
};

export default ProductCard;
