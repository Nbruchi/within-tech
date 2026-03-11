import {Item, ItemContent, ItemMedia, ItemTitle} from "@/components/ui/item";
import {Sparkle} from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen pt-24 sm:pt-28">
      <div className="absolute inset-0 -z-10 bg-[url('/images/landing.png')] bg-cover bg-center bg-no-repeat" />
      <div className="absolute inset-0 -z-10 bg-black/35" />

      <div className="px-4 py-16 sm:px-6 lg:px-6 flex flex-col items-center gap-2 mx-auto max-w-5xl">
          <Item variant="outline" className="rounded-full flex items-center gap-2 bg-white/10 px-4 py-2 w-fit">
              <ItemMedia variant="icon">
                  <Sparkle className="size-3 text-white"/>
              </ItemMedia>
              <ItemContent>
                  <ItemTitle className="text-white">Get-into-tech: Summer Camp 2026 | Coming soon</ItemTitle>
              </ItemContent>
          </Item>

          <div className="mt-6">
              <h1 className="font-space-grotesk text-white text-6xl text-center">Empowering <span className="text-app-orange">Young Tech  <br/> Builders</span> to Build the Future</h1>
              <p className="text-white font-inter text-xl mt-4 text-center">
                  WithinTech Rwanda s a leading EdTech organization that equips students with <br/> hands-on skills in coding, robotics, and AI through mentorship, camps, and <br/> competitions.
              </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3 md:items-start">
              <div className="overflow-hidden rounded-sm border-6 border-white/40">
                  <Image
                      src="/images/landing-pic-01.png"
                      alt="Students learning together"
                      width={560}
                      height={700}
                      className="h-full w-full object-cover rounded-none"
                  />
              </div>

              <div className="overflow-hidden md:mt-10">
                  <Image
                      src="/images/landing-pic-02.png"
                      alt="Students at summer camp"
                      width={560}
                      height={700}
                      className="h-full w-full object-cover rounded-none"
                  />
              </div>

              <div className="overflow-hidden rounded-sm border-6 border-white/40">
                  <Image
                      src="/images/landing-pic-03.png"
                      alt="Technology activity session"
                      width={560}
                      height={700}
                      className="h-full w-full object-cover rounded-none"
                  />
              </div>
          </div>
      </div>
    </section>
  );
};

export default Hero;
