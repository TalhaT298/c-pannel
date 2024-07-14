/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import ser from "../../assets/service.png";

const Services = () => {
  return (
    <Link to="/services">
      <>
        {/* 1st phase start */}
        <div>
          <img src={ser} alt="" />
        </div>
        {/* 1st phase finish */}
        {/* 2nd phase start */}
        <div>
          <div className="mx-auto md:w-8/12 mb-2 mt-16 flex justify-center items-center ">
            {/* <p className='text-yellow-600'>----{subHeading}--</p */}
            <h3 className="text-4xl bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-800 text-transparent bg-clip-text uppercase pt-4 font-bold font-serif">
            OUR SERVICES
            </h3>
          </div>
          <div className="h-1 w-80 bg-cyan-600 rounded flex justify-center items-center mx-auto my-auto hover:animate-ping"></div>
          <p className="text-center font-thin">Oceancapp offers a diverse range of IT solutions to meet various needs. Our web development services include custom website design, e-commerce solutions, and responsive designs for all devices. We provide top-notch graphics design, including logos, brand identities, marketing materials, and UI/UX designs. Our WordPress solutions encompass custom theme and plugin development, as well as website maintenance and WooCommerce integration. We also specialize in game development, creating 2D and 3D games, mobile games, and VR/AR experiences. Our prompt engineering services cover AI-driven chatbots, natural language processing, and custom automation scripts. Additionally, our cybersecurity solutions include security audits, vulnerability assessments, penetration testing, and data protection. Oceancapp aims to revolutionize the IT landscape in Bangladesh by making innovation simplified and accessible for all.</p>
        </div>
        {/* 2nd phase finish */}
      </>
    </Link>
  );
};

export default Services;
