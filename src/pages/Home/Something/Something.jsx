/* eslint-disable no-unused-vars */
import React from "react";
// import AOS from 'aos';
// import 'aos/dist/aos.css';

const Something = () => {
  // useEffect(() => {
  //   AOS.init({
  //     // You can add global settings here if needed
  //     offset: 120,
  //     delay: 0,
  //     duration: 400,
  //     easing: 'ease',
  //     once: false,
  //     mirror: false,
  //     anchorPlacement: 'top-bottom',
  //   });
  //   AOS.refresh();
  // }, []);

  return (
    <div className="p-4 md:p-8">
      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        <div className="w-full md:w-1/2 text-2xl md:text-4xl font-bold leading-snug md:leading-relaxed text-center md:text-left" data-aos="fade-right">
          Navigating Global Projects with
          <span className="bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 bg-clip-text text-transparent">
            Expertise
          </span>
          and
          <span className="bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 bg-clip-text text-transparent">
            Assurance
          </span>
        </div>
        <div className="w-full md:w-1/2 font-thin pt-3 md:pt-5 text-center md:text-left" data-aos="fade-left">
          Discover Oceancapp, your trusted partner in managing global projects with precision and care. With over 147 experts, 359 client protections, and a 100% service guarantee, we ensure your projects sail smoothly and successfully. Join the 527+ satisfied clients who rely on Oceancapp for unparalleled expertise and peace of mind.
        </div>
      </div>
    </div>
  );
};

export default Something;
