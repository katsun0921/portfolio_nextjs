/** @type {import('next').NextConfig} */
module.exports = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "https://api.ks-portfolio.site/:path*",
      },
    ];
  },
  reactStrictMode: true,
};
