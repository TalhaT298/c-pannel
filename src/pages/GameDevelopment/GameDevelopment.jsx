/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { PiArrowRightLight } from "react-icons/pi";
import word1 from "../../assets/word22.png"
import word2 from "../../assets/word11.png"
const GameDevelopment = () => {
  return (
    <>
      <Link to="/gameDevelopment"></Link>
      <div>
        {/* ---------------------------------1st phase ----------------------------*/}
        <div className="flex flex-col md:flex-row items-center justify-between p-8 shadow-md rounded-lg">
          <div className="text-center md:text-left md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-4xl bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-800 text-transparent bg-clip-text uppercase pt-4 font-bold font-serif">
              WordPress Development
            </h3>
            <h2 className="text-white font-extrabold text-2xl mb-4">
              Register by contacting us
            </h2>
            <p className="text-white mb-8">
              Oceancapp's WordPress services are unmatched in their ability to
              create customized solutions that cater specifically to our
              clients' needs. We specialize in developing bespoke WordPress
              themes and plugins, tailored to enhance functionality and meet
              unique business requirements effectively. Our team excels in
              providing comprehensive support, from initial design and
              development to ongoing maintenance and updates, ensuring seamless
              integration and optimal performance.We prioritize user-friendly
              interfaces and robust security measures.
            </p>
            <Link to="">
              <button className="flex items-center gap-4 px-8 py-3 bg-gradient-to-t from-cyan-600 to-black text-white text-lg font-medium rounded-lg">
                Learn More
                <PiArrowRightLight
                  size="1.1rem"
                  className="text-white group-hover:text-black"
                />
              </button>
            </Link>
          </div>
          <div className="md:w-1/2 flex items-center justify-center">
            <div className="relative">
              <img
                src={word1}
                alt="Sale"
                className="rounded-lg shadow-lg mb-4 md:mb-0 md:mr-4"
              ></img>
              <img
                src={word2}
                alt="Open Shop"
                className="rounded-lg shadow-lg absolute bottom-0 right-0 transform translate-x-4 translate-y-4"
              ></img>
            </div>
          </div>
        </div>
        {/* ---------------------------------1st phase finish----------------------------*/}
      </div>
    </>
  );
};

export default GameDevelopment;
