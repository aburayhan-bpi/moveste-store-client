import React, { useEffect, useState } from "react";
import Slider from "./Slider";
import CategoryCard from "../../components/common/CategoryCard";
import SectionTitle from "../../components/common/SectionTitle";
import ProductCard from "../../components/common/ProductCard";
const Home = () => {
  const [products, setProducts] = useState(null);
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

  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="mb-60">
      <Slider />
      <main className="max-w-[95%] mx-auto">
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
        <div>
          {/* <SectionTitle
            title={"Featured Products"}
            subtitle={"Discover Our Best-Selling and Most Loved Items"}
          /> */}
          <h2 className="text-4xl font-semibold text-center pt-10">
            <span className="text-[#47aaf5ec]">Featured</span> Products
          </h2>
          <p className="text-center mb-10">
            Discover Our Best-Selling and Most Loved Items
          </p>
          {/* Product Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {products?.map((product) => (
              <ProductCard key={product?._id} product={product} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
