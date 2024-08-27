import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), '/posts');

export interface Metadata {
    title: string;
    summary: string;
    date: Date;
    slug: string
    tags: string[];
}

// 获取所有的 MDX 文件的文件名
export function getPostSlugs() {
    return fs.readdirSync(postsDirectory).filter(file => file.endsWith('.mdx') || file.endsWith("md"));
}

// 根据 slug 获取指定 MDX 文件的内容及 metadata
export function getPostBySlug(slug: string) {
    const fullPath = path.join(postsDirectory, `${slug}`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const { data , content } = matter(fileContents);
    return { slug,  metadata: data as Metadata, content };
}

// 获取所有 MDX 文件的 metadata
export function getAllPostsMetadata() {
    const slugs = getPostSlugs();

    const allMetadata = slugs.map(slug => {
        const { metadata } = getPostBySlug(slug);
        metadata.slug = slug
        return {
            ...metadata,
        };
    });
    allMetadata.sort((a, b) => {
        const dateA = a.date;
        const dateB = b.date;
        return dateA > dateB ? -1 : 1
    });

    return allMetadata
}
