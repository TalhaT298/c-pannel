import React from "react";
import idea from "../../../assets/idea.gif";
import { Link } from "react-router-dom";
import { PiArrowRightLight } from "react-icons/pi";
const Idea = () => {
  return (
    // <div class="relative inline-block">
    //   <img src={idea} alt="" class="block"></img>
    //   <div class="absolute pb-96 pl-60 transform -translate-x-1/2 -translate-y-1/2  bg-opacity-100 p-4">
    //   Have Any Project Idea
    //   </div>
    // </div>
    <div class="flex flex-col md:flex-row">
      <div class="w-full md:w-3/5 pt-6 lg:pl-20 lg:pt-24 pl-4 pr-4">
        <h1 class="lg:text-4xl text-xl font-bold lg:pb-6 pb-3">
          Have Any Project Idea
        </h1>
        <p class="lg:text-lg text-base">
          Let's discuss your offshore project. We can help you with our skillful
          Global team. <br />
          You can schedule a free consultation.
        </p>
        <button className="btn btn-outline text-xl pl-1 mt-6 w- bg-black text-white border-black border group hover:bg-black hover:text-white">
            Get Started
            <PiArrowRightLight
              size="1.4rem"
              className="text-white group-hover:text-white"
            />
          </button>
      </div>
      <div class="w-full md:w-2/5 lg:pl-20 pl-4 pr-4">
        <img src={idea} alt="Project Idea" class="w-full" />
      </div>
    </div>
  );
};

export default Idea;
