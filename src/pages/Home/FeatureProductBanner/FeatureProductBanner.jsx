import React from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router";

const FeatureProductBanner = () => {
  return (
    <div className="grid grid-cols-12 gap-4 mt-14">
      {[
        {
          src: "https://i.ibb.co/3mLYTCYd/0736115-Big-Web-670-250-480.jpg",
          cols: "col-span-12 md:col-span-6 rounded-lg",
        },
        {
          src: "https://i.ibb.co/JwnHW7tg/0743170-Toper-Weekly-banner-web-480.jpg",
          cols: "col-span-12 md:col-span-6 rounded-lg",
        },
        {
          src: "https://i.ibb.co/93GZgwTq/0727485-Floure-web-banner-480.jpg",
          cols: "col-span-12 md:col-span-4 rounded-lg",
        },
        {
          src: "https://i.ibb.co/4ZWWjhnT/0736117-Spices-Web-banner-480.jpg",
          cols: "col-span-12 md:col-span-4 rounded-lg",
        },
        {
          src: "https://i.ibb.co/BKBrrC79/0736119-Frozen-item-web-banner-480.jpg",
          cols: "col-span-12 md:col-span-4 rounded-lg",
        },
      ].map((img, i) => (
        <div key={i} className={img.cols}>
          <Link className="block h-full z-20 no-underline">
            <Fade delay={100} triggerOnce='true'>
              <div className="flex items-center justify-center rounded-lg overflow-hidden h-full">
                <img className="w-full rounded-lg" src={img.src} alt="" />
              </div>
            </Fade>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default FeatureProductBanner;
