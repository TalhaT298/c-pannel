/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import banner from "../../../assets/banner.png"
import { Typewriter } from 'react-simple-typewriter'
import CountUp from "react-countup";
import { PiArrowRightLight } from "react-icons/pi";

const Banner = () => {
  const handleDone = () => {
    console.log(`Done after 5 loops!`)
  }
  return (
    <div className="hero pt-2 pb-4">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={banner} alt="" className="w-full lg:w-1/2 sm:w-60 rounded-lg shadow-2xl" />
        <div className="text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 text-transparent bg-clip-text font-bold">
            <Typewriter
              words={['Web Design', 'Game Development', 'Web Development', 'Cyber Security']}
              loop={50}
              cursor
              cursorStyle=''
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              onLoopDone={handleDone}
            />
          </h1>
          <p className="py-6 font-semibold  ">
            Trust OceanCapp as your outsourcing partner for top-notch software solutions designed to give your business a competitive edge.
          </p>
          <div className="stats shadow w-full grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                  color="black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <div className="stat-value">
                <CountUp end={38} duration={50} />
              </div>
              <div className="stat-desc">Dedicated Engineers</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                  color="black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  ></path>
                </svg>
              </div>
              <div className="stat-value">
                <CountUp end={4200} duration={50} />
              </div>
              <div className="stat-desc">Successful Projects</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                  color="black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  ></path>
                </svg>
              </div>
              <div className="stat-value">
                <CountUp end={1200} duration={50} />
              </div>
              <div className="stat-desc">Research</div>
            </div>
          </div>
          <Link to="">
            <button className="flex items-center justify-center sm:justify-start gap-4 px-8 py-3 mt-6 bg-gradient-to-t from-cyan-600 to-black text-white text-lg font-medium rounded-lg">
              Learn More
              <PiArrowRightLight
                size="1.1rem"
                className="text-white group-hover:text-black"
              />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
