/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dev.esimcard.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "esimcard.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "flagcdn.com",
        port: "",
        pathname: "/**",
      },
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  trailingSlash: true,
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

export default nextConfig;
