import {Item, ItemContent, ItemMedia, ItemTitle} from "@/components/ui/item";
import {VscSparkleFilled} from "react-icons/vsc";

const GalleryHeader = () => {
    return (
        <section id="gallery" className="relative min-h-screen pt-24 sm:pt-28">
            <div className="absolute inset-0 -z-10 bg-[url('/images/gallery.jpg')] bg-cover bg-center bg-no-repeat" />
            <div className="absolute inset-0 -z-10 bg-black/70" />

            <div className="px-4 py-16 sm:px-6 lg:px-6 flex flex-col gap-y-12 items-center gap-2 mx-auto max-w-5xl">
                <Item variant="outline" className="rounded-full flex items-center gap-2 bg-white/10 px-4 py-2 w-fit">
                    <ItemMedia variant="icon">
                        <VscSparkleFilled className="size-3 text-white"/>
                    </ItemMedia>
                    <ItemContent>
                        <ItemTitle className="text-white">Gallery</ItemTitle>
                    </ItemContent>
                </Item>
            </div>
        </section>
    )
}

export default GalleryHeader
