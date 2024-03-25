import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { BsTwitterX } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  return (
    <div>
      Explain
      <footer class="text-gray-600 body-font">
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
            <p class="mt-2 text-sm text-gray-500">
              Air plant banjo lyft occupy retro adaptogen indego
            </p>
          </div>
          <div class="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-bold text-black tracking-widest text-base mb-3">
                Support
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <Link to=""><a class="text-black">Help Center</a></Link>
                </li>
                <li>
                <Link to=""> <a class="text-black">AirCover</a></Link>
                </li>
                <li>
                <Link to=""> <a class="text-black">Anti-discrimination</a></Link>
                </li>
                <li>
                <Link to=""><a class="text-black">Disability support</a></Link>
                </li>
                <li>
                <Link to=""> <a class="text-black">Cancellation options</a></Link>
                </li>
                <li>
                <Link to=""> <a class="text-black">Report neighborhood</a></Link>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-bold text-black tracking-widest text-base mb-3">
              Hosting
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <Link to=""><a class="text-black">Airbnb your home</a></Link>
                </li>
                <li>
                <Link to=""> <a class="text-black">AirCover for Hosts</a></Link>
                </li>
                <li>
                <Link to=""> <a class="text-black">Hosting resources</a></Link>
                </li>
                <li>
                <Link to=""><a class="text-black">Community forum</a></Link>
                </li>
                <li>
                <Link to=""> <a class="text-black">Hosting responsibly</a></Link>
                </li>
                <li>
                <Link to=""> <a class="text-black">Airbnb-friendly apartments</a></Link>
                </li>
                <li>
                <Link to=""> <a class="text-black">Join a free Hosting class</a></Link>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-bold text-black tracking-widest text-base mb-3">
              Airbnb
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <Link to=""><a class="text-black">Newsroom</a></Link>
                </li>
                <li>
                <Link to=""> <a class="text-black">New features</a></Link>
                </li>
                <li>
                <Link to=""> <a class="text-black">Careers</a></Link>
                </li>
                <li>
                <Link to=""><a class="text-black">Investors</a></Link>
                </li>
                <li>
                <Link to=""> <a class="text-black">Gift cards</a></Link>
                </li>
                <li>
                <Link to=""> <a class="text-black">Airbnb.org emergency</a></Link>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-bold text-black tracking-widest text-base mb-3">
                Support
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <Link to=""><a class="text-black">Help Center</a></Link>
                </li>
                <li>
                <Link to=""> <a class="text-black">AirCover</a></Link>
                </li>
                <li>
                <Link to=""> <a class="text-black">Anti-discrimination</a></Link>
                </li>
                <li>
                <Link to=""><a class="text-black">Disability support</a></Link>
                </li>
                <li>
                <Link to=""> <a class="text-black">Cancellation options</a></Link>
                </li>
                <li>
                <Link to=""> <a class="text-black">Report neighborhood</a></Link>
                </li>
              </nav>
            </div>
            
          </div>
        </div>
        <div class="h-[1px] w-full bg-black"></div>
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
                      <FaFacebookF size="1.2rem" color="black" />
                    </a>
                  </Link>
                </motion.div>

                <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                  <Link to="">
                    <a href="">
                      <FaInstagram size="1.2rem" color="black" />
                    </a>
                  </Link>
                </motion.div>

                <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                  <Link to="">
                    <a href="">
                      <FaLinkedinIn size="1.2rem" color="black" />
                    </a>
                  </Link>
                </motion.div>

                <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                  <Link to="">
                    <a href="">
                      <BsTwitterX size="1.2rem" color="black" />
                    </a>
                  </Link>
                </motion.div>
                <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                  <Link to="">
                    <a href="">
                      <FaWhatsapp size="1.2rem" color="black" />
                    </a>
                  </Link>
                </motion.div>
                {/* <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
              <Link to="">
                <a href="">
                  <FaDiscord size="1.7rem" color="black" />
                </a>
              </Link>
            </motion.div> */}
                {/* <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
              <Link to="">
                <a href="">
                  <FaThreads size="1.7rem" color="black" />
                </a>
              </Link>
            </motion.div> */}
                {/* <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
              <Link to="">
                <a href="">
                  <FaYoutube size="1.7rem" color="black" />
                </a>
              </Link>
            </motion.div> */}
                <motion.div whileTap={{ rotate: 90, scale: 0.75 }}>
                  <Link to="">
                    <a href="">
                      <BiLogoGmail size="1.2rem" color="black" />
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
