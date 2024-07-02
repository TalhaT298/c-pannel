/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import efad from "../../assets/efad.png";
import sadman from "../../assets/Sadman.webp";
const Career = () => {
  return (
    <>
      <Link to="/career"></Link>
      <div>
        {/* 1st phase */}
        <div>
          <div className="flex items-center justify-center">
            <div className="container mx-auto px-4 py-8 flex items-center justify-center">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="w-full md:w-1/4 p-4">
                  <img
                    className="rounded-tr-[80px] rounded-bl-[80px] shadow-md"
                    src={efad}
                    alt="Person 1"
                  />
                </div>
                <div className="w-full md:w-1/2 flex justify-center items-center p-4">
                  <div className="text-center">
                    <h1 className="text-5xl font-bold mb-4">
                      Be a Part of The Fastest Growing Talented Team
                    </h1>
                    <p className="text-white mb-6">
                      Join our team as a software engineer and experience a
                      dynamic work environment with opportunities for growth. Be
                      part of a passionate and cohesive team delivering
                      innovative software solutions.
                    </p>
                    <a
                      href="#"
                      className="inline-block bg-cyan-500 text-white font-semibold py-2 px-4 rounded hover:bg-white hover:text-cyan-500"
                    >
                      Explore Job Openings &rarr;
                    </a>
                  </div>
                </div>
                <div className="w-full md:w-1/4 p-4">
                  <img
                    className="rounded-tl-[80px] rounded-br-[80px] shadow-md"
                    src={sadman}
                    alt="Person 2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 1st phase enddddddd*/}
        {/* 2nd phase start */}
        <div>
        <div className="mx-auto md:w-8/12 mb-2 mt-16 flex justify-center items-center ">
        {/* <p className='text-yellow-600'>----{subHeading}--</p */}
        <h3 className="text-4xl text-cyan-500 uppercase font-bold font-serif">
          Why Join US
        </h3>
      </div>
      <p className="flex justify-center items-center mb-4">OceanCapp is a top-tier IT company that offers premium solutions using the latest technology stacks.</p>
      <div className="h-1 w-80 bg-cyan-500 rounded flex justify-center items-center mx-auto my-auto hover:animate-ping"></div>
        </div>
        {/* 2nd phase end */}
      </div>
    </>
  );
};

export default Career;
