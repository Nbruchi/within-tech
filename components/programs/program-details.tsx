"use client"
import ProgramIntro from "@/components/programs/details/program-intro";
import {programs} from "@/constants";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";
import WhoItsFor from "@/components/programs/details/who-its-for";
import ProgramLessons from "@/components/programs/details/program-lessons";
import HowItWorks from "@/components/programs/details/how-it-works";
import SampleActivities from "@/components/programs/details/sample-activities";
import ProgramBenefits from "@/components/programs/details/program-benefits";
import EmpowerCta from "@/components/programs/details/empower-cta";
import OtherPrograms from "@/components/programs/details/other-programs";
import {ChevronLeft} from "lucide-react";

const ProgramDetails = ({slug}:{slug:string}) => {
    const router = useRouter();
    const program = programs.find((p) => p.slug === slug);

    if (!program) {
        return (
            <div className="container py-20 text-center">
                <h1 className="text-4xl font-bold mb-4">Program not found</h1>
                <Button onClick={() => router.back()}>Go Back</Button>
            </div>
        );
    }

    const otherPrograms = programs.filter((p) => p.slug !== slug).slice(0, 3);

    return (
        <div className="min-h-screen">
            <ProgramIntro program={program}/>
            <WhoItsFor program={program}/>
            <ProgramLessons program={program}/>
            <HowItWorks program={program}/>
            <SampleActivities program={program}/>
            <ProgramBenefits program={program}/>
            <EmpowerCta/>
            <OtherPrograms programs={otherPrograms}/>
            <div className="container py-12 text-center">
                <Button variant="outline" size="lg" onClick={() => router.back()}>
                    <ChevronLeft className="mr-2 h-5 w-5" /> Back to Programs
                </Button>
            </div>
        </div>
    )
}
export default ProgramDetails