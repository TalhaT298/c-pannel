import React from "react";
import { Link } from "react-router-dom";
import { PiArrowRightLight } from "react-icons/pi";
import { motion } from "framer-motion";
const Offer = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center ">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.8 }}
          className="card bg-base-100  mx-4 mb-8 md:w-96 rounded "
          style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.5)" }}
        >
          <figure className="px-4 pt-10">
            <img
              src="https://i.ibb.co/6NWH8LP/Untitled-design-7.webp"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body text-center flex justify-center items-center">
            <h2 className="card-title">Web Design</h2>
            <p>
              Our skilled designers use their knowledge of industry standards
              and best practices for app and online design to
            </p>
            <div className="card-actions card-actions flex justify-center items-center"
            
            >
              <Link to="/cricket">
                <motion.button 
                initial={{x:-1000}}
                animate={{x:0}}
                transition={{
                    duration:"2",
                    delay:"0.2"
                }}
                className="btn btn-outline w-full bg-black text-white border-black border group hover:bg-white hover:text-black">
                  Learn More
                  <PiArrowRightLight
                    size="1.1rem"
                    className="text-white group-hover:text-black"
                    
                  />
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.8 }}
          className="card bg-base-100  mx-4 mb-8 md:w-96 rounded "
          style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.5)" }}
        >
          <figure className="px-4 pt-10">
            <img
              src="https://i.ibb.co/L0SHvMw/Untitled-design-6.webp"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body text-center flex justify-center items-center">
            <h2 className="card-title">Game Development</h2>
            <p>
              Our game development studio develops games and designs plots
              behind them through fruitful game art solutions.
            </p>
            <div className="card-actions card-actions flex justify-center items-center">
              <Link to="/cricket">
              <motion.button 
                initial={{x:-1000}}
                animate={{x:0}}
                transition={{
                    duration:"2",
                    delay:"0.2"
                }}
                className="btn btn-outline w-full bg-black text-white border-black border group hover:bg-white hover:text-black">
                  Learn More
                  <PiArrowRightLight
                    size="1.1rem"
                    className="text-white group-hover:text-black"
                  />
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.8 }}
          className="card bg-base-100  mx-4 mb-8 md:w-96 rounded "
          style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.5)" }}
        >
          <figure className="px-4 pt-10">
            <img
              src="https://i.ibb.co/jzQ7JGv/Untitled-design-8.webp"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body text-center flex justify-center items-center">
            <h2 className="card-title">Web Development</h2>
            <p>
              Build user-centric websites using our unique web development
              services' processes and our skilled team of developers and
              designers.
            </p>
            <div className="card-actions card-actions flex justify-center items-center">
              <Link to="/cricket">
              <motion.button 
                initial={{x:-1000}}
                animate={{x:0}}
                transition={{
                    duration:"2",
                    delay:"0.2"
                }}
                className="btn btn-outline w-full bg-black text-white border-black border group hover:bg-white hover:text-black">
                  Learn More
                  <PiArrowRightLight
                    size="1.1rem"
                    className="text-white group-hover:text-black"
                  />
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.8 }}
          className="card bg-base-100  mx-4 mb-8 md:w-96 rounded "
          style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.5)" }}
        >
          <figure className="px-4 pt-10">
            <img
              src="https://i.ibb.co/jzQ7JGv/Untitled-design-8.webp"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body text-center flex justify-center items-center">
            <h2 className="card-title">Web Development</h2>
            <p>
              Build user-centric websites using our unique web development
              services' processes and our skilled team of developers and
              designers.
            </p>
            <div className="card-actions card-actions flex justify-center items-center">
              <Link to="/cricket">
              <motion.button 
                initial={{x:-1000}}
                animate={{x:0}}
                transition={{
                    duration:"2",
                    delay:"0.2"
                }}
                className="btn btn-outline w-full bg-black text-white border-black border group hover:bg-white hover:text-black">
                  Learn More
                  <PiArrowRightLight
                    size="1.1rem"
                    className="text-white group-hover:text-black"
                  />
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.8 }}
          className="card bg-base-100  mx-4 mb-8 md:w-96 rounded "
          style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.5)" }}
        >
          <figure className="px-4 pt-10">
            <img
              src="https://i.ibb.co/jzQ7JGv/Untitled-design-8.webp"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body text-center flex justify-center items-center">
            <h2 className="card-title">Web Development</h2>
            <p>
              Build user-centric websites using our unique web development
              services' processes and our skilled team of developers and
              designers.
            </p>
            <div className="card-actions card-actions flex justify-center items-center">
              <Link to="/cricket">
              <motion.button 
                initial={{x:-1000}}
                animate={{x:0}}
                transition={{
                    duration:"2",
                    delay:"0.2"
                }}
                className="btn btn-outline w-full bg-black text-white border-black border group hover:bg-white hover:text-black">
                  Learn More
                  <PiArrowRightLight
                    size="1.1rem"
                    className="text-white group-hover:text-black"
                  />
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.8 }}
          className="card bg-base-100  mx-4 mb-8 md:w-96 rounded "
          style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.5)" }}
        >
          <figure className="px-4 pt-10">
            <img
              src="https://i.ibb.co/jzQ7JGv/Untitled-design-8.webp"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body text-center flex justify-center items-center">
            <h2 className="card-title">Web Development</h2>
            <p>
              Build user-centric websites using our unique web development
              services' processes and our skilled team of developers and
              designers.
            </p>
            <div className="card-actions card-actions flex justify-center items-center">
              <Link to="/cricket">
              <motion.button 
                initial={{x:-1000}}
                animate={{x:0}}
                transition={{
                    duration:"2",
                    delay:"0.2"
                }}
                className="btn btn-outline w-full bg-black text-white border-black border group hover:bg-white hover:text-black">
                  Learn More
                  <PiArrowRightLight
                    size="1.1rem"
                    className="text-white group-hover:text-black"
                  />
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Offer;
