import {Item, ItemContent, ItemMedia, ItemTitle} from "@/components/ui/item";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import {VscSparkleFilled} from "react-icons/vsc";

const Donate = () => {
    return (
        <section
            id="donate"
            className="w-full overflow-x-hidden bg-app-yellow"
        >
            <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-y-10 mt-10">
                <Item
                    variant="outline"
                    className="flex w-fit items-center gap-2 rounded-full border-none bg-app-orange/10 px-2 py-1"
                >
                    <ItemMedia variant="icon">
                        <VscSparkleFilled className="size-4 fill-app-orange"/>
                    </ItemMedia>
                    <ItemContent>
                        <ItemTitle className="text-lg text-app-orange">Donate</ItemTitle>
                    </ItemContent>
                </Item>

                <h1 className="section-title text-app-purple">Support the Young Builders of Tomorrow</h1>
                <p className="text-lg text-center">
                    Have You Ever Wanted to Support Young Learners in Your Community? <br/> This is your moment to contribute and help us reach more young people building their future through technology this year.
                </p>
                    <ul className="flex items-center gap-8">
                        <li className="flex flex-col items-center">
                            <span className="text-4xl text-app-orange font-bold">10+</span>
                            <p className="text-app-purple">Partner Schools</p>
                        </li>
                        <li className="flex flex-col items-center">
                            <span className="text-4xl text-app-orange font-bold">350+</span>
                            <p className="text-app-purple">Students Benefited</p>
                        </li>
                        <li className="flex flex-col items-center">
                            <span className="text-4xl text-app-orange font-bold">3</span>
                            <p className="text-app-purple">Cohorts</p>
                        </li>
                    </ul>
                <Button className="bg-app-orange hover:bg-app-orange/80 px-8 py-6 rounded-none">Donate</Button>
            </div>
           <div className="w-full flex-1">
               <Image src="/images/cta.png" alt="cta" width={1000} height={1000} className="object-cover w-full" />
           </div>
        </section>
    )
}

export default Donate;
