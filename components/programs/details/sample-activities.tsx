import TitleLabel from "@/components/title-label";
import Image from "next/image";

const SampleActivities = ({ program }: { program: Program }) => {
    return (
        <section className="py-16 md:py-24">
            <div className="container px-4 md:px-8 grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <TitleLabel label="Sample Activities" />
                    <h2 className="section-title text-app-purple mb-6">
                        Sample Activities
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 mb-8">
                        {program.sampleIntro}
                    </p>
                    <ul className="space-y-4">
                        {program.sampleList.map((item, i) => (
                            <li
                                key={i}
                                className="flex items-start gap-3 text-lg"
                            >
                                <span className="text-pink-600 text-2xl font-bold">
                                    ✓
                                </span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                        src={program.sampleImage}
                        alt="Sample activity"
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>
        </section>
    );
};
export default SampleActivities;
