"use client"

import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";
import {ChevronLeft} from "lucide-react";

const ProgramDetails = ({slug}:{slug:string}) => {
    const router = useRouter();

    return (
        <article>
            <Button onClick={() => router.back()}>
                <ChevronLeft className="size-4"/>
                <span className="text-sm">Go back</span>
            </Button>
            <div className="mt-4">
                Program: {slug.toUpperCase()}

            </div>
        </article>
    )
}
export default ProgramDetails
