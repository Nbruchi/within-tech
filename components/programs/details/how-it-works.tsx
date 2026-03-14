import Image from "next/image";

const HowItWorks = ({ program }: { program: Program }) => {
    return (
        <section className="py-16 md:py-28 bg-gray-50/40">
            <div className="container px-4 md:px-8">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-start">
                    {/* LEFT: Images stack */}
                    <div className="space-y-8 md:space-y-10 order-2 lg:order-1">
                        {program.howImages.map((img, i) => (
                            <div
                                key={i}
                                className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200/80"
                            >
                                <Image
                                    src={img}
                                    alt={`How it works illustration ${i + 1}`}
                                    width={720}
                                    height={320}
                                    className="w-full h-auto object-cover"
                                    priority={i === 0}
                                />
                            </div>
                        ))}
                    </div>

                    {/* RIGHT: Heading + intro + cards */}
                    <div className="order-1 lg:order-2">
                        {/* Heading aligned left with the text block */}
                        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8 md:mb-12">
                            HOW IT WORKS
                        </h2>

                        {/* Intro paragraph */}
                        <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-12 md:mb-16 max-w-3xl">
                            {program.howItWorksText}
                        </p>

                        {/* 3 cards – increased spacing */}
                        <div className="grid sm:grid-cols-3 lg:grid-cols-1 gap-6 md:gap-10 lg:gap-12">
                            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100/80">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">SCHEDULE</h3>
                                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                                    {program.schedule}
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100/80">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">SHOWCASE</h3>
                                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                                    {program.showcase}
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100/80">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">SUPPORT</h3>
                                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                                    {program.support}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;