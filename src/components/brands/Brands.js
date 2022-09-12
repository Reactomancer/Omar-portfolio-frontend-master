import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import "./Brands.scss";
const brandsArray = [images.upwork, images.ejada, images.callibri2];
const Brands = () => {
  return (
    <div className="app__brands">
      {brandsArray.map((brand, idx) => (
        <motion.img
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          key={idx}
          src={brand}
          alt="brand"
        />
      ))}
    </div>
  );
};

export default Brands;
