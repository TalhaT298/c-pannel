/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import ser from "../../assets/service.png";
import { GiEarthAsiaOceania } from "react-icons/gi";
import webc from "../../assets/webc.png";
import wordc from "../../assets/wordc.png";
import graa from "../../assets/graa.png";
import cb from "../../assets/cb.png";
import prompti from "../../assets/prompti.png";
import appi from "../../assets/appi.png";
import { PiArrowRightLight } from "react-icons/pi";
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
                <div className="card-actions pt-2 flex justify-start items-center">
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
                  seamless integration and optimal performance.We prioritize user-friendly
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
                  <p className="pl-2 font-bold">
                    Website maintenance and updates
                  </p>
                </div>
                <div className="flex text-white pt-2">
                  <GiEarthAsiaOceania className="w-6 h-6 text-cyan-700" />
                  <p className="pl-2 font-bold">WooCommerce integration</p>
                </div>
                <div className="card-actions pt-2 flex justify-start items-center">
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
              </div>
              <div className="lg:w-1/2 w-full p-4">
                <img
                  alt="ecommerce"
                  className="w-full h-full object-cover object-center rounded"
                  src={wordc}
                />
              </div>
            </div>
          </div>
        </section>
        {/* 4th phase finish----------------------------------- */}
        {/* 5th phase start----------------------------------- */}
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 pt-8 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="lg:w-1/2 w-full p-4">
                <img
                  alt="ecommerce"
                  className="w-full h-full object-cover object-center rounded"
                  src={graa}
                />
              </div>
              <div className="lg:w-1/2 w-full p-4 flex flex-col justify-center">
                <h1 class="text-4xl font-bold title-font mb-1">
                  <span class="bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-800 bg-clip-text text-transparent">
                  Graphics Design
                  </span>
                </h1>
                <p className="leading-relaxed text-white">
                Oceancapp's graphics design services are exceptional due to our creativity, attention to detail, and ability to capture your brand's essence. Our talented designers craft compelling logos, cohesive brand identities, and striking marketing materials that resonate with your audience. We focus on delivering visually appealing, functional designs that align with your vision and goals. By staying updated with the latest trends, we provide innovative and impactful design solutions. Oceancapp's commitment to quality and client satisfaction makes us the top choice for outstanding graphics design services.
                </p>
                <div className="flex text-white pt-2">
                  <GiEarthAsiaOceania className="w-6 h-6 text-cyan-700" />
                  <p className="pl-2 font-bold">
                  Logo design
                  </p>
                </div>
                <div className="flex text-white pt-2">
                  <GiEarthAsiaOceania className="w-6 h-6 text-cyan-700" />
                  <p className="pl-2 font-bold">Brand identity</p>
                </div>
                <div className="flex text-white pt-2">
                  <GiEarthAsiaOceania className="w-6 h-6 text-cyan-700" />
                  <p className="pl-2 font-bold">Marketing materials (brochures, flyers, etc.)</p>
                </div>
                <div className="flex text-white pt-2">
                  <GiEarthAsiaOceania className="w-6 h-6 text-cyan-700" />
                  <p className="pl-2 font-bold">
                  UI/UX design
                  </p>
                </div>
                <div className="card-actions pt-2 flex justify-start items-center">
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
              </div>
            </div>
          </div>
        </section>
        {/* 5th phase finish----------------------------------- */}
        {/* 6th phase start----------------------------------- */}
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="lg:w-1/2 w-full p-4 flex flex-col justify-center">
                <h1 class="text-4xl font-bold title-font mb-1">
                  <span class="bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-800 bg-clip-text text-transparent">
                  Cybersecurity Solutions
                  </span>
                </h1>
                <p className="leading-relaxed text-white">
                Oceancapp stands out in cybersecurity with tailored solutions that include thorough audits, vulnerability assessments, and proactive defense strategies. Our team ensures robust data protection and compliance, leveraging advanced technologies to stay ahead of emerging threats. With a focus on proactive security measures and industry standards, Oceancapp is your trusted partner for reliable cybersecurity solutions.
                </p>
                <div className="flex text-white pt-2">
                  <GiEarthAsiaOceania className="w-6 h-6 text-cyan-700" />
                  <p className="pl-2 font-bold">
                  Security audits and vulnerability assessments
                  </p>
                </div>
                <div className="flex text-white pt-2">
                  <GiEarthAsiaOceania className="w-6 h-6 text-cyan-700" />
                  <p className="pl-2 font-bold">Penetration testing</p>
                </div>
                <div className="flex text-white pt-2">
                  <GiEarthAsiaOceania className="w-6 h-6 text-cyan-700" />
                  <p className="pl-2 font-bold">
                  Network security
                  </p>
                </div>
                <div className="flex text-white pt-2">
                  <GiEarthAsiaOceania className="w-6 h-6 text-cyan-700" />
                  <p className="pl-2 font-bold">Data protection and compliance</p>
                </div>
                <div className="card-actions pt-2 flex justify-start items-center">
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
              </div>
              <div className="lg:w-1/2 w-full p-4">
                <img
                  alt="ecommerce"
                  className="w-full h-full object-cover object-center rounded"
                  src={cb}
                />
              </div>
            </div>
          </div>
        </section>
        {/* 6th phase finish----------------------------------- */}
        {/* 7th phase start----------------------------------- */}
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 pt-16 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="lg:w-1/2 w-full p-4">
                <img
                  alt="ecommerce"
                  className="w-full h-full object-cover object-center rounded"
                  src={prompti}
                />
              </div>
              <div className="lg:w-1/2 w-full p-4 flex flex-col justify-center">
                <h1 class="text-4xl font-bold title-font mb-1">
                  <span class="bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-800 bg-clip-text text-transparent">
                  Prompt Engineering
                  </span>
                </h1>
                <p className="leading-relaxed text-white">
                Oceancapp's Prompt Engineering service leads with advanced AI solutions like chatbots, natural language processing, and custom automation scripts. We specialize in enhancing efficiency and user interaction, delivering tailored solutions that integrate seamlessly and drive measurable results. With a focus on innovation and client-specific needs, Oceancapp empowers businesses to achieve operational excellence through cutting-edge Prompt Engineering services.
                </p>
                <div className="flex text-white pt-2">
                  <GiEarthAsiaOceania className="w-6 h-6 text-cyan-700" />
                  <p className="pl-2 font-bold">
                  AI and chatbot development
                  </p>
                </div>
                <div className="flex text-white pt-2">
                  <GiEarthAsiaOceania className="w-6 h-6 text-cyan-700" />
                  <p className="pl-2 font-bold">Natural language processing solutions</p>
                </div>
                <div className="flex text-white pt-2">
                  <GiEarthAsiaOceania className="w-6 h-6 text-cyan-700" />
                  <p className="pl-2 font-bold">Custom automation scripts</p>
                </div>
                <div className="flex text-white pt-2">
                  <GiEarthAsiaOceania className="w-6 h-6 text-cyan-700" />
                  <p className="pl-2 font-bold">
                  AI-driven data analysis and insights
                  </p>
                </div>
                <div className="card-actions pt-2 flex justify-start items-center">
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
              </div>
            </div>
          </div>
        </section>
        {/* 7th phase finish----------------------------------- */}
        {/* 8th phase start----------------------------------- */}
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="lg:w-1/2 w-full p-4 flex flex-col justify-center">
                <h1 class="text-4xl font-bold title-font mb-1">
                  <span class="bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-800 bg-clip-text text-transparent">
                    App Development
                  </span>
                </h1>
                <p className="leading-relaxed text-white">
                Oceancapp excels in app development by delivering tailored solutions for iOS and Android that blend innovation with practicality. We specialize in user-centric design, ensuring intuitive interfaces that enhance engagement. Our cross-platform expertise guarantees seamless performance across devices, making us the preferred choice for businesses seeking reliable and effective app solutions.
                </p>
                <div className="flex text-white pt-2">
                  <GiEarthAsiaOceania className="w-6 h-6 text-cyan-700" />
                  <p className="pl-2 font-bold">
                  Custom Mobile Apps for iOS and Android
                  </p>
                </div>
                <div className="flex text-white pt-2">
                  <GiEarthAsiaOceania className="w-6 h-6 text-cyan-700" />
                  <p className="pl-2 font-bold">Enterprise Solutions for streamlined operations</p>
                </div>
                <div className="flex text-white pt-2">
                  <GiEarthAsiaOceania className="w-6 h-6 text-cyan-700" />
                  <p className="pl-2 font-bold">
                  User-Centric Design for intuitive interfaces
                  </p>
                </div>
                <div className="flex text-white pt-2">
                  <GiEarthAsiaOceania className="w-6 h-6 text-cyan-700" />
                  <p className="pl-2 font-bold">Cross-Platform Compatibility for seamless performance</p>
                </div>
                <div className="card-actions pt-2 flex justify-start items-center">
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
              </div>
              <div className="lg:w-1/2 w-full p-4">
                <img
                  alt="ecommerce"
                  className="w-full h-full object-cover object-center rounded"
                  src={appi}
                />
              </div>
            </div>
          </div>
        </section>
        {/* 8th phase finish----------------------------------- */}
        
      </>
    </Link>
  );
};

export default Services;
