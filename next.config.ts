import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export for the Cloudflare Pages product-preview site.
  output: "export",
  images: {
    // bypass `next/image` provider requirement during static export.
    unoptimized: true,
  },
};

export default nextConfig;