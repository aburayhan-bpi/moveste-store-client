import React, { useEffect } from "react";

import { RiCloseLargeFill } from "react-icons/ri";

const Shop = () => {
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    // pt-24
    <div className="w-full md:max-w-7xl mx-auto px-4 xl:px-0 pt-34 pb-100">
      <div className="grid grid-cols-12 gap-4">
        {/* Sidebar */}
        <aside className="hidden lg:block lg:col-span-3">
          <div className="bg-sky-50 p-4 sticky top-34 max-h-[calc(100vh-6rem)] overflow-y-auto">
            {/* Filter Options*/}
            <div className="h-full">
              <h3 className="text-lg font-semibold mb-2">Filters</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {Array(40)
                  .fill()
                  .map((_, i) => (
                    <>
                      {" "}
                      <li key={i}>
                        <input type="checkbox" />{" "}
                        <span className="ml-1">Brand A</span>
                      </li>
                      <li>
                        <input type="checkbox" />{" "}
                        <span className="ml-1">Brand B</span>
                      </li>
                      <li>
                        <input type="checkbox" />{" "}
                        <span className="ml-1">Brand C</span>
                      </li>
                    </>
                  ))}
              </ul>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="col-span-12 lg:col-span-9 h-fit">
          {/* Top bar */}
          <div className="flex items-center justify-between bg-sky-50 px-4 py-3 mb-3">
            {/* Title */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Joshim 😁</h2>
              <p className="text-xs text-gray-600">87 products</p>
            </div>

            {/* Filer & Sort Container */}
            <div className="flex items-center gap-4 lg:w-70">
              {/* Filter button on mobile */}
              <div className="drawer z-50">
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
                <div className="drawer-side">
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
                    <li>
                      <p>Sidebar Item 1</p>
                    </li>
                    <li>
                      <p>Sidebar Item 2</p>
                    </li>
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
            {/* Replace this with actual product cards */}
            <div className="grid gap-6 items-center justify-center grid-cols-1 md:grid-cols-3 lg:grid-cols-4 box-border h-full w-full">
              {Array(50)
                .fill()
                .map((_, i) => (
                  <div key={i} className="rounded-md flex-grow">
                    <div>
                      <img
                        className="rounded-md"
                        src="https://i.ibb.co.com/Vx6M4w3/image-106696-1602150409.jpg"
                        alt=""
                      />
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
