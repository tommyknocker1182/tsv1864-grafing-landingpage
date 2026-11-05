
import type { NextConfig } from "next";

const isTest = process.env.NEXT_PUBLIC_SITE_TEST === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isTest ? "/tsv-neu" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
