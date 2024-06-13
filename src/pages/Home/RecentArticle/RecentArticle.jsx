/* eslint-disable no-unused-vars */
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

const RecentArticle = () => {
  return (
    <div>
      <div className="mx-auto md:w-8/12 my-4 flex justify-center items-center">
        {/* <p className='text-yellow-600'>----{subHeading}---</p> */}
        <h3 className="text-4xl text-cyan-500 uppercase pt-4 font-bold font-serif">
          recent articles
        </h3>
      </div>
      <div className="h-1 w-80 bg-cyan-500 rounded flex justify-center items-center mx-auto my-auto hover:animate-ping"></div>
      <div className="mx-auto md:w-8/12 my-4">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            {" "}
            <div className=" mx-auto my-6 max-w-[350px] rounded-lg bg-white font-sans shadow-lg dark:bg-[#18181B]">
              <div className="flex items-center justify-between gap-10 px-4 py-4">
                {/* Avatar image  */}
                <div className="flex items-center gap-3">
                  <img
                    width={100}
                    height={100}
                    className="h-16 w-16 rounded-full bg-black/40"
                    src="https://source.unsplash.com/100x100/?portrait"
                    alt="card navigate ui"
                  />
                  <div className="flex flex-col">
                    <h2 className="text-xl font-semibold">Yoan Lee</h2>
                    <p className="text-gray-400">2 days ago</p>
                  </div>
                </div>
                {/* Setting button */}
                <div className="flex cursor-pointer flex-col gap-2 rounded-full px-4 py-3">
                  <span className="size-[3px] rounded-full bg-gray-600"></span>
                  <span className="size-[3px] rounded-full bg-gray-600"></span>
                  <span className="size-[3px] rounded-full bg-gray-600"></span>
                </div>
              </div>
              {/* Post Image */}
              <div className="flex flex-col gap-1">
                <div className="w-full">
                  <img
                    width={400}
                    height={200}
                    className="h-[150px] w-full bg-black/40"
                    src="https://source.unsplash.com/400x200/?arts"
                    alt="card navigate ui"
                  />
                </div>
                <div className="flex gap-1 overflow-hidden">
                  <img
                    width={201}
                    height={201}
                    className="h-[150px] w-[49.5%] bg-black/40"
                    src="https://source.unsplash.com/201x201/?arts"
                    alt="card navigate ui"
                  />
                  <img
                    width={202}
                    height={202}
                    className="h-[150px] w-[49.5%] bg-black/40"
                    src="https://source.unsplash.com/202x202/?arts"
                    alt="card navigate ui"
                  />
                </div>
              </div>
              {/* Post content */}
              <div className="mt-3 space-y-2 px-4">
                <h2 className="text-xl font-semibold text-slate-800 dark:text-white/90">
                  My new paintings
                </h2>
                <h2 className="text-sm text-gray-500 dark:text-white/50">
                  Hey, I captured some picture recently. You can check it and
                  share you thoughts with me. I want to listen your thoughts...{" "}
                  <span className="cursor-pointer text-[#3e96d4]">
                    See more
                  </span>
                </h2>
              </div>
              {/* icons */}
              <div className="mt-4 flex justify-between px-4 pb-4">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-6 fill-[#1E293B] dark:fill-white/90"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g strokeWidth="0"></g>
                    <g
                      id="navigateui"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="navigateui">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.62436 4.4241C3.96537 5.18243 2.75 6.98614 2.75 9.13701C2.75 11.3344 3.64922 13.0281 4.93829 14.4797C6.00072 15.676 7.28684 16.6675 8.54113 17.6345C8.83904 17.8642 9.13515 18.0925 9.42605 18.3218C9.95208 18.7365 10.4213 19.1004 10.8736 19.3647C11.3261 19.6292 11.6904 19.7499 12 19.7499C12.3096 19.7499 12.6739 19.6292 13.1264 19.3647C13.5787 19.1004 14.0479 18.7365 14.574 18.3218C14.8649 18.0925 15.161 17.8642 15.4589 17.6345C16.7132 16.6675 17.9993 15.676 19.0617 14.4797C20.3508 13.0281 21.25 11.3344 21.25 9.13701C21.25 6.98614 20.0346 5.18243 18.3756 4.4241C16.9023 3.75065 14.9662 3.85585 13.0725 5.51217L14.5302 6.9694C14.8232 7.26224 14.8233 7.73711 14.5304 8.03006C14.2376 8.323 13.7627 8.32309 13.4698 8.03025L11.4698 6.03097L11.4596 6.02065C9.40166 3.88249 7.23607 3.68739 5.62436 4.4241ZM12 4.45873C9.68795 2.39015 7.09896 2.10078 5.00076 3.05987C2.78471 4.07283 1.25 6.42494 1.25 9.13701C1.25 11.8025 2.3605 13.836 3.81672 15.4757C4.98287 16.7888 6.41022 17.8879 7.67083 18.8585C7.95659 19.0785 8.23378 19.292 8.49742 19.4998C9.00965 19.9036 9.55954 20.3342 10.1168 20.6598C10.6739 20.9853 11.3096 21.2499 12 21.2499C12.6904 21.2499 13.3261 20.9853 13.8832 20.6598C14.4405 20.3342 14.9903 19.9036 15.5026 19.4998C15.7662 19.292 16.0434 19.0785 16.3292 18.8585C17.5898 17.8879 19.0171 16.7888 20.1833 15.4757C21.6395 13.836 22.75 11.8025 22.75 9.13701C22.75 6.42494 21.2153 4.07283 18.9992 3.05987C16.901 2.10078 14.3121 2.39015 12 4.45873Z"
                      ></path>
                    </g>
                  </svg>
                  <h2 className="text-lg font-semibold text-slate-800 dark:text-white/90">
                    10k
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="fill-[#1E293B] dark:fill-white/90"
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="22"
                    viewBox="0 0 21 22"
                  >
                    <path d="M4.47471 13.9757C5.34981 13.9707 6.19148 13.639 6.83471 13.0457L13.0947 16.6257C13.015 16.902 12.9746 17.1881 12.9747 17.4757C12.9683 18.2872 13.2417 19.0762 13.7489 19.7097C14.2561 20.3433 14.9661 20.7827 15.7594 20.9541C16.5527 21.1254 17.3807 21.0181 18.1042 20.6504C18.8277 20.2826 19.4023 19.6768 19.7314 18.935C20.0605 18.1931 20.1239 17.3605 19.9109 16.5774C19.698 15.7942 19.2217 15.1084 18.5622 14.6353C17.9028 14.1623 17.1005 13.9309 16.2904 13.9801C15.4804 14.0294 14.712 14.3562 14.1147 14.9057L7.85471 11.3257C7.93026 11.0792 7.97066 10.8234 7.97471 10.5657L14.1247 7.04567C14.7188 7.58251 15.4794 7.89875 16.2789 7.94137C17.0785 7.98398 17.8684 7.75037 18.5161 7.27972C19.1639 6.80906 19.6301 6.12999 19.8366 5.35639C20.0431 4.58278 19.9773 3.7617 19.6503 3.03084C19.3232 2.29999 18.7548 1.70381 18.0404 1.34229C17.326 0.98078 16.509 0.875916 15.7264 1.04529C14.9438 1.21467 14.2433 1.64798 13.7423 2.27256C13.2413 2.89713 12.9703 3.67499 12.9747 4.47567C12.9781 4.76297 13.0184 5.04865 13.0947 5.32567L7.40471 8.57567C7.07502 8.06562 6.61828 7.65014 6.0794 7.37007C5.54051 7.09 4.93801 6.95497 4.33114 6.97825C3.72426 7.00154 3.13389 7.18234 2.61804 7.50288C2.1022 7.82342 1.67864 8.27268 1.389 8.80649C1.09936 9.34029 0.95361 9.94028 0.966069 10.5475C0.978527 11.1547 1.14877 11.7482 1.46006 12.2697C1.77135 12.7911 2.21298 13.2226 2.74154 13.5217C3.2701 13.8209 3.86739 13.9773 4.47471 13.9757ZM16.4747 15.9757C16.7714 15.9757 17.0614 16.0636 17.3081 16.2285C17.5547 16.3933 17.747 16.6276 17.8605 16.9016C17.9741 17.1757 18.0038 17.4773 17.9459 17.7683C17.888 18.0593 17.7451 18.3265 17.5354 18.5363C17.3256 18.7461 17.0583 18.889 16.7673 18.9468C16.4764 19.0047 16.1748 18.975 15.9007 18.8615C15.6266 18.748 15.3923 18.5557 15.2275 18.309C15.0627 18.0623 14.9747 17.7723 14.9747 17.4757C14.9747 17.0778 15.1327 16.6963 15.4141 16.415C15.6954 16.1337 16.0769 15.9757 16.4747 15.9757ZM16.4747 2.97567C16.7714 2.97567 17.0614 3.06364 17.3081 3.22846C17.5547 3.39328 17.747 3.62755 17.8605 3.90164C17.9741 4.17573 18.0038 4.47733 17.9459 4.7683C17.888 5.05927 17.7451 5.32655 17.5354 5.53633C17.3256 5.74611 17.0583 5.88897 16.7673 5.94684C16.4764 6.00472 16.1748 5.97502 15.9007 5.86149C15.6266 5.74795 15.3923 5.5557 15.2275 5.30902C15.0627 5.06235 14.9747 4.77234 14.9747 4.47567C14.9747 4.07784 15.1327 3.69631 15.4141 3.41501C15.6954 3.1337 16.0769 2.97567 16.4747 2.97567ZM4.47471 8.97567C4.77138 8.97567 5.06139 9.06364 5.30807 9.22846C5.55474 9.39328 5.747 9.62755 5.86053 9.90164C5.97406 10.1757 6.00377 10.4773 5.94589 10.7683C5.88801 11.0593 5.74515 11.3265 5.53537 11.5363C5.32559 11.7461 5.05832 11.889 4.76735 11.9468C4.47638 12.0047 4.17478 11.975 3.90069 11.8615C3.6266 11.748 3.39233 11.5557 3.22751 11.309C3.06269 11.0623 2.97471 10.7723 2.97471 10.4757C2.97471 10.0778 3.13275 9.69631 3.41405 9.41501C3.69536 9.1337 4.07689 8.97567 4.47471 8.97567Z" />
                  </svg>
                  <h2 className="text-lg font-semibold text-slate-800 dark:text-white/90">
                    34
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  
                  
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default RecentArticle;
