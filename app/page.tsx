import Hero from "@/components/landing/hero";
import Partners from "@/components/landing/partners";
import WhoWeAre from "@/components/landing/who-we-are";
import Programs from "@/components/landing/programs";
import ChooseUs from "@/components/landing/choose-us";
import SuccessStories from "@/components/landing/success-stories";
import Donate from "@/components/landing/donate";
import Newsletter from "@/components/landing/newsletter";

const Page = () => {
    return (
        <main>
            <Hero/>
            <Partners/>
            <WhoWeAre/>
            <Programs/>
            <ChooseUs/>
            <SuccessStories/>
            <Donate/>
            <Newsletter/>
        </main>
    )
}
export default Page
