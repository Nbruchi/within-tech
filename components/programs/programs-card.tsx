"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface ProgramsCardProps {
    program: Program;
    isOther?: boolean;
}

const ProgramsCard = ({ program, isOther }: ProgramsCardProps) => {
    const router = useRouter();

    const { title, description, slug, banner } = program;

    const handleClick = () => {
        router.push(`/programs/${slug}`);
    };

    return (
        <li
            className={`flex flex-col items-start gap-4 shadow-lg rounded-lg hover:border hover:border-app-orange hover:scale-105 transition-all duration-300 p-1 ${isOther && "bg-white"}`}
        >
            <Image
                src={banner}
                alt={title}
                width={500}
                height={500}
                className="w-full h-auto object-cover rounded-lg"
            />
            <div className="p-4">
                <h3 className="font-space-grotesk text-app-orange text-2xl">
                    {title}
                </h3>
                <p className={`font-inter text-xl ${isOther && "text-black"}`}>
                    {description}
                </p>
                <Button
                    onClick={handleClick}
                    className="bg-app-orange hover:bg-app-orange/80 text-white px-6 py-2 rounded-none mt-4"
                >
                    Learn More
                </Button>
            </div>
        </li>
    );
};

export default ProgramsCard;
