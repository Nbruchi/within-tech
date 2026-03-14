import Image from "next/image";

const OurVision = () => {
    return (
        <section className="relative py-16 md:py-24 bg-gray-50/30 overflow-hidden">
            <div className="container mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">

                    {/* LEFT: Full image block */}
                    <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-4/3 lg:aspect-5/4 order-1 lg:order-1">
                        <Image
                            src="/images/landing-pic-04.jpg"  // ← replace with the exact kids-at-laptop image from screenshot
                            alt="Children learning coding on laptop"
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Optional subtle overlay gradient for depth */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/10 via-transparent to-transparent" />
                    </div>

                    {/* RIGHT: Colored blocks stack */}
                    <div className="flex flex-col gap-6 order-2 lg:order-2">

                        {/* Pink block - Our Story / Mission */}
                        <div className="bg-rose-600 text-white rounded-2xl p-8 md:p-10 shadow-lg flex-1">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                OUR MISSION
                            </h2>
                            <p className="text-base md:text-lg leading-relaxed">
                                To empower young people with digital skills, creativity, and innovation mindset through accessible technology education.
                            </p>
                        </div>

                        {/* Yellow block - Vision */}
                        <div className="bg-amber-500 text-white rounded-2xl p-8 md:p-10 shadow-lg flex-1">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                VISION
                            </h2>
                            <p className="text-base md:text-lg leading-relaxed">
                                A future where every young person in Rwanda has the opportunity to learn technology and become a creator, innovator, and leader in the digital economy
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurVision;