/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { PiArrowRightLight } from "react-icons/pi";
import cyberman from "../../assets/cyberman.png";
import word5 from "../../assets/cyberem.png";
import { GrProjects } from "react-icons/gr";
import sampleVideo3 from "../../assets/cybervd.mp4";
import p13 from "../../assets/p13.png";
import p14 from "../../assets/p14.png";
import p15 from "../../assets/p15.png";
import p16 from "../../assets/p16.png";
import person107 from "../../assets/person107.png";
import person108 from "../../assets/person108.png";
import person109 from "../../assets/person109.png";
import { Helmet } from "react-helmet-async";

const CyberSecurity = () => {
  return (
    <>
      <Link to="/cybersecurity"></Link>
      <Helmet>
        <title>Oceancapp | CyberSecurity</title>
      </Helmet>
      <div>
        {/* ---------------------------------1st phase ----------------------------*/}
        <div className="flex flex-col md:flex-row items-center justify-between p-8 shadow-md rounded-lg">
          <div className="text-center md:text-left md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-3xl sm:text-3xl md:text-4xl bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-800 text-transparent bg-clip-text uppercase pt-4 font-bold font-serif">
              Cyber Security
            </h3>
            <h2 className="text-white font-extrabold text-xl sm:text-2xl md:text-2xl mb-4">
              Register by contacting us
            </h2>
            <p className="text-white mb-8">
              Oceancapp's cybersecurity services are unparalleled in their
              capacity to provide tailored solutions that address our clients'
              unique security challenges. We specialize in implementing
              customized security protocols and strategies designed to protect
              your digital assets and ensure compliance with industry standards.
              Our dedicated team delivers comprehensive support, from initial
              risk assessment and strategy development to ongoing monitoring and
              incident response, ensuring robust protection and peace of mind.
              We emphasize proactive measures and cutting-edge technologies,
              safeguarding your business against evolving cyber threats
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
                src={cyberman}
                alt="Sale"
                className="rounded-lg shadow-lg mb-4 md:mb-0 md:mr-4"
              ></img>
              <img
                src={word5}
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
              <source src={sampleVideo3} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="md:w-1/2 md:ml-8 text-center md:text-left">
              <h3 className="text-3xl text-white font-bold mb-4">
                Learn More About Our Cybersecurity Services
              </h3>
              <p className="text-white mb-8">
              Discover our advanced cybersecurity solutions in this insightful video. Our expert team is devoted to providing top-notch services tailored to your specific needs. From conceptualization to flawless implementation, we ensure a smooth path to safeguarding your digital assets.
              </p>
              <a
                href={sampleVideo3}
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
        <div className="py-10">
        <div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl py-4 text-center bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-800 text-transparent bg-clip-text uppercase pt-4 font-bold font-serif">
            Cybersecurity Excellence Delivered
          </h3>
        </div>
        <div className="h-1 w-10 bg-cyan-600 rounded flex justify-center items-center mx-auto my-auto hover:animate-ping"></div>
        <p className="text-center text-white font-thin text-xl pt-4 px-4 lg:px-0 md:px-0">
          <p>
            At Oceancapp, we pride ourselves on offering unparalleled
            cybersecurity services that stand out in the industry. Our
            commitment to quality, innovation, and customer satisfaction ensures
            that your digital assets will not only be protected but also
            fortified against evolving threats.
          </p>{" "}
          <br />
          <p>
            Our team of skilled cybersecurity experts has extensive experience
            in creating custom security solutions tailored to your unique needs.
            We stay updated with the latest threats and technologies to deliver
            robust security measures. We understand that every business is
            unique, which is why we provide customized cybersecurity solutions
            that align with your specific requirements and business goals. From
            comprehensive risk assessments to tailored security strategies,
            we've got you covered.
          </p>{" "}
          <br />
          <p>
            Our focus is on creating security frameworks that are not only
            effective but also user-friendly. We ensure seamless integration and
            an engaging user experience to keep your systems secure without
            compromising usability. Additionally, we implement best practices in
            cybersecurity to enhance your defense mechanisms, protecting your
            digital assets from potential breaches.
          </p>
          <br />
          <p>
            With the increasing sophistication of cyber threats, having a
            resilient cybersecurity strategy is crucial. Our solutions are
            designed to adapt to various environments, ensuring robust
            protection for your systems, whether they're on-premises, in the
            cloud, or on mobile devices. We also prioritize the continuous
            performance and security of your infrastructure. Our experts
            implement best practices to ensure your systems remain secure and
            resilient against potential threats.
          </p>
          <br />
          <p>
            At Oceancapp, we believe in showcasing our expertise through our
            work. You can easily display your best cybersecurity projects
            directly on your website with our portfolio feature, highlighting
            your top projects and demonstrating your capabilities to potential
            clients and partners.
          </p>
          <br />
          <p>
            Are you passionate about cybersecurity and looking to join a dynamic
            team? Oceancapp is always on the lookout for talented individuals to
            join our growing family. As part of our team, you'll have the
            opportunity to work on exciting projects, develop your skills, and
            contribute to our mission of delivering excellence in cybersecurity.
          </p>
          <br />
          <p>
            Whether you're looking to enhance your existing security measures or
            develop a new cybersecurity strategy, Oceancapp is here to help.
            Contact us today to discuss your project and discover how we can
            transform your security vision into a reality.
          </p>
        </p>
        </div>
        {/* ---------------------------------3rd phase finish----------------------------*/}
        {/* ---------------------------------4th phase start----------------------------*/}
        <div className="flex items-center justify-center  w-full h-[80vh] bg-gradient-to-tr from-black via-black/90 to-black">
          <div className="flex flex-col items-center my-10 text-white space-y-8">
            {/* featured div  */}
            <div className="flex items-center gap-4 bg-gradient-to-t from-cyan-600 to-white/10 py-2 px-6 my-10 mt-10 rounded-lg">
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
              Let's Secure Your Dream with Cybersecurity
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
                  src={p13}
                  alt="avatar navigate ui"
                />
              </div>
              <div className="w-14 h-14 bg-[#191919]  rounded-full border-[3px] border-[#191919] relative -left-5">
                <img
                  className="w-full h-full rounded-full"
                  src={p14}
                  alt="avatar navigate ui"
                />
              </div>
              <div className="w-14 h-14 bg-[#191919]  rounded-full border-[3px] border-[#191919]  relative -left-10">
                <img
                  className="w-full h-full rounded-full"
                  src={p15}
                  alt="avatar navigate ui"
                />
              </div>
              <div className="w-14 h-14 bg-[#191919]  rounded-full border-[3px] border-[#191919]  relative -left-[60px]">
                <img
                  className="w-full h-full rounded-full"
                  src={p16}
                  alt="avatar navigate ui"
                />
              </div>

              <div className="relative -left-5">
                <p className="text-lg text-white">30+</p>
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
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Firewall</p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Encryption</p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Penetration Testing
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Threat Intelligence
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Malware</p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Phishing</p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Intrusion Detection
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Vulnerability Assessment
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Access Control
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Cyber Threat
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Data Breach</p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Network Security
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Risk Management
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Incident Response
          </p>
        </Marquee>
        <Marquee className="my-5" direction="left" speed={50}>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Security Policy
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Two-Factor Authentication (2FA)
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Endpoint Protection
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">SIEM</p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Cryptography
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Authentication
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Authorization
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Data Protection
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Secure Coding
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Compliance</p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Forensics</p>
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
                      <img src={person107} className="w-40 h-40" alt="" />
                    </div>
                    <div className="md:flex-grow">
                      <h2 className="text-2xl font-medium text-white title-font mb-2">
                      Aisha Rahman - Network Security Expert
                      </h2>
                      <p className="leading-relaxed text-white">
                      "Opting for Oceancapp’s cybersecurity services was a game-changer for us. A team of experts meticulously analyzed our systems and implemented robust security measures, effectively shielding us from potential threats. Their proactive approach and thoroughness in ensuring our data integrity have given us peace of mind. Oceancapp's dedication to cybersecurity is evident in their exceptional service and expertise."
                      </p>
                    </div>
                  </div>
                  <div className="py-8 flex flex-wrap md:flex-nowrap">
                    <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                      <img src={person108} className="w-40 h-40" alt="" />
                    </div>
                    <div className="md:flex-grow">
                      <h2 className="text-2xl font-medium text-white title-font mb-2">
                      Nazia Begum - IT Security Specialist
                      </h2>
                      <p className="leading-relaxed text-white">
                      "Oceancapp’s cybersecurity solutions exceeded our expectations. They delivered a comprehensive security strategy that protected our sensitive information from cyber threats. The team’s professionalism and in-depth knowledge of cybersecurity were evident in every interaction. Their commitment to safeguarding our data has been invaluable, and we’re confident in their ability to keep us secure."
                      </p>
                    </div>
                  </div>
                  <div className="py-8 flex flex-wrap md:flex-nowrap">
                    <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                      <img src={person109} className="w-40 h-40" alt="" />
                    </div>
                    <div className="md:flex-grow">
                      <h2 className="text-2xl font-medium text-white title-font mb-2">
                        Tamim Iqbal- Cybersecurity Consultant
                      </h2>
                      <p className="leading-relaxed text-white">
                      "Working with Oceancapp for our cybersecurity needs was a wise choice. Their team provided a thorough assessment of our existing security measures and introduced cutting-edge solutions to enhance our protection. The clarity of their communication and the effectiveness of their strategies set them apart. Oceancapp’s dedication to keeping our systems secure has been exceptional, and we highly recommend their services."


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

export default CyberSecurity;
