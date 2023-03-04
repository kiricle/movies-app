/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/core'],
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
};

module.exports = nextConfig;
