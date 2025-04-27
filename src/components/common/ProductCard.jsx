import React from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

const ProductCard = ({ product = {} }) => {
  return (
    <div className="flex flex-col w-fit mx-auto h-full border border-gray-200 rounded-sm p-2">
      <img className="w-60 h-full" src={product?.image} alt="T-shirt" />
      <div className="flex-1">
        <div className="flex items-center justify-between">
          {/* Discount, Watch, Bookmark */}
          <p>Up to {product?.discount} off</p>
          <div className="flex items-center justify-center gap-3">
            {/* <p>Eye icon</p> */}
            <p className="cursor-pointer">
              {product?.bookmarked ? <MdFavorite /> : <MdFavoriteBorder />}
            </p>
          </div>
        </div>
        {/* Product Title */}
        <h2>Product Title</h2>
        {/* Rating */}
        <p>rating 5.0 (455)</p>
        {/* Delivery Info */}
        <div className="flex items-center justify-between">
          <p>Delivery</p>
          <p>Best Price</p>
        </div>
        {/* Price and Cart */}
        <div>
          <p>$1446</p>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
