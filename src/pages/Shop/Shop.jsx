import { useEffect } from "react";

import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { RiCloseLargeFill } from "react-icons/ri";
import Sidebar from "./Sidebar";

const Shop = () => {
  const [products, setProducts] = useState([]);
  //   const [minPrice, setMinPrice] = useState(0);
  //   const [maxPrice, setMaxPrice] = useState(0);
  //   const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  //   const [category, setCategory] = useState([]);
  //   const [color, setColor] = useState([]);
  //   const [size, setSize] = useState([]);
  //   const [brand, setBrand] = useState([]);
  const [filters, setFilters] = useState({
    priceRange: { min: "", max: "" },
    category: [],
    color: [],
    size: [],
    brand: [],
  });

  const updateFilter = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const updatePriceRange = (minOrMax, value) => {
    setFilters((prev) => ({
      ...prev,
      priceRange: {
        ...prev.priceRange,
        [minOrMax]: value,
      },
    }));
  };
  console.log(filters);

  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  //   Truncate long text
  const truncString = (string, limit) => {
    if (string.length <= limit) return string;
    return string.slice(0, limit) + "...";
  };

  //   console.log(priceRange);
  // console.log(priceRange);

  return (
    // pt-24
    <div className="w-full md:max-w-7xl mx-auto px-4 xl:px-0 pt-34 pb-100">
      <div className="grid grid-cols-12 gap-4">
        {/* Sidebar */}
        <aside className="hidden lg:block lg:col-span-3">
          <div
            className="bg-sky-50 p-4 sticky top-24 h-[calc(100vh-8rem)] overflow-y-auto"
            style={{ scrollbarGutter: "stable" }}
          >
            {/* Filter Options */}
            {/* <Sidebar priceRange={priceRange} setPriceRange={setPriceRange} /> */}
            <Sidebar
              filters={filters}
              updateFilter={updateFilter}
              updatePriceRange={updatePriceRange}
            />
          </div>
        </aside>

        {/* Main content */}
        <main className="col-span-12 lg:col-span-9 h-fit">
          {/* Top bar */}
          <div className="flex items-center justify-between bg-sky-50 px-4 py-3 mb-3">
            {/* Title */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                Products on board
              </h2>
              <p className="text-xs text-gray-600">87 products</p>
            </div>

            {/* Filer & Sort Container */}
            <div className="flex items-center gap-4 lg:w-70">
              {/* Filter button on mobile */}
              <div className="drawer">
                <input
                  id="my-drawer"
                  type="checkbox"
                  className="drawer-toggle"
                />
                <div className="drawer-content w-fit">
                  {/* Page content here */}
                  <label htmlFor="my-drawer" className="drawer-button w-fit">
                    <div className="flex lg:hidden items-center gap-1 cursor-pointer text-black">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                        />
                      </svg>
                      <span>Filter</span>
                    </div>
                  </label>
                </div>
                <div className="drawer-side z-60">
                  <label
                    htmlFor="my-drawer"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                  ></label>
                  <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                    {/* Drawer close container */}
                    <div
                      onClick={() => {
                        const drawerToggle =
                          document.getElementById("my-drawer");
                        if (drawerToggle) {
                          drawerToggle.checked = false;
                        }
                      }}
                      className="flex items-end justify-end mb-6 "
                    >
                      {/* Drawer Close Icon */}
                      <RiCloseLargeFill className="text-lg transition-transform duration-300 ease-in-out hover:rotate-180 hover:scale-125 cursor-pointer" />
                    </div>
                    {/* Sidebar content here */}
                    {/* <Sidebar
                      priceRange={priceRange}
                      setPriceRange={setPriceRange}
                      category={category}
                      setCategory={setCategory}
                      color={color}
                      setColor={setColor}
                      size={size}
                      setSize={setSize}
                      brand={brand}
                      setBrand={setBrand}
                    /> */}
                    <Sidebar
                      filters={filters}
                      updateFilter={updateFilter}
                      updatePriceRange={updatePriceRange}
                    />
                  </ul>
                </div>
              </div>
              {/* Sort button */}
              <select
                defaultValue=""
                className="select select-sm w-full select-bordered border-gray-300 focus:outline-none text-sm"
              >
                <option value="">Sort by</option>
                <option value="latestArrival">Latest Arrival</option>
                <option value="lowToHigh">Price: Low to High</option>
                <option value="highToLow">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Product grid area */}
          <div className="bg-sky-50 p-4 h-full">
            {/* Edit or Modify this card with actual data ---!important */}
            <div className="grid gap-4 items-center justify-center grid-cols-1 md:grid-cols-3 xl:grid-cols-4 box-border h-full w-full">
              {Array(20)
                .fill()
                .map((_, i) => (
                  <div
                    key={i}
                    className="relative w-full h-full bg-white p-3 rounded-lg"
                  >
                    <img
                      className=" rounded-lg"
                      src="https://i.ibb.co/sJJJ10vQ/t-shirt-removebg-preview.png"
                      alt=""
                    />
                    <div className="absolute top-0 left-0 bg-yellow-500 text-white text-sm px-2 rounded uppercase">
                      15% off
                    </div>
                    <div className="flex flex-col flex-1">
                      <h2 className="font-semibold hover:underline decoration-blue-200 transition-all duration-300 hover:cursor-pointer">
                        {truncString(
                          "Assertively pursue business schemas...",
                          100
                        )}
                      </h2>
                      <p>$100</p>
                      <div className="flex items-center justify-between">
                        {/* Rating */}
                        <div className="flex items-center gap-x-0.5">
                          {Array.from({ length: 5 }, (_, index) => (
                            <FaStar
                              key={index}
                              className={`${
                                3.5 > index
                                  ? "text-yellow-500"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                          <div className="flex gap-1 ml-2 text-xs text-gray-600">
                            <span className="text-gray-400">(734)</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <MdFavoriteBorder className="text-lg text-sky-600 hover:text-sky-500 hover:cursor-pointer transition-colors duration-300" />
                          <IoCartOutline className="text-lg text-sky-600 hover:text-sky-500 hover:cursor-pointer transition-colors duration-300" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Shop;
