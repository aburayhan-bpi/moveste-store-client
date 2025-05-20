// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router";

const ScrollToTop = () => {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (navigationType === "PUSH" || navigationType === "REPLACE") {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
};

export default ScrollToTop;
