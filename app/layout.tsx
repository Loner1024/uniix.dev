import type {Metadata} from "next";
import "./globals.css";
import {Text, Theme} from '@radix-ui/themes';
import React from "react";
import Footer from "@/components/footer";
import Image from "next/image";
import avatar from "@/public/avatar.avif";
import ShowSocialIcon from "@/components/show-social-icon";
import { SpeedInsights } from "@vercel/speed-insights/next"
import {GoogleAnalytics} from '@next/third-parties/google'
import Link from "next/link";
import {Cover} from "@/components/ui/cover";

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
        <Theme>
            <div className={"bg-[#f7f7f7] min-h-screen"}>
                <div className={"flex justify-center relative"}>
                    <div className="w-screen md:w-3/4 lg:w-3/5 bg-white shadow-lg lg:mt-20">
                        <div
                            className={"flex flex-col lg:flex-row lg:justify-between items-center lg:pt-20 lg:px-10 xl:px-[7.5rem] pt-10"}>
                            <Link className={"mb-4"} href={"/"}>
                                <Image priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt={"avatar"} src={avatar} className={"size-24"}/>
                            </Link>
                            <div>
                                <Cover>
                                    <Text size={"2"}>我们需要的是热烈而镇定的情绪，紧张而有秩序的工作</Text>
                                </Cover>
                                <ShowSocialIcon/>
                            </div>
                        </div>
                        <div className={"lg:py-20 xl:mx-20 xl:py-20"}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
            <SpeedInsights/>
        </Theme>
        </body>
        <GoogleAnalytics gaId="G-3FZWHM8W5R"/>
        </html>
    );
}
