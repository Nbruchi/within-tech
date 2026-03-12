import {Item, ItemContent, ItemMedia, ItemTitle} from "@/components/ui/item";
import {VscSparkleFilled} from "react-icons/vsc";

const OurStory = () => {
    return (
        <section id="our-story" className="flex flex-col items-center justify-center gap-y-6 px-4 py-12 lg:px-6 bg-[url('/images/')]">
            <Item variant="outline" className="rounded-full flex items-center gap-2 bg-app-orange/10 px-4 py-2 w-fit">
                <ItemMedia variant="icon">
                    <VscSparkleFilled className="size-3 fill-app-orange"/>
                </ItemMedia>
                <ItemContent>
                    <ItemTitle className="text-app-orange">Our Story</ItemTitle>
                </ItemContent>
            </Item>
            <h2 className="section-title text-app-purple">Our Story</h2>
           <div className="flex flex-col items-start">
               <p className="text-lg">
                   Many people believe coding is difficult or that it is only meant for adults or professional engineers
               </p>
               <p className="indent-2 mt-2">
                   At WithinTech Rwanda, we believe the opposite.
               </p>
               <p>
                   Technology belongs to everyone — especially young people.
               </p>
               <p>
                   Our journey began with a simple idea: <span className="text-app-orange">young learners are capable of building incredible things when given the right tools and mentorship.</span>
               </p>
               <p>
                   That is why we introduce technology education early, starting with learners as young as <span className="text-app-orange">8 years old</span> and supporting them all the way to <span className="text-app-orange">university-level innovation and mentorship opportunities.</span>
               </p>
               <p>
                   Through our programs, young people learn to design websites, build robots, explore artificial intelligence, and even experiment with space technology concepts.
               </p>
           </div>
        </section>
    )
}
export default OurStory
