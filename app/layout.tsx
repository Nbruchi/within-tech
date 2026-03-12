import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import {ReactNode} from "react";
import {TooltipProvider} from "@/components/ui/tooltip";
import {Toaster} from "@/components/ui/sonner";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const inter = localFont({
    src: "./fonts/Inter-VF.ttf",
    variable: "--font-inter",
    weight: "100 200 300 400 500 600 700 800 900",
})

const spaceGrotesk = localFont({
    src: "./fonts/SpaceGrotesk-VF.ttf",
    variable: "--font-space-grotesk",
    weight: "300 400 500 600 700 800",
})

export const metadata: Metadata = {
  title: "WithinTech",
  description: "A leading EdTech organization that equips students with hands-on skills in coding, robotics, and AI through mentorship, camps, and competitions.",
    icons:{
      icon: "/icons/logo.svg"
    }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable)}>
      <body
        className={`${inter.className} ${spaceGrotesk.variable} antialiased`}
      >
      <TooltipProvider>
          <Navbar/>
        {children}
          <Footer/>
          <Toaster/>
      </TooltipProvider>
      </body>
    </html>
  );
}
