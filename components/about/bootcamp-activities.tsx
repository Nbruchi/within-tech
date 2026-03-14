import { Button } from "@/components/ui/button";
import TitleLabel from "../title-label";

const BootcampActivities = () => {
    const activities = [
        {
            title: "CODING",
            description:
                "From Scratch to Python, learners build apps, games, and websites they love while learning real programming concepts.",
            bgColor: "bg-app-purple/10",
            buttonColor: "bg-app-purple hover:bg-app-purple/80",
            exploreText: "Explore Coding",
        },
        {
            title: "ROBOTICS",
            description:
                "Design, build, and program robots that move, sense, and respond — turning ideas into real-world machines.",
            bgColor: "bg-app-yellow/80",
            buttonColor: "bg-app-yellow hover:bg-app-yellow/80 text-black!",
            exploreText: "Explore Robotics",
        },
        {
            title: "3D DESIGN",
            description:
                "Creative thinking comes to life with design and prototyping — learners model, print, and test their own inventions.",
            bgColor: "bg-app-orange/10",
            buttonColor: "bg-app-orange hover:bg-app-orange/80",
            exploreText: "Explore 3D Design",
        },
    ];

    return (
        <section className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-5 sm:px-6 lg:px-8">
                {/* Heading & Intro */}
                <div className="flex flex-col items-center justify-center mb-12 md:mb-16">
                    <TitleLabel label="Bootcamp activities" />
                    <h2 className="section-title text-app-purple">
                        Our Bootcamp activities
                    </h2>
                    <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                        At WithinTech, we turn curiosity into creativity. From
                        building robots to designing games and coding apps, our
                        programs are hands-on, exciting, and designed to inspire
                        future innovators.
                    </p>
                </div>

                {/* Activities Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
                    {activities.map((activity, index) => (
                        <div
                            key={index}
                            className={`${activity.bgColor} rounded-3xl p-8 md:p-10 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col border border-gray-100
              `}
                        >
                            <h3 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                                {activity.title}
                            </h3>
                            <p className="text-gray-700 text-base md:text-lg leading-relaxed grow mb-8">
                                {activity.description}
                            </p>
                            <div className="mt-auto">
                                <Button
                                    className={`${activity.buttonColor} px-8 py-6 rounded-none text-lg shadow-md hover:shadow-lg transition-all duration-300`}
                                >
                                    {activity.exploreText}
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12 md:mt-16">
                    <Button className="bg-app-purple hover:bg-app-purple/80 text-white font-semibold px-8 py-6 rounded-none text-lg shadow-md hover:shadow-lg transition-all duration-300">
                        View All Activities
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default BootcampActivities;
