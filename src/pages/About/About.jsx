/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import background from "../../assets/back.png";

const About = () => {
  return (
    <>
      <Link to="about">
        <div className="relative w-full h-full">
          <img
            src={background}
            alt="background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute bottom-0 left-0 w-full p-4 text-white text-3xl text-center">
            Your text goes here
          </div>
        </div>
      </Link>
    </>
  );
};

export default About;
