/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import banner from "../../../assets/banner.png";
import { Typewriter } from "react-simple-typewriter";
import CountUp from "react-countup";
import { PiArrowRightLight } from "react-icons/pi";

const Banner = () => {
  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };
  return (
    <div className="hero pt-2 pb-4">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={banner}
          alt=""
          className="w-full lg:w-1/2 sm:w-60 rounded-lg shadow-2xl"
        />
        <div className="text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 text-transparent bg-clip-text font-bold">
            <Typewriter
              words={[
                "WordPress Development",
                "Web Development",
                "Cyber Security",
                "App Development",
                "Prompt Engineering",
                "Graphics Design",
                "Education Services",
                "Idea to Creation",
                "Video Editing",
              ]}
              loop={50}
              cursor
              cursorStyle=""
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              onLoopDone={handleDone}
            />
          </h1>
          <p className="py-6 font-semibold  ">
            Trust OceanCapp as your outsourcing partner for top-notch software
            solutions designed to give your business a competitive edge.
          </p>
          <div className="stats shadow w-full flex flex-col sm:flex-row gap-4 ml-4 lg:ml-0 md:ml-0">
            <div className="stat flex-1" style={{ borderRight: "none" }}>
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
              <div className="stat-desc text-white">Dedicated Engineers</div>
            </div>

            <div className="stat flex-1" style={{ borderLeft: "none" }}>
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
              <div className="stat-desc text-white">Successful Projects</div>
            </div>
          </div>

          <Link to="https://wa.link/8bkntc">
            <button className="flex items-center justify-center gap-4 px-8 py-3 mt-6 bg-gradient-to-t from-cyan-600 to-black text-white text-lg font-medium rounded-lg lg:ml-0 md:ml-0 ml-24">
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
