/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { PiArrowRightLight } from "react-icons/pi";
import word3 from "../../assets/word3.png";
import word4 from "../../assets/word4.png";
import { GrProjects } from "react-icons/gr";
import sampleVideo2 from "../../assets/code.mp4";
import p9 from "../../assets/p9.png";
import p10 from "../../assets/p10.png";
import p11 from "../../assets/p11.png";
import p12 from "../../assets/p12.png";
import person104 from "../../assets/aishab.png";
import person105 from "../../assets/rahul.png";
import person106 from "../../assets/lisa.png";
import a01 from "../../assets/71.png";
import a02 from "../../assets/72.png";
import a03 from "../../assets/73.png";
import kj from "../../assets/l.png"

const WebDevelopment = () => {
  return (
    <>
      <Link to="/webdevelopment"></Link>
      <div>
        {/* ---------------------------------1st phase ----------------------------*/}
        <div className="flex flex-col md:flex-row items-center justify-between p-8 shadow-md rounded-lg">
          <div className="text-center md:text-left md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-4xl bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-800 text-transparent bg-clip-text uppercase pt-4 font-bold font-serif">
              Web Development
            </h3>
            <h2 className="text-white font-extrabold text-2xl mb-4">
              Register by contacting us
            </h2>
            <p className="text-white mb-8">
              Oceancapp's web development services stand out for their ability
              to deliver tailored solutions that perfectly align with our
              clients' specific needs. We excel in crafting custom websites and
              web applications designed to boost functionality and meet distinct
              business objectives. Our expert team offers end-to-end support,
              from initial conceptualization and development to continuous
              maintenance and updates, ensuring smooth integration and peak
              performance. We focus on intuitive interfaces and stringent
              security protocols, providing an outstanding experience for both
              you and your users.
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
                src={word3}
                alt="Sale"
                className="rounded-lg shadow-lg mb-4 md:mb-0 md:mr-4"
              ></img>
              <img
                src={word4}
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
              <source src={sampleVideo2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="md:w-1/2 md:ml-8 text-center md:text-left">
              <h3 className="text-3xl text-white font-bold mb-4">
                Learn More About Our Web Development Services
              </h3>
              <p className="text-white mb-8">
                Explore our dynamic web development solutions through this
                informative video. Our dedicated team of experts is committed to
                delivering top-tier services customized to your unique
                requirements. From initial ideation to flawless execution, we
                guarantee a seamless journey towards achieving your digital
                goals
              </p>
              <a
                href={sampleVideo2}
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
            Web Development Excellence Delivered
          </h3>
        </div>
        <div className="h-1 w-80 bg-cyan-600 rounded flex justify-center items-center mx-auto my-auto hover:animate-ping"></div>
        <p className="text-center font-thin text-xl pt-4">
          <p>
            At Oceancapp, we pride ourselves on offering unparalleled web
            development services that stand out in the industry. Our commitment
            to quality, innovation, and customer satisfaction ensures that your
            website will not only meet but exceed your expectations.
          </p>{" "}
          <br />
          <p>
            Our team of skilled developers has extensive experience in creating
            custom web solutions tailored to your unique needs. We stay updated
            with the latest trends and technologies to deliver cutting-edge
            websites. We understand that every business is unique, which is why
            we provide customized web solutions that align with your brand
            identity and business goals. From bespoke designs to tailored
            functionalities, we've got you covered.
          </p>{" "}
          <br />
          <p>
            Our focus is on creating websites that are not only visually
            appealing but also user-friendly. We ensure seamless navigation and
            an engaging user experience to keep your visitors coming back.
            Additionally, we build websites with SEO best practices in mind,
            helping to improve your website’s visibility on search engines and
            driving more organic traffic to your site.
          </p>
          <br />
          <p>
            With the increasing use of mobile devices, having a responsive
            website is crucial. Our websites are optimized for all devices,
            ensuring a seamless experience for your users, whether they're on a
            desktop, tablet, or smartphone. We also prioritize the performance
            and security of your website. Our developers implement best
            practices to ensure your site loads quickly and remains secure
            against potential threats.
          </p>
          <br />
          <p>
            At Oceancapp, we believe in showcasing our expertise through our
            work. You can easily display your best web projects directly on your
            website with our portfolio feature, highlighting your top projects
            and demonstrating your capabilities to potential clients and
            partners.
          </p>
          <br />
          <p>
            Are you passionate about web development and looking to join a
            dynamic team? Oceancapp is always on the lookout for talented
            individuals to join our growing family. As part of our team, you'll
            have the opportunity to work on exciting projects, develop your
            skills, and contribute to our mission of delivering excellence in
            web development.
          </p>
          <br />
          <p>
            Whether you're looking to build a new website or enhance your
            existing one, Oceancapp is here to help. Contact us today to discuss
            your project and discover how we can transform your vision into a
            seamless web experience.
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
              Let's Build Your Dream Website
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
                  src={p9}
                  alt="avatar navigate ui"
                />
              </div>
              <div className="w-14 h-14 bg-[#191919]  rounded-full border-[3px] border-[#191919] relative -left-5">
                <img
                  className="w-full h-full rounded-full"
                  src={p10}
                  alt="avatar navigate ui"
                />
              </div>
              <div className="w-14 h-14 bg-[#191919]  rounded-full border-[3px] border-[#191919]  relative -left-10">
                <img
                  className="w-full h-full rounded-full"
                  src={p11}
                  alt="avatar navigate ui"
                />
              </div>
              <div className="w-14 h-14 bg-[#191919]  rounded-full border-[3px] border-[#191919]  relative -left-[60px]">
                <img
                  className="w-full h-full rounded-full"
                  src={p12}
                  alt="avatar navigate ui"
                />
              </div>

              <div className="relative -left-5">
                <p className="text-lg text-white">70+</p>
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
          <p className="text-4xl font-extrabold font-serif px-4">React</p>
          <p className="text-4xl font-extrabold font-serif px-4">Java</p>
          <p className="text-4xl font-extrabold font-serif px-4">PHP</p>
          <p className="text-4xl font-extrabold font-serif px-4">.Net</p>
          <p className="text-4xl font-extrabold font-serif px-4">Go</p>
          <p className="text-4xl font-extrabold font-serif px-4">Laravel</p>
          <p className="text-4xl font-extrabold font-serif px-4">AWS</p>
          <p className="text-4xl font-extrabold font-serif px-4">JavaScript</p>
          <p className="text-4xl font-extrabold font-serif px-4">Python</p>
          <p className="text-4xl font-extrabold font-serif px-4">Flutter</p>
          <p className="text-4xl font-extrabold font-serif px-4">Typescript</p>
          <p className="text-4xl font-extrabold font-serif px-4">NPM</p>
          <p className="text-4xl font-extrabold font-serif px-4">MongoDB</p>
          <p className="text-4xl font-extrabold font-serif px-4">Firebase</p>
          <p className="text-4xl font-extrabold font-serif px-4">Github</p>
          <p className="text-4xl font-extrabold font-serif px-4">OpnSource</p>
          <p className="text-4xl font-extrabold font-serif px-4">Reux</p>
        </Marquee>
        <Marquee className="my-5" direction="left" speed={50}>
          <p className="text-4xl font-extrabold font-serif px-4">React</p>
          <p className="text-4xl font-extrabold font-serif px-4">Java</p>
          <p className="text-4xl font-extrabold font-serif px-4">PHP</p>
          <p className="text-4xl font-extrabold font-serif px-4">.Net</p>
          <p className="text-4xl font-extrabold font-serif px-4">Go</p>
          <p className="text-4xl font-extrabold font-serif px-4">Laravel</p>
          <p className="text-4xl font-extrabold font-serif px-4">AWS</p>
          <p className="text-4xl font-extrabold font-serif px-4">JavaScript</p>
          <p className="text-4xl font-extrabold font-serif px-4">Python</p>
          <p className="text-4xl font-extrabold font-serif px-4">Flutter</p>
          <p className="text-4xl font-extrabold font-serif px-4">Typescript</p>
          <p className="text-4xl font-extrabold font-serif px-4">NPM</p>
          <p className="text-4xl font-extrabold font-serif px-4">MongoDB</p>
          <p className="text-4xl font-extrabold font-serif px-4">Firebase</p>
          <p className="text-4xl font-extrabold font-serif px-4">Github</p>
          <p className="text-4xl font-extrabold font-serif px-4">OpenSource</p>
          <p className="text-4xl font-extrabold font-serif px-4">Redux</p>
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
                      <img src={person104} className="w-40 h-40" alt="" />
                    </div>
                    <div className="md:flex-grow">
                      <h2 className="text-2xl font-medium text-white title-font mb-2">
                        Aisha Rahman - Entrepreneu
                      </h2>
                      <p className="leading-relaxed text-white">
                        Oceancapp transformed my vision into a stunning reality
                        with their WordPress development services. The team’s
                        attention to detail and innovative approach ensured my
                        website not only looked beautiful but also functioned
                        seamlessly. Their commitment to quality and customer
                        satisfaction is unparalleled
                      </p>
                    </div>
                  </div>
                  <div className="py-8 flex flex-wrap md:flex-nowrap">
                    <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                      <img src={person105} className="w-40 h-40" alt="" />
                    </div>
                    <div className="md:flex-grow">
                      <h2 className="text-2xl font-medium text-white title-font mb-2">
                        Rahul Sen - WordPress Development
                      </h2>
                      <p className="leading-relaxed text-white">
                        Choosing Oceancapp for our WordPress development needs
                        was the best decision we made. Their team transformed
                        our outdated website into a sleek, responsive, and
                        user-friendly platform. The attention to detail and
                        commitment to excellence is unmatched. Oceancapp truly
                        understands the nuances of WordPress, and their
                        innovative approach simplified everything for us. We
                        couldn't be happier with the results
                      </p>
                    </div>
                  </div>
                  <div className="py-8 flex flex-wrap md:flex-nowrap">
                    <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                      <img src={person106} className="w-40 h-40" alt="" />
                    </div>
                    <div className="md:flex-grow">
                      <h2 className="text-2xl font-medium text-white title-font mb-2">
                        Lisa Thompson- WordPress Development
                      </h2>
                      <p className="leading-relaxed text-white">
                        Oceancapp's WordPress service exceeded our expectations
                        in every way. From the initial consultation to the final
                        delivery, their professionalism and expertise were
                        evident. They listened to our needs, provided insightful
                        recommendations, and delivered a website that not only
                        looks fantastic but also performs flawlessly.
                        Oceancapp's dedication to customer satisfaction is
                        evident in every aspect of their work.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        {/* ---------------------------------6th phase finish----------------------------*/}
        {/* ---------------------------7th phase start ----------------------------*/}
        <div>
          <div className="mx-auto md:w-8/12 mb-2 mt-10 flex justify-center items-center ">
            <h3 className="text-4xl bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-800 text-transparent bg-clip-text uppercase pt-4 font-bold font-serif">
              Projects
            </h3>
          </div>
          <div className="h-1 w-80 bg-cyan-600 rounded flex justify-center items-center mx-auto my-auto hover:animate-ping"></div>
          <div>
            <div className=" text-white">
              <div className="container mx-auto py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-gradient-to-r from-cyan-700 p-6 rounded-lg custom-gradient shadow-lg">
                    <img className="justify-center items-center py-4" src={a03} alt="" />
                    <h2 className="text-xl font-bold mb-4">EasyBook</h2>
                     
                    <h3 className="font-bold mb-2">Technology</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {/* <span className="bg-gradient-to-t from-black to-white/10 text-white px-2 py-1 rounded">
                        HTML
                      </span>
                      <span className="bg-gradient-to-t from-black to-white/10 text-white px-2 py-1 rounded">
                        CSS
                      </span>
                      <span className="bg-gradient-to-t from-black to-white/10 text-white px-2 py-1 rounded">
                        Tailwind
                      </span>
                      <span className="bg-gradient-to-t from-black to-white/10 text-white px-2 py-1 rounded">
                        DaisyUI
                      </span>
                      <span className="bg-gradient-to-t from-black to-white/10 text-white px-2 py-1 rounded">
                        React JS
                      </span> */}
                      <span className="bg-gradient-to-t from-black to-white/10 text-whitepx-2 py-1 rounded">
                        Node JS
                      </span>
                      <span className="bg-gradient-to-t from-black to-white/10 text-white px-2 py-1 rounded">
                        Express
                      </span>
                      <span className="bg-gradient-to-t from-black to-white/10 text-white px-2 py-1 rounded">
                        Firebase
                      </span>
                      <span className="bg-gradient-to-t from-black to-white/10 text-white px-2 py-1 rounded">
                        JWT Authentication
                      </span>
                      <span className="bg-gradient-to-t from-black to-white/10 text-white px-2 py-1 rounded">
                        MongoDB
                      </span>
                    </div>
                    <a href="https://final-project-9df2d.web.app/" className="text-white font-bold">
                      See Details
                    </a>
                    <div className="mt-4">
                      <Link to="https://final-project-9df2d.web.app/">
                      <span className="bg-white text-black px-2 py-1 rounded">
                        Live Website
                      </span>
                      </Link>
                      
                    </div>
                  </div>

                  <div className="bg-gradient-to-t from-cyan-700  p-6 rounded-lg shadow-lg">
                  <img className="justify-center items-center py-4" src={a02} alt="" />
                    <h2 className="text-xl font-bold mb-4">Buy-Courses</h2>
                     
                    <h3 className="font-bold mb-2">Technology</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {/* <span className="bg-gradient-to-t from-black to-white/10 text-white px-2 py-1 rounded">
                        HTML5
                      </span>
                      <span className="bg-gradient-to-t from-black to-white/10 text-white px-2 py-1 rounded">
                        CSS3
                      </span> */}
                      <span className="bg-gradient-to-t from-black to-white/10 text-white px-2 py-1 rounded">
                        React JS
                      </span>
                      {/* <span className="bg-gradient-to-t from-black to-white/10 text-white px-2 py-1 rounded">
                        Node JS
                      </span> */}
                      <span className="bg-gradient-to-t from-black to-white/10 text-white px-2 py-1 rounded">
                        Express
                      </span>
                      <span className="bg-gradient-to-t from-black to-white/10 text-white px-2 py-1 rounded">
                        Firebase
                      </span>
                      <span className="bg-gradient-to-t from-black to-white/10 text-white px-2 py-1 rounded">
                        JWT Authentication
                      </span>
                      <span className="bg-gradient-to-t from-black to-white/10 text-white px-2 py-1 rounded">
                        MongoDB
                      </span>
                    </div>
                    <a href="https://educare-bd0b7.web.app/" className="text-white font-bold">
                      See Details
                    </a>
                    <div className="mt-4">
                    <Link to="https://educare-bd0b7.web.app/">
                      <span className="bg-white text-black px-2 py-1 rounded">
                        Live Website
                      </span>
                      </Link>
                      
                    </div>
                  </div>

                  <div className="bg-gradient-to-l from-cyan-700 p-6 rounded-lg shadow-lg">
                  <img className="justify-center items-center py-4" src={a01} alt="" />
                    <h2 className="text-xl font-bold mb-4">Surgical-Site</h2>
                     
                    <h3 className="font-bold mb-2">Technology</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {/* <span className="bg-gradient-to-t from-black to-white/10 text-white px-2 py-1 rounded">
                        HTML
                      </span>
                      <span className="bg-gradient-to-t from-black to-white/10 text-white px-2 py-1 rounded">
                        CSS
                      </span>
                      <span className="bg-gradient-to-t from-black to-white/10 text-white px-2 py-1 rounded">
                        Bootstrap
                      </span> */}
                      <span className="bg-gradient-to-t from-black to-white/10 text-white px-2 py-1 rounded">
                        React JS
                      </span>
                      <span className="bg-gradient-to-t from-black to-white/10 text-white px-2 py-1 rounded">
                        Node JS
                      </span>
                      <span className="bg-gradient-to-t from-black to-white/10 text-white px-2 py-1 rounded">
                        Express
                      </span>
                      <span className="bg-gradient-to-t from-black to-white/10 text-white px-2 py-1 rounded">
                        DaisyUI
                      </span>
                      <span className="bg-gradient-to-t from-black to-white/10 text-whitepx-2 py-1 rounded">
                        MongoDB
                      </span>
                      <span className="bg-gradient-to-t from-black to-white/10 text-white px-2 py-1 rounded">
                        AOS
                      </span>
                      <span className="bg-gradient-to-t from-black to-white/10 text-white px-2 py-1 rounded">
                        Firebase
                      </span>
                    </div>
                    <a href="https://surgicalsavvy.netlify.app/" className="text-white font-bold">
                      See Details
                    </a>
                    <div className="mt-4">
                    <Link to="https://surgicalsavvy.netlify.app/">
                      <span className="bg-white text-black px-2 py-1 rounded">
                        Live Website
                      </span>
                      </Link>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------------------7th phase finish ----------------------------*/}
      </div>
    </>
  );
};

export default WebDevelopment;
