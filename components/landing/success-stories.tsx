"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { FaQuoteRight } from "react-icons/fa";
import { testimonials } from "@/constants";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import TitleLabel from "../title-label";

function SuccessStories() {
    return (
        <div className="relative py-20 sm:py-28 overflow-hidden light-background bg-white">
            <div className="container mx-auto px-6 lg:px-8">
                {/* Header Section - Centered */}
                <div className="flex flex-col items-center text-center mb-12 gap-y-6">
                    <TitleLabel label="Success Stories" />
                    <h2 className="section-title text-app-purple">
                        Success Stories
                    </h2>
                    <p className="leading-relaxed font-normal text-[18px]">
                        Hear directly from students, mentors, and partners about
                        the impact of WithinTech Rwanda.
                    </p>
                </div>

                {/* Swiper Carousel */}
                <div className="relative testimonial-slider">
                    <Swiper
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={1}
                        spaceBetween={30}
                        navigation={true}
                        pagination={{
                            clickable: true,
                            bulletClass:
                                "swiper-pagination-bullet testimonial-bullet",
                            bulletActiveClass:
                                "swiper-pagination-bullet-active testimonial-bullet-active",
                        }}
                        breakpoints={{
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="pb-16!"
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                {({ isActive }) => (
                                    <div
                                        className={`bg-white light-background rounded-3xl shadow-xl p-8 sm:p-10 overflow-hidden h-full relative transition-all duration-300 ${
                                            isActive
                                                ? "md:scale-110"
                                                : "md:scale-90 md:opacity-70"
                                        }`}
                                    >
                                        {/* Building block decorations - top left */}
                                        <div className="absolute top-0 left-0 w-32 h-32 opacity-10">
                                            <div className="absolute top-2 left-0 w-20 h-12 bg-slate-500 rounded"></div>
                                            <div className="absolute top-0 left-14 w-12 h-12 bg-slate-500 rounded"></div>
                                            <div className="absolute top-10 left-0 w-14 h-14 bg-slate-500"></div>
                                            <div className="absolute top-14 left-4 w-12 h-12 bg-white"></div>
                                            <div className="absolute top-10 left-4 w-2 h-6 bg-white"></div>
                                            <div className="absolute top-4 left-4 w-4 h-4 bg-white"></div>
                                        </div>

                                        {/* Building block decorations - bottom right */}
                                        <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10">
                                            <div className="absolute bottom-0 right-0 w-8 h-28 bg-gray-400"></div>
                                            <div className="absolute bottom-0 right-2 w-12 h-16 bg-gray-400"></div>
                                            <div className="absolute bottom-0 right-10 w-12 h-6 bg-gray-400"></div>
                                            <div className="absolute bottom-10 right-2 w-6 h-4 bg-white"></div>
                                            <div className="absolute bottom-1 right-2 w-4 h-8 bg-white"></div>
                                        </div>

                                        {/* Quote Badge - Top Right */}
                                        <div className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center shadow-lg transform rotate-6">
                                            <h2>
                                                <FaQuoteRight />
                                            </h2>
                                        </div>

                                        {/* Testimonial Content - Centered */}
                                        <div className="text-center mb-8 mt-4">
                                            <p className="leading-relaxed text-black text-[16px] font-normal">
                                                &#34;{testimonial.quote}&#34;
                                            </p>
                                        </div>

                                        {/* Divider Line */}
                                        <div className="h-1 bg-[#D3DCE8] mx-auto mb-6"></div>

                                        {/* Profile Section - Centered Flex */}
                                        <div className="flex items-center justify-center gap-4">
                                            {/* Circular Profile Image */}
                                            <div className="relative">
                                                <div className="absolute inset-0 rounded-full blur-md opacity-50"></div>
                                                <Image
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    width={100}
                                                    height={100}
                                                    className="relative w-14 h-14 rounded-full object-cover border-4 border-white shadow-lg drop-shadow-md decoration-amber-100"
                                                />
                                            </div>

                                            {/* Name */}
                                            <div>
                                                <h2
                                                    className={
                                                        "font-black text-[24px]"
                                                    }
                                                >
                                                    {testimonial.name}
                                                </h2>
                                                <h3 className="font-medium">
                                                    WiT Mentee
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            {/* Decorative dots pattern */}
            <div
                className="absolute bottom-0 left-0 right-0 h-32 opacity-20"
                style={{
                    backgroundImage:
                        "radial-gradient(circle, white 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                }}
            ></div>
        </div>
    );
}

export default SuccessStories;
