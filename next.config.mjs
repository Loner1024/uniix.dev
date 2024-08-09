import * as NextMdx from '@next/mdx'

const withMDX = NextMdx.default({
    extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    experimental: {
        mdxRs: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '*.hdslb.com',
                port: '',
                pathname: '**',
            },
        ],
    },
};

export default withMDX(nextConfig)
