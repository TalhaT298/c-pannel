/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import efad from "../../assets/efad.png";
import sadman from "../../assets/Sadman.webp";
import { FaLocationDot } from "react-icons/fa6";
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
          <p className="flex justify-center items-center mb-4">
            OceanCapp is a top-tier IT company that offers premium solutions
            using the latest technology stacks.
          </p>
          <div className="h-1 w-80 bg-cyan-500 rounded flex justify-center items-center mx-auto my-auto hover:animate-ping"></div>
        </div>
        <div className="flex items-center justify-center">
          <div className="container mx-auto px-4 py-8">
            <div className="flex items-center justify-between w-full">
              <div className="w-40 p-4 bg-blue-200">Left Side (40%)</div>
              <div className="w-30 p-4 bg-green-200">Middle Side (30%)</div>
              <div className="w-30 p-4 bg-red-200">Right Side (30%)</div>
            </div>
          </div>
        </div>

        {/* 2nd phase end */}
        {/* 3rd phase start*/}
        <div className="container mx-auto p-6">
        <div className="shadow-md rounded-lg p-8">
            <h1 className="text-4xl text-cyan-500 font-bold mb-4">Open Position</h1>
            <p className="text-white mb-8">
            Don't let a lack of personnel hinder your progress. Enhance your team's capabilities and meet your business goals through superior IT Staff Augmentation.
            </p>
            <div className="bg-purple-50 p-6 rounded-lg flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Senior Content Strategist</h2>
                    <div className="text-gray-500 flex items-center mb-2">
                    <FaLocationDot className="h-5 w-5 mr-2 text-cyan-500" />
                        Dhaka, Bangladesh
                    </div>
                    <div className="text-gray-500 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v1H2V5zm2 2h12v6a2 2 0 01-2 2H6a2 2 0 01-2-2V7zm3 5a1 1 0 112 0 1 1 0 01-2 0zm3 0a1 1 0 112 0 1 1 0 01-2 0zm3 0a1 1 0 112 0 1 1 0 01-2 0z" clip-rule="evenodd" />
                        </svg>
                        2+ Years Exp.
                    </div>
                </div>
                <a  href="#"
                      className="inline-block bg-cyan-500 text-white font-semibold py-2 px-4 rounded hover:bg-white hover:text-cyan-500">
                    Apply Now
                </a>
            </div>
        </div>
    </div>
        {/* 3rd phase end*/}
      </div>
    </>
  );
};

export default Career;
