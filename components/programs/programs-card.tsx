"use client"

import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";

const ProgramsCard = (program:Program) => {
    const router = useRouter();

    const {title, description, slug} = program

    const handleClick = () => {
        router.push(`/programs/${slug}`)
    }

    return (
        <li className="flex flex-col items-start gap-4 shadow-lg rounded-lg p-6 hover:border hover:border-app-orange hover:scale-105 transition-all duration-300">
            <h3 className="font-space-grotesk text-app-orange text-2xl">{title}</h3>
            <p className="font-inter text-xl">{description}</p>
            <Button onClick={handleClick} className="bg-app-orange hover:bg-app-orange/80 text-white px-6 py-2 rounded-none">Learn More</Button>
        </li>
    )
}

export default ProgramsCard
