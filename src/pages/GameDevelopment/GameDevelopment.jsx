/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

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
            <h2 className="text-gray-800 font-extrabold text-2xl mb-4">
            Register by contacting us
            </h2>
            <p className="text-gray-600 mb-4">
              Welcome to Olden Goods! a Open buying and selling platform,
            </p>
            <p className="text-gray-600 mb-8">
              Unlock exclusive deals and personalized shopping. Register now for
              a seamless online shopping experience for all!
            </p>
            <button className="bg-green-500 text-white font-bold py-2 px-4 rounded-full hover:bg-green-600 transition duration-300">
              Register Now
            </button>
          </div>
          <div className="md:w-1/2 flex items-center justify-center">
            <div className="relative">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Sale"
                className="rounded-lg shadow-lg mb-4 md:mb-0 md:mr-4"
              ></img>
              <img
                src="https://via.placeholder.com/150x100"
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
