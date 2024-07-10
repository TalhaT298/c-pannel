/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { motion } from "framer-motion";

const Text = () => {
  const constraintsRef = useRef(null);
  const names = ["Innovation", "Excellence", "Creativity", "Passion", "Leadership", "Commitment", "Opportunity"];

  // Adjusting positions to match the image layout
  const positions = [
    { top: "50px", left: "100px" },    // Innovation
    { top: "150px", left: "200px" },   // Excellence
    { top: "100px", left: "350px" },   // Creativity
    { top: "50px", left: "1100px" },   // Passion
    { top: "50px", left: "550px" },    // Leadership
    { top: "100px", left: "900px" },   // Commitment
    { top: "150px", left: "750px" }    // Opportunity
  ];

  return (
    <div>
      <motion.div
        ref={constraintsRef}
        style={{
          width: "100%",
          height: "30vh",
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
              height: 40,
              backgroundColor: "#00ACC1",
              borderRadius: 20,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              top: positions[index].top,
              left: positions[index].left,
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
