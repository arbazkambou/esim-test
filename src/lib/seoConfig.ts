// seoData.ts

import type { Metadata } from "next";

interface LocalizedSeo {
  home: Metadata;
  esim: Metadata;
  virtualNumber: Metadata;
  partners: Metadata;
  affiliate: Metadata;
  resellerApi: Metadata;
  esimCompatible: Metadata;
  internationalCalling: Metadata;
  faqs: Metadata;
  helpCenter: Metadata;
  aboutUs: Metadata;
  blog: Metadata;
  contactUs: Metadata;
  careers: Metadata;
  terms: Metadata;
  privacyPolicy: Metadata;
  refundPolicy: Metadata;
  login: Metadata;
  register: Metadata;
  passwordReset: Metadata;
  refill: Metadata;
  mySims: Metadata;
  mySimDetail: Metadata;
  regionalEsim: Metadata;
  globalEsim: Metadata;
  dataVoiceSms: Metadata;
  regionalDataVoiceSms: Metadata;
  internationalEsim: Metadata;
  cart: Metadata;
}

export const seoData: Record<string, LocalizedSeo> = {
  en: {
    home: {
      title: "eSIM Card: Buy Best eSIM Plans for your International Travel",
      description:
        "Buy Local, Regional & Global eSIM for international Travel. Enjoy Fast & Reliable coverage at traveler-friendly prices with eSIM Card. Get your desired eSIM now",
      keywords:
        "eSIM, buy eSIM, regional eSIM, local eSIM, buy regional eSIM, buy local eSIM, purchase local eSIM, purchase regional eSIM, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, traveler, data plan, buy e-SIM, cheap data, connectivity",
      authors: [{ name: "eSimCard.com" }],
      openGraph: {
        title: "eSIM Card: Buy Best eSIM Plans for your International Travel",
        description:
          "Buy Local, Regional & Global eSIM for international Travel. Enjoy Fast & Reliable coverage at traveler-friendly prices with eSIMCard. Get your desired eSIM now",
        url: "https://esimcard.com/",
        siteName: "eSim Card",
        images: "https://esimcard.com/images/logo-1x1-new.png",
        type: "article",
      },

      twitter: {
        card: "summary",
        site: "@esimcard",
        title: "eSIM Card: Buy Best eSIM Plans for your International Travel",
        description:
          "Buy Local, Regional & Global eSIM for international Travel. Enjoy Fast & Reliable coverage at traveler-friendly prices with eSIMCard. Get your desired eSIM now",
        images: "https://esimcard.com/images/logo-1x1-new.png",
      },
      alternates: {
        canonical: "https://esimcard.com/",
      },
    },

    esim: {
      title: "Local eSIM for 200+ Countries: Affordable, Prepaid Travel Data",
      description:
        "Get prepaid local eSIMs for 200+ countries at local rates. Enjoy seamless, affordable data connectivity for your travels with our reliable eSIM service",
      keywords:
        "eSIM, buy eSIM, regional eSIM, local eSIM, buy regional eSIM, buy local eSIM, purchase local eSIM, purchase regional eSIM, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, traveler, data plan, buy e-SIM, cheap data, connectivity, buy eSIM, regional eSIM, eSIM Plans, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, data plan, buy e-SIM, cheap eSIM data, connectivity",
      authors: [{ name: "eSimCard.com" }],
      openGraph: {
        title: "Local eSIM for 200+ Countries: Affordable, Prepaid Travel Data",
        description:
          "Get prepaid local eSIMs for 200+ countries at local rates. Enjoy seamless, affordable data connectivity for your travels with our reliable eSIM service",
        url: "https://esimcard.com/esim/",
        siteName: "eSim Card",
        images: "https://esimcard.com/images/logo-1x1-new.png",
        type: "website",
      },
      twitter: {
        card: "summary",
        site: "@esimcard",
        title: "Local eSIM for 200+ Countries: Affordable, Prepaid Travel Data",
        description:
          "Get prepaid local eSIMs for 200+ countries at local rates. Enjoy seamless, affordable data connectivity for your travels with our reliable eSIM service",
        images: "https://esimcard.com/images/logo-1x1-new.png",
      },
      alternates: {
        canonical: "https://esimcard.com/esim/",
      },
    },

    virtualNumber: {
      title: "eSIM Card's Virtual Phone Number: Affordable Rate Per Minute",
      description:
        "eSIM Card's Virtual Phone Number Affordable Rate Per Minute: Digital communication for travel, business, and remote work. Virtual number for global connection",
      keywords:
        "eSIM, buy eSIM, regional eSIM, local eSIM, buy regional eSIM, buy local eSIM, purchase local eSIM, purchase regional eSIM, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, traveler, data plan, buy e-SIM, cheap data, connectivity, esimcard, virtual number, virtual number for calling",
      authors: [{ name: "eSimCard.com" }],
      openGraph: {
        title: "eSIM Card's Virtual Phone Number: Affordable Rate Per Minute",
        description:
          "eSIM Card's Virtual Phone Number Affordable Rate Per Minute: Digital communication for travel, business, and remote work. Virtual number for global connection",
        url: "https://esimcard.com/virtual-number/",
        siteName: "eSim Card",
        images: "https://esimcard.com/images/logo-1x1-new.png",
        type: "website",
      },
      twitter: {
        card: "summary",
        site: "@esimcard",
        title: "eSIM Card's Virtual Phone Number: Affordable Rate Per Minute",
        description:
          "eSIM Card's Virtual Phone Number Affordable Rate Per Minute: Digital communication for travel, business, and remote work. Virtual number for global connection",
        images: "https://esimcard.com/images/logo-1x1-new.png",
      },
      alternates: {
        canonical: "https://esimcard.com/virtual-number/",
      },
    },

    partners: {
      title: "eSIM Wholesale Distribution & Reseller Platform | eSIM Card",
      description:
        "Join eSIM Card Distribution and Reseller program. Get eSIM at low rates & sell eSIM directly to your customers through your website/APP – at your own pricing",
      keywords:
        "eSIM, buy eSIM, regional eSIM, local eSIM, buy regional eSIM, buy local eSIM, purchase local eSIM, purchase regional eSIM, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, traveler, data plan, buy e-SIM, cheap data, connectivity, esim wholesale, esim reseller, esim distribution, esim api, esim white label, white label esim",
      authors: [{ name: "eSimCard.com" }],
      openGraph: {
        title: "eSIM Wholesale Distribution & Reseller Platform | eSIM Card",
        description:
          "Join eSIM Card Distribution and Reseller program. Get eSIM at low rates & sell eSIM directly to your customers through your website/APP – at your own pricing",
        url: "https://esimcard.com/partners/",
        siteName: "eSim Card",
        images: "https://esimcard.com/landing/esim-partners.png",
        type: "website",
      },
      twitter: {
        card: "summary",
        site: "@esimcard",
        title: "eSIM Wholesale Distribution & Reseller Platform | eSIM Card",
        description:
          "Join eSIM Card Distribution and Reseller program. Get eSIM at low rates & sell eSIM directly to your customers through your website/APP – at your own pricing",
        images: "https://esimcard.com/landing/esim-partners.png",
      },
      alternates: {
        canonical: "https://esimcard.com/partners/",
      },
    },

    affiliate: {
      title:
        "Become eSIM Card Affiliate Partner: Earn Commissions Promoting eSIMs",
      description:
        "Join the eSIM Card Affiliate Program and earn commissions by promoting eSIM technology. Perfect for bloggers, content creators, and tech websites. Start earning today",
      keywords:
        "eSIM, buy eSIM, regional eSIM, local eSIM, buy regional eSIM, buy local eSIM, purchase local eSIM, purchase regional eSIM, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, traveler, data plan, buy e-SIM, cheap data, connectivity, esim affiliate, esim reseller, esim distribution",
      authors: [{ name: "eSimCard.com" }],
      openGraph: {
        title:
          "Become eSIM Card Affiliate Partner: Earn Commissions Promoting eSIMs",
        description:
          "Join the eSIM Card Affiliate Program and earn commissions by promoting eSIM technology. Perfect for bloggers, content creators, and tech websites. Start earning today",
        url: "https://esimcard.com/partners/affiliate/",
        siteName: "eSim Card",
        images: "https://esimcard.com/landing/esim-partners.png",
        type: "website",
      },
      twitter: {
        card: "summary",
        site: "@esimcard",
        title:
          "Become eSIM Card Affiliate Partner: Earn Commissions Promoting eSIMs",
        description:
          "Join the eSIM Card Affiliate Program and earn commissions by promoting eSIM technology. Perfect for bloggers, content creators, and tech websites. Start earning today",
        images: "https://esimcard.com/landing/esim-partners.png",
      },
      alternates: {
        canonical: "https://esimcard.com/partners/affiliate/",
      },
    },

    resellerApi: {
      title: "eSIM Reseller Development API | eSIM Card Partner API",
      description:
        "Get eSIM Card’s Build API Integrated Website for Reselling eSIMs or Build your own Website, App, or service with our Well-Documented eSIM API for Developers",
      keywords:
        "eSIM, buy eSIM, regional eSIM, local eSIM, buy regional eSIM, buy local eSIM, purchase local eSIM, purchase regional eSIM, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, traveler, data plan, buy e-SIM, cheap data, connectivity, esim wholesale, esim reseller, esim distribution, esim api, esim white label, white label esim",
      authors: [{ name: "eSimCard.com" }],
      openGraph: {
        title: "eSIM Reseller Development API | eSIM Card Partner API",
        description:
          "Get eSIM Card’s Build API Integrated Website for Reselling eSIMs or Build your own Website, App, or service with our Well-Documented eSIM API for Developers",
        url: "https://esimcard.com/partners/reseller-api/",
        siteName: "eSim Card",
        images: "https://esimcard.com/landing/esim-partners.png",
        type: "website",
      },
      twitter: {
        card: "summary",
        site: "@esimcard",
        title: "eSIM Reseller Development API | eSIM Card Partner API",
        description:
          "Get eSIM Card’s Build API Integrated Website for Reselling eSIMs or Build your own Website, App, or service with our Well-Documented eSIM API for Developers",
        images: "https://esimcard.com/landing/esim-partners.png",
      },
      alternates: {
        canonical: "https://esimcard.com/partners/reseller-api/",
      },
    },

    esimCompatible: {
      title: "eSIM Compatible Phones | List of Android & iPhones (2025)",
      description:
        "See the complete list of eSIM compatible Android and iPhones. We list down all the latest models to older possible (eSIM compatible) phones with Max eSIMs capacity",
      keywords:
        "eSIM, buy eSIM, regional eSIM, local eSIM, buy regional eSIM, buy local eSIM, purchase local eSIM, purchase regional eSIM, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, traveler, data plan, buy e-SIM, cheap data, connectivity, esim phone, esim compatible, iPhone, Samsung, Huawei, Motorola",
      authors: [{ name: "eSimCard.com" }],
      openGraph: {
        title: "eSIM Compatible Phones | List of Android & iPhones (2025)",
        description:
          "See the complete list of eSIM compatible Android and iPhones. We list down all the latest models to older possible (eSIM compatible) phones with Max eSIMs capacity",
        url: "https://esimcard.com/esim-compatible/",
        siteName: "eSim Card",
        images: "https://esimcard.com/images/logo-1x1-new.png",
        type: "website",
      },
      twitter: {
        card: "summary",
        site: "@esimcard",
        title: "eSIM Compatible Phones | List of Android & iPhones (2025)",
        description:
          "See the complete list of eSIM compatible Android and iPhones. We list down all the latest models to older possible (eSIM compatible) phones with Max eSIMs capacity",
        images: "https://esimcard.com/images/logo-1x1-new.png",
      },
      alternates: {
        canonical: "https://esimcard.com/esim-compatible/",
      },
    },

    internationalCalling: {
      title:
        "eSIM Card: International Calling Service | Cheap International Calls",
      description:
        "eSIM Card’s International Calling Service, Cheap International calls, Clear Call-per-minute rates before calling, ideal for both personal and business use.",
      keywords:
        "eSIM, buy eSIM, regional eSIM, local eSIM, buy regional eSIM, buy local eSIM, purchase local eSIM, purchase regional eSIM, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, traveler, data plan, buy e-SIM, cheap data, connectivity",
      authors: [{ name: "eSimCard.com" }],
      openGraph: {
        title:
          "eSIM Card: International Calling Service | Cheap International Calls",
        description:
          "eSIM Card’s International Calling Service, Cheap International calls, Clear Call-per-minute rates before calling, ideal for both personal and business use.",
        url: "https://esimcard.com/international-calling/",
        siteName: "eSim Card",
        images: "https://esimcard.com/images/logo-1x1-new.png",
        type: "website",
      },
      twitter: {
        card: "summary",
        site: "@esimcard",
        title:
          "eSIM Card: International Calling Service | Cheap International Calls",
        description:
          "eSIM Card’s International Calling Service, Cheap International calls, Clear Call-per-minute rates before calling, ideal for both personal and business use.",
        images: "https://esimcard.com/images/logo-1x1-new.png",
      },
      alternates: {
        canonical: "https://esimcard.com/international-calling/",
      },
    },

    faqs: {
      title: "eSIM Card - FAQs",
      description: "Get answers to all your questions",
      keywords:
        "eSIM, buy eSIM, regional eSIM, local eSIM, buy regional eSIM, buy local eSIM, purchase local eSIM, purchase regional eSIM, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, traveler, data plan, buy e-SIM, cheap data, connectivity, esimblogs, blogs, esim info",
      authors: [{ name: "eSimCard.com" }],
      openGraph: {
        title: "eSIM Card - FAQs",
        description: "Get answers to all your questions",
        url: "https://esimcard.com/faqs/",
        siteName: "eSim Card",
        images: "https://esimcard.com/images/logo-1x1-new.png",
        type: "website",
      },
      twitter: {
        card: "summary",
        site: "@esimcard",
        title: "eSIM Card - FAQs",
        description: "Get answers to all your questions",
        images: "https://esimcard.com/images/logo-1x1-new.png",
      },
      alternates: {
        canonical: "https://esimcard.com/faqs/",
      },
    },

    helpCenter: {
      title: "eSIM Help Center: Comprehensive Support for eSIM Users",
      description:
        "Find detailed guides and FAQs on setting up, managing, and troubleshooting eSIMs for iOS and Android devices. Get all your eSIM queries answered here.",
      keywords:
        "eSIM, buy eSIM, regional eSIM, local eSIM, buy regional eSIM, buy local eSIM, purchase local eSIM, purchase regional eSIM, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, traveler, data plan, buy e-SIM, cheap data, connectivity, esimblogs, blogs, esim info",
      authors: [{ name: "eSimCard.com" }],
      openGraph: {
        title: "eSIM Help Center: Comprehensive Support for eSIM Users",
        description:
          "Find detailed guides and FAQs on setting up, managing, and troubleshooting eSIMs for iOS and Android devices. Get all your eSIM queries answered here.",
        url: "https://esimcard.com/help-center/",
        siteName: "eSim Card",
        images: "https://esimcard.com/images/logo-1x1-new.png",
        type: "website",
      },
      twitter: {
        card: "summary",
        site: "@esimcard",
        title: "eSIM Help Center: Comprehensive Support for eSIM Users",
        description:
          "Find detailed guides and FAQs on setting up, managing, and troubleshooting eSIMs for iOS and Android devices. Get all your eSIM queries answered here.",
        images: "https://esimcard.com/images/logo-1x1-new.png",
      },
      alternates: {
        canonical: "https://esimcard.com/help-center/",
      },
    },

    aboutUs: {
      title: "eSIM Card - About Us",
      description: "Know About eSIM Card",
      keywords:
        "eSIM, buy eSIM, regional eSIM, local eSIM, buy regional eSIM, buy local eSIM, purchase local eSIM, purchase regional eSIM, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, traveler, data plan, buy e-SIM, cheap data, connectivity, esim, esimcard about",
      authors: [{ name: "eSimCard.com" }],
      openGraph: {
        title: "eSIM Card - About Us",
        description: "Know About eSIM Card",
        url: "https://esimcard.com/about-us/",
        siteName: "eSim Card",
        images: "https://esimcard.com/images/logo-1x1-new.png",
        type: "website",
      },
      twitter: {
        card: "summary",
        site: "@esimcard",
        title: "eSIM Card - About Us",
        description: "Know About eSIM Card",
        images: "https://esimcard.com/images/logo-1x1-new.png",
      },
      alternates: {
        canonical: "https://esimcard.com/about-us/",
      },
    },

    blog: {
      title: "eSIM Blog: Latest Updates, Tips, and Insights on eSIM Technology",
      description:
        "Stay informed with eSIM Card blog covering the latest updates, how-tos, troubleshooting tips, and travel insights.",
      keywords:
        "eSIM, buy eSIM, regional eSIM, local eSIM, buy regional eSIM, buy local eSIM, purchase local eSIM, purchase regional eSIM, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, traveler, data plan, buy e-SIM, cheap data, connectivity, esimblogs, blogs, esim info",
      authors: [{ name: "eSimCard.com" }],
      openGraph: {
        title:
          "eSIM Blog: Latest Updates, Tips, and Insights on eSIM Technology",
        description:
          "Stay informed with eSIM Card blog covering the latest updates, how-tos, troubleshooting tips, and travel insights.",
        url: "https://esimcard.com/blog/",
        siteName: "eSim Card",
        images:
          "https://esimcard.com/storage/images/background/blog-banner.png",
        type: "article",
      },
      twitter: {
        card: "summary",
        site: "@esimcard",
        title:
          "eSIM Blog: Latest Updates, Tips, and Insights on eSIM Technology",
        description:
          "Stay informed with eSIM Card blog covering the latest updates, how-tos, troubleshooting tips, and travel insights.",
        images:
          "https://esimcard.com/storage/images/background/blog-banner.png",
      },
      alternates: {
        canonical: "https://esimcard.com/blog/",
      },
    },

    contactUs: {
      title: "eSIM Card - Contact Us",
      description: "Contact us anytime, anywhere",
      keywords:
        "eSIM, buy eSIM, regional eSIM, local eSIM, buy regional eSIM, buy local eSIM, purchase local eSIM, purchase regional eSIM, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, traveler, data plan, buy e-SIM, cheap data, connectivity, esim contact, esim info",
      authors: [{ name: "eSimCard.com" }],
      openGraph: {
        title: "eSIM Card - Contact Us",
        description: "Contact us anytime, anywhere",
        url: "https://esimcard.com/contact-us/",
        siteName: "eSim Card",
        images: "https://esimcard.com/images/logo-1x1-new.png",
        type: "website",
      },
      twitter: {
        card: "summary",
        site: "@esimcard",
        title: "eSIM Card - Contact Us",
        description: "Contact us anytime, anywhere",
        images: "https://esimcard.com/images/logo-1x1-new.png",
      },
      alternates: {
        canonical: "https://esimcard.com/contact-us/",
      },
    },

    careers: {
      title: "eSIM Card - Careers",
      description:
        "A great workplace combines exceptional colleagues and hard problems",
      keywords:
        "eSIM, buy eSIM, regional eSIM, local eSIM, buy regional eSIM, buy local eSIM, purchase local eSIM, purchase regional eSIM, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, traveler, data plan, buy e-SIM, cheap data, connectivity, careers",
      authors: [{ name: "eSimCard.com" }],
      openGraph: {
        title: "eSIM Card - Careers",
        description:
          "A great workplace combines exceptional colleagues and hard problems",
        url: "https://esimcard.com/careers/",
        siteName: "eSim Card",
        images: "https://esimcard.com/images/logo-1x1-new.png",
        type: "website",
      },
      twitter: {
        card: "summary",
        site: "@esimcard",
        title: "eSIM Card - Careers",
        description:
          "A great workplace combines exceptional colleagues and hard problems",
        images: "https://esimcard.com/images/logo-1x1-new.png",
      },
      alternates: {
        canonical: "https://esimcard.com/careers/",
      },
    },

    terms: {
      title:
        "eSIM Card Terms: Secure Global eSIM Services, Refund & Privacy Policies",
      description:
        "Read eSIM Card's terms for secure, global eSIM services. Understand our refund policies, device compatibility, and privacy for a seamless travel experience.",
      keywords:
        "eSIM, buy eSIM, regional eSIM, local eSIM, buy regional eSIM, buy local eSIM, purchase local eSIM, purchase regional eSIM, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, traveler, data plan, buy e-SIM, cheap data, connectivity",
      authors: [{ name: "eSimCard.com" }],
      openGraph: {
        title:
          "eSIM Card Terms: Secure Global eSIM Services, Refund & Privacy Policies",
        description:
          "Read eSIM Card's terms for secure, global eSIM services. Understand our refund policies, device compatibility, and privacy for a seamless travel experience.",
        url: "https://esimcard.com/terms/",
        siteName: "eSim Card",
        images: "https://esimcard.com/images/logo-1x1-new.png",
        type: "website",
      },
      twitter: {
        card: "summary",
        site: "@esimcard",
        title:
          "eSIM Card Terms: Secure Global eSIM Services, Refund & Privacy Policies",
        description:
          "Read eSIM Card's terms for secure, global eSIM services. Understand our refund policies, device compatibility, and privacy for a seamless travel experience.",
        images: "https://esimcard.com/images/logo-1x1-new.png",
      },
      alternates: {
        canonical: "https://esimcard.com/terms/",
      },
    },

    privacyPolicy: {
      title:
        "eSIM Card Privacy Policy: Protecting Your Personal Data & Security",
      description:
        "Learn how eSIM Card collects, uses, and secures your data. Explore privacy rights, cookie usage, and security measures to ensure a safe online experience.",
      keywords:
        "eSIM, buy eSIM, regional eSIM, local eSIM, buy regional eSIM, buy local eSIM, purchase local eSIM, purchase regional eSIM, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, traveler, data plan, buy e-SIM, cheap data, connectivity",
      authors: [{ name: "eSimCard.com" }],
      openGraph: {
        title:
          "eSIM Card Privacy Policy: Protecting Your Personal Data & Security",
        description:
          "Learn how eSIM Card collects, uses, and secures your data. Explore privacy rights, cookie usage, and security measures to ensure a safe online experience.",
        url: "https://esimcard.com/privacy-policy/",
        siteName: "eSim Card",
        images: "https://esimcard.com/images/logo-1x1-new.png",
        type: "website",
      },
      twitter: {
        card: "summary",
        site: "@esimcard",
        title:
          "eSIM Card Privacy Policy: Protecting Your Personal Data & Security",
        description:
          "Learn how eSIM Card collects, uses, and secures your data. Explore privacy rights, cookie usage, and security measures to ensure a safe online experience.",
        images: "https://esimcard.com/images/logo-1x1-new.png",
      },
      alternates: {
        canonical: "https://esimcard.com/privacy-policy/",
      },
    },

    refundPolicy: {
      title:
        "eSIM Card Refund Policy: Clear Guidelines for Refunds & Eligibility",
      description:
        "eSIM Card refund policy, covering eligibility, technical issues, and device compatibility for a seamless eSIM experience. Request refunds with ease.",
      keywords:
        "eSIM, buy eSIM, regional eSIM, local eSIM, buy regional eSIM, buy local eSIM, purchase local eSIM, purchase regional eSIM, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, traveler, data plan, buy e-SIM, cheap data, connectivity",
      authors: [{ name: "eSimCard.com" }],
      openGraph: {
        title:
          "eSIM Card Refund Policy: Clear Guidelines for Refunds & Eligibility",
        description:
          "eSIM Card refund policy, covering eligibility, technical issues, and device compatibility for a seamless eSIM experience. Request refunds with ease.",
        url: "https://esimcard.com/refund-policy/",
        siteName: "eSim Card",
        images: "https://esimcard.com/images/logo-1x1-new.png",
        type: "website",
      },
      twitter: {
        card: "summary",
        site: "@esimcard",
        title:
          "eSIM Card Refund Policy: Clear Guidelines for Refunds & Eligibility",
        description:
          "eSIM Card refund policy, covering eligibility, technical issues, and device compatibility for a seamless eSIM experience. Request refunds with ease.",
        images: "https://esimcard.com/images/logo-1x1-new.png",
      },
      alternates: {
        canonical: "https://esimcard.com/refund-policy/",
      },
    },

    login: {
      title: "eSIM Card: Buy Best eSIM Plans for your International Travel",
      description:
        "Buy Local, Regional & Global eSIM for international Travel. Enjoy Fast & Reliable coverage at traveler-friendly prices with eSIM Card. Get your desired eSIM now",
      keywords:
        "eSIM, buy eSIM, regional eSIM, local eSIM, buy regional eSIM, buy local eSIM, purchase local eSIM, purchase regional eSIM, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, traveler, data plan, buy e-SIM, cheap data, connectivity",
      authors: [{ name: "eSimCard.com" }],
      openGraph: {
        title: "eSIM Card: Buy Best eSIM Plans for your International Travel",
        description:
          "Buy Local, Regional & Global eSIM for international Travel. Enjoy Fast & Reliable coverage at traveler-friendly prices with eSIMCard. Get your desired eSIM now",
        url: "https://esimcard.com/login/",
        siteName: "eSim Card",
        images: "https://esimcard.com/images/logo-1x1-new.png",
        type: "website",
      },
      twitter: {
        card: "summary",
        site: "@esimcard",
        title: "eSIM Card: Buy Best eSIM Plans for your International Travel",
        description:
          "Buy Local, Regional & Global eSIM for international Travel. Enjoy Fast & Reliable coverage at traveler-friendly prices with eSIMCard. Get your desired eSIM now",
        images: "https://esimcard.com/images/logo-1x1-new.png",
      },
      alternates: {
        canonical: "https://esimcard.com/login/",
      },
    },

    register: {
      title: "eSIM Card: Buy Best eSIM Plans for your International Travel",
      description:
        "Buy Local, Regional & Global eSIM for international Travel. Enjoy Fast & Reliable coverage at traveler-friendly prices with eSIM Card. Get your desired eSIM now",
      keywords:
        "eSIM, buy eSIM, regional eSIM, local eSIM, buy regional eSIM, buy local eSIM, purchase local eSIM, purchase regional eSIM, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, traveler, data plan, buy e-SIM, cheap data, connectivity",
      authors: [{ name: "eSimCard.com" }],
      openGraph: {
        title: "eSIM Card: Buy Best eSIM Plans for your International Travel",
        description:
          "Buy Local, Regional & Global eSIM for international Travel. Enjoy Fast & Reliable coverage at traveler-friendly prices with eSIMCard. Get your desired eSIM now",
        url: "https://esimcard.com/register/",
        siteName: "eSim Card",
        images: "https://esimcard.com/images/logo-1x1-new.png",
        type: "website",
      },
      twitter: {
        card: "summary",
        site: "@esimcard",
        title: "eSIM Card: Buy Best eSIM Plans for your International Travel",
        description:
          "Buy Local, Regional & Global eSIM for international Travel. Enjoy Fast & Reliable coverage at traveler-friendly prices with eSIMCard. Get your desired eSIM now",
        images: "https://esimcard.com/images/logo-1x1-new.png",
      },
      alternates: {
        canonical: "https://esimcard.com/register/",
      },
    },

    passwordReset: {
      title: "eSIM Card: Buy Best eSIM Plans for your International Travel",
      description:
        "Buy Local, Regional & Global eSIM for international Travel. Enjoy Fast & Reliable coverage at traveler-friendly prices with eSIM Card. Get your desired eSIM now",
      keywords:
        "eSIM, buy eSIM, regional eSIM, local eSIM, buy regional eSIM, buy local eSIM, purchase local eSIM, purchase regional eSIM, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, traveler, data plan, buy e-SIM, cheap data, connectivity",
      authors: [{ name: "eSimCard.com" }],
      openGraph: {
        title: "eSIM Card: Buy Best eSIM Plans for your International Travel",
        description:
          "Buy Local, Regional & Global eSIM for international Travel. Enjoy Fast & Reliable coverage at traveler-friendly prices with eSIMCard. Get your desired eSIM now",
        url: "https://esimcard.com/password/reset/",
        siteName: "eSim Card",
        images: "https://esimcard.com/images/logo-1x1-new.png",
        type: "website",
      },
      twitter: {
        card: "summary",
        site: "@esimcard",
        title: "eSIM Card: Buy Best eSIM Plans for your International Travel",
        description:
          "Buy Local, Regional & Global eSIM for international Travel. Enjoy Fast & Reliable coverage at traveler-friendly prices with eSIMCard. Get your desired eSIM now",
        images: "https://esimcard.com/images/logo-1x1-new.png",
      },
      alternates: {
        canonical: "https://esimcard.com/password/reset/",
      },
    },

    refill: {
      title: "eSIM Card - Refill Wallet",
      description: "Refill your eSIM Card Wallet with Card or Apple Pay",
      keywords:
        "eSIM, buy eSIM, regional eSIM, local eSIM, buy regional eSIM, buy local eSIM, purchase local eSIM, purchase regional eSIM, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, traveler, data plan, buy e-SIM, cheap data, connectivity, esimcard, refill, buy bundle, buy package",
      authors: [{ name: "eSimCard.com" }],
      openGraph: {
        title: "eSIM Card - Refill Wallet",
        description: "Refill your eSIM Card Wallet with Card or Apple Pay",
        url: "https://esimcard.com/refill/",
        siteName: "eSim Card",
        images: "https://esimcard.com/images/logo-1x1-new.png",
        type: "website",
      },
      twitter: {
        card: "summary",
        site: "@esimcard",
        title: "eSIM Card - Refill Wallet",
        description: "Refill your eSIM Card Wallet with Card or Apple Pay",
        images: "https://esimcard.com/images/logo-1x1-new.png",
      },
      alternates: {
        canonical: "https://esimcard.com/refill/",
      },
    },

    mySims: {
      title: "eSIM Card: Buy Best eSIM Plans for your International Travel",
      description:
        "Buy Local, Regional & Global eSIM for international Travel. Enjoy Fast & Reliable coverage at traveler-friendly prices with eSIM Card. Get your desired eSIM now",
      keywords:
        "eSIM, buy eSIM, regional eSIM, local eSIM, buy regional eSIM, buy local eSIM, purchase local eSIM, purchase regional eSIM, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, traveler, data plan, buy e-SIM, cheap data, connectivity",
      authors: [{ name: "eSimCard.com" }],
      openGraph: {
        title: "eSIM Card: Buy Best eSIM Plans for your International Travel",
        description:
          "Buy Local, Regional & Global eSIM for international Travel. Enjoy Fast & Reliable coverage at traveler-friendly prices with eSIMCard. Get your desired eSIM now",
        url: "https://esimcard.com/client/my-sims/",
        siteName: "eSim Card",
        images: "https://esimcard.com/images/logo-1x1-new.png",
        type: "website",
      },
      twitter: {
        card: "summary",
        site: "@esimcard",
        title: "eSIM Card: Buy Best eSIM Plans for your International Travel",
        description:
          "Buy Local, Regional & Global eSIM for international Travel. Enjoy Fast & Reliable coverage at traveler-friendly prices with eSIMCard. Get your desired eSIM now",
        images: "https://esimcard.com/images/logo-1x1-new.png",
      },
      alternates: {
        canonical: "https://esimcard.com/client/my-sims/",
      },
    },

    mySimDetail: {
      title: "eSIM Card: Buy Best eSIM Plans for your International Travel",
      description:
        "Buy Local, Regional & Global eSIM for international Travel. Enjoy Fast & Reliable coverage at traveler-friendly prices with eSIM Card. Get your desired eSIM now",
      keywords:
        "eSIM, buy eSIM, regional eSIM, local eSIM, buy regional eSIM, buy local eSIM, purchase local eSIM, purchase regional eSIM, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, traveler, data plan, buy e-SIM, cheap data, connectivity",
      authors: [{ name: "eSimCard.com" }],
      openGraph: {
        title: "eSIM Card: Buy Best eSIM Plans for your International Travel",
        description:
          "Buy Local, Regional & Global eSIM for international Travel. Enjoy Fast & Reliable coverage at traveler-friendly prices with eSIMCard. Get your desired eSIM now",
        url: "https://esimcard.com/client/my-sim/3f097524-9311-4f10-a466-fe3887fca9b2/",
        siteName: "eSim Card",
        images: "https://esimcard.com/images/logo-1x1-new.png",
        type: "website",
      },
      twitter: {
        card: "summary",
        site: "@esimcard",
        title: "eSIM Card: Buy Best eSIM Plans for your International Travel",
        description:
          "Buy Local, Regional & Global eSIM for international Travel. Enjoy Fast & Reliable coverage at traveler-friendly prices with eSIMCard. Get your desired eSIM now",
        images: "https://esimcard.com/images/logo-1x1-new.png",
      },
      alternates: {
        canonical:
          "https://esimcard.com/client/my-sim/3f097524-9311-4f10-a466-fe3887fca9b2/",
      },
    },

    regionalEsim: {
      title: "Regional eSIMs: Affordable Data for 200+ Countries",
      description:
        "Get regional eSIMs with local rates for 200+ destinations. Reliable, prepaid plans for seamless connectivity during international and local travels.",
      keywords:
        "eSIM, buy eSIM, regional eSIM, local eSIM, buy regional eSIM, buy local eSIM, purchase local eSIM, purchase regional eSIM, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, traveler, data plan, buy e-SIM, cheap data, connectivity, buy eSIM, regional eSIM, eSIM Plans, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, data plan, buy e-SIM, cheap eSIM data, connectivity",
      authors: [{ name: "eSimCard.com" }],
      openGraph: {
        title: "Regional eSIMs: Affordable Data for 200+ Countries",
        description:
          "Get regional eSIMs with local rates for 200+ destinations. Reliable, prepaid plans for seamless connectivity during international and local travels.",
        url: "https://esimcard.com/regional/",
        siteName: "eSim Card",
        images: "https://esimcard.com/images/logo-1x1-new.png",
        type: "website",
      },
      twitter: {
        card: "summary",
        site: "@esimcard",
        title: "Regional eSIMs: Affordable Data for 200+ Countries",
        description:
          "Get regional eSIMs with local rates for 200+ destinations. Reliable, prepaid plans for seamless connectivity during international and local travels.",
        images: "https://esimcard.com/images/logo-1x1-new.png",
      },
      alternates: {
        canonical: "https://esimcard.com/regional/",
      },
    },

    globalEsim: {
      title: "Get International eSIM for Traveler | Prepaid Data Plans",
      description:
        "Connect Internationally with our Global eSIM data packages. Ideal choice for travelers needing connectivity in multiple countries with no roaming charges.",
      keywords:
        "eSIM, buy eSIM, regional eSIM, local eSIM, buy regional eSIM, buy local eSIM, purchase local eSIM, purchase regional eSIM, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, traveler, data plan, buy e-SIM, cheap data, connectivity, buy eSIM, regional eSIM, eSIM Plans, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, data plan, buy e-SIM, cheap eSIM data, connectivity",
      authors: [{ name: "eSimCard.com" }],
      openGraph: {
        title: "Get International eSIM for Traveler | Prepaid Data Plans",
        description:
          "Connect Internationally with our Global eSIM data packages. Ideal choice for travelers needing connectivity in multiple countries with no roaming charges.",
        url: "https://esimcard.com/global/",
        siteName: "eSim Card",
        images: "https://esimcard.com/images/logo-1x1-new.png",
        type: "website",
      },
      twitter: {
        card: "summary",
        site: "@esimcard",
        title: "Get International eSIM for Traveler | Prepaid Data Plans",
        description:
          "Connect Internationally with our Global eSIM data packages. Ideal choice for travelers needing connectivity in multiple countries with no roaming charges.",
        images: "https://esimcard.com/images/logo-1x1-new.png",
      },
      alternates: {
        canonical: "https://esimcard.com/global/",
      },
    },

    dataVoiceSms: {
      title: "Get eSIMs with Data, Voice & Text | Best Plans at Cheap Price",
      description:
        "Explore our Local eSIM packages offering data, voice, and text for seamless communication. Ideal for travelers and instant connectivity without the hassle of roaming.",
      keywords:
        "eSIM, buy eSIM, regional eSIM, local eSIM, buy regional eSIM, buy local eSIM, purchase local eSIM, purchase regional eSIM, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, traveler, data plan, buy e-SIM, cheap data, connectivity, buy eSIM, regional eSIM, eSIM Plans, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, data plan, buy e-SIM, cheap eSIM data, connectivity",
      authors: [{ name: "eSimCard.com" }],
      openGraph: {
        title: "Get eSIMs with Data, Voice & Text | Best Plans at Cheap Price",
        description:
          "Explore our Local eSIM packages offering data, voice, and text for seamless communication. Ideal for travelers and instant connectivity without the hassle of roaming.",
        url: "https://esimcard.com/data-voice-sms/",
        siteName: "eSim Card",
        images: "https://esimcard.com/images/logo-1x1-new.png",
        type: "website",
      },
      twitter: {
        card: "summary",
        site: "@esimcard",
        title: "Get eSIMs with Data, Voice & Text | Best Plans at Cheap Price",
        description:
          "Explore our Local eSIM packages offering data, voice, and text for seamless communication. Ideal for travelers and instant connectivity without the hassle of roaming.",
        images: "https://esimcard.com/images/logo-1x1-new.png",
      },
      alternates: {
        canonical: "https://esimcard.com/data-voice-sms/",
      },
    },

    regionalDataVoiceSms: {
      title: "Regional eSIM for Traveler | Cheap Data with Unlimited Calls",
      description:
        "Stay connected effortlessly across regional borders with our Regional eSIMs. Perfect for business and travel, these eSIMs provide data, voice, and text services.",
      keywords:
        "eSIM, buy eSIM, regional eSIM, local eSIM, buy regional eSIM, buy local eSIM, purchase local eSIM, purchase regional eSIM, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, traveler, data plan, buy e-SIM, cheap data, connectivity, buy eSIM, regional eSIM, eSIM Plans, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, data plan, buy e-SIM, cheap eSIM data, connectivity",
      authors: [{ name: "eSimCard.com" }],
      openGraph: {
        title: "Regional eSIM for Traveler | Cheap Data with Unlimited Calls",
        description:
          "Stay connected effortlessly across regional borders with our Regional eSIMs. Perfect for business and travel, these eSIMs provide data, voice, and text services.",
        url: "https://esimcard.com/data-voice-sms/regional/",
        siteName: "eSim Card",
        images: "https://esimcard.com/images/logo-1x1-new.png",
        type: "website",
      },
      twitter: {
        card: "summary",
        site: "@esimcard",
        title: "Regional eSIM for Traveler | Cheap Data with Unlimited Calls",
        description:
          "Stay connected effortlessly across regional borders with our Regional eSIMs. Perfect for business and travel, these eSIMs provide data, voice, and text services.",
        images: "https://esimcard.com/images/logo-1x1-new.png",
      },
      alternates: {
        canonical: "https://esimcard.com/data-voice-sms/regional/",
      },
    },

    internationalEsim: {
      title:
        "Buy International eSIM for Traveler | Affordable Data with Unlimited Calls",
      description:
        "Connect Internationally with our Global eSIM packages, offering data, voice, and text. Perfect for travelers needing connectivity in multiple countries.",
      keywords:
        "eSIM, buy eSIM, regional eSIM, local eSIM, buy regional eSIM, buy local eSIM, purchase local eSIM, purchase regional eSIM, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, traveler, data plan, buy e-SIM, cheap data, connectivity, buy eSIM, regional eSIM, eSIM Plans, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, data plan, buy e-SIM, cheap eSIM data, connectivity",
      authors: [{ name: "eSimCard.com" }],
      openGraph: {
        title:
          "Buy International eSIM for Traveler | Affordable Data with Unlimited Calls",
        description:
          "Connect Internationally with our Global eSIM packages, offering data, voice, and text. Perfect for travelers needing connectivity in multiple countries.",
        url: "https://esimcard.com/international-esim/",
        siteName: "eSim Card",
        images: "https://esimcard.com/images/logo-1x1-new.png",
        type: "website",
      },
      twitter: {
        card: "summary",
        site: "@esimcard",
        title:
          "Buy International eSIM for Traveler | Affordable Data with Unlimited Calls",
        description:
          "Connect Internationally with our Global eSIM packages, offering data, voice, and text. Perfect for travelers needing connectivity in multiple countries.",
        images: "https://esimcard.com/images/logo-1x1-new.png",
      },
      alternates: {
        canonical: "https://esimcard.com/international-esim/",
      },
    },
    cart: {
      title: "eSIM Card - Cart",
      description:
        "A great workplace combines exceptional colleagues and hard problems",
      keywords:
        "eSIM, buy eSIM, regional eSIM, local eSIM, buy regional eSIM, buy local eSIM, purchase local eSIM, purchase regional eSIM, data eSIM, e-SIM, eSIM plan, eSIM store, eSIM marketplace, traveler, data plan, buy e-SIM, cheap data, connectivity, careers",
      authors: [{ name: "eSimCard.com" }],
      openGraph: {
        title: "eSIM Card - Cart",
        description:
          "A great workplace combines exceptional colleagues and hard problems",
        url: "https://esimcard.com/cart/",
        siteName: "eSim Card",
        images: "https://esimcard.com/images/logo-1x1-new.png",
        type: "website",
      },
      twitter: {
        card: "summary",
        site: "@esimcard",
        title: "eSIM Card - Cart",
        description:
          "A great workplace combines exceptional colleagues and hard problems",
        images: "https://esimcard.com/images/logo-1x1-new.png",
      },
      alternates: {
        canonical: "https://esimcard.com/cart/",
      },
    },
  },
  // fr: {
  //   home: {
  //     title:
  //       "eSIM Card : Achetez les meilleurs plans eSIM pour vos voyages internationaux",
  //     description:
  //       "Achetez des eSIM locaux, régionaux et mondiaux pour vos voyages internationaux. Profitez d'une couverture rapide et fiable à des prix adaptés aux voyageurs avec eSIM Card. Obtenez votre eSIM dès maintenant",
  //     keywords:
  //       "eSIM, acheter eSIM, eSIM régional, eSIM local, acheter eSIM régional, acheter eSIM local, données eSIM, plan eSIM, boutique eSIM, marché eSIM, voyage, forfait data, eSIM pas cher, connectivité",
  //     authors: [{ name: "eSimCard.com" }],
  //     openGraph: {
  //       title:
  //         "eSIM Card : Achetez les meilleurs plans eSIM pour vos voyages internationaux",
  //       description:
  //         "Achetez des eSIM locaux, régionaux et mondiaux pour vos voyages internationaux. Profitez d'une couverture rapide et fiable à des prix adaptés aux voyageurs avec eSIM Card. Obtenez votre eSIM dès maintenant",
  //       url: "https://esimcard.com/",
  //       siteName: "eSim Card",
  //       images: "https://esimcard.com/images/logo-1x1-new.png",
  //       type: "website",
  //     },
  //     twitter: {
  //       card: "summary",
  //       site: "@esimcard",
  //       title:
  //         "eSIM Card : Achetez les meilleurs plans eSIM pour vos voyages internationaux",
  //       description:
  //         "Achetez des eSIM locaux, régionaux et mondiaux pour vos voyages internationaux. Profitez d'une couverture rapide et fiable à des prix adaptés aux voyageurs avec eSIM Card. Obtenez votre eSIM dès maintenant",
  //       images: "https://esimcard.com/images/logo-1x1-new.png",
  //     },
  //     alternates: {
  //       canonical: "https://esimcard.com/",
  //     },
  //   },
  // },
};
