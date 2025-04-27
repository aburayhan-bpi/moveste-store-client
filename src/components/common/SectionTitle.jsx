import React from "react";

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center space-y-1 py-10">
      <p className="text-4xl font-bold">{title}</p>
      <p className="text-md font-normal">{subtitle}</p>
    </div>
  );
};

export default SectionTitle;
