/* eslint-disable no-unused-vars */
import React from "react";
import efficient from "../../../assets/Efficient.png";

const Delivered = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 flex justify-center md:justify-start">
        <img src={efficient} alt="" className="w-full md:w-auto" />
      </div>
      {/* right div */}
      <div className="w-full md:w-1/2 flex justify-center items-center mt-4 md:mt-0 md:mr-40">
      
        <div className="w-full text-white p-4">
        {/* <h1 className="text-2xl font-bold">delivered most services</h1> */}
          <ul>
            <li className="flex items-center justify-center md:justify-end text-lg mb-2">
              <span className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></span>
              Play-to-earn: 53.8%
            </li>
            <li className="flex items-center justify-center md:justify-end text-lg mb-2">
              <span className="w-3 h-3 bg-green-400 rounded-full mr-2"></span>
              Presale: 23.7%
            </li>
            <li className="flex items-center justify-center md:justify-end text-lg mb-2">
              <span className="w-3 h-3 bg-purple-400 rounded-full mr-2"></span>
              Team: 10%
            </li>
            <li className="flex items-center justify-center md:justify-end text-lg mb-2">
              <span className="w-3 h-3 bg-pink-400 rounded-full mr-2"></span>
              Marketing & Partnership: 8%
            </li>
            <li className="flex items-center justify-center md:justify-end text-lg mb-2">
              <span className="w-3 h-3 bg-blue-400 rounded-full mr-2"></span>
              Liquidity Pools: 2.5%
            </li>
            <li className="flex items-center justify-center md:justify-end text-lg">
              <span className="w-3 h-3 bg-red-400 rounded-full mr-2"></span>
              Airdrop: 2%
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Delivered;
