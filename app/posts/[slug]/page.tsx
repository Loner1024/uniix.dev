import React from 'react';
import {Heading, Text} from "@radix-ui/themes";
import {getAllPostsMetadata, getPostBySlug, Metadata} from "@/utils/get_metadata";
import {MDXRemote} from "next-mdx-remote/rsc";
import {customMDXComponents} from "@/components/mdx-components";
import remarkGfm from "remark-gfm";
import rehypePrismAll from "rehype-prism-plus";

const options = {
    mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypePrismAll],
    }
}

const Page = async ({params}: { params: {slug: string} }) => {
    const {metadata, content} = getPostBySlug(params.slug)
    return (
        <article className={"max-w-none prose prose-sm p-10 text-wrap lg:prose-base"}>
            <div className={"flex flex-col items-start justify-center mb-10 gap-4"}>
                <Heading size={"8"}>{metadata.title}</Heading>
                <Text>{metadata.date}</Text>
                <Text>{metadata.tags.join(",")}</Text>
            </div>
            <div className={"w-full"}>
                <MDXRemote source={content} components={customMDXComponents()} options={options} />
            </div>
        </article>
    );
};

export async function generateStaticParams() {
    const allMetadata = getAllPostsMetadata();
    return allMetadata.map(metadata => (
        {
            slug: metadata.slug.replace(/\.mdx$/, ''),
        }
    ))
}

export default Page;