import React, { useState } from 'react';

const FAQ = () => {
    const [isOpen, setIsOpen] = useState(null);
  const accordionsData = [
    {
      title: "Why should I consider your software development company as a partner?",
      description:
        'To create an account, click on the "Sign Up" button and fill out the required information. Once done, you can enjoy the benefits of being a registered member.',
    },
    {
      title: "Do you offer custom software development services for my industry?",
      description:
        "Our return policy allows you to return items within 30 days of purchase. Please visit our returns page for detailed instructions and to initiate a return.",
    },
    {
      title: "What is your process for end-to-end software development?",
      description:
        "Yes, you can change your shipping address before your order is shipped. Go to your account settings and update the shipping information accordingly.",
    },
    {
      title: "How does your team augmentation process work?",
      description:
        "We appreciate our loyal customers! Stay tuned for exclusive discounts, promotions, and special offers available to members of our loyalty program.",
    },
    {
      title: "Do you offer teams for mobile app development?",
      description:
        "We appreciate our loyal customers! Stay tuned for exclusive discounts, promotions, and special offers available to members of our loyalty program.",
    },
    {
      title: "What is your preferred development methodology?",
      description:
        "We appreciate our loyal customers! Stay tuned for exclusive discounts, promotions, and special offers available to members of our loyalty program.",
    },
    {
      title: "Can you help me identify the core features for my MVP?",
      description:
        "We appreciate our loyal customers! Stay tuned for exclusive discounts, promotions, and special offers available to members of our loyalty program.",
    },
  ];

  const toggle = (idx) => {
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
  };
    return (
        <div>
            <div className="mx-auto md:w-8/12 my-8 flex justify-center items-center ">
          {/* <p className='text-yellow-600'>----{subHeading}---</p> */}
          <h3 className="text-4xl uppercase border-y-2 pt-4 font-bold font-serif">
            FAQ
          </h3>
        </div>
        <div className="rounded-lg font-sans">
          {accordionsData.map((PerAccordion, idx) => (
            <div
              key={idx}
              className="border-b border-gray-500 last-of-type:border-none"
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
                    className="ml-8 mr-7 shrink-0 fill-white dark:fill-white"
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
                className={`grid overflow-hidden text-gray-800 transition-all duration-300 ease-in-out dark:text-gray-400 ${
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

export default FAQ;