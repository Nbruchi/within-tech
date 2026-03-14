import Image from "next/image";

const ProgramIntro = ({program}: { program:Program }) => {
    return (
        <section className="py-16 md:py-24 bg-blue-950 text-white">
            <div className="container px-4 md:px-8 grid lg:grid-cols-2 gap-12 items-center">
                <div>

                        <span className="inline-block bg-teal-500 text-white px-5 py-2 rounded-none text-sm font-semibold mb-6">
                {program.badge ?? program?.title}
              </span>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">{program.programIntroTitle}</h2>
                    <p className="text-lg md:text-xl leading-relaxed opacity-90">{program.programIntroText}</p>
                </div>

                <div className="rounded-2xl overflow-hidden shadow-2xl relative">
                    <Image
                        src={program.programIntroImage ?? program.banner}
                        alt="Program highlight"
                        width={600}
                        height={500}
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>
        </section>
    )
}
export default ProgramIntro
