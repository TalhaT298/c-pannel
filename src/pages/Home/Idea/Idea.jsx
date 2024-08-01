/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import idea from "../../../assets/idea.png";
import { Link } from "react-router-dom";
import { PiArrowRightLight } from "react-icons/pi";
const Idea = () => {
  return (
    
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-3/5 pt-6 lg:pl-20 lg:pt-24 pl-4 pr-4">
        <h1 className="lg:text-4xl text-xl font-bold lg:pb-6 pb-3">
          Have Any Project Idea
        </h1>
        <p className="lg:text-lg text-base">
          Let's discuss your offshore project. We can help you with our skillful
          Global team. <br />
          You can schedule a free consultation.
        </p>
        <Link to="https://www.facebook.com/oceancapp">
        <button className=" text-xl pl-1 mt-6 w- bg-black text-white border-black border group hover:bg-black hover:text-white">
          
          <a
            href="#"
            className="flex items-center gap-4 px-8 py-3 bg-gradient-to-b from-cyan-600 to-black text-white text-lg font-medium rounded-lg"
          >
             Get Started &rarr;
          </a>
        </button>
        
        </Link>
      </div>
      <div className="w-full md:w-2/5 lg:pl-20 pl-4 pr-4">
        <img src={idea} alt="Project Idea" className="w-full" />
      </div>
    </div>
  );
};

export default Idea;
