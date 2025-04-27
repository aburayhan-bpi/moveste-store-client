import React from "react";
import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();

  function goHome() {
    navigate("/");
  }

  return (
    <div>
      <h2>404 | Not Found</h2>
      <button onClick={goHome}>Back to home</button>
    </div>
  );
};

export default NotFound;
