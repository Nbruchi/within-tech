import { Item, ItemContent, ItemMedia, ItemTitle } from "@/components/ui/item";
import { VscSparkleFilled } from "react-icons/vsc";

const TitleLabel = ({
    label,
    color = "orange",
}: {
    label: string;
    color?: "orange" | "white";
}) => {
    return (
        <Item
            variant="outline"
            className={`flex w-fit items-center gap-2 rounded-full border-none ${color === "orange" ? "bg-app-orange/20" : "bg-white/10"} px-2 py-1 my-4`}
        >
            <ItemMedia variant="icon">
                <VscSparkleFilled
                    className={`size-4 ${color === "orange" ? "fill-app-orange" : "fill-white"}`}
                />
            </ItemMedia>
            <ItemContent>
                <ItemTitle
                    className={`text-lg ${color === "orange" ? "text-app-orange" : "text-white"}`}
                >
                    {label}
                </ItemTitle>
            </ItemContent>
        </Item>
    );
};

export default TitleLabel;
