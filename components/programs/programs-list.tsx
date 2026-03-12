import {Item, ItemContent, ItemMedia, ItemTitle} from "@/components/ui/item";
import {VscSparkleFilled} from "react-icons/vsc";
import {programs} from "@/constants";
import ProgramsCard from "@/components/programs/programs-card";

const ProgramsList = () => {
    return (
        <section id="programs-list" className="flex flex-col items-center justify-center gap-y-6 px-4 py-12 lg:px-6">
            <Item variant="outline" className="rounded-full flex items-center gap-2 bg-app-orange/10 px-4 py-2 w-fit">
                <ItemMedia variant="icon">
                    <VscSparkleFilled className="size-3 text-app-orange"/>
                </ItemMedia>
                <ItemContent>
                    <ItemTitle className="text-app-orange">Our programs</ItemTitle>
                </ItemContent>
            </Item>
            <ul className="grid grid-cols-1 gap-4 md:gap-y-6 lg:gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3">
                {programs.map((program)=>(
                    <ProgramsCard key={program.id} {...program}/>
                ))}
            </ul>
        </section>
    )
}
export default ProgramsList
