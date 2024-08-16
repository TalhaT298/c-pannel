/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { PiArrowRightLight } from "react-icons/pi";
import edup from "../../assets/edup.png";
import edupw from "../../assets/edupw.png";
import { GrProjects } from "react-icons/gr";
import eduv from "../../assets/eduv.mp4";
import p37 from "../../assets/p37.png";
import p38 from "../../assets/p38.png";
import p39 from "../../assets/p39.png";
import p40 from "../../assets/p40.png";
import person604 from "../../assets/person604.png";
import person605 from "../../assets/person605.png";
import person606 from "../../assets/person606.png";
import { Helmet } from "react-helmet-async";

const Education = () => {
  return (
    <>
      <Link to="/education"></Link>
      <Helmet>
        <title>Oceancapp | Education Services</title>
      </Helmet>
      <div>
        {/* ---------------------------------1st phase ----------------------------*/}
        <div className="flex flex-col md:flex-row items-center justify-between p-8 shadow-md rounded-lg">
          <div className="text-center md:text-left md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-3xl sm:text-3xl md:text-4xl bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-800 text-transparent bg-clip-text uppercase pt-4 font-bold font-serif">
              Education Services
            </h3>
            <h2 className="text-white font-extrabold text-xl sm:text-2xl md:text-2xl mb-4">
              Register by contacting us
            </h2>
            <p className="text-white mb-8">
              Oceancapp's education services excel in delivering customized
              learning solutions that cater to the unique needs of our clients.
              We focus on creating innovative educational programs and resources
              aimed at improving learning outcomes and promoting intellectual
              development. Our experienced team provides holistic support, from
              initial curriculum design and creation to ongoing evaluation and
              enhancement, ensuring a dynamic and effective learning experience.
              We emphasize student-focused approaches and advanced educational
              technologies, enabling students and educators to reach their
              highest potential.
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
                src={edup}
                alt="Sale"
                className="rounded-lg shadow-lg mb-4 md:mb-0 md:mr-4"
              ></img>
              <img
                src={edupw}
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
              <source src={eduv} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="md:w-1/2 md:ml-8 text-center md:text-left">
              <h3 className="text-3xl text-white font-bold mb-4">
                Learn More About Education Services
              </h3>
              <p className="text-white mb-8">
                Explore our comprehensive education services through this
                informative video. Our dedicated team is committed to delivering
                top-tier educational solutions tailored to your specific needs.
                From initial planning to flawless execution, we ensure a
                seamless journey towards achieving your learning and development
                goals.
              </p>
              <a
                href={eduv}
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
            Education Services Excellence Delivered
          </h3>
        </div>
        <div className="h-1 w-10 bg-cyan-600 rounded flex justify-center items-center mx-auto my-auto hover:animate-ping"></div>
        <p className="text-center font-thin text-xl text-white px-4 lg:px-0 md:px-0 pt-4">
          <p>
            At Oceancapp, we are committed to delivering excellence in education
            services that inspire learning, foster growth, and empower
            individuals. Our dedication to quality education ensures that
            learners of all ages and backgrounds receive the support they need
            to succeed.
          </p>{" "}
          <br />
          <p>
            Our team of experienced educators and subject matter experts is
            passionate about providing personalized learning experiences
            tailored to each student's unique needs. We offer a range of
            educational services, including tutoring, mentoring, and curriculum
            development, designed to enhance academic achievement and promote
            lifelong learning.
          </p>{" "}
          <br />
          <p>
            Whether you're seeking academic support, preparing for standardized
            tests, or exploring new skills, Oceancapp offers comprehensive
            educational solutions that cater to your goals. We leverage
            innovative teaching methods and educational technology to create
            engaging and effective learning environments, ensuring that every
            learner reaches their full potential.
          </p>
          <br />
          <p>
            Our focus is on delivering educational services that are not only
            informative but also inspiring. We prioritize interactive learning
            experiences, collaborative opportunities, and personalized feedback
            to encourage active participation and deepen understanding. Through
            our tailored approach, we empower learners to excel academically and
            develop critical thinking skills that extend beyond the classroom.
          </p>
          <br />
          <p>
            At Oceancapp, we showcase our commitment to education through our
            track record of success and testimonials from satisfied students and
            parents. Our dedication to student success is evident in every
            educational service we provide, fostering a supportive learning
            community where every individual can thrive.
          </p>
          <br />
          <p>
            Are you passionate about education and looking to join a dynamic
            team dedicated to making a difference in learners' lives? Oceancapp
            welcomes educators and mentors who share our commitment to
            excellence in education. Join us to contribute to meaningful
            educational initiatives, inspire learners, and shape the future of
            education.
          </p>
          <br />
          <p>
            Whether you're seeking academic support or exploring new educational
            opportunities, Oceancapp is here to support your learning journey.
            Contact us today to discuss your educational goals and discover how
            we can empower you through our comprehensive education services.
          </p>
        </p>
        </div>
        {/* ---------------------------------3rd phase finish----------------------------*/}
        {/* ---------------------------------4th phase start----------------------------*/}
        <div className="flex items-center justify-center w-full h-[80vh] bg-gradient-to-tr from-black via-black/90 to-black">
          <div className="flex flex-col items-center my-20 mt-60 lg:mt-0 md:mt-0 mb-40 lg:mb-0 md:mb-0 text-white space-y-8">
            {/* featured div  */}
            <div className="flex items-center gap-4 bg-gradient-to-t from-cyan-600 to-white/10 py-2 px-6 my-10 rounded-lg">
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
              Turn Ideas into Stunning Creations with Our Education
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
                  src={p37}
                  alt="avatar navigate ui"
                />
              </div>
              <div className="w-14 h-14 bg-[#191919]  rounded-full border-[3px] border-[#191919] relative -left-5">
                <img
                  className="w-full h-full rounded-full"
                  src={p38}
                  alt="avatar navigate ui"
                />
              </div>
              <div className="w-14 h-14 bg-[#191919]  rounded-full border-[3px] border-[#191919]  relative -left-10">
                <img
                  className="w-full h-full rounded-full"
                  src={p39}
                  alt="avatar navigate ui"
                />
              </div>
              <div className="w-14 h-14 bg-[#191919]  rounded-full border-[3px] border-[#191919]  relative -left-[60px]">
                <img
                  className="w-full h-full rounded-full"
                  src={p40}
                  alt="avatar navigate ui"
                />
              </div>

              <div className="relative -left-5">
                <p className="text-lg text-white">80+</p>
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
        <div className="py-8 pt-20 lg:pt-0 md:pt-0">
        <Marquee className="pt-16" direction="right" speed={50}>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Curriculum Development
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Instructional Design
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Educational Technology
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">E-Learning</p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Blended Learning
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Online Courses
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Learning Management System (LMS)
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Assessment and Evaluation
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Classroom Management
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Teaching Strategies
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Professional Development
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Student Engagement
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Academic Advising
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Tutoring Services
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Student Support Services
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Distance Education
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Educational Consulting
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Skill Development
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Training Programs
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Educational Workshops
          </p>
        </Marquee>
        <Marquee className="my-5" direction="left" speed={50}>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Mentoring</p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Courseware</p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Learning Outcomes
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Educational Assessment
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Interactive Learning
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Special Education
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Adult Education
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Corporate Training
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Credentialing
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Educational Policy
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Instructional Technology
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Academic Research
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Educational Content Creation
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Language Learning
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Study Abroad Programs
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Educational Games
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Student Feedback
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Learning Analytics
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Certification Programs
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Career Counseling
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
                      <img src={person604} className="w-40 h-40" alt="" />
                    </div>
                    <div className="md:flex-grow">
                      <h2 className="text-2xl font-medium text-white title-font mb-2">
                      Isabella Walker - Online Learning Expert
                      </h2>
                      <p className="leading-relaxed text-white">
                      "Opting for Oceancapp for our educational content creation was transformative. Their team developed engaging and informative materials that have significantly improved our online learning platform. The precision, creativity, and depth of understanding they brought to the project were exceptional. Oceancapp’s expertise in education services has truly enhanced the quality of our offerings."
                      </p>
                    </div>
                  </div>
                  <div className="py-8 flex flex-wrap md:flex-nowrap">
                    <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                      <img src={person605} className="w-40 h-40" alt="" />
                    </div>
                    <div className="md:flex-grow">
                      <h2 className="text-2xl font-medium text-white title-font mb-2">
                      Olivia Bennett - Curriculum Development Specialist
                      </h2>
                      <p className="leading-relaxed text-white">
                      "Oceancapp’s education services have profoundly benefited our institution. They provided well-structured and comprehensive curricula that perfectly meet our educational needs. The team's professionalism, innovative approach, and dedication to excellence were evident throughout our collaboration. Oceancapp’s commitment to delivering high-quality educational content has made a remarkable impact on our learners."
                      </p>
                    </div>
                  </div>
                  <div className="py-8 flex flex-wrap md:flex-nowrap">
                    <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                      <img src={person606} className="w-40 h-40" alt="" />
                    </div>
                    <div className="md:flex-grow">
                      <h2 className="text-2xl font-medium text-white title-font mb-2">
                      Ethan Reynolds - Educational Consultant
                      </h2>
                      <p className="leading-relaxed text-white">
                      "Partnering with Oceancapp for our educational services was a wise decision. Their team offered valuable insights and created exceptional educational materials that resonate with our audience. The quality of their work, coupled with their ability to understand our needs and deliver outstanding results, was impressive. Oceancapp’s dedication to excellence in education services has been pivotal to our success."
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

export default Education;