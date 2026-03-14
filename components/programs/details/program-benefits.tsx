"use client";

import TitleLabel from "@/components/title-label";
import Image from "next/image";
import { useEffect, useState } from "react";

const TestimonialCarousel = ({
    testimonials,
}: {
    testimonials: Program["testimonials"];
}) => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (testimonials.length === 0) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setCurrent(0);
            return;
        }
        setCurrent((prev) => (prev < testimonials.length ? prev : 0));
        if (testimonials.length <= 1) return;

        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 6000); // fade every 6s
        return () => clearInterval(timer);
    }, [testimonials.length]);

    return (
        <div className="relative h-full min-h-70 flex items-center justify-center bg-gray-900/5 rounded-2xl p-8 overflow-hidden">
            {testimonials.map((t, i) => (
                <div
                    key={i}
                    className={`absolute inset-0 transition-opacity duration-1000 flex flex-col items-center justify-center text-center px-6 ${
                        i === current
                            ? "opacity-100"
                            : "opacity-0 pointer-events-none"
                    }`}
                >
                    <div className="text-6xl text-pink-500 mb-6">“</div>
                    <p className="text-lg md:text-xl italic text-gray-800 mb-6 max-w-lg">
                        {t.quote}
                    </p>
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-pink-400">
                            <Image
                                src={t.image}
                                alt={t.name}
                                width={56}
                                height={56}
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <p className="font-semibold text-gray-900">
                                {t.name}
                            </p>
                            <p className="text-sm text-gray-600">Age {t.age}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

const ProgramBenefits = ({ program }: { program: Program }) => {
    return (
        <section className="py-16 md:py-24">
            <div className="container px-4 md:px-8 grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <TitleLabel label="Program Benefits" />
                    <h2 className="section-title text-app-purple mb-6">
                        Program Benefits
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                        {program.benefitsText}
                    </p>
                </div>
                <TestimonialCarousel testimonials={program.testimonials} />
            </div>
        </section>
    );
};
export default ProgramBenefits;
