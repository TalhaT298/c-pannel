import React from 'react';
import { Link } from "react-router-dom";
import { PiArrowRightLight } from "react-icons/pi";
const Offer = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center">
        <div className="card bg-base-100 shadow-xl mx-4 mb-8 md:w-96">
          <figure className="px-4 pt-10">
            <img
              src="https://i.ibb.co/pxTDWWp/khela.webp"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body text-center flex justify-center items-center">
            <h2 className="card-title text-center">Programming Hero Seminar</h2>
            <p>
              Every year REC Sports club holds different types of sports
              tournaments.
            </p>
            <div className="card-actions flex justify-center items-center">
              <Link to="/programming-hero">
                <button className="btn btn-outline w-full bg-black text-white border-black border group hover:bg-white hover:text-black">
                  Read More
                  <PiArrowRightLight
                    size="1.1rem"
                    className="text-white group-hover:text-black"
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl mx-4 mb-8 md:w-96">
          <figure className="px-4 pt-10">
            <img
              src="https://i.ibb.co/pxTDWWp/khela.webp"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body text-center flex justify-center items-center">
            <h2 className="card-title">REC Cricket Tournament</h2>
            <p>
              Every year REC Sports club holds different types of sports
              tournaments.
            </p>
            <div className="card-actions card-actions flex justify-center items-center">
              <Link to="/cricket">
                <button className="btn btn-outline w-full bg-black text-white border-black border group hover:bg-white hover:text-black">
                  Read More
                  <PiArrowRightLight
                    size="1.1rem"
                    className="text-white group-hover:text-black"
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl mx-4 mb-8 md:w-96">
          <figure className="px-4 pt-10">
            <img
              src="https://i.ibb.co/pxTDWWp/khela.webp"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body text-center flex justify-center items-center">
            <h2 className="card-title">REC Cricket Tournament</h2>
            <p>
              Every year REC Sports club holds different types of sports
              tournaments.
            </p>
            <div className="card-actions card-actions flex justify-center items-center">
              <Link to="/cricket">
                <button className="btn btn-outline w-full bg-black text-white border-black border group hover:bg-white hover:text-black">
                  Read More
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