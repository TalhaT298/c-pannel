/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import background from "../../assets/back.png";
import tal from "../../assets/tal.png";
const About = () => {
  return (
    <>
      <Link to="/about"></Link>
      {/* 1st phase done */}
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
      {/* 1st phase done finish*/}
      {/* 2nd phase start */}
      <div className="flex py-16 px-8">
        <div className="w-3/5 font-bold text-xl space-y-4 pt-8">
        <h1 className="text-4xl text-cyan-600 pb-4">Cutting-Edge Solutions and Expertise</h1>
          <p>⚪ Innovative Solutions, Unmatched Quality</p>
          <p>⚪ Expert Developers, Exceptional Results</p>
          <p>⚪ Agile Strategies, Seamless Execution</p>
          <p>⚪ Client-Centric Approach, Unwavering Support</p>
          <p>⚪ Timely Delivery, Guaranteed Satisfaction</p>
          <p>⚪ Cutting-Edge Technology, Future-Proof Solutions</p>
          <p>⚪ Collaborative Partnership, Shared Success</p>
          <p>⚪ Proven Expertise, Trusted Excellence</p>
        </div>
        <div className="w-2/5">
          <img
            src={tal}
            className="rounded-tr-[80px] rounded-bl-[80px] shadow-md"
            alt=""
          />
        </div>
      </div>
      {/* 2nd phase finish */}
    </>
  );
};

export default About;
