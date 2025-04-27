import React from "react";
import { Outlet } from "react-router"; // Small fix: react-router-dom
import Navbar from "../components/common/Navbar/Navbar";
import Footer from "../components/common/Footer/Footer";
import { motion, useScroll } from "framer-motion"; // Correct import!

const RootLayout = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div>
      {/* Scroll Progress Bar */}
      <motion.div
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          transformOrigin: "left",
          backgroundColor: "#47aaf5ec",
          zIndex: 50,
        }}
      />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <Outlet />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default RootLayout;
