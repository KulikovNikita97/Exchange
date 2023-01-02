import React from "react";
import image from "./loading.gif";

const Preloader = () => {
  return (
    <div>
      <img src={image} alt="preloader" />
    </div>
  );
};

export default Preloader;
