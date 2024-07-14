/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import ser from "../../assets/service.png";
import { GiEarthAsiaOceania } from "react-icons/gi";
import webc from "../../assets/webc.png";

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
          <p className="text-center font-thin">
            Oceancapp offers a diverse range of IT solutions to meet various
            needs. Our web development services include custom website design,
            e-commerce solutions, and responsive designs for all devices. We
            provide top-notch graphics design, including logos, brand
            identities, marketing materials, and UI/UX designs. Our WordPress
            solutions encompass custom theme and plugin development, as well as
            website maintenance and WooCommerce integration. We also specialize
            in game development, creating 2D and 3D games, mobile games, and
            VR/AR experiences. Our prompt engineering services cover AI-driven
            chatbots, natural language processing, and custom automation
            scripts. Additionally, our cybersecurity solutions include security
            audits, vulnerability assessments, penetration testing, and data
            protection. Oceancapp aims to revolutionize the IT landscape in
            Bangladesh by making innovation simplified and accessible for all.
          </p>
        </div>
        {/* 2nd phase finish */}
        {/* 3rd phase start--------------------------------------------------------------- */}
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 pt-16 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="lg:w-1/2 w-full p-4">
                <img
                  alt="ecommerce"
                  className="w-full h-full object-cover object-center rounded"
                  src={webc}
                />
              </div>
              <div className="lg:w-1/2 w-full p-4 flex flex-col justify-center">
                <h1 class="text-4xl font-bold title-font mb-1">
                  <span class="bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-800 bg-clip-text text-transparent">
                    Web Development
                  </span>
                </h1>
                <p className="leading-relaxed text-white">
                  At Oceancapp, our web development services excel in delivering
                  tailored solutions that blend creativity with technical
                  expertise. We prioritize user-centric design, ensuring our
                  websites are not only visually appealing but also highly
                  functional and responsive across all devices. By leveraging
                  the latest technologies, we create robust e-commerce
                  platforms, dynamic web applications, and intuitive user
                  interfaces that enhance user experience and drive business
                  growth. Oceancapp stands out for its commitment to innovation
                  and quality, making us the ideal choice for businesses looking
                  to elevate their online presence.
                </p>
                <div className="flex text-white pt-2">
                  <GiEarthAsiaOceania className="w-6 h-6 text-cyan-700" />
                  <p className="pl-2 font-bold">
                    Custom website design and development
                  </p>
                </div>
                <div className="flex text-white pt-2">
                  <GiEarthAsiaOceania className="w-6 h-6 text-cyan-700" />
                  <p className="pl-2 font-bold">E-commerce solutions</p>
                </div>
                <div className="flex text-white pt-2">
                  <GiEarthAsiaOceania className="w-6 h-6 text-cyan-700" />
                  <p className="pl-2 font-bold">Web application development</p>
                </div>
                <div className="flex text-white pt-2">
                  <GiEarthAsiaOceania className="w-6 h-6 text-cyan-700" />
                  <p className="pl-2 font-bold">
                    Responsive design for mobile and desktop
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3rd phase finish--------------------------------------------------------------- */}

        {/* 4th phase start----------------------------------- */}
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="lg:w-1/2 w-full p-4 flex flex-col justify-center">
                <h1 class="text-4xl font-bold title-font mb-1">
                  <span class="bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-800 bg-clip-text text-transparent">
                  WordPress Development
                  </span>
                </h1>
                <p className="leading-relaxed text-white">
                  Oceancapp's WordPress services are unmatched in their ability
                  to create customized solutions that cater specifically to our
                  clients' needs. We specialize in developing bespoke WordPress
                  themes and plugins, tailored to enhance functionality and meet
                  unique business requirements effectively. Our team excels in
                  providing comprehensive support, from initial design and
                  development to ongoing maintenance and updates, ensuring
                  seamless integration and optimal performance. Whether it's
                  building scalable e-commerce platforms or crafting engaging
                  content management systems, we prioritize user-friendly
                  interfaces and robust security measures. 
                </p>
                <div className="flex text-white pt-2">
                  <GiEarthAsiaOceania className="w-6 h-6 text-cyan-700" />
                  <p className="pl-2 font-bold">
                  Custom WordPress theme development
                  </p>
                </div>
                <div className="flex text-white pt-2">
                  <GiEarthAsiaOceania className="w-6 h-6 text-cyan-700" />
                  <p className="pl-2 font-bold">Plugin development</p>
                </div>
                <div className="flex text-white pt-2">
                  <GiEarthAsiaOceania className="w-6 h-6 text-cyan-700" />
                  <p className="pl-2 font-bold">Website maintenance and updates</p>
                </div>
                <div className="flex text-white pt-2">
                  <GiEarthAsiaOceania className="w-6 h-6 text-cyan-700" />
                  <p className="pl-2 font-bold">
                  WooCommerce integration
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2 w-full p-4">
                <img
                  alt="ecommerce"
                  className="w-full h-full object-cover object-center rounded"
                  src={webc}
                />
              </div>
            </div>
          </div>
        </section>
        {/* 4th phase start----------------------------------- */}
      </>
    </Link>
  );
};

export default Services;
