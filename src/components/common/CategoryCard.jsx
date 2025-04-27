import React from "react";

const CategoryCard = ({ product = {} }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border border-gray-200 hover:shadow cursor-pointer transition-all duration-300 ease-in-out">
        <img
          className="w-full h-full object-contain p-2 hover:scale-110 transition-transform duration-300"
          src={product?.image}
          alt={product?.title}
        />
      </div>
      <p className="mt-2 text-sm md:text-base text-center font-medium">
        {product?.title}
      </p>
    </div>
  );
};

export default CategoryCard;
