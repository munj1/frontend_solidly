/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
};

module.exports = nextConfig;

/*
ways to fix Module not found: Can't resolve 'fs if it will ever happen again
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
