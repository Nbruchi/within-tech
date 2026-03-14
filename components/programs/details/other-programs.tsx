import ProgramsCard from "@/components/programs/programs-card";
import TitleLabel from "@/components/title-label";

const OtherPrograms = ({ programs }: { programs: Program[] }) => {
    return (
        <section className="py-16 md:py-24 bg-blue-950 text-white">
            <div className="container px-4 md:px-8">
                <div className="flex flex-col items-center justify-center">
                    <TitleLabel label="Other Programs" />
                    <h2 className="section-title text-white mb-6">
                        Explore Other Programs
                    </h2>
                </div>
                <p className="text-xl text-center mb-12 max-w-3xl mx-auto opacity-90">
                    Keep the momentum going — discover more ways learners
                    create, code, and build at WithinTech Rwanda.
                </p>

                <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {programs.map((program) => (
                        <ProgramsCard key={program.id} program={program} isOther/>
                    ))}
                </ul>
            </div>
        </section>
    );
};
export default OtherPrograms;
