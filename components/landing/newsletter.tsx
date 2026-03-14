import {Button} from "@/components/ui/button";
import TitleLabel from '../title-label';

const Newsletter = () => {
    return (
        <section id="newsletter" className="flex flex-col items-center justify-center gap-y-6 px-4 py-12 lg:px-6">
           <TitleLabel label='Newsletter'/>
            <h2 className="section-title text-app-purple">Subscribe to Our Newsletter</h2>
            <p className="text-center">Stay connected with our programs, events, and student success stories.</p>
            <div className="py-1 px-2 rounded-sm relative flex items-center gap-2 justify-between border-2 border-app-purple w-1/2">
                <input type="text" className="border-0 outline-0 px-6 py-4 bg-transparent text-lg" placeholder="Email address..."/>
                <Button className="rounded-none bg-app-purple hover:bg-app-purple/80 px-4 py-6">Subscribe</Button>
            </div>
        </section>
    )
}
export default Newsletter
