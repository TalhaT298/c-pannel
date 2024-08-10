/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { BsTwitterX } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { motion } from "framer-motion";
import { MdOutlinePhoneCallback } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import background from '../../../assets/1.webp';
import logo from "../../../assets/logo.png"

const Footer = () => {
  return (
    <div>
      <footer className="text-white body-font" style={{backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundPosition: "center", minHeight: "200px"}}>
        <div className="container px-5 py-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <img src={logo} className="h-12" alt="" />
            </a>
            <p className="mt-2 text-sm font-bold text-white">
            Simplifying Innovation with IT
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-white tracking-widest text-base mb-3">
                Company
              </h2>
              <nav className="list-none mb-10">
                <li className="pb-4">
                  <Link to="">
                    <a className="text-white text-sm">About Us</a>
                  </Link>
                </li>
                <li className="pb-4">
                  <Link to="">
                    {" "}
                    <a className="text-white text-sm">Blog</a>
                  </Link>
                </li>
                <li className="pb-4">
                  <Link to="">
                    {" "}
                    <a className="text-white text-sm">OceanCapp2.0</a>
                  </Link>
                </li>
                <li className="pb-4">
                  <Link to="">
                    <a className="text-white text-sm">Product</a>
                  </Link>
                </li>
                <li className="pb-4">
                  <Link to="">
                    {" "}
                    <a className="text-white text-sm">Privacy Policy</a>
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-white tracking-widest text-base mb-3">
                Service
              </h2>
              <nav className="list-none mb-10">
                <li className="pb-4">
                  <Link to="">
                    <a className="text-white text-sm">Team Augmentation</a>
                  </Link>
                </li>
                <li className="pb-4">
                  <Link to="">
                    {" "}
                    <a className="text-white text-sm">Offshore Development</a>
                  </Link>
                </li>
                <li className="pb-4">
                  <Link to="">
                    {" "}
                    <a className="text-white text-sm">MVP Service</a>
                  </Link>
                </li>
                <li className="pb-4">
                  <Link to="">
                    <a className="text-white text-sm">End to End Development</a>
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-white tracking-widest text-base mb-3">
                Hiring  
              </h2>
              <nav className="list-none mb-10">
                <li className="pb-4">
                  <Link to="https://wa.link/8bkntc">
                    <a className="text-white text-sm">Graphics Design</a>
                  </Link>
                </li>
                <li className="pb-4">
                  <Link to="https://wa.link/8bkntc">
                    {" "}
                    <a className="text-white text-sm">WordPress development</a>
                  </Link>
                </li>
                <li className="pb-4">
                  <Link to="https://wa.link/8bkntc">
                    {" "}
                    <a className="text-white text-sm">Web Development</a>
                  </Link>
                </li>
                <li className="pb-4">
                  <Link to="https://wa.link/8bkntc">
                    <a className="text-white text-sm">Cyber Security</a>
                  </Link>
                </li>
                <li className="pb-4">
                  <Link to="https://wa.link/8bkntc">
                    {" "}
                    <a className="text-white text-sm">App Development</a>
                  </Link>
                </li>
                <li className="pb-4">
                  <Link to="https://wa.link/8bkntc">
                    {" "}
                    <a className="text-white text-sm">Prompt Engineering</a>
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-white tracking-widest text-base mb-3">
                Contact Us
              </h2>
              <nav className="list-none mb-10">
                <li className="pb-4 pl-[90px] lg:pl-0 md:pl-0">
                  <Link to="https://wa.link/8bkntc">
                  <div className="flex ">
                  <MdOutlinePhoneCallback size="1.3rem" className="" color="white" /> <a href="https://wa.link/8bkntc" className="text-white text-sm">+880 1785030648</a>
                  </div>
                  </Link>
                </li>
                <li className="pb-4 pl-[90px] lg:pl-0 md:pl-0">
                  <Link to="mailto:oceancapp@gmail.com">
                    {" "}
                    <div className="flex ">
                  <MdEmail size="1.3rem" className="" color="white" /> <a href="mailto:oceancapp@gmail.com" className="text-white text-sm">@oceancapp.com</a>
                  </div>
                  </Link>
                </li>
                {/* <li className="pb-4">
                  <Link to="">
                    {" "}
                    <a class="text-white">Anti-discrimination</a>
                  </Link>
                </li>
                <li className="pb-4">
                  <Link to="">
                    <a class="text-white">Disability support</a>
                  </Link>
                </li>
                <li className="pb-4">
                  <Link to="">
                    {" "}
                    <a class="text-white">Cancellation options</a>
                  </Link>
                </li> */}
                {/* <li className="pb-4">
                  <Link to="">
                    {" "}
                    <a class="text-white">Report neighborhood</a>
                  </Link>
                </li> */}
              </nav>
            </div>
          </div>
        </div>
        <div className="h-[1px] w-full bg-white"></div>
        <div className="">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-white text-sm text-center sm:text-left">
              © 2024 OceanCapp —
              <a
                href=" "
                rel="noopener noreferrer"
                className="text-white ml-1"
                target="_blank"
                previewlistener="true"
              >
                @OceanCapp
              </a>
            </p>

            <div className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <div className="grid grid-flow-col gap-3">
                <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                  <Link to="https://www.facebook.com/oceancapp">
                    <a href="https://www.facebook.com/oceancapp">
                      <FaFacebookF href="https://www.facebook.com/oceancapp" size="1.2rem" color="white" />
                    </a>
                  </Link>
                </motion.div>

                <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                  <Link to="https://www.facebook.com/oceancapp">
                    <a href="https://www.facebook.com/oceancapp">
                      <FaInstagram href="https://www.facebook.com/oceancapp" size="1.2rem" color="white" />
                    </a>
                  </Link>
                </motion.div>

                <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                  <Link to="https://www.linkedin.com/company/oceancapp/">
                    <a href="https://www.linkedin.com/company/oceancapp/">
                      <FaLinkedinIn href="https://www.linkedin.com/company/oceancapp/" size="1.2rem" color="white" />
                    </a>
                  </Link>
                </motion.div>

                <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                  <Link to="https://x.com/ocean_capp">
                    <a href="https://x.com/ocean_capp">
                      <BsTwitterX href="https://x.com/ocean_capp" size="1.2rem" color="white" />
                    </a>
                  </Link>
                </motion.div>
                <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                  <Link to="https://wa.link/8bkntc">
                    <a href="https://wa.link/8bkntc">
                      <FaWhatsapp href="https://wa.link/8bkntc" size="1.2rem" color="white" />
                    </a>
                  </Link>
                </motion.div>
                <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                  <Link to="">
                    <a href="">
                      <FaDiscord size="1.2rem" color="white" />
                    </a>
                  </Link>
                </motion.div>
                <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                  <Link to="">
                    <a href="">
                      <FaThreads size="1.2rem" color="white" />
                    </a>
                  </Link>
                </motion.div>
                <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                  <Link to="">
                    <a href="">
                      <FaYoutube size="1.2rem" color="white" />
                    </a>
                  </Link>
                </motion.div>
                <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                  <Link to="mailto:oceancapp@gmail.com">
                    <a href="mailto:oceancapp@gmail.com">
                      <BiLogoGmail href="mailto:oceancapp@gmail.com" size="1.2rem" color="white" />
                    </a>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
