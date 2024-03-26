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

const Footer = () => {
  return (
    <div>
      <footer class="text-white body-font">
        <div class="container px-5 py-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
            <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span class="ml-3 text-xl">Tailblocks</span>
            </a>
            <p class="mt-2 text-sm text-white">
              Air plant banjo lyft occupy retro adaptogen indego
            </p>
          </div>
          <div class="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-bold text-white tracking-widest text-base mb-3">
                Company
              </h2>
              <nav class="list-none mb-10">
                <li className="pb-4">
                  <Link to="">
                    <a className="text-white text-sm">About Us</a>
                  </Link>
                </li>
                <li className="pb-4">
                  <Link to="">
                    {" "}
                    <a class="text-white text-sm">Blog</a>
                  </Link>
                </li>
                <li className="pb-4">
                  <Link to="">
                    {" "}
                    <a class="text-white text-sm">OceanCapp2.0</a>
                  </Link>
                </li>
                <li className="pb-4">
                  <Link to="">
                    <a class="text-white text-sm">Product</a>
                  </Link>
                </li>
                <li className="pb-4">
                  <Link to="">
                    {" "}
                    <a class="text-white text-sm">Privacy Policy</a>
                  </Link>
                </li>
                {/* <li>
                <Link to=""> <a class="text-white">Report neighborhood</a></Link>
                </li> */}
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-bold text-white tracking-widest text-base mb-3">
                Service
              </h2>
              <nav class="list-none mb-10">
                <li className="pb-4">
                  <Link to="">
                    <a class="text-white text-sm">Team Augmentation</a>
                  </Link>
                </li>
                <li className="pb-4">
                  <Link to="">
                    {" "}
                    <a class="text-white text-sm">Offshore Development</a>
                  </Link>
                </li>
                <li className="pb-4">
                  <Link to="">
                    {" "}
                    <a class="text-white text-sm">MVP Service</a>
                  </Link>
                </li>
                <li className="pb-4">
                  <Link to="">
                    <a class="text-white text-sm">End to End Development</a>
                  </Link>
                </li>
                {/* <li>
                <Link to=""> <a class="text-white">Hosting responsibly</a></Link>
                </li>
                <li>
                <Link to=""> <a class="text-white">Airbnb-friendly apartments</a></Link>
                </li>
                <li>
                <Link to=""> <a class="text-white">Join a free Hosting class</a></Link>
                </li> */}
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-bold text-white tracking-widest text-base mb-3">
                Hiring Developers
              </h2>
              <nav class="list-none mb-10">
                <li className="pb-4">
                  <Link to="">
                    <a class="text-white text-sm">Hire Developers</a>
                  </Link>
                </li>
                <li className="pb-4">
                  <Link to="">
                    {" "}
                    <a class="text-white text-sm">Hire JavaScript Developers</a>
                  </Link>
                </li>
                <li className="pb-4">
                  <Link to="">
                    {" "}
                    <a class="text-white text-sm">Hire Python Developers</a>
                  </Link>
                </li>
                <li className="pb-4">
                  <Link to="">
                    <a class="text-white text-sm">Hire Java Developers</a>
                  </Link>
                </li>
                <li className="pb-4">
                  <Link to="">
                    {" "}
                    <a class="text-white text-sm">Hire Golang Developers</a>
                  </Link>
                </li>
                <li className="pb-4">
                  <Link to="">
                    {" "}
                    <a class="text-white text-sm">Hire .NET Developers</a>
                  </Link>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-bold text-white tracking-widest text-base mb-3">
                Contact Us
              </h2>
              <nav class="list-none mb-10">
                <li className="pb-4">
                  <Link to="">
                    <a class="text-white text-sm">contact@oceanCapp.com</a>
                  </Link>
                </li>
                <li className="pb-4">
                  <Link to="">
                    {" "}
                    <a class="text-white text-sm">+880 1785030648</a>
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
        <div class="h-[1px] w-full bg-white"></div>
        <div class="">
          <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p class="text-gray-500 text-sm text-center sm:text-left">
              © 2020 Tailblocks —
              <a
                href="https://twitter.com/knyttneve"
                rel="noopener noreferrer"
                class="text-gray-600 ml-1"
                target="_blank"
                previewlistener="true"
              >
                @knyttneve
              </a>
            </p>

            <div class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <div className="grid grid-flow-col gap-3">
                <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                  <Link to="">
                    <a href="">
                      <FaFacebookF size="1.2rem" color="white" />
                    </a>
                  </Link>
                </motion.div>

                <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                  <Link to="">
                    <a href="">
                      <FaInstagram size="1.2rem" color="white" />
                    </a>
                  </Link>
                </motion.div>

                <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                  <Link to="">
                    <a href="">
                      <FaLinkedinIn size="1.2rem" color="white" />
                    </a>
                  </Link>
                </motion.div>

                <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                  <Link to="">
                    <a href="">
                      <BsTwitterX size="1.2rem" color="white" />
                    </a>
                  </Link>
                </motion.div>
                <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                  <Link to="">
                    <a href="">
                      <FaWhatsapp size="1.2rem" color="white" />
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
                  <Link to="">
                    <a href="">
                      <BiLogoGmail size="1.2rem" color="white" />
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
