import React from 'react';
import Link from "next/link";
import {Text} from "@radix-ui/themes"

const Footer = () => {
    return (
        <div className={"bg-[#f7f7f7] flex flex-col justify-center items-center gap-4 min-h-28 pt-10 pb-16"}>
        <div className={"flex justify-center items-center gap-4 text-gray-400"}>
            <Link className={"hover:text-gray-600"} href={"/about"}>About</Link>
            <Link className={"hover:text-gray-600"} href={"/archive"}>Archive</Link>
            <Link className={"hover:text-gray-600"} href={"/feed"}>Feed</Link>
        </div>
            <div>
                <Text className={"text-gray-300"}>Design By Myself</Text>
            </div>
        </div>
    );
};

export default Footer;