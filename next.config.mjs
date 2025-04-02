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

  async redirects() {
    return [
      {
        source: "/help-center/troubleshooting/code-validity-error-quick-fix/",
        destination: "/blog/troubleshooting/code-validity-error-quick-fix/",
        permanent: true,
      },
      {
        source: "/help-center/troubleshooting/fix-cellular-plan-change-error/",
        destination: "/blog/troubleshooting/fix-cellular-plan-change-error//",
        permanent: true,
      },
      {
        source: "/help-center/troubleshooting/network-locked-device-unlock/",
        destination: "/blog/troubleshooting/network-locked-device-unlock/",
        permanent: true,
      },
      {
        source:
          "/help-center/troubleshooting/fix-esim-connectivity-issue-android/",
        destination:
          "/blog/troubleshooting/fix-esim-connectivity-issue-android/",
        permanent: true,
      },

      //after that needs to verify from sir saad and umar
      {
        source: "/help-center/iphone/how-to-activate-esim-on-iphone/",
        destination: "/blog/iphone/how-to-activate-esim-on-iphone/",
        permanent: true,
      },
      {
        source: "/help-center/info/what-is-esim-card/",
        destination: "/blog/info/what-is-esim-card/",
        permanent: true,
      },
      {
        source: "/help-center/travel-tips/esimcard-travel-europe/",
        destination: "/blog/travel-tips/esimcard-travel-europe/",
        permanent: true,
      },
      {
        source: "/help-center/iphone/how-to-activate-esim-on-iphone/",
        destination: "/blog/how-to-activate-esim-on-iphone/",
        permanent: true,
      },

      {
        source: "/help-center/iphone/how-to-activate-e-sim-to-a-new-iphone/",
        destination: "/iphone/how-to-activate-esim-on-iphone/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
