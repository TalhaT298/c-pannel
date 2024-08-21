/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import gr from "../../../src/assets/gr.png";
import gh from "../../../src/assets/gh.png";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";
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
        <p className="text-center text-white font-bold">
          Read about our latest product and research announcements
        </p>
        <div className="h-1 w-10 bg-cyan-600 rounded my-4 flex justify-center items-center mx-auto   hover:animate-ping"></div>
        {/* -----------------1st phase start -------------------------*/}
        <div className="hidden lg:block md:block">
          <div className="flex items-center justify-center min-h-screen ">
            <div className="relative bg-gradient-to-r from-cyan-950 p-6 rounded-lg shadow-lg w-4/5">
              <div className="absolute top-4 right-4">
                <button className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600">
                  <FaArrowRight className="w-5 h-5" />
                </button>
              </div>

              <div className="flex">
                <div className="w-1/2">
                  <img
                    src={gr}
                    alt="Grok Image"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                <div className="w-1/2 pl-6 text-gray-300 mt-96">
                  <p className="text-sm text-gray-200">August 13, 2024</p>

                  <h2 className="text-3xl font-bold text-white mt-2">
                    Grok-2 Beta Release
                  </h2>

                  <p className="text-gray-200 mt-4">
                    Grok-2 is our frontier language model with state-of-the-art
                    reasoning capabilities. This release includes two members of
                    the Grok family: Grok-2 and Grok-2 mini. Both models are now
                    being released to Grok users on the X platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* -----------------1st phase finish -------------------------*/}
        {/* 1st phase mobile------------------- */}
        <div className="lg:hidden md:hidden block">
          <div className="flex items-center justify-center py-6">
            <div className="relative bg-gradient-to-r from-cyan-950 p-6 rounded-lg shadow-lg w-full max-w-4xl">
              <div className="absolute top-4 right-4">
                <button className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600">
                  <FaArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
                  <img
                    src={gr}
                    alt="Grok Image"
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>

                <div className="w-full lg:w-1/2 lg:pl-6 text-gray-300">
                  <p className="text-sm text-gray-200">August 13, 2024</p>

                  <h2 className="text-2xl lg:text-3xl font-bold text-white mt-2">
                    Grok-2 Beta Release
                  </h2>

                  <p className="text-gray-200 mt-4">
                    Grok-2 is our frontier language model with state-of-the-art
                    reasoning capabilities. This release includes two members of
                    the Grok family: Grok-2 and Grok-2 mini. Both models are now
                    being released to Grok users on the X platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 1st phase mobile               end ------------------- */}
        {/* 2nd phase start--------------------------- */}
        <div className="w-full h-[0.4px] bg-white"></div>
        <div className="bg-black text-white p-8">
          <h2 className="text-3xl mb-6">All blog posts</h2>
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-6 mx-auto">
              <div className="flex flex-wrap -m-4">
                <div className="xl:w-1/4 md:w-1/2 p-4">
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <img
                      className="h-40 rounded w-full object-cover object-center mb-6"
                      src="https://dummyimage.com/720x400"
                      alt="content"
                    ></img>
                    
                    <div className="flex">
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                      Chichen 
                    </h2>
                    <MdOutlineArrowOutward className=" w-6 h-6"/>
                    </div>
                    <p className="leading-relaxed text-base">
                      Fingerstache flexitarian street art 8-bit waistcoat.
                      Distillery hexagon disrupt edison bulbche.
                    </p>
                  </div>
                </div>
                <div className="xl:w-1/4 md:w-1/2 p-4">
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <img
                      className="h-40 rounded w-full object-cover object-center mb-6"
                      src="https://dummyimage.com/721x401"
                      alt="content"
                    ></img>
                    
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                      Colosseum Roma
                    </h2>
                    <p className="leading-relaxed text-base">
                      Fingerstache flexitarian street art 8-bit waistcoat.
                      Distillery hexagon disrupt edison bulbche.
                    </p>
                  </div>
                </div>
                <div className="xl:w-1/4 md:w-1/2 p-4">
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <img
                      className="h-40 rounded w-full object-cover object-center mb-6"
                      src="https://dummyimage.com/722x402"
                      alt="content"
                    ></img>
                    
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                      Great Pyramid of Giza
                    </h2>
                    <p className="leading-relaxed text-base">
                      Fingerstache flexitarian street art 8-bit waistcoat.
                      Distillery hexagon disrupt edison bulbche.
                    </p>
                  </div>
                </div>
                <div className="xl:w-1/4 md:w-1/2 p-4">
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <img
                      className="h-40 rounded w-full object-cover object-center mb-6"
                      src="https://dummyimage.com/723x403"
                      alt="content"
                    ></img>
                    
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                      San Francisco
                    </h2>
                    <p className="leading-relaxed text-base">
                      Fingerstache flexitarian street art 8-bit waistcoat.
                      Distillery hexagon disrupt edison bulbche.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* 2nd phase end-------------------------- */}
      </div>
    </>
  );
};

export default Vlog;
