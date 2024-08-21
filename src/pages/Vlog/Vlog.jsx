/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import gr from "../../../src/assets/gr.png";
import { FaArrowRight } from "react-icons/fa";
const Vlog = () => {
  return (
    <>
      <Link to="/vlog"></Link>
      <div>
        <div className="mx-auto md:w-8/12 mb-4 mt-8 flex justify-center items-center ">
          <h3 className="text-2xl sm:text-3xl md:text-4xl bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-800 text-transparent bg-clip-text uppercase pt-4 font-bold font-serif">
            Blog
          </h3>
        </div>
        <p className="text-center text-white font-bold">
          Read about our latest product and research announcements
        </p>
        <div className="h-1 w-10 bg-cyan-600 rounded my-4 flex justify-center items-center mx-auto   hover:animate-ping"></div>
        {/* -----------------1st phase start -------------------------*/}
        <div className="relative bg-gradient-to-r from-cyan-800 p-6 rounded-lg shadow-lg">
          <div className="absolute top-4 right-4">
            <button className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600">
              <FaArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="flex">
            <div className="w-1/2">
              <img
                src={gr}
                alt="Grok Image"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <div className="w-1/2 pl-6 text-gray-300 mt-96">
              <p className="text-sm text-gray-200">August 13, 2024</p>

              <h2 className="text-3xl font-bold text-white mt-2">
                Grok-2 Beta Release
              </h2>

              <p className="text-gray-200 mt-4">
                Grok-2 is our frontier language model with state-of-the-art
                reasoning capabilities. This release includes two members of the
                Grok family: Grok-2 and Grok-2 mini. Both models are now being
                released to Grok users on the X platform.
              </p>
            </div>
          </div>
        </div>

        {/* -----------------1st phase finish -------------------------*/}
      </div>
    </>
  );
};

export default Vlog;
