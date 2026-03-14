import TitleLabel from "@/components/title-label";
import { Button } from "@/components/ui/button";

const EmpowerCta = () => {
    return (
        <section className="bg-linear-to-b from-white to-gray-100 py-16 md:py-24 text-center">
            <div className="container px-4 md:px-8">
                <div className="flex items-center justify-center w-full">
                    <TitleLabel label="Empower Future Innovator" />
                </div>
                <h1 className="section-title text-app-purple mb-6">
                    Ready to Empower a Future Innovator?
                </h1>
                <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-4xl mx-auto">
                    Register a learner, partner your school, or sponsor a seat —
                    your support turns curiosity into opportunity.
                </p>
                <div className="flex flex-col sm:flex-row gap-5 justify-center">
                    <Button className="bg-app-purple hover:bg-app-purple/80 text-white px-10 py-7 text-lg rounded-none shadow-lg">
                        Register A Learner
                    </Button>
                    <Button className="bg-app-yellow hover:bg-app-yellow/80 text-black px-10 py-7 text-lg rounded-none shadow-lg">
                        Partner School
                    </Button>
                    <Button className="bg-app-orange hover:bg-app-orange/80 text-white px-10 py-7 text-lg rounded-none shadow-lg">
                        Sponsor A Seat
                    </Button>
                </div>
            </div>
        </section>
    );
};
export default EmpowerCta;
