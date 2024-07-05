/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import background from "../../assets/back.png";
import tal from "../../assets/tal.png";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import Aysha from "../../assets/pro1.png"
import Efad from "../../assets/ea.png"
import Sadman from "../../assets/Sadman.webp"
import dip from "../../assets/dip.jpg"
const About = () => {
  return (
    <>
      <Link to="/about"></Link>
      {/* 1st phase done */}
      <div className="relative w-full h-full">
        <img
          src={background}
          alt="background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-full p-4 text-white text-3xl text-center">
          Your text goes here
        </div>
      </div>
      {/* 1st phase done finish*/}
      {/* 2nd phase start */}
      <div className="flex py-16 px-8">
        <div className="w-3/5 font-bold text-xl space-y-4 pt-8">
          <h1 className="text-4xl text-cyan-600 pb-4">
            Cutting-Edge Solutions and Expertise
          </h1>
          <p className="flex items-center">
            <FaArrowRight className="w-6 h-6 pr-2" /> Innovative Solutions,
            Unmatched Quality
          </p>
          <p className="flex items-center">
            <FaArrowRight className="w-6 h-6 pr-2" /> Expert Developers,
            Exceptional Results
          </p>
          <p className="flex items-center">
            <FaArrowRight className="w-6 h-6 pr-2" /> Agile Strategies, Seamless
            Execution
          </p>
          <p className="flex items-center">
            <FaArrowRight className="w-6 h-6 pr-2" /> Client-Centric Approach,
            Unwavering Support
          </p>
          <p className="flex items-center">
            <FaArrowRight className="w-6 h-6 pr-2" /> Timely Delivery,
            Guaranteed Satisfaction
          </p>
          <p className="flex items-center">
            <FaArrowRight className="w-6 h-6 pr-2" /> Cutting-Edge Technology,
            Future-Proof Solutions
          </p>
          <p className="flex items-center">
            <FaArrowRight className="w-6 h-6 pr-2" /> Collaborative Partnership,
            Shared Success
          </p>
          <p className="flex items-center">
            <FaArrowRight className="w-6 h-6 pr-2" /> Proven Expertise, Trusted
            Excellence
          </p>
        </div>
        <div className="w-2/5">
          <img
            src={tal}
            className="rounded-tr-[80px] rounded-bl-[80px] shadow-md"
            alt=""
          />
        </div>
      </div>
      {/* 2nd phase finish */}
      {/* 3rd phase Strat */}
      <div className="mx-auto md:w-8/12 mb-8 mt-16 flex justify-center items-center ">
        {/* <p className='text-yellow-600'>----{subHeading}--</p */}
        <h3 className="text-4xl text-cyan-500 uppercase font-bold font-serif">
          Get Advice From Expert
        </h3>
      </div>
      <div className="h-1 w-80 bg-cyan-500 rounded flex justify-center items-center mx-auto my-auto hover:animate-ping"></div>
      <div className="flex flex-wrap -m-4 py-8">
        <div className="xl:w-1/4 md:w-1/2 p-4">
          <div className="bg-gray-100 p-6 rounded-lg">
            <img
              className="h-52 rounded w-full object-cover object-center mb-6"
              src={Aysha}
              alt="content"
            ></img>
            <h3 className=" text-black text-xs font-medium title-font">
              CEO and Founder
            </h3>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
              Ayesha Anika
            </h2>
            <div className="grid grid-flow-col gap-3">
              <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                <a href="https://www.facebook.com/khalid.hasan.77128261?mibextid=ZbWKwL">
                  <FaFacebookF
                    href="https://www.facebook.com/khalid.hasan.77128261?mibextid=ZbWKwL"
                    size="1.7rem"
                    color="black"
                  />
                </a>
              </motion.div>

              <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                <Link to="">
                  <a href="">
                    <FaInstagram size="1.7rem" color="black" />
                  </a>
                </Link>
              </motion.div>

              <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                <Link to="">
                  <a href="">
                    <FaLinkedinIn size="1.7rem" color="black" />
                  </a>
                </Link>
              </motion.div>

              <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                <Link to="">
                  <a href="">
                    <FaWhatsapp size="1.7rem" color="black" />
                  </a>
                </Link>
              </motion.div>
              <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                <Link to="">
                  <a href="">
                    <BiLogoGmail size="1.7rem" color="black" />
                  </a>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="xl:w-1/4 md:w-1/2 p-4">
          <div className="bg-gray-100 p-6 rounded-lg">
            <img
              className="h-52 rounded w-full object-cover object-center mb-6"
              src={Efad}
              alt="content"
            ></img>
            <h3 className="tracking-widest text-black text-xs font-medium title-font">
            Chief Information Security Officer
            </h3>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
            Efadul Islam
            </h2>
            <div className="grid grid-flow-col gap-3">
              <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                <Link to="">
                  <a href="https://www.facebook.com/Dipto93?mibextid=ZbWKwL">
                    <FaFacebookF size="1.7rem" color="black" />
                  </a>
                </Link>
              </motion.div>

              <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                <Link to="">
                  <a href="">
                    <FaInstagram size="1.7rem" color="black" />
                  </a>
                </Link>
              </motion.div>

              <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                <Link to="">
                  <a href="">
                    <FaLinkedinIn size="1.7rem" color="black" />
                  </a>
                </Link>
              </motion.div>

              <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                <Link to="">
                  <a href="">
                    <FaWhatsapp size="1.7rem" color="black" />
                  </a>
                </Link>
              </motion.div>
              <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                <Link to="">
                  <a href="">
                    <BiLogoGmail size="1.7rem" color="black" />
                  </a>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="xl:w-1/4 md:w-1/2 p-4">
          <div className="bg-gray-100 p-6 rounded-lg">
            <img
              className="h-52 rounded w-full object-cover object-center mb-6"
              src={Sadman}
              alt="content"
            ></img>
            <h3 className="tracking-widest text-black text-xs font-medium title-font">
              Full Stack Developer
            </h3>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
              Sadman Islam
            </h2>
            <div className="grid grid-flow-col gap-3">
              <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                <Link to="">
                  <a href="https://www.facebook.com/profile.php?id=100000580366774&mibextid=JRoKGi">
                    <FaFacebookF size="1.7rem" color="black" />
                  </a>
                </Link>
              </motion.div>

              <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                <Link to="">
                  <a href="">
                    <FaInstagram size="1.7rem" color="black" />
                  </a>
                </Link>
              </motion.div>

              <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                <Link to="">
                  <a href="">
                    <FaLinkedinIn size="1.7rem" color="black" />
                  </a>
                </Link>
              </motion.div>

              <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                <Link to="">
                  <a href="">
                    <FaWhatsapp size="1.7rem" color="black" />
                  </a>
                </Link>
              </motion.div>
              <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                <Link to="">
                  <a href="">
                    <BiLogoGmail size="1.7rem" color="black" />
                  </a>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="xl:w-1/4 md:w-1/2 p-4">
          <div className="bg-gray-100 p-6 rounded-lg">
            <img
              className="h-52 rounded w-full object-cover object-center mb-6"
              src={dip}
              alt="content"
            ></img>
            <h3 className="tracking-widest text-black text-xs font-medium title-font">
              Game Developer
            </h3>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
            Taksimul Hasan Dip 
            </h2>
            <div className="grid grid-flow-col gap-3">
              <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                <Link to="https://www.facebook.com/profile.php?id=100012102336348">
                  <a
                    href="https://www.facebook.com/profile.php?id=100012102336348"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF
                      href="https://www.facebook.com/profile.php?id=100012102336348"
                      size="1.7rem"
                      color="black"
                    />
                  </a>
                </Link>
              </motion.div>

              <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                <Link to="">
                  <a href="">
                    <FaInstagram size="1.7rem" color="black" />
                  </a>
                </Link>
              </motion.div>

              <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                <Link to="">
                  <a href="">
                    <FaLinkedinIn size="1.7rem" color="black" />
                  </a>
                </Link>
              </motion.div>

              <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                <Link to="">
                  <a href="">
                    <FaWhatsapp size="1.7rem" color="black" />
                  </a>
                </Link>
              </motion.div>
              <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                <Link to="">
                  <a href="">
                    <BiLogoGmail size="1.7rem" color="black" />
                  </a>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      {/* 3rd phase finish */}
      {/* 4th phase Strat */}

      {/* 4th phase finish */}
    </>
  );
};

export default About;
