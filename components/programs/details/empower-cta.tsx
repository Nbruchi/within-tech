import {Button} from "@/components/ui/button";

const EmpowerCta = () => {
    return (
        <section className="bg-linear-to-b from-white to-gray-100 py-16 md:py-24 text-center">
            <div className="container px-4 md:px-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-950 mb-6 tracking-tight">
                    READY TO EMPOWER A FUTURE INNOVATOR?
                </h1>
                <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-4xl mx-auto">
                    Register a learner, partner your school, or sponsor a seat — your support turns curiosity into opportunity.
                </p>
                <div className="flex flex-col sm:flex-row gap-5 justify-center">
                    <Button className="bg-pink-600 hover:bg-pink-700 text-white px-10 py-7 text-lg rounded-none shadow-lg">
                        Register A Learner
                    </Button>
                    <Button className="bg-yellow-500 hover:bg-yellow-600 text-white px-10 py-7 text-lg rounded-none shadow-lg">
                        Partner School
                    </Button>
                    <Button className="bg-teal-500 hover:bg-teal-600 text-white px-10 py-7 text-lg rounded-none shadow-lg">
                        Sponsor A Seat
                    </Button>
                </div>
            </div>
        </section>
    )
}
export default EmpowerCta
