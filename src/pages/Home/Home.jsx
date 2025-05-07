import Slider from "./Slider";
import CategoryCard from "../../components/common/CategoryCard";
import FeaturedSection from "./FeaturedSection/FeaturedSection";
import { TbTruckDelivery } from "react-icons/tb";
import { CiDeliveryTruck } from "react-icons/ci";
import PolicyHighlightsCard from "../../components/common/PolicyHighlightsCard";

import PolicyHighlights from "./PolicyHighlights/PolicyHighlights";
import { Link } from "react-router";
import FeatureProductBanner from "./FeatureProductBanner/FeatureProductBanner";
import NewlyAddedProducts from "./NewlyAdded/NewlyAddedProducts";
import ScrollAnimation from "scroll-animation-framer-motion";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  // const [loading, setLoading] = useStaste(false);
  const categoryProduct = [
    {
      _id: 1,
      title: "Cream",
      image:
        "https://i.ibb.co/tTXnQXDd/WTH7-YG3-KT9-1-bad62b70-9263-4d1e-95-original-format-webp.webp",
    },
    {
      _id: 2,
      title: "Perfume",
      image: "https://i.ibb.co/6cLWqfbr/Untitled-design-8-32.png",
    },
    {
      _id: 3,
      title: "T-shirt & Polo",
      image: "https://i.ibb.co/sJJJ10vQ/t-shirt-removebg-preview.png",
    },
    {
      _id: 4,
      title: "Socks",
      image: "https://i.ibb.co/WNp5fshX/04-PACK-Men-04-4-removebg-preview.png",
    },
    {
      _id: 5,
      title: "Shirts",
      image: "https://i.ibb.co/JRkHK9g3/long-sleve-shrit.png",
    },
    { _id: 6, title: "Watch", image: "https://i.ibb.co/dJHjYDSZ/watch.png" },
    {
      _id: 7,
      title: "Shoes & Sandals",
      image: "https://i.ibb.co/2Y0d7fHF/shoes.png",
    },
    { _id: 8, title: "Watch", image: "https://i.ibb.co/dJHjYDSZ/watch.png" },
    {
      _id: 9,
      title: "Accessories",
      image: "https://i.ibb.co/G3pbNNbf/accessories.png",
    },
  ];

  return (
    <div className="overflow-hidden">
      <Slider />
      <main className="max-w-7xl mx-auto px-4 xl:px-0">
        {/* Category Section */}
        <div>
          <h2 className="text-2xl font-semibold mt-10 mb-6">
            <span className="text-[#47aaf5ec]">Shop</span> by Category
          </h2>
          {/* <p className="text-gray-600 mb-8">
            Discover the perfect products from our wide range of categories
          </p> */}

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-9 gap-6">
            {categoryProduct.map((product) => (
              <CategoryCard key={product._id} product={product} />
            ))}
          </div>
        </div>
        {/* Featured Products */}
        <FeaturedSection />
        {/* Featured Banners Section */}
        <FeatureProductBanner />
        {/* New Added Products Section */}
        <NewlyAddedProducts />

        {/* Payment & Refund System Highlights Section */}
        {/* <ScrollAnimation direction="down" once={true} delay={0.1}> */}
        <div className="mt-60">
          <PolicyHighlights />
        </div>
        {/* </ScrollAnimation> */}
      </main>
    </div>
  );
};

export default Home;
