import React, { useEffect, useRef } from "react";
import { Outlet } from "react-router";
import Navbar from "../components/common/Navbar/Navbar";
import Footer from "../components/common/Footer/Footer";
import { motion, useScroll } from "framer-motion";
import { IoIosArrowUp } from "react-icons/io";

const RootLayout = () => {
  const { scrollYProgress } = useScroll();
  const topButtonRef = useRef(null);

  useEffect(() => {
    const scrollFunction = () => {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        topButtonRef.current.style.display = "block";
      } else {
        topButtonRef.current.style.display = "none";
      }
    };

    window.addEventListener("scroll", scrollFunction);
    return () => window.removeEventListener("scroll", scrollFunction);
  }, []);

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Scroll Progress Bar */}
      <motion.div
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          transformOrigin: "left",
          backgroundColor: "#47aaf5ec",
          zIndex: 50,
        }}
      />

      <Navbar />

      <div className="flex-grow">
        <Outlet />
      </div>

      <Footer />

      {/* Back to Top Button */}
      <button
        ref={topButtonRef}
        onClick={backToTop}
        className="bottom-10 right-5 bg-sky-700 aspect-square fixed z-10 cursor-pointer hidden"
      >
        <IoIosArrowUp className="text-white text-3xl" />
      </button>
    </div>
  );
};

export default RootLayout;
