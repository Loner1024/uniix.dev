'use client'
import React, {useEffect, useState} from 'react';
import {Text} from "@radix-ui/themes";
import {usePathname} from "next/navigation";

interface TOCItem {
    id: string;
    title: string;
    level: number;
}

const ArticleToc = () => {
    const [toc, setToc] = useState<TOCItem[]>([]);
    const pathname = usePathname()

    useEffect(() => {
        const headings = document.querySelectorAll('h1, h2, h3');
        const tocList: TOCItem[] = Array.from(headings).map(heading => ({
            id: heading.id,
            title: heading.textContent || '',
            level: parseInt(heading.tagName.replace('H', ''), 10),
        }));
        setToc(tocList);
    }, [pathname]);

    if (!pathname.startsWith("/posts")) {
        return null
    }

    return (
        <nav aria-label="目录">
            <div className={"mb-3"}>
                <Text size={"7"}>目录</Text>
            </div>
            <ul>
                {toc.map((heading) => (
                    <li key={heading.id} style={{marginLeft: `${heading.level - 1}em`}}>
                        <a href={`#${heading.id}`}>{heading.title}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default ArticleToc;