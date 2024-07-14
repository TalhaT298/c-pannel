/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const Something = () => {
  useEffect(() => {
    AOS.init({
      // You can add global settings here if needed
      offset: 120,
      delay: 0,
      duration: 400,
      easing: 'ease',
      once: false,
      mirror: false,
      anchorPlacement: 'top-bottom',
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <div className="flex gap-8">
        <div className="w-1/2 text-4xl font-bold leading-relaxed" data-aos="fade-right">
          Navigating Global Projects with<span className="text-cyan-500"> Expertise </span>and <span className="text-cyan-500">Assurance</span>
        </div>
        <div className="w-1/2 font-semibold font-thin pt-5" data-aos="fade-left">
          Discover Oceancapp, your trusted partner in managing global projects with precision and care. With over 147 experts, 359 client protections, and a 100% service guarantee, we ensure your projects sail smoothly and successfully. Join the 527+ satisfied clients who rely on Oceancapp for unparalleled expertise and peace of mind
        </div>
      </div>
    </div>
  );
};

export default Something;
