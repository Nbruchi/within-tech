"use client"

import Image from "next/image";
import { Item, ItemContent, ItemMedia, ItemTitle } from "@/components/ui/item";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper/modules";
import { Button } from "@/components/ui/button";
import {VscSparkleFilled} from "react-icons/vsc";

type ContentCard = {
    title: string;
    content: string;
};

type ValuesCard = {
    title: string;
    values: string[];
};

type AboutCard = ContentCard | ValuesCard;

const hasValues = (card: AboutCard): card is ValuesCard => "values" in card;

const aboutCards: AboutCard[] = [
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

const swiperClassName = "h-80 w-full max-w-104";
const cardClassName = "flex h-full flex-col rounded-3xl bg-white p-5 text-app-purple shadow-xl";
const cardValuesClassName = "list-disc space-y-2 pl-5 text-base leading-relaxed marker:text-app-orange";

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
                    Empowering the Next Generation Of <br /> Tech Builders
                </h1>

                <p className="mt-4 text-lg">
                    WithinTech Rwanda is a leading EdTech organization dedicated to bridging the digital skills gap in Rwanda. We empower young people with hands-on coding, robotics, and tech programs in the digital world.
                </p>

                <div className="mt-8 flex justify-start">
                    <Swiper
                        effect="cards"
                        grabCursor={true}
                        modules={[EffectCards]}
                        className={swiperClassName}
                    >
                        {aboutCards.map((card) => (
                            <SwiperSlide key={card.title} className="rounded-3xl">
                                <div className={cardClassName}>
                                    <div className="flex-1 overflow-y-auto">
                                        {hasValues(card) ? (
                                            <ul className={cardValuesClassName}>
                                                {card.values.map((value) => (
                                                    <li key={value}>{value}</li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p className="text-base leading-relaxed">
                                                {card.content}
                                            </p>
                                        )}
                                    </div>
                                    <div className="mt-4 border-t border-app-purple/20 pt-3">
                                        <h3 className="text-2xl font-bold">
                                            {card.title}
                                        </h3>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

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