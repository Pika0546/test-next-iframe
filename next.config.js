/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    async rewrites() {
        return [
            {
                source: "/iframe/:path*",
                destination: "http://chaythienngo.vn/:path*",
            },
            {
                source: "/mobile/:path*",
                destination: "http://chaythienngo.vn/mobile/:path*",
            },
            {
                source: "/files/:path*",
                destination: "http://chaythienngo.vn/files/:path*",
            },
        ];
    },
};

module.exports = nextConfig;
