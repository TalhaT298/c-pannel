import React from "react";
import Marquee from "react-fast-marquee";
import img1 from "../../../assets/react.svg";
import img2 from "../../../assets/vuejs.svg";
import img3 from "../../../assets/python.svg";
import img4 from "../../../assets/node-js.svg";
import img5 from "../../../assets/mongodb.svg";
import img6 from "../../../assets/javascript.svg";
import img7 from "../../../assets/java.svg";
import img8 from "../../../assets/go.svg";
import img9 from "../../../assets/flutter.svg";
import img10 from "../../../assets/redux.svg";
import img11 from "../../../assets/typescript.svg";
import img12 from "../../../assets/tailwind-css.svg";
import img13 from "../../../assets/ruby.svg";
import img14 from "../../../assets/npm.svg";
import img15 from "../../../assets/firebase.svg";
import img16 from "../../../assets/github.svg";
import img17 from "../../../assets/aws.svg";

const Technology = () => {
  return (
    <div className="py-8">
      <div className="mx-auto md:w-8/12 my-4 flex justify-center items-center ">
        {/* <p className='text-yellow-600'>----{subHeading}---</p> */}
        <h3 className="text-4xl text-white uppercase  pt-4 font-bold font-serif">
          Technology We Used
        </h3>
      </div>
      <div className="h-1 w-[800px] bg-white rounded flex justify-center items-center mx-auto my-auto"></div>
      <Marquee className="my-5 ">
        {/* //130*130 */}
        <img
          className="h-32 w-32"
          src={img1}
          alt=""
          style={{ marginRight: "20px" }}
        />
        <img
          className="h-32 w-32"
          src={img2}
          alt=""
          style={{ marginRight: "20px" }}
        />
        <img
          className="h-32 w-32"
          src={img3}
          alt=""
          style={{ marginRight: "20px" }}
        />
        <img
          className="h-32 w-32"
          src={img4}
          alt=""
          style={{ marginRight: "20px" }}
        />
        <img
          className="h-32 w-32"
          src={img5}
          alt=""
          style={{ marginRight: "20px" }}
        />
        <img
          className="h-32 w-32"
          src={img6}
          alt=""
          style={{ marginRight: "20px" }}
        />
        <img
          className="h-32 w-32"
          src={img7}
          alt=""
          style={{ marginRight: "20px" }}
        />
        <img
          className="h-32 w-32"
          src={img8}
          alt=""
          style={{ marginRight: "20px" }}
        />
        <img
          className="h-32 w-32"
          src={img9}
          alt=""
          style={{ marginRight: "20px" }}
        />
        <img
          className="h-32 w-32"
          src={img10}
          alt=""
          style={{ marginRight: "20px" }}
        />
        <img
          className="h-32 w-32"
          src={img11}
          alt=""
          style={{ marginRight: "20px" }}
        />
        <img
          className="h-32 w-32"
          src={img12}
          alt=""
          style={{ marginRight: "20px" }}
        />
        <img
          className="h-32 w-32"
          src={img13}
          alt=""
          style={{ marginRight: "20px" }}
        />
        <img
          className="h-32 w-32"
          src={img14}
          alt=""
          style={{ marginRight: "20px" }}
        />
        <img
          className="h-32 w-32"
          src={img15}
          alt=""
          style={{ marginRight: "20px" }}
        />
        <img
          className="h-32 w-32"
          src={img16}
          alt=""
          style={{ marginRight: "20px" }}
        />
        <img
          className="h-32 w-32"
          src={img17}
          alt=""
          style={{ marginRight: "20px" }}
        />
      </Marquee>
    </div>
  );
};

export default Technology;
