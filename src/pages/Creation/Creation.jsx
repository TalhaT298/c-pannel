/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { PiArrowRightLight } from "react-icons/pi";
import ideap from "../../assets/ideap.png";
import ideaw from "../../assets/ideaw.png";
import { GrProjects } from "react-icons/gr";
import ideav from "../../assets/ideav.mp4";
import p41 from "../../assets/p41.png";
import p42 from "../../assets/p42.png";
import p43 from "../../assets/p43.png";
import p44 from "../../assets/p44.png";
import person704 from "../../assets/person704.png";
import person705 from "../../assets/person705.png";
import person706 from "../../assets/person706.png";
import { Helmet } from "react-helmet-async";

const Creation = () => {
  return (
    <>
      <Link to="/creation"></Link>
      <Helmet>
        <title>Oceancapp | Idea to Creation</title>
      </Helmet>
      <div>
        {/* ---------------------------------1st phase ----------------------------*/}
        <div className="flex flex-col md:flex-row items-center justify-between p-8 shadow-md rounded-lg">
          <div className="text-center md:text-left md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-3xl sm:text-3xl md:text-4xl bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-800 text-transparent bg-clip-text uppercase pt-4 font-bold font-serif">
              Idea to Creation
            </h3>
            <h2 className="text-white font-extrabold text-xl sm:text-2xl md:text-2xl mb-4">
              Register by contacting us
            </h2>
            <p className="text-white mb-8">
              Oceancapp's Idea to Creation services are exceptional in
              transforming your concepts into fully realized solutions. We
              specialize in taking your ideas through every stage of
              development, from initial brainstorming and planning to final
              execution and launch. Our dedicated team provides end-to-end
              support, ensuring that your vision is meticulously crafted and
              brought to life with precision and creativity. We focus on
              innovative thinking and comprehensive project management,
              utilizing the latest tools and techniques to turn your ideas into
              impactful, tangible results.
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
                src={ideap}
                alt="Sale"
                className="rounded-lg shadow-lg mb-4 md:mb-0 md:mr-4"
              ></img>
              <img
                src={ideaw}
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
              <source src={ideav} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="md:w-1/2 md:ml-8 text-center md:text-left">
              <h3 className="text-3xl text-white font-bold mb-4">
                Learn More About Idea to Creation Services
              </h3>
              <p className="text-white mb-8">
                Explore our seamless journey from idea to creation through this
                informative video. Our dedicated team is committed to
                transforming your concepts into reality with top-tier services
                tailored to your specific needs. From initial brainstorming to
                flawless execution, we ensure a smooth and efficient process in
                bringing your vision to life.
              </p>
              <a
                href={ideav}
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
            Idea to Creation Excellence Delivered
          </h3>
        </div>
        <div className="h-1 w-10 bg-cyan-600 rounded flex justify-center items-center mx-auto my-auto hover:animate-ping"></div>
        <p className="text-center font-thin text-xl text-white px-4 lg:px-0 md:px-0 pt-4">
          <p>
            At Oceancapp, we specialize in turning innovative ideas into reality
            with our comprehensive Idea to Creation services. Our commitment to
            quality, creativity, and customer satisfaction ensures that your
            vision is not only realized but also exceeds expectations.
          </p>{" "}
          <br />
          <p>
            Our team of experienced professionals excels in transforming
            concepts into tangible products and solutions. We stay updated with
            the latest trends and technologies to deliver innovative and
            impactful results. Understanding the unique nature of each idea, we
            provide personalized services that align with your goals and bring
            your vision to life.
          </p>{" "}
          <br />
          <p>
            Our focus is on guiding you through every step of the creation
            process, from initial brainstorming to final execution. Whether you
            need product development, design, prototyping, or market launch, we
            bring expertise and creativity to every project. We ensure seamless
            collaboration and transparent communication, making the journey from
            idea to creation smooth and efficient.
          </p>
          <br />
          <p>
            With the increasing demand for innovative solutions, having a
            reliable partner to bring your ideas to life is crucial. Our
            services are designed to adapt to various industries and project
            scopes, ensuring that your ideas are developed with precision and
            creativity. We also prioritize quality and functionality, ensuring
            that the final product is not only innovative but also practical and
            market-ready.
          </p>
          <br />
          <p>
            At Oceancapp, we showcase our ability to turn ideas into successful
            creations through our portfolio, where you can see examples of our
            past projects. This allows you to visualize our capabilities and
            envision how we can help bring your ideas to fruition.
          </p>
          <br />
          <p>
            Are you passionate about innovation and looking to join a dynamic
            team dedicated to creating impactful solutions? Oceancapp welcomes
            creative and driven individuals who are eager to transform ideas
            into reality. Join us to work on exciting projects, develop your
            skills, and contribute to our mission of excellence in Idea to
            Creation services.
          </p>
          <br />
          <p>
            Whether you have a groundbreaking concept or need help refining your
            ideas, Oceancapp is here to support your journey from idea to
            creation. Contact us today to discuss your project and discover how
            we can turn your vision into a reality.
          </p>
        </p>
        </div>
        {/* ---------------------------------3rd phase finish----------------------------*/}
        {/* ---------------------------------4th phase start----------------------------*/}
        <div className="flex items-center justify-center  w-full h-[80vh] ">
          <div className="flex flex-col items-center my-10 text-white space-y-8">
            {/* featured div  */}
            <div className="flex items-center gap-4 bg-gradient-to-t from-cyan-600 to-white/10 py-2 px-6 my-6 rounded-lg">
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
              Turn Your Ideas into Creation
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
                  src={p41}
                  alt="avatar navigate ui"
                />
              </div>
              <div className="w-14 h-14 bg-[#191919]  rounded-full border-[3px] border-[#191919] relative -left-5">
                <img
                  className="w-full h-full rounded-full"
                  src={p42}
                  alt="avatar navigate ui"
                />
              </div>
              <div className="w-14 h-14 bg-[#191919]  rounded-full border-[3px] border-[#191919]  relative -left-10">
                <img
                  className="w-full h-full rounded-full"
                  src={p43}
                  alt="avatar navigate ui"
                />
              </div>
              <div className="w-14 h-14 bg-[#191919]  rounded-full border-[3px] border-[#191919]  relative -left-[60px]">
                <img
                  className="w-full h-full rounded-full"
                  src={p44}
                  alt="avatar navigate ui"
                />
              </div>

              <div className="relative -left-5">
                <p className="text-lg text-white">10+</p>
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
        <Marquee className="pt-16" direction="right" speed={50}>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Brainstorming
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Concept Development
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Ideation</p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Market Research
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Prototyping</p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Wireframing</p>
          <p className="text-xl md:text-4xlfont-extrabold font-serif px-4">
            Design Thinking
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            User Experience (UX) Design
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            User Interface (UI) Design
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Product Design
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Proof of Concept
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Innovation</p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Feasibility Study
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Project Planning
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Roadmap Development
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Minimum Viable Product (MVP)
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Agile Development
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Sprint Planning
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Iteration</p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Testing and Validation
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            User Testing
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Feedback Loop
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Quality Assurance (QA)
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Beta Testing
          </p>
        </Marquee>
        <Marquee className="my-5" direction="left" speed={50}>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Launch Strategy
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Marketing Plan
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Branding</p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Go-to-Market Strategy
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Product Launch
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Scalability</p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Customer Onboarding
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Product Lifecycle
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Continuous Improvement
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Market Analysis
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Customer Feedback
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Product Enhancement
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Version Control
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Release Management
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Documentation
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Collaboration Tools
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Team Management
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Resource Allocation
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Milestone Tracking
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Performance Metrics
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Analytics</p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            User Adoption
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Support and Maintenance
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Customer Success
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Iteration Planning
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Feature Prioritization
          </p>
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
                      <img src={person704} className="w-40 h-40" alt="" />
                    </div>
                    <div className="md:flex-grow">
                      <h2 className="text-2xl font-medium text-white title-font mb-2">
                      Emma Harris - Innovation Specialist
                      </h2>
                      <p className="leading-relaxed text-white">
                      "Working with Oceancapp from the initial idea to the final creation was a seamless and transformative experience. Their team expertly guided us through each stage, ensuring our vision was realized to its fullest potential. The creativity, technical skill, and attention to detail they demonstrated were unparalleled. Oceancapp’s 'Idea to Creation' services have been instrumental in bringing our concept to life."
                      </p>
                    </div>
                  </div>
                  <div className="py-8 flex flex-wrap md:flex-nowrap">
                    <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                      <img src={person705} className="w-40 h-40" alt="" />
                    </div>
                    <div className="md:flex-grow">
                      <h2 className="text-2xl font-medium text-white title-font mb-2">
                      Mia Thompson - Creative Solutions Expert
                      </h2>
                      <p className="leading-relaxed text-white">
                      "Oceancapp’s 'Idea to Creation' services have been a game-changer for our projects. They provided innovative solutions and meticulous planning, turning our ideas into tangible and successful outcomes. The team's professionalism, ingenuity, and commitment to excellence were evident throughout the entire process. Oceancapp’s ability to transform concepts into reality has been a significant asset for us."
                      </p>
                    </div>
                  </div>
                  <div className="py-8 flex flex-wrap md:flex-nowrap">
                    <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                      <img src={person706} className="w-40 h-40" alt="" />
                    </div>
                    <div className="md:flex-grow">
                      <h2 className="text-2xl font-medium text-white title-font mb-2">
                      Jacob White - Product Development Consultant
                      </h2>
                      <p className="leading-relaxed text-white">
                      "Partnering with Oceancapp for their 'Idea to Creation' services was an excellent decision. Their team offered insightful guidance and executed our vision with precision and creativity. The quality of their work and their ability to navigate from concept to completion were outstanding. Oceancapp’s dedication to turning ideas into successful creations has greatly enhanced our projects."
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

export default Creation;
