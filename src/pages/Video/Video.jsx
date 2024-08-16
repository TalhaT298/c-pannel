/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { PiArrowRightLight } from "react-icons/pi";
import videop from "../../assets/videop.png";
import videow from "../../assets/videow.png";
import { GrProjects } from "react-icons/gr";
import viv from "../../assets/vi.mp4";
import p29 from "../../assets/p29.png";
import p30 from "../../assets/p30.png";
import p31 from "../../assets/p31.png";
import p32 from "../../assets/p32.png";
import person504 from "../../assets/person504.png";
import person505 from "../../assets/person505.png";
import person506 from "../../assets/person506.png";
import { Helmet } from "react-helmet-async";
 

const Video = () => {
  return (
    <>
      <Link to="/video"></Link>
      <Helmet>
        <title>Oceancapp | Video Editing</title>
      </Helmet>
      <div>
        {/* ---------------------------------1st phase ----------------------------*/}
        <div className="flex flex-col md:flex-row items-center justify-between p-8 shadow-md rounded-lg">
          <div className="text-center md:text-left md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-3xl sm:text-3xl md:text-4xl bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-800 text-transparent bg-clip-text uppercase pt-4 font-bold font-serif">
              Video Editing
            </h3>
            <h2 className="text-white font-extrabold text-xl sm:text-2xl md:text-2xl mb-4">
              Register by contacting us
            </h2>
            <p className="text-white mb-8">
              Oceancapp's video editing services stand out for their ability to
              turn raw footage into expertly crafted, engaging content tailored
              to your unique requirements. We excel in producing high-quality
              videos that captivate and connect with your audience effectively.
              Our skilled team offers full-spectrum support, from initial
              footage evaluation and editing to final touches and enhancements,
              ensuring a polished and compelling result. We emphasize creative
              storytelling and technical precision, utilizing advanced editing
              tools and techniques to create videos that leave a lasting
              impression.
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
                src={videop}
                alt="Sale"
                className="rounded-lg shadow-lg mb-4 md:mb-0 md:mr-4"
              ></img>
              <img
                src={videow}
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
              <source src={viv} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="md:w-1/2 md:ml-8 text-center md:text-left">
              <h3 className="text-3xl text-white font-bold mb-4">
                Learn More About Video Editing Design Services
              </h3>
              <p className="text-white mb-8">
                Discover our expert video editing solutions through this
                engaging video. Our skilled team is dedicated to providing
                high-quality services tailored to your specific needs. From
                initial concept to flawless final cut, we ensure a smooth
                process in transforming your footage into compelling and
                professional videos.
              </p>
              <a
                href={viv}
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
            video editing Excellence Delivered
          </h3>
        </div>
        <div className="h-1 w-10 bg-cyan-600 rounded flex justify-center items-center mx-auto my-auto hover:animate-ping"></div>
        <p className="text-center font-thin text-xl text-white px-4 lg:px-0 md:px-0 pt-4">
          <p>
            At Oceancapp, we specialize in delivering professional video editing
            solutions that engage, entertain, and elevate your content. Our
            dedication to quality ensures that your videos not only meet but
            exceed industry standards, leaving a lasting impression on your
            audience.
          </p>{" "}
          <br />
          <p>
            Our team of skilled editors is equipped with the expertise and
            creativity to transform raw footage into compelling visual stories.
            We stay updated with the latest editing techniques and technologies
            to deliver polished and impactful videos. Understanding the unique
            objectives of each project, we tailor our editing process to
            effectively convey your message and achieve your desired outcomes.
          </p>{" "}
          <br />
          <p>
            Our focus is on creating videos that are not only visually stunning
            but also strategically edited to resonate with your target audience.
            Whether you need promotional videos, corporate presentations, or
            social media content, we bring precision and creativity to every
            project. We ensure seamless collaboration and transparent
            communication throughout the editing process, ensuring your vision
            is brought to life.
          </p>
          <br />
          <p>
            With the increasing demand for high-quality video content, having
            professional editing is essential. Our editors are skilled in
            enhancing visual appeal, refining storytelling, and optimizing
            audiovisual elements for maximum impact. We also prioritize
            efficiency and timely delivery, ensuring your videos are ready to
            captivate your audience on schedule.
          </p>
          <br />
          <p>
            At Oceancapp, we showcase our editing expertise through our
            portfolio, where you can view examples of our best video editing
            work. This allows you to see firsthand how our editing techniques
            can elevate your content and amplify your brand message.
          </p>
          <br />
          <p>
            Are you passionate about video editing and looking to join a dynamic
            team? Oceancapp welcomes talented individuals who are eager to push
            creative boundaries and deliver exceptional video editing solutions.
            Join us to work on exciting projects, refine your skills, and
            contribute to our mission of excellence in video editing.
          </p>
          <br />
          <p>
            Whether you're launching a new video campaign or refining existing
            content, Oceancapp is your trusted partner for professional video
            editing. Contact us today to discuss your video editing needs and
            discover how we can enhance your visual storytelling through expert
            editing techniques.
          </p>
        </p>
        </div>
        {/* ---------------------------------3rd phase finish----------------------------*/}
        {/* ---------------------------------4th phase start----------------------------*/}
        <div className="flex items-center justify-center  w-full h-[80vh] ">
          <div className="flex flex-col items-center my-10 mt-16 text-white space-y-8">
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
              Turn Your Ideas into Captivating Video Edits
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
                  src={p29}
                  alt="avatar navigate ui"
                />
              </div>
              <div className="w-14 h-14 bg-[#191919]  rounded-full border-[3px] border-[#191919] relative -left-5">
                <img
                  className="w-full h-full rounded-full"
                  src={p30}
                  alt="avatar navigate ui"
                />
              </div>
              <div className="w-14 h-14 bg-[#191919]  rounded-full border-[3px] border-[#191919]  relative -left-10">
                <img
                  className="w-full h-full rounded-full"
                  src={p31}
                  alt="avatar navigate ui"
                />
              </div>
              <div className="w-14 h-14 bg-[#191919]  rounded-full border-[3px] border-[#191919]  relative -left-[60px]">
                <img
                  className="w-full h-full rounded-full"
                  src={p32}
                  alt="avatar navigate ui"
                />
              </div>

              <div className="relative -left-5">
                <p className="text-lg text-white">120+</p>
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
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Cutting</p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Trimming</p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Splitting</p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Timeline</p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Transitions</p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Effects</p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Color Correction
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Color Grading
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Green Screen
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Keying</p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Masking</p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Compositing</p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Montage</p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Audio Sync</p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Sound Design
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Audio Mixing
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Voiceover</p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Titles</p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Subtitles</p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Lower Thirds
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Motion Graphics
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Visual Effects (VFX)
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Rendering</p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Exporting</p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Frame Rate</p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Resolution</p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Aspect Ratio
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Multicam Editing
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Proxy Editing
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Storyboarding
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Non-Linear Editing (NLE)
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Rough Cut</p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Final Cut</p>
        </Marquee>
        <Marquee className="my-5" direction="left" speed={50}>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Clip</p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Sequence</p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">B-Roll</p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Jump Cut</p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">L-Cut</p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">J-Cut</p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Cross Dissolve
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Fade In</p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Fade Out</p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Speed Ramp</p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Stabilization
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Split Screen
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Picture-in-Picture
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Overlay</p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Editing Software
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Video Effects Library
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Editing Workflow
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Adjustment Layers
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Layering</p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">Retiming</p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Noise Reduction
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Chromatic Aberration
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Scene Transition
          </p>
          <p className="text-xl md:text-4xl font-extrabold font-serif px-4">
            Sync Licensing
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
                      <img src={person504} className="w-40 h-40" alt="" />
                    </div>
                    <div className="md:flex-grow">
                      <h2 className="text-2xl font-medium text-white title-font mb-2">
                        Liam Roberts - Multimedia Editing Expert
                      </h2>
                      <p className="leading-relaxed text-white">
                      "Partnering with Oceancapp for our video editing requirements was an excellent choice. Their team provided insightful guidance and produced top-notch edits that seamlessly integrated with our overall marketing strategy. The quality of their work and their ability to understand and execute our vision were exceptional. Oceancapp’s commitment to excellence in video editing has greatly enhanced our multimedia projects."
                      </p>
                    </div>
                  </div>
                  <div className="py-8 flex flex-wrap md:flex-nowrap">
                    <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                      <img src={person505} className="w-40 h-40" alt="" />
                    </div>
                    <div className="md:flex-grow">
                      <h2 className="text-2xl font-medium text-white title-font mb-2">
                      Sophia Johnson - Visual Storytelling Solutions
                      </h2>
                      <p className="leading-relaxed text-white">
                      "Oceancapp’s video editing services have significantly enhanced our content. They delivered high-quality edits that effectively conveyed our message and kept our audience captivated. The team's professionalism, innovative approach, and ability to meet tight deadlines were impressive throughout the project. Oceancapp’s dedication to delivering exceptional video editing work has been instrumental in our success."
                      </p>
                    </div>
                  </div>
                  <div className="py-8 flex flex-wrap md:flex-nowrap">
                    <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                      <img src={person506} className="w-40 h-40" alt="" />
                    </div>
                    <div className="md:flex-grow">
                      <h2 className="text-2xl font-medium text-white title-font mb-2">
                      Ava Martinez - Video Editing Specialist
                      </h2>
                      <p className="leading-relaxed text-white">
                      "Choosing Oceancapp for our video editing needs was a fantastic decision. Their team transformed our raw footage into a polished and engaging final product that perfectly captured our vision. The creativity, technical skills, and attention to detail they demonstrated were outstanding. Oceancapp’s expertise in video editing has truly brought our projects to life and exceeded our expectations."
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

export default Video;
