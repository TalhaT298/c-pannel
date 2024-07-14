/* eslint-disable no-unused-vars */
// import React from "react";

// import { useState } from "react";

// const Banner = () => {
//   const [currentSlider, setCurrentSlider] = useState(0);
//   const sliders = [
//     {
//       img: "https://i.ibb.co/zrD2709/web-DESIGN.png",
//       title: "Escape 1",
//       des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.",
//     },
//     {
//       img: "https://i.ibb.co/23NGNwH/web-DESIGN-1.png",
//       title: "Escape 2",
//       des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.",
//     },
//     {
//       img: "https://source.unsplash.com/1200x540/?mountain",
//       title: "Escape 3",
//       des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.",
//     },
//     {
//       img: "https://source.unsplash.com/1200x540/?river",
//       title: "Escape 4",
//       des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.",
//     },
//     {
//       img: "https://i.ibb.co/PNxmSdJ/Untitled-design-9.webp",
//       title: "Escape 5",
//       des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.",
//     },
//   ];
//   const prevSlider = () =>
//     setCurrentSlider((currentSlider) =>
//       currentSlider === 0 ? sliders.length - 1 : currentSlider - 1
//     );
//   const nextSlider = () =>
//     setCurrentSlider((currentSlider) =>
//       currentSlider === sliders.length - 1 ? 0 : currentSlider + 1
//     );
//   const isSmallScreen = window.innerWidth <= 768;
//   return (
//     <div className="">
//       <div
//         className="w-full h-80 sm:h-96 md:h-[540px]  flex flex-col xl:flex-row items-center justify-center gap-5 lg:gap-10 relative bg-cover before:absolute before:bg-black/50 before:inset-0 transform duration-1000 ease-linear z-50 overflow-hidden"
//         style={{
//           backgroundImage: `url(${
//             currentSlider === 0
//               ? sliders[sliders.length - 1].img
//               : sliders[currentSlider - 1].img
//           })`,
//         }}
//       >
//         {/* arrow */}
//         <div className="absolute bottom-1/4 flex gap-3 z-50 px-5">
//           {/* arrow left */}
//           <button
//             onClick={prevSlider}
//             className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8"
//           >
//             <svg
//               viewBox="0 0 1024 1024"
//               className="w-4 h-4 md:w-6 md:h-6 icon"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="#FFFFFF"
//             >
//               <g strokeWidth="0"></g>
//               <g
//                 id="SVGRepo_tracerCarrier"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               ></g>
//               <g id="SVGRepo_iconCarrier">
//                 <path
//                   fill="#FFFFFF"
//                   d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
//                 ></path>
//               </g>
//             </svg>
//           </button>
//           {/* arrow right */}
//           <button
//             onClick={nextSlider}
//             className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8"
//           >
//             <svg
//               viewBox="0 0 1024 1024"
//               className="w-4 h-4 md:w-6 md:h-6 icon"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="#FFFFFF"
//               transform="rotate(180)"
//             >
//               <g strokeWidth="0"></g>
//               <g
//                 id="SVGRepo_tracerCarrier"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               ></g>
//               <g id="SVGRepo_iconCarrier">
//                 <path
//                   fill="#FFFFFF"
//                   d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
//                 ></path>
//               </g>
//             </svg>
//           </button>
//         </div>
//         {/* text container here */}
//         <div className="w-1/2 px-4 left-0 absolute drop-shadow-lg text-white rounded-lg">
//           <h1 className="lg:text-3xl mb-3">{sliders[currentSlider].title}</h1>
//           <p className="text-xs sm:text-sm md:text-base lg:text-lg">
//             {sliders[currentSlider].des}
//           </p>
//         </div>
//         {/* slider container */}
//         <div className="w-1/2 ml-auto overflow-hidden  absolute -right-5 lg:-right-16 z-50 px-4 py-10">
//           <div
//             className="ease-linear duration-300 flex gap-4 items-center"
//             style={{
//               transform: `translateX(-${
//                 currentSlider * (isSmallScreen ? 98 : 200)
//               }px)`,
//             }}
//           >
//             {/* sliders */}
//             {sliders.map((slide, inx) => (
//               <img
//                 key={inx}
//                 src={slide.img}
//                 className={`h-[180px] sm:h-[200px] lg:h-[320px] min-w-[90px] lg:min-w-[184px] ${
//                   currentSlider - 1 === inx ? "scale-0" : "scale-100 delay-500"
//                 } drop-shadow-lg shadow-lg shadow-black bg-black/50 duration-300 rounded-lg z-50`}
//                 alt={slide.title}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;

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
    <div>
      <div className="hero  pt-2 pb-4">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={banner} alt="" className="lg:w-1/2 rounded-lg shadow-2xl" />
          <div>
            <div className="">
            <h1 className="text-4xl bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 text-transparent bg-clip-text font-bold">
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
            </div>
            <p className="py-6 font-semibold">
            Trust OceanCapp as your outsourcing partner for top-notch software solutions designed to give your business a competitive edge.
            </p>
            <div>
            {/* <Link to="">
              <button
                className="btn btn-outline text-teal-600 mr-6"
                data-aos-duration="1000"
              >
                Contact
                
              </button>
            </Link>
            <Link to="">
              <button
                className="btn btn-outline text-cyan-700"
                data-aos-duration="1000"
              >
                See More
              </button>
            </Link> */}
            <div className="stats shadow w-full">
          <div className="stat">
            <div className="stat-figure text-secondary ">
              {" "}
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
            {/* <div className="stat-title">Dedicated Engineers</div> */}
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
            {/* <div className="stat-title">Successful Projects</div> */}
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
            {/* <div className="stat-title">Research</div> */}
            <div className="stat-value">
              <CountUp end={1200} duration={50} />
            </div>
            {/* <div className="stat-desc">↗︎ 1000 (14%)</div> */}
            <div className="stat-desc">Research</div>
          </div>
        </div>
        <Link to="">
              <button
                className="btn btn-outline text-xl pl-1 mt-6 w-  bg-black text-white border-black border group hover:bg-black hover:text-white"
                data-aos-duration="1000"
              >
                Engage US
                <PiArrowRightLight
              size="2.2rem"
              className="text-white group-hover:text-white"
            />
              </button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
