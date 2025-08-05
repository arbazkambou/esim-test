import { withSentryConfig } from "@sentry/nextjs";
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
        hostname: "portal.esimcard.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "flagcdn.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "telna.esimcard.com",
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
    instrumentationHook: true,
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
      {
        source: "/help-center/esim/esim-compatible-phones/",
        destination: "/esim-compatible/",
        permanent: true,
      },
      {
        source: "/blog/how-to-activate-and-set-up-esim-on-iphone/",
        destination: "/blog/iphone/esim-card-installation-tips/",
        permanent: true,
      },

      {
        source: "/blog/how-much-does-esim-cost-updated-2023/",
        destination: "/blog/how-much-does-esim-cost/",
        permanent: true,
      },
      {
        source: "/regional/south-amercia/",
        destination: "/regional/south-america/",
        permanent: true,
      },
      {
        source: "/blog/iphone/check-if-my-ios-device-is-esim-compatible/",
        destination: "/blog/",
        permanent: true,
      },

      {
        source: "/blog/android-13-to-allow-2-carriers/",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/blog/physical-sim-or-esimcard/",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/blog/esim-signal/",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/blog/transfer-esim-iphone-to-iphone/",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/blog/travelers-esimcard/",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/blog/esim-card-cloud-based/",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/blog/esim-market-intelligence/",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/blog/esim-iot-1/",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/blog/esim-essentials/",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/blog/the-truth-behind-esim/",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/blog/esim-iot/",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/blog/esim-security/",
        destination: "/blog/info/esim-security-hacking-tracking-tips/",
        permanent: true,
      },
      {
        source: "/blog/esim-5g/",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/blog/esimcard-services/",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/blog/why-esimcard-is-best-for-international-travel/",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/blog/esimcard-a-game-changer-for-telcom/",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/blog/esim-future-is-now/",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/blog/esim-iot-eco-system/",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/blog/esim-unlocking-new-opportunities/",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/blog/esim-card-celebrate-new-year-with-his-customers/",
        destination: "/blog/",
        permanent: true,
      },
      {
        source:
          "/blog/travel-around-the-world-with-esimcardcom-and-get-amazing-packages/",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/blog/esim-creates-digital-customer-experiences/",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/blog/travel-with-esim/",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/blog/migrate-to-esim-and-get-more-benefits/",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/blog/the-iphone-14-ditches-physical-sim-cards-for-e-sim/",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/blog/traveling-using-an-esim/",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/blog/e-sim-adoption/",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/blog/who-is-set-to-benefit-from-e-sim-technology/",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/blog/what-is-a-business-partner/",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/blog/e-sim-iot-devices/",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/blog/the-potential-for-e-sim-technology-iot/",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/blog/how-do-businesses-use-5g/",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/blog/android/android-e-sim-activation/",
        destination: "/blog/android/how-to-set-up-esim-on-android/",
        permanent: true,
      },
      {
        source: "/blog/iphone/how-to-activate-e-sim-to-a-new-iphone/",
        destination: "/blog/iphone/esim-card-installation-tips/",
        permanent: true,
      },
      {
        source: "/blog/esim-for-orlando/",
        destination: "/blog/info/esim-for-orlando/",
        permanent: true,
      },
      {
        source: "/blog/ee-international-roaming/",
        destination: "/blog/info/ee-international-roaming/",
        permanent: true,
      },
      {
        source: "/blog/info/is-esim-better-than-physical-sim/",
        destination: "/blog/travel-tips/is-esim-better-than-physical-sim/",
        permanent: true,
      },
      {
        source: "/blog/info/best-esim-for-international-travel/",
        destination: "/blog/travel-tips/best-esim-for-international-travel/",
        permanent: true,
      },
      {
        source: "/blog/how-to-activate-esim-on-iphone/",
        destination: "/blog/travel-tips/how-to-activate-esim-on-iphone/",
        permanent: true,
      },
      {
        source: "/blog/best-time-to-visit-iceland/",
        destination: "/blog/travel-tips/best-time-to-visit-iceland/",
        permanent: true,
      },
    ];
  },
};

export default withSentryConfig(nextConfig, {
  org: "codiea",
  project: "esimcard-next",
  silent: true,
  disableLogger: true,
});
