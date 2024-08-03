/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { PiArrowRightLight } from "react-icons/pi";
import { motion } from "framer-motion";
import img1 from "../../../assets/Web_design (2).webp";
import img2 from "../../../assets/word.png";
import img6 from "../../../assets/Promt.png";
import img3 from "../../../assets/Web_design (1).webp";
import img4 from "../../../assets/Web_design (5).webp";
import edu from "../../../assets/edu.png";
import idea23 from "../../../assets/idea23.png";
import v from "../../../assets/v.png";
import img5 from "../../../assets/graphics.png";
import "./Offer.css";
const Offer = () => {
  return (
    <div>
      <div className="mx-auto md:w-8/12 mb-8 mt-8 flex justify-center items-center ">
        
        <h3 className="text-2xl sm:text-3xl md:text-4xl bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-800 text-transparent bg-clip-text uppercase pt-4 font-bold font-serif">
          Solution We Offer
        </h3>
      </div>
      <div className="h-1 w-10 bg-cyan-600 rounded flex justify-center items-center mx-auto my-auto hover:animate-ping"></div>
      <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center my-10">
        <div
          className="card bg-gradient-to-r from-cyan-700 mx-4 mb-8 md:w-96 rounded custom-gradient"
          style={{
            boxShadow:
              "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.5)",
          }}
        >
          <figure className="px-4 pt-10">
            <img src={img2} alt="Shoes" className="rounded-xl w-80" />
          </figure>
          <div className="card-body text-center flex justify-center items-center">
            <h2 className="card-title">WordPress development</h2>
            <p>
              Our skilled WordPress developers create custom, user-friendly, and
              SEO-optimized websites that are easy to manage and tailored to
              your needs.
            </p>
            <div className="card-actions  flex justify-center items-center">
              <Link to="/gameDevelopment">
                <button className="flex items-center gap-4 px-8 py-3 bg-gradient-to-t from-black to-white/10 text-white text-lg font-medium rounded-lg">
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

        <div
          className="card bg-gradient-to-t from-cyan-700 mx-4 mb-8 md:w-96 rounded custom-gradient"
          style={{
            boxShadow:
              "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.5)",
          }}
        >
          <figure className="px-4 pt-10">
            <img src={img3} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body text-center flex justify-center items-center">
            <h2 className="card-title">Web Development</h2>
            <p>
              Build user-centric websites using our unique web development
              services' processes and our skilled team of developers and
              designers.
            </p>
            <div className="card-actions  flex justify-center items-center">
              <Link to="/webdevelopment">
                <button className="flex items-center gap-4 px-8 py-3 bg-gradient-to-t from-black to-white/10 text-white text-lg font-medium rounded-lg">
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

        <div
           
          className="card bg-gradient-to-l from-cyan-700 mx-4 mb-8 md:w-96 rounded custom-gradient"
          style={{
            boxShadow:
              "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.5)",
          }}
        >
          <figure className="px-4 pt-10">
            <img src={img4} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body text-center flex justify-center items-center">
            <h2 className="card-title">Cyber Security</h2>
            <p>
              we're your cybersecurity guardians, crafting innovative solutions
              to protect your digital assets from evolving threats. Trust us to
              secure your digital future.
            </p>
            <div className="card-actions  flex justify-center items-center">
              <Link to="/cybersecurity">
                <button className="flex items-center gap-4 px-8 py-3 bg-gradient-to-t from-black to-white/10 text-white text-lg font-medium rounded-lg">
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

       
        <div
          
          className="card bg-gradient-to-r from-cyan-700 mx-4 mb-8 md:w-96 rounded custom-gradient"
          style={{
            boxShadow:
              "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.5)",
          }}
        >
          <figure className="px-4 pt-10">
            <img src={img1} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body text-center flex justify-center items-center">
            <h2 className="card-title">App Development</h2>
            <p>
              Our skilled designers use their knowledge of industry standards
              and best practices for app and online design to
            </p>
            <div className="card-actions  flex justify-center items-center">
              <Link to="/app">
                <button className="flex items-center gap-4 px-8 py-3 bg-gradient-to-t from-black to-white/10 text-white text-lg font-medium rounded-lg">
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
        <div
          // whileHover={{ scale: 1.05 }}
          // whileTap={{ scale: 0.8 }}
          className="card bg-gradient-to-t from-cyan-700 mx-4 mb-8 md:w-96 rounded custom-gradient"
          style={{
            boxShadow:
              "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.5)",
          }}
        >
          <figure className="px-4 pt-10">
            <img src={img6} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body text-center flex justify-center items-center">
            <h2 className="card-title">Prompt Engineering</h2>
            <p>
              Our proficient prompt engineers specialize in optimizing AI
              prompts to enhance user interactions, ensuring precise,
              efficient,...
              {/* and meaningful responses tailored to your
              business needs */}
            </p>
            <div className="card-actions  flex justify-center items-center">
              <Link to="/prompt">
                <button className="flex items-center gap-4 px-8 py-3 bg-gradient-to-t from-black to-white/10 text-white text-lg font-medium rounded-lg">
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

        <div
          className="card bg-gradient-to-l from-cyan-700 mx-4 mb-8 md:w-96 rounded custom-gradient"
          style={{
            boxShadow:
              "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.5)",
          }}
        >
          <figure className="px-4 pt-10">
            <img src={img5} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body text-center flex justify-center items-center">
            <h2 className="card-title">Graphics Design</h2>
            <p>
              Our talented graphic designers craft visually compelling and
              innovative designs that effectively communicate...
              {/* your brand
              message, ensuring your visuals stand out and captivate your
              audience. */}
            </p>
            <div className="card-actions flex justify-center items-center">
              <Link to="/graphics">
                <button className="flex items-center gap-4 px-8 py-3 bg-gradient-to-t from-black to-white/10 text-white text-lg font-medium rounded-lg">
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

        {/* education service */}
        <div
          className="card bg-gradient-to-r from-cyan-700 mx-4 mb-8 md:w-96 rounded custom-gradient"
          style={{
            boxShadow:
              "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.5)",
          }}
        >
          <figure className="px-4 pt-10">
            <img src={edu} alt="Shoes" className="rounded-xl w-80" />
          </figure>
          <div className="card-body text-center flex justify-center items-center">
            <h2 className="card-title">Education Services</h2>
            <p>
              Our talented educators develop engaging and innovative lessons
              that effectively communicate complex concepts..
            </p>
            <div className="card-actions  flex justify-center items-center">
              <Link to="/education">
                <button className="flex items-center gap-4 px-8 py-3 bg-gradient-to-t from-black to-white/10 text-white text-lg font-medium rounded-lg">
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
        {/* idea to creation */}
        <div
          // whileHover={{ scale: 1.05 }}
          // whileTap={{ scale: 0.8 }}
          className="card bg-gradient-to-t from-cyan-700 mx-4 mb-8 md:w-96 rounded custom-gradient"
          style={{
            boxShadow:
              "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.5)",
          }}
        >
          <figure className="px-4 pt-10">
            <img src={idea23} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body text-center flex justify-center items-center">
            <h2 className="card-title">Idea to Creation</h2>
            <p>
              OOne of the most compelling and crucial aspects of our IT solution
              is transforming ideas into reality.
              {/* and meaningful responses tailored to your
              business needs */}
            </p>
            <div className="card-actions  flex justify-center items-center">
              <Link to="/creation">
                <button className="flex items-center gap-4 px-8 py-3 bg-gradient-to-t from-black to-white/10 text-white text-lg font-medium rounded-lg">
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

        {/* video editting */}
        <div
          className="card bg-gradient-to-l from-cyan-700 mx-4 mb-8 md:w-96 rounded custom-gradient"
          style={{
            boxShadow:
              "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.5)",
          }}
        >
          <figure className="px-4 pt-10">
            <img src={v} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body text-center flex justify-center items-center">
            <h2 className="card-title">Video Editing</h2>
            <p>
              Our skilled video editors create visually stunning and innovative
              edits that effectively communicate your brand's story...
              {/* your brand
              message, ensuring your visuals stand out and captivate your
              audience. */}
            </p>
            <div className="card-actions flex justify-center items-center">
              <Link to="/video">
                <button className="flex items-center gap-4 px-8 py-3 bg-gradient-to-t from-black to-white/10 text-white text-lg font-medium rounded-lg">
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
    </div>
  );
};

export default Offer;
