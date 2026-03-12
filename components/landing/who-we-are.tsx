import Image from "next/image";
import { Item, ItemContent, ItemMedia, ItemTitle } from "@/components/ui/item";
import { Button } from "@/components/ui/button";
import {VscSparkleFilled} from "react-icons/vsc";

const aboutCards = [
    {
        title: "Mission",
        content:
            "To empower young people with practical technology skills, creativity, and mentorship opportunities that prepare them for the digital economy.",
    },
    {
        title: "Vision",
        content:
            "To be the catalyst that transforms Rwanda into a nation where every young person sees technology as their pathway to opportunity, creativity, and impact.",
    },
    {
        title: "Values",
        values: [
            "Ubumuntu",
            "Hands on Impact",
            "Inclusive Innovation",
            "Joyful Discovery",
            "Community Connection",
            "Future Focused Empowerment",
        ],
    },
];

const WhoWeAre = () => {
    return (
        <section id="who-we-are" className="grid gap-8 bg-app-purple px-4 py-12 text-white lg:grid-cols-2 lg:px-6">
            <div className="flex flex-col justify-center items-start">
                <Item variant="outline" className="mt-10 flex w-fit items-center gap-2 rounded-full border-none bg-app-orange/10 py-1 px-2">
                    <ItemMedia variant="icon">
                        <VscSparkleFilled className="size-4 fill-app-orange" />
                    </ItemMedia>
                    <ItemContent>
                        <ItemTitle className="text-lg text-app-orange">Who We Are</ItemTitle>
                    </ItemContent>
                </Item>

                <h1 className="section-title mt-6">
                    Empowering the Next Generation Of Tech Builders
                </h1>

                <p className="mt-4 text-lg">
                    WithinTech Rwanda is a leading EdTech organization dedicated to bridging the digital skills gap in Rwanda. We empower young people with hands-on coding, robotics, and tech programs in the digital world.
                </p>

                {/*TODO: Implement vision, mission, and values here*/}

                <div className="mt-10">
                    <Button className="rounded-none bg-app-orange px-10 py-6 text-lg hover:bg-app-orange/80">
                        Register now
                    </Button>
                </div>
            </div>

            <div className="relative min-h-110 overflow-hidden rounded-3xl">
                <Image
                    src="/images/mission.png"
                    alt="People supporting each other on a climb"
                    fill
                    className="object-cover object-[100%_center]"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    priority
                />
            </div>
        </section>
    );
};

export default WhoWeAre;