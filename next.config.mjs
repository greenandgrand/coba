/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // domains: ["example.com"],
  },
  // async headers() {
  //   return [
  //     {
  //       source: "/(.*)",
  //       headers: [
  //         { key: "X-Frame-Options", value: "SAMEORIGIN" },
  //         { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" }
  //       ],
  //     },
  //   ];
  // },
};

export default nextConfig;
