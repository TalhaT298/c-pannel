/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const FAQ = () => {
    const [isOpen, setIsOpen] = useState(null);
  const accordionsData = [
    {
      title: "Why should I consider your software development company as a partner?",
      description:
        'At OceanCapp, we take pride in developing high-quality applications in record time. We have 250+ experienced developers who understand the importance of agile methodologies and use cutting-edge technologies such as Java, NodeJS, AngularJS and React Native to deliver unique software solutions that provide maximum value for our clients. Our team is committed to delivering timely results while keeping costs low so you can maximize your ROI..',
    },
    {
      title: "Do you offer custom software development services for my industry?",
      description:
        "We understand the need for reliable, secure and cost-effective software solutions that are designed to meet the specific requirements of each client. Our developers have a wealth of expertise in developing custom applications and can tailor our services to the exact needs of your business. From enterprise resource planning (ERP) systems to customer relationship management (CRM) platforms, we offer comprehensive software development solutions that will help optimize your operations and improve efficiency.",
    },
    {
      title: "What is your process for end-to-end software development?",
      description:
        "OceanCapp follows a tried and tested process for end-to-end software development. This process includes gathering requirements, designing a solution, developing and testing the software, and deploying and maintaining the finished product. Our team of experienced software engineers will work with you at every step of the way to ensure that your project is a success.",
    },
    {
      title: "How does your team augmentation process work?",
      description:
        "OceanCapp’s team augmentation process is designed to seamlessly integrate our experienced software engineers into your existing development team. We will work with you to understand your specific needs and goals, and then provide you with a team of engineers who have the skills and expertise to help you achieve them. Our team members will work closely with your team to ensure that they are able to contribute effectively and efficiently.",
    },
    {
      title: "Do you offer teams for mobile app development?",
      description:
        "Yes, OceanCapp offers team augmentation services for mobile app development. Our team of experienced software engineers has expertise in developing high-quality, user-friendly mobile apps for a variety of platforms, including iOS, Android, and Windows. Our team members will work closely with your team to ensure that the mobile app development process goes smoothly and that the final product meets your requirements.",
    },
    {
      title: "What is your preferred development methodology?",
      description:
        "We have experience with different methodologies, including Scrum, Waterfall, and Kanban. We can adapt our approach as needed to meet the specific requirements of our clients.In most of our software development projects, we follow the agile Scrum methodology. It allows for rapid iteration and continuous delivery and is particularly useful for projects where requirements are subject to change.",
    },
    {
      title: "Can you help me identify the core features for my MVP?",
      description:
        "Yes, our team of experienced software engineers can help you identify the core features for your MVP. We will work with you to understand your business goals and target audience, and then help you prioritize the features that will have the greatest impact. This will allow you to focus on the most important features first, while still being able to add additional features in future iterations.",
    },
  ];

  const toggle = (idx) => {
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
  };
    return (
        <div  className="py-8 px-10 lg:px-0">
            <div className="mx-auto md:w-8/12 my-4 flex justify-center items-center ">
          {/* <p className='text-yellow-600'>----{subHeading}---</p> */}
          <h3 className="text-2xl sm:text-3xl md:text-4xl bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-800 text-transparent bg-clip-text uppercase pt-4 font-bold font-serif">
            FAQ
          </h3>
          
        </div>
        <div className="h-1 w-10 mb-8 bg-cyan-500 rounded flex justify-center items-center mx-auto my-auto hover:animate-ping"></div>
        <div className="rounded-lg font-sans">
          {accordionsData.map((PerAccordion, idx) => (
            <div
              key={idx}
              className="border-b border-cyan-500 last-of-type:border-none"
            >
              <button
                onClick={() => toggle(idx)}
                className="flex h-full w-full justify-between py-4 text-left font-medium text-white dark:text-white"
              >
                <span className="sm:text-lg md:text-xl">
                  {PerAccordion.title}
                </span>
                <span className="rounded-full p-2 ">
                  <svg
                    className="ml-8 mr-7 shrink-0 fill-white dark:white"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="7"
                      width="16"
                      height="2"
                      rx="1"
                      className={`origin-center transform transition duration-200 ease-out ${
                        isOpen === idx && "!rotate-180"
                      }`}
                    />
                    <rect
                      y="7"
                      width="16"
                      height="2"
                      rx="1"
                      className={`origin-center rotate-90 transform transition duration-200 ease-out ${
                        isOpen === idx && "!rotate-180"
                      }`}
                    />
                  </svg>
                </span>
              </button>
              <div
                className={`grid overflow-hidden text-white transition-all duration-300 ease-in-out dark:text-white ${
                  isOpen === idx
                    ? "grid-rows-[1fr] pb-3 opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden pr-4">
                  {PerAccordion.description}
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ;