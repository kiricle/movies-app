/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        });

        return config;
    },
    experimental: {
        fontLoaders: [
            {
                loader: '@next/font/google',
            },
        ],
    },
    images: {
        domains: ['image.tmdb.org'],
    }
};

module.exports = nextConfig;
