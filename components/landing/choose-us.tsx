import {Item, ItemContent, ItemMedia, ItemTitle} from "@/components/ui/item";
import { CircleCheck} from "lucide-react";
import {VscSparkleFilled} from "react-icons/vsc";
import Link from "next/link";

const ChooseUs = () => {
    return (
        <section id='choose-us' className='relative min-h-screen overflow-hidden'>
            <div className="absolute inset-0 -z-10 bg-[url('/images/choose-us.png')] bg-cover bg-center bg-no-repeat" />
            <div className="absolute inset-0 -z-10 bg-black/20" />

            <div className="absolute bottom-0 right-0 flex max-w-5xl flex-col items-start gap-y-6 bg-white px-8 py-12">
                <Item
                    variant="outline"
                    className="flex w-fit items-center gap-2 rounded-full border-none bg-app-orange/10 px-2 py-1"
                >
                    <ItemMedia variant="icon">
                        <VscSparkleFilled className="size-4 fill-app-orange"/>
                    </ItemMedia>
                    <ItemContent>
                        <ItemTitle className="text-lg text-app-orange">Why Choose Us</ItemTitle>
                    </ItemContent>
                </Item>
                <h2 className="section-title text-app-purple">
                    Transforming Technology <br/> Education for the Future
                </h2>
                <p className="text-lg">
                    We offer programs that combine practical learning, mentorship, and <br/> global exposure to prepare young innovators for the modern tech world.
                </p>
                <ul>
                    <li className="flex items-center gap-2">
                        <CircleCheck className='size-6 text-white fill-app-orange'/>
                        <span className="text-sm">Hands-on coding, robotics, and AI workshops</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <CircleCheck className='size-6 text-white fill-app-orange'/>
                        <span className="text-sm">Experienced mentors and industry connections</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <CircleCheck className='size-6 text-white fill-app-orange'/>
                        <span className="text-sm">Inclusive learning spaces for all students</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <CircleCheck className='size-6 text-white fill-app-orange'/>
                        <span className="text-sm">Career guidance and exposure to global competitions</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <CircleCheck className='size-6 text-white fill-app-orange'/>
                        <span className="text-sm">Innovative, youth-friendly programs and brand experience</span>
                    </li>
                </ul>

                <Link href="/programs" className="bg-app-purple hover:bg-app-purple/80 text-white rounded-none px-6 py-4 mt-4">Explore More</Link>
            </div>
        </section>
    )
}

export default ChooseUs;