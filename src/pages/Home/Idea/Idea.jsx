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
    <div className="flex">
      <div className="w-3/5 pt-24 pl-20">
        <h1 className="text-3xl font-bold pb-6">Have Any Project Idea</h1>
        <p className="">
          Lets discuss about your offshore project. We can Help you by our
          skillful Global team. <br />
          You can take a free counciling by taking a schedule
        </p>
        <Link to="">
          <button className="btn btn-outline text-xl pl-1 mt-6 w- bg-black text-white border-black border group">
            Get Started
            <PiArrowRightLight
              size="1.4rem"
              className="text-white group-hover:text-black"
            />
          </button>
        </Link>
      </div>
      <div className="w-2/5 pl-20">
        <img src={idea} alt="" />
      </div>
    </div>
  );
};

export default Idea;
