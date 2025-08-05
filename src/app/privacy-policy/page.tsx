import FooterLink from "@/components/my-ui/links/FooterLink";
import PagesHero from "@/components/my-ui/heros/PagesHero";
import { Card } from "@/components/ui/card";
import { seoData } from "@/lib/seoConfig";
import { Metadata } from "next";
import React from "react";
import { PageParams } from "../page";

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const localizedSeo = seoData[params.locale] || seoData["en"];
  return localizedSeo.privacyPolicy;
}

type ContentType =
  | { type: "text" | "bold" | "bolder"; text: string }
  | { type: "link"; linkText: string; linkTo: string; text: string };

interface PrivacyPolicyType {
  title: string;
  content: ContentType[];
  subTitles?: { title: string; content: ContentType[] }[];
}

function Page() {
  const privacyPolicyData: PrivacyPolicyType[] = [
    {
      title: "1. Introduction and General Terms",
      content: [
        {
          type: "text",
          text: "Welcome to eSIMcard.com. We understand the importance of your privacy and are committed to protecting your personal information. This Privacy Policy serves as our promise to handle your data with care, transparency, and respect.",
        },
        {
          type: "text",
          text: "At eSIMcard.com, we provide innovative digital SIM card solutions to keep you connected globally without the hassle of physical SIM cards. Our commitment extends beyond offering exceptional services; we are equally dedicated to safeguarding your personal information.",
        },
        {
          type: "text",
          text: "This Privacy Policy outlines how we collect, use, store, and protect the personal information you share while using our website and services. It applies to all data collected through your interactions with our website, customer service, and our products and services.",
        },
        {
          type: "text",
          text: "We encourage you to read this policy carefully to understand our practices regarding your data. By accessing or using our services, you acknowledge that you have read, understood, and agreed to the terms of this Privacy Policy. If you do not agree with our practices, please do not use our website or services.",
        },
        {
          type: "text",
          text: "Please note that this policy may be updated occasionally to reflect changes in our practices or legal requirements. We will notify you of any significant changes and always have the most current version of the Privacy Policy on our website.",
        },
        {
          type: "text",
          text: "Your trust is important to us, and we are committed to ensuring the privacy and security of your personal information. If you have any questions or concerns about our Privacy Policy or practices, please contact us anytime.",
        },
      ],
    },
    {
      title: "2. What Information Do We Collect?",
      content: [
        {
          type: "text",
          text: "At eSIMcard.com, we maintain our visitors' and customers' trust and confidence. In this section, we want to be transparent about the types of information we collect when you interact with our website and services. We aim to collect only the information that helps us provide you with a high-quality experience while respecting your privacy.",
        },
      ],
      subTitles: [
        {
          title: "Personally Identifiable Information (PII):",
          content: [
            {
              type: "bold",
              text: "Account Information: When you create an account on eSIMcard.com, we collect basic information such as your name, email address, and contact number. This information is essential for setting up your account and for us to communicate with you.",
            },
            {
              type: "bold",
              text: "Purchase Details: If you purchase an eSIM or any other service from us, we collect transaction-related information, which includes your payment details, billing address, and the services you have purchased.",
            },
            {
              type: "bold",
              text: "Communication Records: If you contact our customer support, we may record that communication, including any additional personal information you provide during the conversation, to help resolve any issues or queries.",
            },
          ],
        },
        {
          title: "Sensitive Personal Data:",
          content: [
            {
              type: "text",
              text: "We understand the importance of extra sensitivity when it comes to personal data. We do not intentionally collect sensitive personal data such as your racial or ethnic origin, political opinions, religious beliefs, health information, or sexual orientation. If such information is required for any reason, it will be with your explicit consent and used only for the purpose stated at the time of collection.",
            },
          ],
        },
        {
          title: "Non-Personally-Identifiable Information:",
          content: [
            {
              type: "bold",
              text: "Usage Data: This includes information on how you use our website, such as the pages visited, time spent on pages, and the links clicked. This data helps us understand user behavior and improve our website's functionality and content.",
            },
            {
              type: "bold",
              text: "Technical Information: We collect technical information like your IP address, browser type, and operating system. This information helps us ensure our website's compatibility with your devices and provides a better user experience.",
            },
          ],
        },

        {
          title: "Cookies, Pixels, and Local Storage:",
          content: [
            {
              type: "bold",
              text: "Cookies: Small data files placed on your device. Cookies help us remember your preferences, understand how you interact with our website, and improve your user experience.",
            },
            {
              type: "bold",
              text: "Pixels: These are tiny graphics used to track the effectiveness of our advertising campaigns and understand user interactions with our website.",
            },
            {
              type: "bold",
              text: "Local Storage: We may use local storage technologies to store information locally on your device for better performance and user experience.",
            },

            {
              type: "text",
              text: "We are committed to using this information responsibly and ensuring its security. We collect and use this data to provide, maintain, and improve our services, process transactions, communicate with you, and enhance your overall experience with eSIMcard.com. Your privacy is important to us, and we take all necessary steps to protect the information you share with us.",
            },
          ],
        },
      ],
    },
    {
      title: "3. Cookies We Use",
      content: [
        {
          type: "text",
          text: "At eSIMcard.com, we use cookies to enhance your experience on our website. Cookies are small text files stored on your device when you visit a website. They help us understand how you use our site, remember your preferences, and provide a personalized experience. Here’s a simple breakdown of the types of cookies we use:",
        },
        {
          type: "bold",
          text: "Essential Cookies: These are necessary for the website to function correctly. They allow you to navigate our site and use our features, like accessing secure areas. Services you’ve asked for, like shopping baskets or e-billing, cannot be provided without these cookies.",
        },
        {
          type: "bold",
          text: "Performance Cookies: These cookies collect information about how you use our website, like which pages you visit most often and if you get error messages from web pages. These cookies don’t collect information that identifies you. All information these cookies collect is aggregated and, therefore, anonymous. It is only used to improve how our website works.",
        },
        {
          type: "bold",
          text: "Functionality Cookies: These recognize you when you return to our website. They enable us to personalize our content for you, greet you by name, and remember your preferences (for example, your choice of language or region).",
        },
        {
          type: "bold",
          text: "Advertising Cookies: These cookies record your visit to our website, the pages you have visited, and the links you have followed. We will use this information to make our website and its advertising more relevant to your interests. We may also share this information with third parties for this purpose.",
        },
        {
          type: "bold",
          text: "Analytics Cookies: These cookies collect information about visitors using our site. We use the information to compile reports and to help us improve the site. The cookies collect information in an anonymous form, including the number of visitors to the site, where visitors have come to the site from, and the pages they visited.",
        },
        {
          type: "bold",
          text: "How to Manage Cookies: You have the option to accept or decline cookies. Most web browsers automatically accept cookies, but you can modify your browser settings to decline cookies. However, this may prevent you from taking full advantage of the website.",
        },
        {
          type: "bold",
          text: "Remember: Cookies are meant to improve your user experience. They are not used to access personal information on your device or compromise privacy. At eSIMcard.com, we are committed to using cookies responsibly and transparently.",
        },
      ],
    },
    {
      title: "4. What Do We Do With The Information That We Collect?",
      content: [
        {
          type: "text",
          text: "At eSIMcard.com, we take your privacy seriously and use your personal information responsibly. Here’s a straightforward explanation of what we do with the information we collect from you to Improve Our Services. We use your information to improve our services. This includes fixing problems, updating our website, and improving user experience.",
        },

        {
          type: "bold",
          text: "Account Management: We need your details to manage your account. This means we use your information to communicate about your account and help you when you need it. Promotions and Customer Service: If you join any promotions or contests, we use your information to manage these activities. We also use your information to answer your questions and help when you contact us.",
        },
        {
          type: "bold",
          text: "Updates and Alerts: We’ll send you important updates about our services, like technical notices, security alerts, and support messages. These are essential to keep you informed and ensure our services run smoothly. Marketing (Only With Your Permission): With your consent, we might send you emails about new products, special offers, or other information you might find interesting. Remember, you can always choose not to receive these emails.",
        },
        {
          type: "bold",
          text: "Processing Payments: When you make a purchase, we use your information to process the payment securely. Legal and Safety Reasons: Sometimes, we might need to use your information to comply with laws, respond to legal requests, or protect your rights, our rights, and the safety of others.",
        },
        {
          type: "bold",
          text: "Sharing With Trusted Partners: We might share your information with companies that help us provide our services. These partners are carefully chosen and are only allowed to use your information for the services they provide to us.",
        },
        {
          type: "bold",
          text: "No Selling of Your Data: We do not sell your personal information to anyone.",
        },
        {
          type: "bold",
          text: "Retention of Information: We keep your information only as long as necessary for the purposes we collected it for, including for legal, accounting, or reporting requirements.",
        },
        {
          type: "bold",
          text: "Your Choices and Rights: You can access, correct, or delete your personal information. You can also opt out of marketing messages and ask us not to process your personal information for specific purposes.",
        },
      ],
    },
    {
      title: "5. Disclosure",
      content: [
        {
          type: "text",
          text: "At eSIMcard.com, we believe in being transparent about using your information. Here's what you need to know:",
        },
        {
          type: "bold",
          text: "Sharing with Service Providers: We work with other companies who help us run our business. For example, we might share your information with payment processors or customer service providers. We only share what they need to do their job, and they're not allowed to use it for anything else.",
        },
        {
          type: "bold",
          text: "Legal Requirements: Sometimes, we might have to share your information if the law says we must or if we need to protect our rights or someone's safety.",
        },
        {
          type: "bold",
          text: "Business Transfers: If our business is sold or merged with another company, your information might be transferred to the new owners. We'll let you know if this happens.",
        },
      ],
    },
    {
      title: "6. Children’s Policy",
      content: [
        {
          type: "text",
          text: "Our website and services are not for kids under 13. Here's our approach:",
        },
        {
          type: "bold",
          text: "Not Collecting Kids' Data: We don't knowingly gather information from children under 13. If we find out we have, we'll delete it.",
        },
        {
          type: "bold",
          text: "Parental Control: If you're a parent and believe we might have information from your child, please contact us. We'll work with you to address the issue.",
        },
      ],
    },
    {
      title: "7. International Usage",
      content: [
        {
          type: "text",
          text: "Our services are available worldwide, and here's what that means for your information:",
        },
        {
          type: "bold",
          text: "Global Operations: We might process and store your information in different countries, not just where you live. We do this to make our service better and faster.",
        },
        {
          type: "bold",
          text: "Safety Measures: No matter where your information goes, we use the same protections everywhere. But remember, not all countries have the same data protection laws.",
        },
        {
          type: "bold",
          text: "Your Consent: By using our services, you're okay with us moving your information across borders in this way.",
        },
      ],
    },
    {
      title: "8. How Does A User Change Or Update Information?",
      content: [
        {
          type: "text",
          text: "At eSIMcard.com, we understand that your personal information may change over time, and we are committed to helping you keep it up-to-date. Here’s a straightforward guide on how you can change or update your information:",
        },
        {
          type: "bold",
          text: "Accessing Your Account: To review or modify your personal information, simply log in to your account on our website. Once logged in, you will have access to your profile where you can update details such as your name, email address, phone number, and other relevant information.",
        },
        {
          type: "bold",
          text: "Contacting Customer Support: If you encounter any issues while updating your information or if you prefer assistance, our customer support team is here to help. You can reach out to us via email at [support email address], and we will guide you through the process. Please include your name and the specific changes you wish to make in your request.",
        },
        {
          type: "bold",
          text: "Security Verification: For your security, we may need to verify your identity before making certain changes. This step ensures that your information is protected and only modified by you or someone authorized by you.",
        },
        {
          type: "bold",
          text: "Deleting Your Information: If at any point you decide to stop using our services and wish to delete your account, you can do so through your account settings. Alternatively, you can contact our customer support for assistance. Please note that some information might be retained for legal or record-keeping purposes.",
        },
        {
          type: "bold",
          text: "Updates to Personal Preferences: You can also change your preferences for how we contact you or manage your consent for marketing communications through your account settings.",
        },
        {
          type: "bold",
          text: "Notification of Changes: If there are any changes to our privacy practices or if we need to use your personal information in a manner different from that stated at the time of collection, we will notify you via email and provide you with the opportunity to opt out of these new uses. We are committed to ensuring that your experience with eSIMcard.com is enjoyable but also secure and respectful of your privacy. If you have any questions or concerns about how to change or update your information, please do not hesitate to contact us.",
        },
      ],
    },
    {
      title: "9. Security and Encryption",
      content: [
        {
          type: "text",
          text: "At eSIMcard.com, we understand the importance of safeguarding your personal information and are committed to protecting it with robust security measures. Our approach to security and encryption is designed to ensure that your data remains private and secure from unauthorized access.",
        },
      ],
      subTitles: [
        {
          title: "Data Protection Measures:",
          content: [
            {
              type: "bold",
              text: "Secure Data Transmission: All data transmitted to and from our website is encrypted using Secure Socket Layer (SSL) technology. This means that any information you send us is protected by a secure, encrypted connection, safeguarding it against interception.",
            },
            {
              type: "bold",
              text: "Regular Security Updates: We regularly update our security practices and infrastructure to address evolving threats and vulnerabilities. This includes implementing patches and updates to our systems and software.",
            },
            {
              type: "bold",
              text: "Secure Storage: Your personal data is stored on secure servers that are protected by advanced firewalls and other cutting-edge security technologies. We take steps to ensure that our servers are secure and that they are located in facilities with strict access controls.",
            },
          ],
        },
        {
          title: "User Responsibility:",
          content: [
            {
              type: "bold",
              text: "Password Protection: We encourage you to use strong, unique passwords for your account and to keep your login credentials confidential. The security of your account also depends on you maintaining the confidentiality of your password.",
            },
            {
              type: "bold",
              text: "Phishing Awareness: Be aware of phishing attempts. We will never ask for your sensitive information via email. If you receive any suspicious emails claiming to be from eSIMcard.com, please report them to us immediately.",
            },
            {
              type: "bold",
              text: "Data Encryption: Encryption at Rest and Transit: We use encryption for data at rest (data stored on our servers) and data in transit (data sent over the internet). This means your personal information is always encrypted whether it's being stored or sent. Secure Payment Processing: For financial transactions, we use encrypted payment processing systems to ensure that your credit card and payment details are always secure.",
            },
          ],
        },

        {
          title: "Incident Response",
          content: [
            {
              type: "bold",
              text: "Monitoring and Detection: We continuously monitor our systems for unusual activity and have procedures in place to detect and respond to potential security incidents.",
            },
            {
              type: "bold",
              text: "Rapid Response: In the unlikely event of a data breach, we have an incident response plan to address and mitigate any potential impact on your data and privacy quickly.",
            },
          ],
        },

        {
          title: "Continuous Improvement:",
          content: [
            {
              type: "bold",
              text: "Regular Reviews and Audits: Our security policies and procedures are regularly reviewed and audited to ensure they meet high standards of data protection.",
            },
            {
              type: "bold",
              text: "Feedback and Updates: We welcome feedback on our security practices and are committed to continuously improving our approach to data security. Your trust is important to us, and we are dedicated to ensuring the security and confidentiality of your personal information. If you have any questions about our security practices, please feel free to contact us at  ",
            },
          ],
        },
      ],
    },
    {
      title: "10. Changes to This Policy",
      content: [
        {
          type: "text",
          text: "At eSIMcard.com, we understand that privacy is an ongoing responsibility. Therefore, we will occasionally update this Privacy Policy to reflect company and customer feedback, service changes, and current privacy and security best practices. Please periodically review this page for the latest information on our privacy practices. When we make significant changes to this policy, we will notify you through various channels this may include sending a notification via email (if you have provided us with your email address) or posting a notice prominently on our website. Please note that continued use of our service after any change means that you agree with and consent to be bound by the new Privacy Policy. If you do not agree to the new changes in our Privacy Policy, you should stop using our services and contact us to inquire about your options. We will also keep prior versions of this Privacy Policy in an archive for your review upon request. If you have any questions or concerns about our Privacy Policy or its implementation, you may Contact us",
        },
      ],
    },
  ];

  function renderContentItem(item: ContentType): JSX.Element {
    if (item.type === "text") {
      return <>{item.text}</>;
    }

    if (item.type === "bold") {
      const parts = item.text.split(":");
      return (
        <>
          {parts.map((part, index) => (
            <span key={index} className={index === 0 ? "font-semibold" : ""}>
              {index === 0 ? `${part}:` : part}
            </span>
          ))}
        </>
      );
    }

    if (item.type === "bolder") {
      return <span className="font-semibold">{item.text}</span>;
    }

    if (item.type === "link") {
      const [before, after] = item.text.split(item.linkText);
      return (
        <>
          {before}
          <FooterLink
            href={"https://esimcard.com/"}
            className="inline text-primary"
          >
            {item.linkText}
          </FooterLink>
          {after}
        </>
      );
    }

    return <></>;
  }
  return (
    <>
      <PagesHero
        title="Privacy Policy"
        showDownloadAndRating={false}
        className="py-[3rem] sm:py-[4.5rem]"
      />

      <section className="container mt-16">
        <Card className="flex flex-col gap-[28px] rounded-[15px] border-0 px-[29px] py-[34px] shadow-myCard">
          {privacyPolicyData.map((item, index) => (
            <div className="flex flex-col gap-[28px]" key={`main ${index}`}>
              <h2 className="font-montserrat text-h2-base font-600 md:text-h2-md xl:text-h2-xl">
                {item.title}
              </h2>
              {item.content.map((item, index) => (
                <p
                  key={`main-content ${index}`}
                  className="font-poppins text-base"
                >
                  {renderContentItem(item)}
                </p>
              ))}

              {item.subTitles &&
                item.subTitles.map((item, subIndex) => (
                  <React.Fragment key={`sub-title ${subIndex}`}>
                    <React.Fragment>
                      <h3
                        key={index}
                        className="font-montserrat text-body-md font-600 md:text-body-lg xl:text-h2-md"
                      >
                        {item.title}
                      </h3>
                    </React.Fragment>

                    <React.Fragment>
                      {item.content.map((contentItem, contentIndex) => (
                        <p
                          key={`subtitle-${subIndex}-content-${contentIndex}`}
                          className="font-poppins text-base"
                        >
                          {renderContentItem(contentItem)}
                        </p>
                      ))}
                    </React.Fragment>
                  </React.Fragment>
                ))}
            </div>
          ))}
        </Card>
      </section>
    </>
  );
}

export default Page;
