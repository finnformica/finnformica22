/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // removes "className did not match" error
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
};

module.exports = nextConfig;
