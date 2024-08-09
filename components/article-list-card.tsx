import React from 'react';
import {Heading, Text} from "@radix-ui/themes";
import Link from "next/link";

const ArticleListCard = ({heading, summary, tags, slug}: {
    heading: string,
    summary: string,
    tags: string[],
    slug: string
}) => {
    return (
        <Link prefetch={false} href={"/posts/" + slug}>
            <div className={"hover:bg-[#f7f7f7] p-10 hover:cursor-pointer transition hover:rounded-lg"}>
                <div className={"pb-6"}>
                    <Text size={"1"} color={"gray"}>{tags.length > 0 ? "#" : null}{tags.join("   #")}</Text>
                </div>
                <Heading size={"6"} className={"pb-6"}>{heading}</Heading>
                <div className={"pb-12 min-h-28"}>
                    <Text wrap={"pretty"} color={"gray"}
                          className={"heti"}>{summary.length > 180 ? summary.slice(0, 180) + '......' : summary}</Text>
                </div>
                <Text size={"1"} color={"gray"}>2024-08-06</Text>
            </div>
        </Link>
    );
};

export default ArticleListCard;