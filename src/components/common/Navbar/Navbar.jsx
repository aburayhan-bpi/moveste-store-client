import React, { useState } from "react";
import { CiLogin, CiShop, CiShoppingCart } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { RiCloseLargeLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from "react-router";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to handle menu toggle
  const [searchText, setSearchText] = useState("");

  const links = (
    <>
      <li className="list-none">
        <NavLink
          to="/"
          className="flex items-center gap-1 text-lg hover:text-green-700 transition-colors duration-300"
        >
          <IoHomeOutline />
          Home
        </NavLink>
      </li>
      <li className="list-none">
        <NavLink
          to="/shop"
          className="flex items-center gap-1 text-lg hover:text-green-700 transition-colors duration-300"
        >
          <CiShop />
          Shop
        </NavLink>
      </li>
      <li className="list-none">
        <NavLink
          to="/cart"
          className="flex items-center gap-1 text-lg hover:text-green-700 transition-colors duration-300"
        >
          <CiShoppingCart />
          Cart
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-sky-50">
      <div className="flex items-center justify-between py-4 px-4 lg:px-6 w-full mx-auto">
        {/* Left - Logo */}
        <div className="flex flex-1 items-center gap-1">
          <img
            className="min-w-32 max-w-32"
            src="./images/moveste-transp.png"
            alt="MoVeste_Store"
          />
        </div>

        {/* Middle - Links (Visible on Large Screens) */}
        <div className="hidden lg:flex flex-1 items-center gap-10">{links}</div>

        {/* Right - Search and Login */}
        <div className="flex items-center gap-6 flex-1 justify-end">
          {/* Search */}
          <div className="flex items-center w-full max-w-2xl relative">
            <input
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400 transition duration-300 shadow-sm"
              type="text"
              placeholder="Search items here..."
            />
            {searchText && (
              <RiCloseLargeLine
                onClick={() => setSearchText("")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 hover:cursor-pointer text-gray-500"
              />
            )}
          </div>

          {/* Login */}
          <li className="hidden lg:block list-none">
            <NavLink
              to="/auth/login"
              className="flex items-center gap-1 text-lg hover:text-green-700 transition-colors duration-300"
            >
              <CiLogin />
              Login
            </NavLink>
          </li>
          {/* Hamburger Menu for Small Screens */}
          <div className="lg:hidden flex items-center gap-4">
            {/* Hamburger Icon */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl focus:outline-none transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] transform active:scale-95"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? (
                <RiCloseLargeLine className="text-gray-700 transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]" />
              ) : (
                <RxHamburgerMenu className="text-gray-700 transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Toggle visibility based on `menuOpen` state */}
      <div
        className={`lg:hidden fixed  left-0 w-full h-full ${
          menuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        } transition-all duration-300 ease-in-out bg-white px-4 py-4 z-10`}
      >
        <ul className="space-y-4">
          {links}
          <div className="flex flex-col gap-2">
            {/* Etar dorkar nai apatoto */}
            {/* <div className="flex items-center w-full max-w-2xl relative">
              <input
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400 transition duration-300 shadow-sm"
                type="text"
                placeholder="Search items here..."
              />
              {searchText && (
                <RiCloseLargeLine
                  onClick={() => setSearchText("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 hover:cursor-pointer text-gray-500"
                />
              )}
            </div> */}
            <NavLink
              to="/auth/login"
              className="w-fit flex items-center gap-1 text-lg hover:text-green-700 transition-colors duration-300"
            >
              <CiLogin />
              Login
            </NavLink>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
