/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { motion } from "framer-motion";

const Text = () => {
  const constraintsRef = useRef(null);
  const names = ["Innovation", "Drag me 2", "Drag me 3", "Drag me 4", "Drag me 5","Drag me 5"];

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
        {names.map((name, index) => (
          <motion.div
            key={index}
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
              top: `${index * 20 + 20}px`,
              left: `${index * 20 + 20}px`,
            }}
          >
            {name}
          </motion.div>
        ))}

      </motion.div>
    </div>
  );
};

export default Text;
