"use client";

import { useState } from "react";
import Image from "next/image";
import { programs } from "@/constants";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import TitleLabel from "../title-label";

import "swiper/css";

const Programs = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section
            id="programs"
            className="overflow-x-hidden flex flex-col items-center justify-center gap-y-6 px-4 py-12 lg:px-6"
        >
            <TitleLabel label="Programs" />

            <h2 className="section-title text-app-purple">
                Building Skills. Unlocking Futures.
            </h2>

            <p className="max-w-3xl text-center text-xl">
                WithinTech Rwanda runs programs that empower students through
                coding, robotics, AI competitions, and mentorship.
            </p>

            <div className="mt-6 w-full max-w-7xl overflow-auto">
                <Swiper
                    modules={[Autoplay]}
                    loop={true}
                    centeredSlides={true}
                    grabCursor={true}
                    speed={900}
                    spaceBetween={20}
                    slidesPerView={1.08}
                    autoplay={{
                        delay: 2800,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    breakpoints={{
                        640: {
                            slidesPerView: 1.2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 24,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 24,
                        },
                    }}
                    className="w-full py-6"
                >
                    {programs.map((program, index) => {
                        const isActive = activeIndex === index;

                        return (
                            <SwiperSlide
                                key={program.id}
                                className="px-2 pb-8 pt-4"
                            >
                                <article
                                    className={[
                                        "group relative mx-auto h-125 w-full max-w-sm overflow-hidden rounded-2xl transition-all duration-500",
                                        isActive
                                            ? "translate-y-6 scale-105 shadow-[0_24px_60px_rgba(54,33,89,0.18)]"
                                            : "translate-y-0 scale-[0.94] shadow-[0_18px_40px_rgba(54,33,89,0.12)]",
                                    ].join(" ")}
                                >
                                    <Image
                                        src={program.banner}
                                        alt={program.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                                    />

                                    <div
                                        className={[
                                            "absolute inset-0 transition-all duration-500",
                                            isActive
                                                ? "bg-linear-to-t from-black/75 via-black/20 to-black/10"
                                                : "bg-linear-to-t from-black/85 via-black/45 to-black/35",
                                        ].join(" ")}
                                    />

                                    <span className="absolute left-4 top-4 z-10 bg-app-orange px-4 py-2 text-sm font-semibold text-white rounded-xs">
                                        {program.id}
                                    </span>

                                    <div className="absolute inset-x-0 bottom-0 z-10 p-5 text-white">
                                        <h3 className="text-xl font-semibold leading-snug">
                                            {program.title}
                                        </h3>

                                        <p
                                            className={[
                                                "mt-3 overflow-hidden text-sm leading-6 text-white/90 transition-all duration-300",
                                                "md:max-h-0 md:-translate-y-2 md:opacity-0 md:group-hover:max-h-32 md:group-hover:translate-y-0 md:group-hover:opacity-100",
                                                isActive
                                                    ? "max-h-32 translate-y-0 opacity-100"
                                                    : "max-h-0 -translate-y-2 opacity-0 md:max-h-0",
                                            ].join(" ")}
                                        >
                                            {program.description}
                                        </p>
                                    </div>
                                </article>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
            <Link
                href="/programs"
                className="bg-app-orange hover:bg-app-orange/90 text-white rounded-none px-6 py-4 mt-4"
            >
                Explore Programs
            </Link>
        </section>
    );
};

export default Programs;
