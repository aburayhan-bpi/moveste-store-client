import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/common/Navbar/Navbar";
import Footer from "../components/common/Footer/Footer";
const RootLayout = () => {
  return (
    <div>
      {/* Navbar Section */}
      <Navbar />
      {/* Outlet */}
      <Outlet />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default RootLayout;
