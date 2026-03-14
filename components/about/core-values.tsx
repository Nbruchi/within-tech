const CoreValues = () => {
    const values = [
        {
            title: "Ubumuntu",
            description:
                "We place kindness, empathy and respect for every learner at the center of everything we do. Every child is seen, valued and supported to grow with dignity.",
            bg: "bg-amber-50",
        },
        {
            title: "Hands-on Impact",
            description:
                "We believe real learning happens by doing — building, breaking, fixing and creating with our own hands. Every project leaves learners with tangible skills and visible results.",
            bg: "bg-blue-50",
        },
        {
            title: "Inclusive Innovation",
            description:
                "Technology and creativity belong to everyone — we remove barriers so that girls, boys, rural and urban youth, beginners and advanced learners all have equal access to innovate.",
            bg: "bg-teal-50",
        },
        {
            title: "Joyful Discovery",
            description:
                "Learning should spark excitement, curiosity and smiles — we design experiences where wonder and play drive deep engagement and lifelong love for STEM.",
            bg: "bg-pink-50",
        },
        {
            title: "Community Connection",
            description:
                "We grow stronger together — learners, mentors, parents, schools and volunteers form a supportive network that celebrates each success and lifts each other up.",
            bg: "bg-purple-50",
        },
        {
            title: "Future Focused Empowerment",
            description:
                "We equip young people not just with today’s tools, but with the mindset, confidence and vision to shape tomorrow’s technology, solve big problems and lead meaningful lives.",
            bg: "bg-emerald-50",
        },
    ];

    return (
        <section className="relative py-20 md:py-28 bg-white overflow-hidden">
            <div className="container mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
                {/* Heading */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-teal-600 tracking-wide">
                        OUR CORE VALUES
                    </h2>
                </div>

                {/* Values Grid – now 6 items */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className={`${value.bg} rounded-2xl p-8 md:p-10 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 text-center flex flex-col`}
                        >
                            <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
                                {value.title}
                            </h3>
                            <p className="text-gray-700 text-base md:text-lg leading-relaxed grow">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoreValues;