/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { motion } from "framer-motion";

const Text = () => {
  const constraintsRef = useRef(null);

  return (
    <div>
      <motion.div
        ref={constraintsRef}
        style={{
          width: "100%",
          height: "40vh",
          background: "#000000",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <motion.div
          drag
          dragConstraints={constraintsRef}
          style={{
            width: 100,
            height: 100,
            backgroundColor: "#ffcc00",
            borderRadius: 20,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
          }}
        >
          Drag me 
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Text;
