/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: false, // because @mui/styles doesnt work with srict mode
  webpack: (config) => {
    config.resolve.fallback = { ...config.resolve.fallback, fs: false };
    return config;
  },
};

module.exports = nextConfig;

/*
ways to fix Module not found: Can't resolve 'fs
1. webpack: (config) => {
     config.resolve.fallback = { ...config.resolve.fallback, fs: false };
     return config;
   },
2. webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }
    return config
  }
relevance: https://stackoverflow.com/questions/64926174/module-not-found-cant-resolve-fs-in-next-js-application
*/
