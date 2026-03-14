import Image from "next/image";

const OurSDGs = () => {
    // Data: official short titles + colors (hex from UN guidelines) + short descriptions
    const sdgs = [
        {
            number: 1,
            title: "NO POVERTY",
            color: "#E5243B", // official red
            icon: "/icons/sdg-1.svg", // placeholder - replace with <Image src="/sdg-icons/1.svg" ... />
            description: "End poverty in all its forms everywhere.",
        },
        {
            number: 2,
            title: "GENDER EQUALITY",
            color: "#EF402C", // official orange-red
            icon: "/icons/sdg-2.svg",
            description: "Achieve gender equality and empower all women and girls.",
        },
        {
            number: 3,
            title: "GOOD HEALTH & WELL-BEING",
            color: "#4C9F38", // kelly green
            icon: "/icons/sdg-3.svg",
            description: "Ensure healthy lives and promote well-being for all at all ages.",
        },
        {
            number: 4,
            title: "QUALITY EDUCATION",
            color: "#C5192D", // dark red
            icon: "/icons/sdg-4.svg",
            description: "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.",
        },
        {
            number: 5,
            title: "DECENT WORK & ECONOMIC GROWTH",
            color: "#A21942", // burgundy
            icon: "/icons/sdg-5.svg",
            description: "Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all.",
        },
        {
            number: 6,
            title: "PARTNERSHIPS FOR THE GOALS",
            color: "#19486A", // navy blue
            icon: "/icons/sdg-6.svg",
            description: "Strengthen the means of implementation and revitalize the global partnership for sustainable development.",
        },
        {
            number: 7,
            title: "SUSTAINABLE CITIES & COMMUNITIES",
            color: "#FD9D24", // golden yellow
            icon: "/icons/sdg-7.svg",
            description: "Make cities and human settlements inclusive, safe, resilient and sustainable.",
        },
        {
            number:8,
            title:"INDUSTRY, INNOVATION & INFRASTRUCTURE",
            color:"#fd7217",
            icon:"/icons/sdg-8.svg",
            description:"Increase industry, innovation and infrastructure, including via fair and equitable sharing and value-added reforms and markets.",
        }
    ];

    return (
        <section className="py-20 md:py-28 bg-gray-50">
            <div className="container mx-auto px-5 sm:px-6 lg:px-8">
                {/* Heading & Intro */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-blue-900 tracking-tight">
                        OUR COMMITMENT TO THE SDGs
                    </h2>
                    <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                        Through inclusive STEM education, we&apos;re contributing to the UN Sustainable Development Goals - from{" "}
                        <span className="font-semibold text-pink-600">gender equality</span> to{" "}
                        <span className="font-semibold text-green-600">good health and wellbeing</span> and{" "}
                        <span className="font-semibold text-red-600">quality education</span> for all.
                    </p>
                </div>

                {/* SDG Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
                    {sdgs.map((sdg) => (
                        <div
                            key={sdg.number}
                            tabIndex={0}
                                                  role="button"
                                                    aria-label={`${sdg.title}: ${sdg.description}`}
                            className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 aspect-square cursor-pointer
              "
                            style={{ backgroundColor: sdg.color }}
                        >
                            {/* Front face (visible normally) */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
                                <Image src={sdg.icon} alt={sdg.title} width={200} height={64} className="mb-2"/>
                            </div>

                            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 p-6 text-center">
                                <p className="text-white text-base md:text-lg font-medium leading-relaxed">
                                    {sdg.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurSDGs;