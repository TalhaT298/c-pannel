/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { PiArrowRightLight } from "react-icons/pi";
import appp from "../../assets/appp.png";
import appl from "../../assets/appl.png";
import { GrProjects } from "react-icons/gr";
import appvd from "../../assets/appvd.mp4";
import p17 from "../../assets/p17.png";
import p18 from "../../assets/p18.png";
import p19 from "../../assets/p19.png";
import p20 from "../../assets/p20.png";
import person204 from "../../assets/person204.png";
import person205 from "../../assets/person205.png";
import person206 from "../../assets/person206.png";
import { Helmet } from "react-helmet-async";

const WebDesign = () => {
    return (
        <>
        <Link to="/app"></Link>
        <Helmet>
        <title>Oceancapp | App Development</title>
      </Helmet>
        <div>
        {/* ---------------------------------1st phase ----------------------------*/}
        <div className="flex flex-col md:flex-row items-center justify-between p-8 shadow-md rounded-lg">
          <div className="text-center md:text-left md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-3xl sm:text-3xl md:text-4xl bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-800 text-transparent bg-clip-text uppercase pt-4 font-bold font-serif">
            App Development
            </h3>
            <h2 className="text-white font-extrabold text-xl sm:text-2xl md:text-2xl mb-4">
              Register by contacting us
            </h2>
            <p className="text-white mb-8">
            Oceancapp's app development services are distinguished by our commitment to creating custom applications that cater to the specific needs of our clients. We specialize in designing and building innovative apps that enhance functionality and address unique business requirements. Our skilled team provides end-to-end support, from initial ideation and development to continuous updates and maintenance, ensuring seamless performance and user satisfaction. We focus on delivering intuitive user experiences and incorporating the latest technologies, guaranteeing that your app stands out in a competitive market.
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
                src={appp}
                alt="Sale"
                className="rounded-lg shadow-lg mb-4 md:mb-0 md:mr-4"
              ></img>
              <img
                src={appl}
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
              <source src={appvd} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="md:w-1/2 md:ml-8 text-center md:text-left">
              <h3 className="text-3xl text-white font-bold mb-4">
                Learn More About Our App Development Services
              </h3>
              <p className="text-white mb-8">
              Check out our innovative app development solutions in this engaging video. Our skilled team is dedicated to offering exceptional services customized to your requirements. From brainstorming to seamless delivery, we promise a smooth journey in turning your app concept into reality.
              </p>
              <a
                href={appvd}
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
        <div className="py-8">
        <div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl py-4 text-center bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-800 text-transparent bg-clip-text uppercase pt-4 font-bold font-serif">
           App Development Excellence Delivered
          </h3>
        </div>
        <div className="h-1 w-10 bg-cyan-600 rounded flex justify-center items-center mx-auto my-auto hover:animate-ping"></div>
        <p className="text-center font-thin text-xl text-white pt-4 px-4 lg:px-0 md:px-0 ">
          <p>
          At Oceancapp, we pride ourselves on offering unparalleled app development services that stand out in the industry. Our commitment to quality, innovation, and customer satisfaction ensures that your app will not only meet but exceed your expectations.
          </p>{" "}
          <br />
          <p>
          Our team of skilled developers has extensive experience in creating custom app solutions tailored to your unique needs. We stay updated with the latest trends and technologies to deliver cutting-edge applications. We understand that every business is unique, which is why we provide customized app solutions that align with your brand identity and business goals. From bespoke designs to tailored functionalities, we've got you covered.
          </p>{" "}
          <br />
          <p>
          Our focus is on creating apps that are not only visually appealing but also user-friendly. We ensure seamless navigation and an engaging user experience to keep your users coming back. Additionally, we build apps with performance and usability in mind, ensuring they run smoothly and efficiently on all devices.
          </p>
          <br />
          <p>
          With the increasing use of mobile devices, having a responsive and intuitive app is crucial. Our apps are optimized for various platforms, ensuring a seamless experience for your users, whether they're on Android, iOS, or any other device. We also prioritize the performance and security of your app. Our developers implement best practices to ensure your app runs quickly and remains secure against potential threats.
          </p>
          <br />
          <p>
          At Oceancapp, we believe in showcasing our expertise through our work. You can easily display your best app projects directly on your website with our portfolio feature, highlighting your top projects and demonstrating your capabilities to potential clients and partners.
          </p>
          <br />
          <p>
          Are you passionate about app development and looking to join a dynamic team? Oceancapp is always on the lookout for talented individuals to join our growing family. As part of our team, you'll have the opportunity to work on exciting projects, develop your skills, and contribute to our mission of delivering excellence in app development.
          </p>
          <br />
          <p>
          Whether you're looking to build a new app or enhance your existing one, Oceancapp is here to help. Contact us today to discuss your project and discover how we can transform your vision into a seamless app experience.
          </p>
        </p>
        </div>
        {/* ---------------------------------3rd phase finish----------------------------*/}
        {/* ---------------------------------4th phase start----------------------------*/}
        <div className="flex items-center justify-center  w-full h-[80vh] bg-gradient-to-tr from-black via-black/90 to-black">
          <div className="flex flex-col items-center my-10 mt-40 lg:mt-0 md:mt-20 text-white space-y-8">
            {/* featured div  */}
            <div className="flex items-center gap-4 bg-gradient-to-t from-cyan-600 my-10 to-white/10 py-2 px-6 rounded-lg">
              <div className=" w-8 h-8 text-black text-2xl font-semibold  bg-white flex justify-center items-center rounded-full">
                O
              </div>
              <div>
                <p className="text-white text-sm">Featured on</p>
                <p className="text-white font-medium">Ocean Hunt</p>
              </div>
            </div>
            {/* header  */}
            <h1 className="text-5xl font-semibold text-white text-center leading-[65px] ">
              Let's Build Your Dream App
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
                  src={p17}
                  alt="avatar navigate ui"
                />
              </div>
              <div className="w-14 h-14 bg-[#191919]  rounded-full border-[3px] border-[#191919] relative -left-5">
                <img
                  className="w-full h-full rounded-full"
                  src={p18}
                  alt="avatar navigate ui"
                />
              </div>
              <div className="w-14 h-14 bg-[#191919]  rounded-full border-[3px] border-[#191919]  relative -left-10">
                <img
                  className="w-full h-full rounded-full"
                  src={p19}
                  alt="avatar navigate ui"
                />
              </div>
              <div className="w-14 h-14 bg-[#191919]  rounded-full border-[3px] border-[#191919]  relative -left-[60px]">
                <img
                  className="w-full h-full rounded-full"
                  src={p20}
                  alt="avatar navigate ui"
                />
              </div>

              <div className="relative -left-5">
                <p className="text-lg text-white">50+</p>
                <p className="text-sm text-gray-400">people already showing</p>
              </div>
            </div>
            {/* buttons  */}
            <div className="flex flex-wrap gap-10 items-center py-4">
            <Link to="">
              <button className="flex items-center gap-4 px-4 py-2 md:px-8 md:py-3 bg-gradient-to-b from-cyan-600 to-black text-white text-sm md:text-lg font-medium rounded-lg">
                Show Here{" "}
                <svg
                  width={20}
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
              <button className="flex items-center gap-4 px-4 py-2 md:px-8 md:py-3 bg-gradient-to-t from-black to-white/10 text-white text-sm md:text-lg font-medium rounded-lg">
                Projects <GrProjects className="" />
              </button>
            </Link>
          </div>
          </div>
        </div>
        {/* ---------------------------------4th phase finish----------------------------*/}
        {/* ---------------------------------5th phase start----------------------------*/}
        <div className="py-8">
        <Marquee className="pt-16"  direction="right" speed={50}>
        <p className="text-xl md:text-4xl font-extrabold font-serif px-4">User Interface (UI)</p>
    <p className="text-xl md:text-4xl font-extrabold font-serif px-4">User Experience (UX)</p>
    <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Mobile App</p>
    <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Web App</p>
    <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Cross-Platform</p>
    <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Responsive Design</p>
    <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Backend Development</p>
    <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Frontend Development</p>
    <p className="text-xl md:text-4xl font-extrabold font-serif px-4">API Integration</p>
    <p className="text-xl md:text-4xl font-extrabold font-serif px-4">User Authentication</p>
    <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Push Notifications</p>
    <p className="text-xl md:text-4xl font-extrabold font-serif px-4">In-App Purchases</p>
    <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Cloud Services</p>
    <p className="text-xl md:text-4xl font-extrabold font-serif px-4">App Deployment</p>
    <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Version Control</p>
    <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Performance Optimization</p>
      </Marquee>
      <Marquee className="my-5"  direction="left" speed={50}>
      <p className="text-xl md:text-4xl font-extrabold font-serif px-4">User Engagement</p>
    <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Data Synchronization</p>
    <p className="text-xl md:text-4xl font-extrabold font-serif px-4">App Analytics</p>
    <p className="text-xl md:text-4xl font-extrabold font-serif px-4">App Monetization</p>
    <p className="text-xl md:text-4xl font-extrabold font-serif px-4">App Store Optimization (ASO)</p>
    <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Continuous Integration</p>
    <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Continuous Delivery</p>
    <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Testing and Debugging</p>
    <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Scalability</p>
    <p className="text-xl md:text-4xl font-extrabold font-serif px-4">App Security</p>
    <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Prototype</p>
    <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Wireframe</p>
    <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Feature Set</p>
      </Marquee>
        </div>
        {/* ---------------------------------5th phase finish----------------------------*/}
        {/* ---------------------------------6th phase finish----------------------------*/}
        <div>
        <div className="mx-auto md:w-8/12 mb-2 mt-10 flex justify-center items-center ">
          <h3 className="text-2xl sm:text-3xl md:text-4xl bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-800 text-transparent bg-clip-text uppercase pt-4 font-bold font-serif">
            Words From Clients
          </h3>
        </div>
        <div className="h-1 w-10 bg-cyan-600 rounded flex justify-center items-center mx-auto my-auto hover:animate-ping"></div>
        <div>
          <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-12 mx-auto">
              <div className="-my-8 divide-y-2 divide-cyan-700">
                <div className="py-8 flex flex-wrap md:flex-nowrap">
                  <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                    <img src={person204} className="w-40 h-40" alt="" />
                  </div>
                  <div className="md:flex-grow">
                    <h2 className="text-2xl font-medium text-white title-font mb-2">
                    Ravi Patel - Application Development Specialist
                    </h2>
                    <p className="leading-relaxed text-white">
                    "Partnering with Oceancapp for our application development needs was a great choice. Their team provided insightful guidance and developed a robust application that integrates seamlessly with our systems. The quality of their work and their ability to address complex challenges have been exceptional. Oceancapp’s dedication to creating effective and user-friendly applications has been invaluable to our success."
                    </p>
                    
                  </div>
                </div>
                <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                    <img src={person205} className="w-40 h-40" alt="" />
                  </div>
                  <div className="md:flex-grow">
                    <h2 className="text-2xl font-medium text-white title-font mb-2">
                    Fatima Khan - Custom App Solutions
                    </h2>
                    <p className="leading-relaxed text-white">
                    "Oceancapp’s custom app development services have greatly benefited our organization. They delivered a tailored application that meets our unique requirements and enhances our operational efficiency. The team’s professionalism and technical proficiency were impressive throughout the project. Oceancapp’s commitment to delivering a high-quality app that truly serves our needs is commendable."
                    </p>
                    
                  </div>
                </div>
                <div className="py-8 flex flex-wrap md:flex-nowrap">
                  <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                    <img src={person206} className="w-40 h-40" alt="" />
                  </div>
                  <div className="md:flex-grow">
                    <h2 className="text-2xl font-medium text-white title-font mb-2">
                    Sophia Ahmed - Mobile App Development
                    </h2>
                    <p className="leading-relaxed text-white">
                    "Choosing Oceancapp for our mobile app development was an outstanding decision. Their team designed and developed an intuitive, high-performance app that perfectly aligns with our business goals. From initial concept to final launch, their attention to detail and innovative solutions were evident. Oceancapp’s expertise in mobile app development has provided us with a top-notch product that stands out in the market."
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

export default WebDesign;