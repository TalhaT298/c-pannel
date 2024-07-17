/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { PiArrowRightLight } from "react-icons/pi";
import word1 from "../../assets/manw.png";
import word2 from "../../assets/word11.png";
import sampleVideo from "../../assets/sample-video.mp4";
const GameDevelopment = () => {
  return (
    <>
      <Link to="/gameDevelopment"></Link>
      <div>
        {/* ---------------------------------1st phase ----------------------------*/}
        <div className="flex flex-col md:flex-row items-center justify-between p-8 shadow-md rounded-lg">
          <div className="text-center md:text-left md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-4xl bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-800 text-transparent bg-clip-text uppercase pt-4 font-bold font-serif">
              WordPress Development
            </h3>
            <h2 className="text-white font-extrabold text-2xl mb-4">
              Register by contacting us
            </h2>
            <p className="text-white mb-8">
              Oceancapp's WordPress services are unmatched in their ability to
              create customized solutions that cater specifically to our
              clients' needs. We specialize in developing bespoke WordPress
              themes and plugins, tailored to enhance functionality and meet
              unique business requirements effectively. Our team excels in
              providing comprehensive support, from initial design and
              development to ongoing maintenance and updates, ensuring seamless
              integration and optimal performance.We prioritize user-friendly
              interfaces and robust security measures.
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
                src={word1}
                alt="Sale"
                className="rounded-lg shadow-lg mb-4 md:mb-0 md:mr-4"
              ></img>
              <img
                src={word2}
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
              <source src={sampleVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="md:w-1/2 md:ml-8 text-center md:text-left">
              <h3 className="text-3xl text-white font-bold mb-4">
                Learn More About Our WordPress Services
              </h3>
              <p className="text-white mb-8">
                Watch this introductory video to get a better understanding of
                our comprehensive range of services. Our team of experts is
                dedicated to providing top-notch solutions tailored to meet your
                specific needs. From initial consultation to final
                implementation, we ensure a seamless experience.
              </p>
              <a
                href={sampleVideo}
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
            WordPress Excellence Delivered
          </h3>
        </div>
        <div className="h-1 w-80 bg-cyan-600 rounded flex justify-center items-center mx-auto my-auto hover:animate-ping"></div>
        <p className="text-center font-thin text-xl pt-4">
          <p>At Oceancapp, we pride ourselves on offering unparalleled WordPress
          development services that stand out in the industry. Our commitment to
          quality, innovation, and customer satisfaction ensures that your
          WordPress site will not only meet but exceed your expectations.</p> <br />
          <p>Our team of skilled developers has extensive experience in creating
          custom WordPress solutions tailored to your unique needs. We stay
          updated with the latest trends and technologies to deliver
          cutting-edge websites. We understand that every business is unique,
          which is why we provide customized WordPress solutions that align with
          your brand identity and business goals. From bespoke themes to
          tailored plugins, we've got you covered.</p> <br />
          <p>
          Our focus is on creating websites that are not only visually appealing but also user-friendly. We ensure seamless navigation and an engaging user experience to keep your visitors coming back. Additionally, we build WordPress sites with SEO best practices in mind, helping to improve your website’s visibility on search engines and driving more organic traffic to your site.
          </p><br />
          <p>With the increasing use of mobile devices, having a responsive website is crucial. Our WordPress sites are optimized for all devices, ensuring a seamless experience for your users, whether they're on a desktop, tablet, or smartphone. We also prioritize the performance and security of your website. Our developers implement best practices to ensure your site loads quickly and remains secure against potential threats.</p><br />
          <p>At Oceancapp, we believe in showcasing our expertise through our work. You can easily display your best WordPress sites directly on your website with our portfolio feature, highlighting your top projects and demonstrating your capabilities to potential clients and partners.</p><br />
          <p>Are you passionate about WordPress development and looking to join a dynamic team? Oceancapp is always on the lookout for talented individuals to join our growing family. As part of our team, you'll have the opportunity to work on exciting projects, develop your skills, and contribute to our mission of delivering excellence in WordPress development.</p><br />
          <p>Whether you're looking to build a new WordPress site or enhance your existing one, Oceancapp is here to help. Contact us today to discuss your project and discover how we can transform your vision into a seamless WordPress experience.</p>
        </p>
        {/* ---------------------------------3rd phase finish----------------------------*/}
      </div>
    </>
  );
};

export default GameDevelopment;
