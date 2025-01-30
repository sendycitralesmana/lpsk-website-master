import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin('./src/lib/i18n/request.ts');
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "picsum.photos",
            },
            {
                protocol: "https",
                hostname: "www.lpsk.go.id",
            },
            {
                protocol: "https",
                hostname: "bucket.mareca.my.id",
            },
            {
                protocol: "https",
                hostname: "portal.lpsk.go.id",
            },
            {
                protocol: "https",
                hostname: "bucket.lpsk.go.id",
            },
        ]
    }
};
 
export default withNextIntl(nextConfig);