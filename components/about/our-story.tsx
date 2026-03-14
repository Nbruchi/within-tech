import Image from "next/image";
import TitleLabel from "../title-label";

const OurStory = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-10 sm:px-6 lg:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                    <div className="lg:col-span-7 space-y-6">
                        <div>
                            <TitleLabel label="Story" />
                            <h2 className="section-title text-app-purple">
                                Our Story
                            </h2>
                        </div>

                        <div className="text-2xl md:text-3xl font-medium text-gray-800 leading-tight">
                            Many people believe coding is difficult or that it
                            is only meant for adults or professional engineers.
                        </div>

                        <div className="text-[17px] md:text-lg text-gray-700 leading-relaxed max-w-prose">
                            <span className="font-semibold">
                                {" "}
                                At WithinTech Rwanda, we believe the opposite.
                            </span>
                            Technology belongs to everyone — especially young
                            people. Our journey began with a simple idea: young
                            learners are capable of building incredible things
                            when given the right tools and mentorship. That is
                            why we introduce technology education early,
                            starting with learners as young as 8 years old and
                            supporting them all the way to university-level
                            innovation and mentorship opportunities. Through our
                            programs, young people learn to design websites,
                            build robots, explore artificial intelligence, and
                            even experiment with space technology concepts.
                            WithinTech Rwanda exists to ensure that young people
                            do not just use technology — they build the future
                            with it.
                        </div>
                    </div>

                    {/* RIGHT: OVERLAPPING STACK – new version */}
                    <div className="lg:col-span-5 relative min-h-125 lg:min-h-155">
                        {/* Bottom image */}
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-4/3 lg:aspect-5/4 z-10">
                            <Image
                                src="/images/landing-pic-02.png"
                                alt="Young innovator with robotics project"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Top overlapping image – shifted right & up */}
                        <div className="absolute top-[18%] lg:top-[22%] right-[-6%] lg:right-[-10%] w-[82%] lg:w-[78%] aspect-4/3 lg:aspect-5/4 rounded-3xl overflow-hidden shadow-2xl z-20">
                            <Image
                                src="/images/landing-pic-04.jpg"
                                alt="Children learning on a laptop in Kibera"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurStory;
