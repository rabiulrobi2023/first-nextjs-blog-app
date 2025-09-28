import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // images: {
  //   remotePatterns: [
  //     new URL(
  //       "https://belescooverseas.com/wp-content/uploads/2024/04/Mango.jpeg"
  //     ),
  //   ],
  // },

  //Or

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
