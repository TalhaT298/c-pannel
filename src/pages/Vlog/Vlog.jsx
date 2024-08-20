/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

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
        <p className="text-center text-white font-bold">Read about our latest product and research announcements</p>
        <div className="h-1 w-10 bg-cyan-600 rounded my-4 flex justify-center items-center mx-auto   hover:animate-ping"></div>
      
      </div>
    </>
  );
};

export default Vlog;
