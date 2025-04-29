import React from "react";

const PolicyHighlightsCard = ({ icon, title, subtitle }) => {
  return (
    <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center gap-3 p-3">
      <div className="flex-shrink-0">
        <img
          src={icon}
          alt={title}
          draggable="false"
          onContextMenu={(e) => e.preventDefault()}
          className="w-12 h-12 object-contain"
        />
      </div>
      <div className="text-center sm:text-left lg:text-center xl:text-left">
        <p className="font-semibold text-sm md:text-base">{title}</p>
        <p className="text-gray-400 text-xs md:text-sm font-light">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default PolicyHighlightsCard;
