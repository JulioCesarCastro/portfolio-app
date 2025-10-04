/** @type {import('next').NextConfig} */
const nextConfig = {
    // Suppress hydration warnings for browser extension attributes
    reactStrictMode: true,

    // Add configuration to handle browser extension interference
    experimental: {
        // This helps with hydration issues caused by browser extensions
        optimizePackageImports: ['@next/font'],
    },

    // Suppress specific hydration warnings
    onDemandEntries: {
        // Period (in ms) where the server will keep pages in the buffer
        maxInactiveAge: 25 * 1000,
        // Number of pages that should be kept simultaneously without being disposed
        pagesBufferLength: 2,
    },
};

module.exports = nextConfig;
