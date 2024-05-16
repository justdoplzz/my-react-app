/** @type {import('next').NextConfig} */


const nextConfig = {
  reactStrictMode: false,
  webpack: (config, options) => {
    config.cache = false;
    return config;
  },
  trailingSlash: true,        // `src/pages` 폴더 구조로 export 하는 옵션
};

export default nextConfig;
