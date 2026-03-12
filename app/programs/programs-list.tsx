import {Item, ItemContent, ItemMedia, ItemTitle} from "@/components/ui/item";
import {VscSparkleFilled} from "react-icons/vsc";

const ProgramsList = () => {
    return (
        <section id="programs-list">
            <Item variant="outline" className="rounded-full flex items-center gap-2 bg-white/10 px-4 py-2 w-fit">
                <ItemMedia variant="icon">
                    <VscSparkleFilled className="size-3 text-white"/>
                </ItemMedia>
                <ItemContent>
                    <ItemTitle className="text-white">Our programs</ItemTitle>
                </ItemContent>
            </Item>
            <ul></ul>
        </section>
    )
}
export default ProgramsList
