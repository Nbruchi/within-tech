import {Button} from "@/components/ui/button";
import Link from "next/link";
import ProgramsCard from "@/components/programs/programs-card";

const OtherPrograms = ({programs}:{programs:Program[]}) => {
    return (
        <section className="py-16 md:py-24 bg-blue-950 text-white">
            <div className="container px-4 md:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">EXPLORE OTHER PROGRAMS</h2>
                <p className="text-xl text-center mb-12 max-w-3xl mx-auto opacity-90">
                    Keep the momentum going — discover more ways learners create, code, and build at Code With Kids.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {programs.map((program) => (
                        <ProgramsCard key={program.id} {...program}/>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default OtherPrograms
