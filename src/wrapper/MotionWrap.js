import React from "react";
import { motion } from "framer-motion";
const MotionWrap = (Component) =>
  function HOC() {
    return (
      <>
        <motion.div
          style={{ width: "100%" }}
          initial={{ opacity: 0, y: 300 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, when: "beforeChildren" }}
        >
          <Component />
        </motion.div>
      </>
    );
  };
export default MotionWrap;
