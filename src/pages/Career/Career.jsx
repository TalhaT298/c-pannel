/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import efad from "../../assets/efad.png";
import sadman from "../../assets/Sadman.webp";
import employee from "../../assets/employee.png";
import { FaLocationDot } from "react-icons/fa6";
import { RiExpandLeftRightLine } from "react-icons/ri";
import { LiaIndustrySolid } from "react-icons/lia";
import { GiGiftOfKnowledge } from "react-icons/gi";
import { IoGameControllerOutline } from "react-icons/io5";
import { IoMdTimer } from "react-icons/io";
import { FaWarehouse } from "react-icons/fa";
import { IoGitCompare } from "react-icons/io5";
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
              <div className="w-[500px]">
                <img src={employee} className="rounded-tr-[80px] rounded-bl-[80px]" alt="" />
              </div>
              <div className="w-30 p-4  flex flex-col gap-y-16">
              <div className="flex justify-start items-start">
              <LiaIndustrySolid className="text-white w-8 h-8"/>
              <p className="text-white text-2xl font-bold pl-4"> IT Development</p>
              </div>
              <div className="flex justify-start items-start">
              <IoMdTimer className="text-white w-8 h-8"/>
              <p className="text-white text-2xl font-bold pl-4">Flexible Work-Hours</p>
              </div>
              <div className="flex justify-start items-start">
              <FaWarehouse className="text-white w-8 h-8"/>
              <p className="text-white text-2xl font-bold pl-4">Revolutionary Culture</p>
              </div>
                </div>
              {/* right side */}
              <div className="w-30 p-4  flex flex-col gap-y-16">
              <div className="flex justify-start items-start">
              <IoGameControllerOutline  className="text-white w-8 h-8"/>
              <p className="text-white text-2xl font-bold pl-4">Game Zone</p>
              </div>
              <div className="flex justify-start items-start">
              <GiGiftOfKnowledge className="text-white w-8 h-8"/>
              <p className="text-white text-2xl font-bold pl-4">Knowledge Sharing</p>
              </div>
              <div className="flex justify-start items-start">
              <IoGitCompare className="text-white w-8 h-8"/>
              <p className="text-white text-2xl font-bold pl-4">Competitive Remuneration</p>
              </div>
                </div>
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
            <div className="bg-white p-6 rounded-lg flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-semibold text-black mb-2">Senior Content Strategist</h2>
                    <div className="text-gray-500 flex items-center mb-2">
                    <FaLocationDot className="h-5 w-5 mr-2 text-cyan-500" />
                        Dhaka, Bangladesh
                    </div>
                    <div className="text-gray-500 flex items-center">
                    <RiExpandLeftRightLine className="h-7 w-5 mr-2 text-cyan-500" />
                        2+ Years Exp.
                    </div>
                </div>
                <Link to="">
                <a  href="#"
                      className="inline-block bg-cyan-500 text-white font-semibold py-2 px-4 rounded hover:bg-white hover:text-cyan-500">
                    Apply Now
                </a>
                </Link>
            </div>
            {/* 2S */}
            <div className="bg-white p-6 my-6 rounded-lg flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-semibold text-black mb-2">Digital Marketing Executive (SEO)</h2>
                    <div className="text-gray-500 flex items-center mb-2">
                    <FaLocationDot className="h-5 w-5 mr-2 text-cyan-500" />
                        Dhaka, Bangladesh
                    </div>
                    <div className="text-gray-500 flex items-center">
                    <RiExpandLeftRightLine className="h-7 w-5 mr-2 text-cyan-500" />
                        2+ Years Exp.
                    </div>
                </div>
                <Link to="">
                <a  href="#"
                      className="inline-block bg-cyan-500 text-white font-semibold py-2 px-4 rounded hover:bg-white hover:text-cyan-500">
                    Apply Now
                </a>
                </Link>
            </div>
            {/* 2E */}
            {/* 3S */}
            <div className="bg-white p-6 my-6 rounded-lg flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-semibold text-black mb-2">Senior React.Js Developer</h2>
                    <div className="text-gray-500 flex items-center mb-2">
                    <FaLocationDot className="h-5 w-5 mr-2 text-cyan-500" />
                        Dhaka, Bangladesh
                    </div>
                    <div className="text-gray-500 flex items-center">
                    <RiExpandLeftRightLine className="h-7 w-5 mr-2 text-cyan-500" />
                        2+ Years Exp.
                    </div>
                </div>
                <Link to="">
                <a  href="#"
                      className="inline-block bg-cyan-500 text-white font-semibold py-2 px-4 rounded hover:bg-white hover:text-cyan-500">
                    Apply Now
                </a>
                </Link>
            </div>
            {/* 3E */}
            {/* 4S */}
            <div className="bg-white p-6 my-6 rounded-lg flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-semibold text-black mb-2">Assistant Manager (Digital Marketing)</h2>
                    <div className="text-gray-500 flex items-center mb-2">
                    <FaLocationDot className="h-5 w-5 mr-2 text-cyan-500" />
                        Dhaka, Bangladesh
                    </div>
                    <div className="text-gray-500 flex items-center">
                    <RiExpandLeftRightLine className="h-7 w-5 mr-2 text-cyan-500" />
                        2+ Years Exp.
                    </div>
                </div>
                <Link to="">
                <a  href="#"
                      className="inline-block bg-cyan-500 text-white font-semibold py-2 px-4 rounded hover:bg-white hover:text-cyan-500">
                    Apply Now
                </a>
                </Link>
            </div>
            {/* 4E */}
            {/* 5S */}
            <div className="bg-white p-6 my-6 rounded-lg flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-semibold text-black mb-2">Full Stack Developer</h2>
                    <div className="text-gray-500 flex items-center mb-2">
                    <FaLocationDot className="h-5 w-5 mr-2 text-cyan-500" />
                        Dhaka, Bangladesh
                    </div>
                    <div className="text-gray-500 flex items-center">
                    <RiExpandLeftRightLine className="h-7 w-5 mr-2 text-cyan-500" />
                        2+ Years Exp.
                    </div>
                </div>
                <Link to="">
                <a  href="#"
                      className="inline-block bg-cyan-500 text-white font-semibold py-2 px-4 rounded hover:bg-white hover:text-cyan-500">
                    Apply Now
                </a>
                </Link>
            </div>
            {/* 55 */}
            {/* 6S */}
            <div className="bg-white p-6 my-6 rounded-lg flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-semibold text-black mb-2">Flutter Developer</h2>
                    <div className="text-gray-500 flex items-center mb-2">
                    <FaLocationDot className="h-5 w-5 mr-2 text-cyan-500" />
                        Dhaka, Bangladesh
                    </div>
                    <div className="text-gray-500 flex items-center">
                    <RiExpandLeftRightLine className="h-7 w-5 mr-2 text-cyan-500" />
                        2+ Years Exp.
                    </div>
                </div>
                <Link to="">
                <a  href="#"
                      className="inline-block bg-cyan-500 text-white font-semibold py-2 px-4 rounded hover:bg-white hover:text-cyan-500">
                    Apply Now
                </a>
                </Link>
            </div>
            {/* 65 */}
            {/* 7S */}
            <div className="bg-white p-6 my-6 rounded-lg flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-semibold text-black mb-2">MERN Stack Developer</h2>
                    <div className="text-gray-500 flex items-center mb-2">
                    <FaLocationDot className="h-5 w-5 mr-2 text-cyan-500" />
                        Dhaka, Bangladesh
                    </div>
                    <div className="text-gray-500 flex items-center">
                    <RiExpandLeftRightLine className="h-7 w-5 mr-2 text-cyan-500" />
                        2+ Years Exp.
                    </div>
                </div>
                <Link to="">
                <a  href="#"
                      className="inline-block bg-cyan-500 text-white font-semibold py-2 px-4 rounded hover:bg-white hover:text-cyan-500">
                    Apply Now
                </a>
                </Link>
            </div>
            {/* 7E */}
        </div>
    </div>
        {/* 3rd phase end*/}
      </div>
    </>
  );
};

export default Career;
