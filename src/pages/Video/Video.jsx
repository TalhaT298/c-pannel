/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { PiArrowRightLight } from "react-icons/pi";
import grap from "../../assets/graphicsp.png";
import graphicsw from "../../assets/graphicsw.png";
import { GrProjects } from "react-icons/gr";
import graphicsv from "../../assets/graphics.mp4";
import p25 from "../../assets/p25.png";
import p26 from "../../assets/p26.png";
import p27 from "../../assets/p27.png";
import p28 from "../../assets/p28.png";
import person404 from "../../assets/person404.png";
import person405 from "../../assets/person405.png";
import person406 from "../../assets/person406.png";

const Video = () => {
    return (
        <>
        <Link to="/video"></Link>
        <div>
        {/* ---------------------------------1st phase ----------------------------*/}
        <div className="flex flex-col md:flex-row items-center justify-between p-8 shadow-md rounded-lg">
          <div className="text-center md:text-left md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-4xl bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-800 text-transparent bg-clip-text uppercase pt-4 font-bold font-serif">
            Video Editing
            </h3>
            <h2 className="text-white font-extrabold text-2xl mb-4">
              Register by contacting us
            </h2>
            <p className="text-white mb-8">
              Oceancapp's graphic design services are renowned for creating
              visually stunning and custom-tailored solutions that reflect your
              brand's unique identity. We specialize in crafting captivating
              graphics that enhance your visual communication and drive
              engagement. Our talented team offers end-to-end design support,
              from initial concept and creation to final execution and
              revisions, ensuring that every design element aligns with your
              strategic goals. We focus on blending creativity with
              functionality, utilizing the latest design trends and techniques
              to deliver compelling and memorable visuals.
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
                src={grap}
                alt="Sale"
                className="rounded-lg shadow-lg mb-4 md:mb-0 md:mr-4"
              ></img>
              <img
                src={graphicsw}
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
              <source src={graphicsv} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="md:w-1/2 md:ml-8 text-center md:text-left">
              <h3 className="text-3xl text-white font-bold mb-4">
                Learn More About Our Graphic Design Services
              </h3>
              <p className="text-white mb-8">
                Experience our creative graphic design solutions through this
                visual showcase. Our talented team is committed to providing
                outstanding services aligned with your unique vision. From
                brainstorming to flawless creation, we ensure a smooth process
                in crafting striking and effective designs that enhance your
                brand
              </p>
              <a
                href={graphicsv}
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
            graphic design Excellence Delivered
          </h3>
        </div>
        <div className="h-1 w-80 bg-cyan-600 rounded flex justify-center items-center mx-auto my-auto hover:animate-ping"></div>
        <p className="text-center font-thin text-xl pt-4">
          <p>
            At Oceancapp, we excel in delivering creative graphics design
            solutions that captivate, communicate, and inspire. Our commitment
            to quality craftsmanship ensures that your visual identity not only
            meets but exceeds your expectations.
          </p>{" "}
          <br />
          <p>
            Our team of talented designers has a wealth of experience in
            crafting bespoke graphics that resonate with your brand's essence.
            We stay ahead of design trends and technologies to deliver visually
            stunning and impactful creations. Understanding the unique
            personality of each client, we tailor our designs to align perfectly
            with your brand identity and marketing goals.
          </p>{" "}
          <br />
          <p>
            Our focus is on creating designs that are not only visually
            appealing but also strategically crafted to engage your audience
            effectively. Whether you need a new logo, marketing collateral, or
            website graphics, we bring creativity and precision to every
            project. We ensure seamless collaboration and transparent
            communication throughout the design process, ensuring your vision
            comes to life.
          </p>
          <br />
          <p>
            With the ever-evolving landscape of visual communication, having
            standout graphics is essential. Our designs are optimized for
            various platforms and media, ensuring consistency and impact across
            print and digital channels. We also emphasize usability and
            accessibility in our designs, ensuring they are both aesthetically
            pleasing and functionally effective.
          </p>
          <br />
          <p>
            At Oceancapp, we showcase our design prowess through our portfolio,
            where you can see examples of our best graphic design work. This
            allows you to visualize our capabilities and envision how our
            designs can elevate your brand presence.
          </p>
          <br />
          <p>
            Are you passionate about graphic design and looking to join a
            dynamic team? Oceancapp welcomes creative individuals who are eager
            to push boundaries and innovate in the world of visual storytelling.
            Join us to work on exciting projects, hone your skills, and
            contribute to our mission of delivering excellence in graphic
            design.
          </p>
          <br />
          <p>
            Whether you're launching a new brand or revitalizing your visual
            identity, Oceancapp is here to partner with you. Contact us today to
            discuss your graphic design needs and discover how we can bring
            creativity and impact to your projects.
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
              Transform Your Vision into Stunning Designs
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
                  src={p25}
                  alt="avatar navigate ui"
                />
              </div>
              <div className="w-14 h-14 bg-[#191919]  rounded-full border-[3px] border-[#191919] relative -left-5">
                <img
                  className="w-full h-full rounded-full"
                  src={p26}
                  alt="avatar navigate ui"
                />
              </div>
              <div className="w-14 h-14 bg-[#191919]  rounded-full border-[3px] border-[#191919]  relative -left-10">
                <img
                  className="w-full h-full rounded-full"
                  src={p27}
                  alt="avatar navigate ui"
                />
              </div>
              <div className="w-14 h-14 bg-[#191919]  rounded-full border-[3px] border-[#191919]  relative -left-[60px]">
                <img
                  className="w-full h-full rounded-full"
                  src={p28}
                  alt="avatar navigate ui"
                />
              </div>

              <div className="relative -left-5">
                <p className="text-lg text-white">90+</p>
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
          <p className="text-4xl font-extrabold font-serif px-4">Typography</p>
          <p className="text-4xl font-extrabold font-serif px-4">
            Color Theory
          </p>
          <p className="text-4xl font-extrabold font-serif px-4">
            Layout Design
          </p>
          <p className="text-4xl font-extrabold font-serif px-4">
            Vector Graphics
          </p>
          <p className="text-4xl font-extrabold font-serif px-4">
            Raster Graphics
          </p>
          <p className="text-4xl font-extrabold font-serif px-4">
            Brand Identity
          </p>
          <p className="text-4xl font-extrabold font-serif px-4">
            Visual Hierarchy
          </p>
          <p className="text-4xl font-extrabold font-serif px-4">
            Image Editing
          </p>
          <p className="text-4xl font-extrabold font-serif px-4">
            Illustration
          </p>
          <p className="text-4xl font-extrabold font-serif px-4">Wireframing</p>
          <p className="text-4xl font-extrabold font-serif px-4">
            User Interface (UI) Design
          </p>
          <p className="text-4xl font-extrabold font-serif px-4">
            User Experience (UX) Design
          </p>
          <p className="text-4xl font-extrabold font-serif px-4">
            Print Design
          </p>
          <p className="text-4xl font-extrabold font-serif px-4">
            Digital Design
          </p>
          <p className="text-4xl font-extrabold font-serif px-4">
            Infographics
          </p>
          <p className="text-4xl font-extrabold font-serif px-4">Logo Design</p>
          <p className="text-4xl font-extrabold font-serif px-4">
            Packaging Design
          </p>
          <p className="text-4xl font-extrabold font-serif px-4">Web Design</p>
          <p className="text-4xl font-extrabold font-serif px-4">Icon Design</p>
        </Marquee>
        <Marquee className="my-5" direction="left" speed={50}>
          <p className="text-4xl font-extrabold font-serif px-4">
            Motion Graphics
          </p>
          <p className="text-4xl font-extrabold font-serif px-4">Animation</p>
          <p className="text-4xl font-extrabold font-serif px-4">3D Modeling</p>
          <p className="text-4xl font-extrabold font-serif px-4">
            Graphic Elements
          </p>
          <p className="text-4xl font-extrabold font-serif px-4">
            Adobe Creative Suite
          </p>
          <p className="text-4xl font-extrabold font-serif px-4">
            Design Principles
          </p>
          <p className="text-4xl font-extrabold font-serif px-4">
            Visual Communication
          </p>
          <p className="text-4xl font-extrabold font-serif px-4">Prototyping</p>
          <p className="text-4xl font-extrabold font-serif px-4">
            Creative Direction
          </p>
          <p className="text-4xl font-extrabold font-serif px-4">
            Design Thinking
          </p>
          <p className="text-4xl font-extrabold font-serif px-4">
            Visual Branding
          </p>
          <p className="text-4xl font-extrabold font-serif px-4">
            Photo Manipulation
          </p>
          <p className="text-4xl font-extrabold font-serif px-4">
            Visual Storytelling
          </p>
          <p className="text-4xl font-extrabold font-serif px-4">
            Design Aesthetics
          </p>
          <p className="text-4xl font-extrabold font-serif px-4">
            Typography Hierarchy
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
                      <img src={person404} className="w-40 h-40" alt="" />
                    </div>
                    <div className="md:flex-grow">
                      <h2 className="text-2xl font-medium text-white title-font mb-2">
                      Emily Clark - Graphic Design Expert
                      </h2>
                      <p className="leading-relaxed text-white">
                      "Choosing Oceancapp for our graphic design needs was a remarkable decision. Their team created visually stunning designs that perfectly captured our brand's essence and message. The creativity and attention to detail they brought to the table were exceptional. Oceancapp’s ability to translate our vision into compelling graphics has truly elevated our brand's presence."
                      </p>
                    </div>
                  </div>
                  <div className="py-8 flex flex-wrap md:flex-nowrap">
                    <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                      <img src={person405} className="w-40 h-40" alt="" />
                    </div>
                    <div className="md:flex-grow">
                      <h2 className="text-2xl font-medium text-white title-font mb-2">
                      Lily Adams - Creative Design Solutions
                      </h2>
                      <p className="leading-relaxed text-white">
                      "Oceancapp’s graphic design services have greatly enhanced our marketing materials. They delivered designs that are not only aesthetically pleasing but also highly effective in communicating our message. The team's professionalism and innovative approach were evident throughout the project. Oceancapp’s dedication to high-quality design work has made a significant impact on our visual branding."
                      </p>
                    </div>
                  </div>
                  <div className="py-8 flex flex-wrap md:flex-nowrap">
                    <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                      <img src={person406} className="w-40 h-40" alt="" />
                    </div>
                    <div className="md:flex-grow">
                      <h2 className="text-2xl font-medium text-white title-font mb-2">
                      James Brown - Visual Design Specialist
                      </h2>
                      <p className="leading-relaxed text-white">
                      "Partnering with Oceancapp for our visual design needs was an excellent choice. Their team provided creative and impactful design solutions that resonated with our audience. The quality of their work and their ability to understand our requirements and deliver outstanding results were impressive. Oceancapp’s commitment to excellence in graphic design has been a key factor in our successful marketing campaigns."
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

export default Video;