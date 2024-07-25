/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { PiArrowRightLight } from "react-icons/pi";
import ideap from "../../assets/ideap.png";
import ideaw from "../../assets/ideaw.png";
import { GrProjects } from "react-icons/gr";
import ideav from "../../assets/ideav.mp4";
import p41 from "../../assets/p41.png";
import p42 from "../../assets/p42.png";
import p43 from "../../assets/p43.png";
import p44 from "../../assets/p44.png";
import person504 from "../../assets/person504.png";
import person505 from "../../assets/person505.png";
import person506 from "../../assets/person506.png";

const Creation = () => {
    return (
        <>
        <Link to="/creation"></Link>
        <div>
        {/* ---------------------------------1st phase ----------------------------*/}
        <div className="flex flex-col md:flex-row items-center justify-between p-8 shadow-md rounded-lg">
          <div className="text-center md:text-left md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-4xl bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-800 text-transparent bg-clip-text uppercase pt-4 font-bold font-serif">
             Idea to Creation
            </h3>
            <h2 className="text-white font-extrabold text-2xl mb-4">
              Register by contacting us
            </h2>
            <p className="text-white mb-8">
            Oceancapp's Idea to Creation services are exceptional in transforming your concepts into fully realized solutions. We specialize in taking your ideas through every stage of development, from initial brainstorming and planning to final execution and launch. Our dedicated team provides end-to-end support, ensuring that your vision is meticulously crafted and brought to life with precision and creativity. We focus on innovative thinking and comprehensive project management, utilizing the latest tools and techniques to turn your ideas into impactful, tangible results.
            </p>
            <Link to="">
              <button className="flex items-center gap-4 px-8 py-3 bg-gradient-to-t from-cyan-600 to-black text-white text-lg font-medium rounded-lg">
                Learn More
                <PiArrowRightLight
                  size="1.1rem"
                  className="text-white group-hover:text-black"
                />
              </button>
            </Link>
          </div>
          <div className="md:w-1/2 flex items-center justify-center">
            <div className="relative">
              <img
                src={ideap}
                alt="Sale"
                className="rounded-lg shadow-lg mb-4 md:mb-0 md:mr-4"
              ></img>
              <img
                src={ideaw}
                alt="Open Shop"
                className="rounded-lg shadow-lg absolute bottom-0 right-0 transform translate-x-4 translate-y-4"
              ></img>
            </div>
          </div>
        </div>
        {/* ---------------------------------1st phase finish----------------------------*/}
        {/* ---------------------------------2nd phase start----------------------------*/}
        <div className="p-8 mt-8 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <video
              controls
              className="w-full md:w-1/2 rounded-lg shadow-lg mb-4 md:mb-0"
            >
              <source src={ideav} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="md:w-1/2 md:ml-8 text-center md:text-left">
              <h3 className="text-3xl text-white font-bold mb-4">
                Learn More About  Idea to Creation Services
              </h3>
              <p className="text-white mb-8">
              Explore our seamless journey from idea to creation through this informative video. Our dedicated team is committed to transforming your concepts into reality with top-tier services tailored to your specific needs. From initial brainstorming to flawless execution, we ensure a smooth and efficient process in bringing your vision to life.
              </p>
              <a
                href={ideav}
                download
                className="flex items-center gap-4 px-8 py-3 bg-gradient-to-t from-cyan-600 to-black text-white text-lg font-medium rounded-lg"
              >
                Download our intro video
                <PiArrowRightLight
                  size="1.1rem"
                  className="text-white group-hover:text-black"
                />
              </a>
            </div>
          </div>
        </div>
        {/* ---------------------------------2nd phase finish----------------------------*/}
        {/* ---------------------------------3rd phase start----------------------------*/}
        <div>
          <h3 className="text-4xl py-4 text-center bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-800 text-transparent bg-clip-text uppercase pt-4 font-bold font-serif">
          Idea to Creation Excellence Delivered
          </h3>
        </div>
        <div className="h-1 w-80 bg-cyan-600 rounded flex justify-center items-center mx-auto my-auto hover:animate-ping"></div>
        <p className="text-center font-thin text-xl pt-4">
          <p>
          At Oceancapp, we specialize in turning innovative ideas into reality with our comprehensive Idea to Creation services. Our commitment to quality, creativity, and customer satisfaction ensures that your vision is not only realized but also exceeds expectations.
          </p>{" "}
          <br />
          <p>
          Our team of experienced professionals excels in transforming concepts into tangible products and solutions. We stay updated with the latest trends and technologies to deliver innovative and impactful results. Understanding the unique nature of each idea, we provide personalized services that align with your goals and bring your vision to life.
          </p>{" "}
          <br />
          <p>
          Our focus is on guiding you through every step of the creation process, from initial brainstorming to final execution. Whether you need product development, design, prototyping, or market launch, we bring expertise and creativity to every project. We ensure seamless collaboration and transparent communication, making the journey from idea to creation smooth and efficient.
          </p>
          <br />
          <p>
          With the increasing demand for innovative solutions, having a reliable partner to bring your ideas to life is crucial. Our services are designed to adapt to various industries and project scopes, ensuring that your ideas are developed with precision and creativity. We also prioritize quality and functionality, ensuring that the final product is not only innovative but also practical and market-ready.
          </p>
          <br />
          <p>
          At Oceancapp, we showcase our ability to turn ideas into successful creations through our portfolio, where you can see examples of our past projects. This allows you to visualize our capabilities and envision how we can help bring your ideas to fruition.
          </p>
          <br />
          <p>
          Are you passionate about innovation and looking to join a dynamic team dedicated to creating impactful solutions? Oceancapp welcomes creative and driven individuals who are eager to transform ideas into reality. Join us to work on exciting projects, develop your skills, and contribute to our mission of excellence in Idea to Creation services.
          </p>
          <br />
          <p>
          Whether you have a groundbreaking concept or need help refining your ideas, Oceancapp is here to support your journey from idea to creation. Contact us today to discuss your project and discover how we can turn your vision into a reality.
          </p>
        </p>
        {/* ---------------------------------3rd phase finish----------------------------*/}
        {/* ---------------------------------4th phase start----------------------------*/}
        <div className="flex items-center justify-center border border-black w-full h-[80vh] bg-gradient-to-tr from-black via-black/90 to-black">
          <div className="flex flex-col items-center my-10 text-white space-y-8">
            {/* featured div  */}
            <div className="flex items-center gap-4 bg-gradient-to-t from-cyan-600 to-white/10 py-2 px-6 rounded-lg">
              <div className=" w-8 h-8 text-black text-2xl font-semibold bg-white flex justify-center items-center rounded-full">
                O
              </div>
              <div>
                <p className="text-white text-sm">Featured on</p>
                <p className="text-white font-medium">Ocean Hunt</p>
              </div>
            </div>
            {/* header  */}
            <h1 className="text-5xl font-semibold text-white text-center leading-[65px] ">
              Turn Your Ideas into Creation
            </h1>
            {/* description  */}
            <p className="max-w-[58%] mx-auto text-center">
              Turn your ideas into amazing plans effortlessly with
              <span className="text-cyan-600"> Oceancapp. </span>
            </p>
            {/* people who use navigateUI  */}
            <div className="flex items-center py-4 pl-4 bg-gradient-to-tr from-black via-white/10 to-black border border-white/10 rounded-xl">
              <div className="w-14 h-14 bg-transparent  rounded-full border-[3px] border-[#191919]">
                <img
                  className="w-full h-full rounded-full"
                  src={p41}
                  alt="avatar navigate ui"
                />
              </div>
              <div className="w-14 h-14 bg-[#191919]  rounded-full border-[3px] border-[#191919] relative -left-5">
                <img
                  className="w-full h-full rounded-full"
                  src={p42}
                  alt="avatar navigate ui"
                />
              </div>
              <div className="w-14 h-14 bg-[#191919]  rounded-full border-[3px] border-[#191919]  relative -left-10">
                <img
                  className="w-full h-full rounded-full"
                  src={p43}
                  alt="avatar navigate ui"
                />
              </div>
              <div className="w-14 h-14 bg-[#191919]  rounded-full border-[3px] border-[#191919]  relative -left-[60px]">
                <img
                  className="w-full h-full rounded-full"
                  src={p44}
                  alt="avatar navigate ui"
                />
              </div>

              <div className="relative -left-5">
                <p className="text-lg text-white">10+</p>
                <p className="text-sm text-gray-400">people already showing</p>
              </div>
            </div>
            {/* buttons  */}
            <div className="flex flex-wrap gap-10 items-center py-4">
              <Link to="">
                <button className="flex items-center gap-4 px-8 py-3 bg-gradient-to-b from-cyan-600 to-black text-white text-lg font-medium rounded-lg">
                  Show Here{" "}
                  <svg
                    width={25}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
                        fill="white"
                      ></path>
                    </g>
                  </svg>
                </button>
              </Link>
              <Link to="">
                <button className="flex items-center gap-4 px-8 py-3 bg-gradient-to-t from-black to-white/10 text-white text-lg font-medium rounded-lg">
                  Projects <GrProjects className="" />
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* ---------------------------------4th phase finish----------------------------*/}
        {/* ---------------------------------5th phase start----------------------------*/}
        <Marquee className="pt-16" direction="right" speed={50}>
          <p className="text-4xl font-extrabold font-serif px-4">Cutting</p>
          <p className="text-4xl font-extrabold font-serif px-4">Trimming</p>
          <p className="text-4xl font-extrabold font-serif px-4">Splitting</p>
          <p className="text-4xl font-extrabold font-serif px-4">Timeline</p>
          <p className="text-4xl font-extrabold font-serif px-4">Transitions</p>
          <p className="text-4xl font-extrabold font-serif px-4">Effects</p>
          <p className="text-4xl font-extrabold font-serif px-4">
            Color Correction
          </p>
          <p className="text-4xl font-extrabold font-serif px-4">
            Color Grading
          </p>
          <p className="text-4xl font-extrabold font-serif px-4">
            Green Screen
          </p>
          <p className="text-4xl font-extrabold font-serif px-4">Keying</p>
          <p className="text-4xl font-extrabold font-serif px-4">Masking</p>
          <p className="text-4xl font-extrabold font-serif px-4">Compositing</p>
          <p className="text-4xl font-extrabold font-serif px-4">Montage</p>
          <p className="text-4xl font-extrabold font-serif px-4">Audio Sync</p>
          <p className="text-4xl font-extrabold font-serif px-4">
            Sound Design
          </p>
          <p className="text-4xl font-extrabold font-serif px-4">
            Audio Mixing
          </p>
          <p className="text-4xl font-extrabold font-serif px-4">Voiceover</p>
          <p className="text-4xl font-extrabold font-serif px-4">Titles</p>
          <p className="text-4xl font-extrabold font-serif px-4">Subtitles</p>
          <p className="text-4xl font-extrabold font-serif px-4">
            Lower Thirds
          </p>
          <p className="text-4xl font-extrabold font-serif px-4">
            Motion Graphics
          </p>
          <p className="text-4xl font-extrabold font-serif px-4">
            Visual Effects (VFX)
          </p>
          <p className="text-4xl font-extrabold font-serif px-4">Rendering</p>
          <p className="text-4xl font-extrabold font-serif px-4">Exporting</p>
          <p className="text-4xl font-extrabold font-serif px-4">Frame Rate</p>
          <p className="text-4xl font-extrabold font-serif px-4">Resolution</p>
          <p className="text-4xl font-extrabold font-serif px-4">
            Aspect Ratio
          </p>
          <p className="text-4xl font-extrabold font-serif px-4">
            Multicam Editing
          </p>
          <p className="text-4xl font-extrabold font-serif px-4">
            Proxy Editing
          </p>
          <p className="text-4xl font-extrabold font-serif px-4">
            Storyboarding
          </p>
          <p className="text-4xl font-extrabold font-serif px-4">
            Non-Linear Editing (NLE)
          </p>
          <p className="text-4xl font-extrabold font-serif px-4">Rough Cut</p>
          <p className="text-4xl font-extrabold font-serif px-4">Final Cut</p>
        </Marquee>
        <Marquee className="my-5" direction="left" speed={50}>
          <p className="text-4xl font-extrabold font-serif px-4">Clip</p>
          <p className="text-4xl font-extrabold font-serif px-4">Sequence</p>
          <p className="text-4xl font-extrabold font-serif px-4">B-Roll</p>
          <p className="text-4xl font-extrabold font-serif px-4">Jump Cut</p>
          <p className="text-4xl font-extrabold font-serif px-4">L-Cut</p>
          <p className="text-4xl font-extrabold font-serif px-4">J-Cut</p>
          <p className="text-4xl font-extrabold font-serif px-4">
            Cross Dissolve
          </p>
          <p className="text-4xl font-extrabold font-serif px-4">Fade In</p>
          <p className="text-4xl font-extrabold font-serif px-4">Fade Out</p>
          <p className="text-4xl font-extrabold font-serif px-4">Speed Ramp</p>
          <p className="text-4xl font-extrabold font-serif px-4">
            Stabilization
          </p>
          <p className="text-4xl font-extrabold font-serif px-4">
            Split Screen
          </p>
          <p className="text-4xl font-extrabold font-serif px-4">
            Picture-in-Picture
          </p>
          <p className="text-4xl font-extrabold font-serif px-4">Overlay</p>
          <p className="text-4xl font-extrabold font-serif px-4">
            Editing Software
          </p>
          <p className="text-4xl font-extrabold font-serif px-4">
            Video Effects Library
          </p>
          <p className="text-4xl font-extrabold font-serif px-4">
            Editing Workflow
          </p>
          <p className="text-4xl font-extrabold font-serif px-4">
            Adjustment Layers
          </p>
          <p className="text-4xl font-extrabold font-serif px-4">Layering</p>
          <p className="text-4xl font-extrabold font-serif px-4">Retiming</p>
          <p className="text-4xl font-extrabold font-serif px-4">
            Noise Reduction
          </p>
          <p className="text-4xl font-extrabold font-serif px-4">
            Chromatic Aberration
          </p>
          <p className="text-4xl font-extrabold font-serif px-4">
            Scene Transition
          </p>
          <p className="text-4xl font-extrabold font-serif px-4">
            Sync Licensing
          </p>
        </Marquee>
        {/* ---------------------------------5th phase finish----------------------------*/}
        {/* ---------------------------------6th phase finish----------------------------*/}
        <div>
          <div className="mx-auto md:w-8/12 mb-2 mt-10 flex justify-center items-center ">
            <h3 className="text-4xl bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-800 text-transparent bg-clip-text uppercase pt-4 font-bold font-serif">
              Words From Clients
            </h3>
          </div>
          <div className="h-1 w-80 bg-cyan-600 rounded flex justify-center items-center mx-auto my-auto hover:animate-ping"></div>
          <div>
            <section className="text-gray-600 body-font overflow-hidden">
              <div className="container px-5 py-12 mx-auto">
                <div className="-my-8 divide-y-2 divide-cyan-700">
                  <div className="py-8 flex flex-wrap md:flex-nowrap">
                    <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                      <img src={person504} className="w-40 h-40" alt="" />
                    </div>
                    <div className="md:flex-grow">
                      <h2 className="text-2xl font-medium text-white title-font mb-2">
                        Liam Roberts - Multimedia Editing Expert
                      </h2>
                      <p className="leading-relaxed text-white">
                      "Partnering with Oceancapp for our video editing requirements was an excellent choice. Their team provided insightful guidance and produced top-notch edits that seamlessly integrated with our overall marketing strategy. The quality of their work and their ability to understand and execute our vision were exceptional. Oceancapp’s commitment to excellence in video editing has greatly enhanced our multimedia projects."
                      </p>
                    </div>
                  </div>
                  <div className="py-8 flex flex-wrap md:flex-nowrap">
                    <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                      <img src={person505} className="w-40 h-40" alt="" />
                    </div>
                    <div className="md:flex-grow">
                      <h2 className="text-2xl font-medium text-white title-font mb-2">
                      Sophia Johnson - Visual Storytelling Solutions
                      </h2>
                      <p className="leading-relaxed text-white">
                      "Oceancapp’s video editing services have significantly enhanced our content. They delivered high-quality edits that effectively conveyed our message and kept our audience captivated. The team's professionalism, innovative approach, and ability to meet tight deadlines were impressive throughout the project. Oceancapp’s dedication to delivering exceptional video editing work has been instrumental in our success."
                      </p>
                    </div>
                  </div>
                  <div className="py-8 flex flex-wrap md:flex-nowrap">
                    <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                      <img src={person506} className="w-40 h-40" alt="" />
                    </div>
                    <div className="md:flex-grow">
                      <h2 className="text-2xl font-medium text-white title-font mb-2">
                      Ava Martinez - Video Editing Specialist
                      </h2>
                      <p className="leading-relaxed text-white">
                      "Choosing Oceancapp for our video editing needs was a fantastic decision. Their team transformed our raw footage into a polished and engaging final product that perfectly captured our vision. The creativity, technical skills, and attention to detail they demonstrated were outstanding. Oceancapp’s expertise in video editing has truly brought our projects to life and exceeded our expectations."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        {/* ---------------------------------6th phase finish----------------------------*/}
      </div>
        </>
    );
};

export default Creation;