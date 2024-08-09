import * as NextMdx from '@next/mdx'
import * as NextBundleAnalyzer from '@next/bundle-analyzer'

const withMDX = NextMdx.default({
    extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
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

const withBundleAnalyzer = NextBundleAnalyzer.default({
    enabled: process.env.ANALYZE === 'true',
})

export default withBundleAnalyzer(withMDX(nextConfig))
