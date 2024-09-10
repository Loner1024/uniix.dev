import type {MetadataRoute} from 'next'
import {getAllPostsMetadata} from "@/lib/get_metadata";

export default function sitemap(): MetadataRoute.Sitemap {
    const allMetadata = getAllPostsMetadata();
    return allMetadata.map(metadata => {
        return {
            url: `https://blog.uniix.dev/posts/${metadata.slug}`,
            lastModified: metadata.date,
        }
    })
}