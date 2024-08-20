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
      {/* -----------------1st phase start -------------------------*/}
      <div className="flex bg-gray-900 p-6 rounded-lg shadow-lg">
   
  <div className="w-1/2">
    <img src="path-to-your-image.jpg" alt="Grok Image" className="w-full h-full object-cover rounded-lg"></img>
  </div>

   
  <div className="w-1/2 pl-6 text-gray-300">
     
    <p className="text-sm text-gray-400">August 13, 2024</p>
    
   
    <h2 className="text-2xl font-bold text-white mt-2">Grok-2 Beta Release</h2>
    
     
    <p className="text-gray-400 mt-4">
      Grok-2 is our frontier language model with state-of-the-art reasoning capabilities. This release includes two members of the Grok family: Grok-2 and Grok-2 mini. Both models are now being released to Grok users on the X platform.
    </p>
  </div>

   
  <div className="absolute top-4 right-4">
    <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-white">
        {/* <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /> */}
      </svg>
    </button>
  </div>
</div>

      {/* -----------------1st phase finish -------------------------*/}
      </div>
    </>
  );
};

export default Vlog;
