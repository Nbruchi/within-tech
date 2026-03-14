import TitleLabel from "@/components/title-label";

const ProgramLessons = ({ program }: { program: Program }) => {
    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="container px-4 md:px-8">
                <div className="flex flex-col w-full items-center justify-center">
                    <TitleLabel label="Program Lessons" />
                    <h2 className="section-title text-app-purple mb-6">
                        What They&apos;ll Learn
                    </h2>
                </div>
                <p className="text-xl text-center text-gray-700 mb-12 max-w-4xl mx-auto">
                    {program.whatLearnIntro}
                </p>

                <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                    {program.learnCards.map((card, i) => (
                        <div
                            key={i}
                            className={`${card.bgColor} rounded-2xl p-8 md:p-10 shadow-md hover:shadow-lg transition-shadow border border-gray-100`}
                        >
                            <h3 className="text-2xl md:text-3xl font-bold text-app-purple mb-4 capitalize">
                                {card.title.toLowerCase()}
                            </h3>
                            <p className="text-gray-700 text-base md:text-lg">
                                {card.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default ProgramLessons;
