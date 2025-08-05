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
  return localizedSeo.terms;
}

type ContentType =
  | { type: "text" | "bold" | "bolder"; text: string }
  | { type: "link"; linkText: string; linkTo: string; text: string };

interface TermsType {
  title: string;
  content: ContentType[];
  subTitles?: { title: string; content: ContentType[] }[];
}

function Page() {
  const termsData: TermsType[] = [
    {
      title: "1. Validity of General Terms and Conditions",
      content: [
        {
          type: "text",
          text: "These Terms and Conditions are applicable to all services provided by our company in relation to the reselling of prepaid eSIMs. These terms are binding and enforceable upon the use of our services. We may accept variations to these terms only if explicitly agreed upon in writing.",
        },
      ],
      subTitles: [
        {
          title: "1.2. Description of Services",
          content: [
            {
              type: "text",
              text: "Our services include providing and managing eSIMs (electronic SIM cards) for mobile devices, enabling users to access cellular networks without needing a physical SIM card. Unlimited bundles offer 1GB of unthrottled 5G data every 24 hours from the first use. After the 1GB is used, unlimited data is available at reduced speeds for the rest of the 24 hours.",
            },
          ],
        },

        {
          title: "1.2.1. eSIM Reselling",
          content: [
            {
              type: "text",
              text: "We offer prepaid eSIMs for purchase, which can be used in various regions and countries. These eSIMs are designed to provide customers with a convenient and flexible way to access mobile data services.",
            },
          ],
        },

        {
          title: "1.2.2. Registration for Using Our Services",
          content: [
            {
              type: "text",
              text: "To use our services, customers must register and provide necessary personal information such as name, address, and email. This registration process is essential for activating and managing the eSIM services.",
            },
          ],
        },

        {
          title: "1.2.3. Our Engagements",
          content: [
            {
              type: "text",
              text: "We strive to provide high-quality service to our customers. However, we do not guarantee uninterrupted or error-free service. Our commitment is to use reasonable efforts to ensure the reliability and performance of our services.",
            },
          ],
        },

        {
          title: "1.2.4. Customer Engagements",
          content: [
            {
              type: "text",
              text: "Customers are expected to use our services responsibly. Actions that are abusive, illegal, or fraudulent or that impair the network are strictly prohibited. Violating these terms may result in suspension of services, during which the customer remains responsible for any charges incurred.",
            },
          ],
        },

        {
          title: "1.2.5. Device Compatibility",
          content: [
            {
              type: "text",
              text: "Customers are responsible for ensuring their devices are compatible with eSIM technology. Compatibility may vary based on the device's carrier and country of origin. The customer is responsible for verifying their device's compatibility from the provided list at the time of purchase.",
            },
          ],
        },
      ],
    },

    {
      title: "2. Registration and Activation",
      content: [],
      subTitles: [
        {
          title: "2.1. Registration Requirements",
          content: [
            {
              type: "text",
              text: "Customers must complete a registration process to access and use our eSIM services. This process is straightforward and designed to ensure a smooth and secure experience. The following are the critical requirements for registration:",
            },
            {
              type: "bold",
              text: "Personal Information: Customers must provide accurate and current personal information, including their first name, last name, billing address, and a valid email address. This information is crucial for account creation and communication purposes.",
            },

            {
              type: "bold",
              text: "Account Creation: Customers will create an account on our platform upon providing the necessary information. This account will manage purchases, track eSIM usage, and access support.",
            },

            {
              type: "bold",
              text: "Acceptance of Terms: Customers must review and accept our General Terms and Conditions during registration. This acceptance is a binding agreement that the customer agrees to adhere to our policies and procedures.",
            },

            {
              type: "bold",
              text: "Device Compatibility Check: Customers are responsible for ensuring their device is compatible with eSIM technology. A list of compatible devices is available on our website. Proceeding with the registration, the customer acknowledges that their device is compatible.",
            },
          ],
        },

        {
          title: "2.2. Purchase and Activation Process",
          content: [
            {
              type: "text",
              text: "After successful registration, customers can proceed to purchase and activate their eSIM:",
            },

            {
              type: "bold",
              text: "Selection of eSIM: Customers can browse various eSIM options on our platform, each tailored to different needs and destinations.",
            },

            {
              type: "bold",
              text: "Payment Process: Customers can proceed to payment once the eSIM is selected. We accept various payment methods, including Credit/Debit Card,, Google Pay, Apple Pay, and Alipay. All transactions are securely processed; the payment currency is in US Dollars ($).",
            },

            {
              type: "bold",
              text: "eSIM Delivery: After the purchase, the eSIM will be delivered electronically. Customers will receive an email with detailed instructions on installing and activating the eSIM. The eSIM can also be accessed under the 'My eSIMs' tab on the customer's account.",
            },

            {
              type: "bold",
              text: "Activation: Activation of the eSIM is the customer's responsibility. The process typically involves scanning a QR code and following simple steps. Once activated, the eSIM will be ready to use according to the chosen plan.",
            },

            {
              type: "bold",
              text: "Support and Assistance: In case of any difficulties during the registration or activation process, customers can contact our support team for assistance. Our team is available to ensure a hassle-free experience.",
            },
          ],
        },
      ],
    },

    {
      title: "3. Payment and Financial Terms",
      content: [],
      subTitles: [
        {
          title: "3.1. Charges and Payment",
          content: [
            {
              type: "bold",
              text: "Payment Conditions: Services can be purchased using various payment methods, including Credit/Debit Cards, PayPal, Google Pay, Apple Pay, and Alipay.",
            },

            {
              type: "bold",
              text: "Currency: All transactions are processed in US Dollars (USD).",
            },

            {
              type: "bold",
              text: "Security: Transactions are secured and processed through established payment providers like Stripe.",
            },

            {
              type: "bold",
              text: "Inclusivity of Charges: Prices include all applicable taxes and fees unless specified otherwise.",
            },
          ],
        },

        {
          title: "3.2. Refunds and Cancellations",
          content: [
            {
              type: "bold",
              text: "General Policy: eSIMs are one-time purchases and are non-refundable. Customers are not entitled to a refund if their devices are not unlocked or if they are not eSIM-compatible.",
            },

            {
              type: "bold",
              text: "Unlimited Bundles: Unlimited bundles are throttled and they drop down the speeds after using a specific amount of data at maximum speeds.",
            },

            {
              type: "bold",
              text: "Monthly Subscriptions: UltimateMobile sims have monthly subscriptions and they need to be renewed in order to keep using the number and not lose it.",
            },

            {
              type: "bold",
              text: "Fraudulent Usage: eSIM Card holds the right to cancel the purchase if it suspects any fraud or spam usage.",
            },

            {
              type: "bold",
              text: "Virtual Numbers: Virtual Numbers will not work on WhatsApp and other similar services, and the customer is not entitled to a refund if they do not get the OTP codes for such services.",
            },
          ],
        },
      ],
    },

    {
      title: "4. Legal and Compliance",
      content: [],
      subTitles: [
        {
          title: "4.1. Governing Law and Legal Compliance",
          content: [
            {
              type: "bold",
              text: "Jurisdiction: The services provided are governed by and construed in accordance with the laws of the jurisdiction where the service provider is based. Any legal actions or proceedings related to or arising out of these terms and conditions shall be exclusively subject to the jurisdiction of the courts in this region.",
            },
          ],
        },

        {
          title: "4.2. Liability and Warranty",
          content: [
            {
              type: "bold",
              text: "Service Availability: While the service provider endeavors to ensure the service is available and uninterrupted, there is no guarantee of uninterrupted service. The provider is not liable for any interruptions or lack of availability.",
            },

            {
              type: "bold",
              text: "Warranty Disclaimer: The services are provided 'as is' without any warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.",
            },

            {
              type: "bold",
              text: "Monthly Subscriptions: UltimateMobile sims have monthly subscriptions and they need to be renewed in order to keep using the number and not lose it.",
            },

            {
              type: "bold",
              text: "Limitation of Liability: The service provider shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or other intangibles.",
            },
          ],
        },
      ],
    },

    {
      title: "5. Contact Information",
      content: [
        {
          type: "text",
          text: "For more information or assistance with our services, you may contact us through the following channels:",
        },

        {
          type: "bold",
          text: "Email Support: support@esimcard.com",
        },

        {
          type: "bold",
          text: "Live Chat Assistance: Available on our website's bottom right corner.",
        },

        {
          type: "bold",
          text: "WhatsApp Support: +1 (407) 212- 6950, available 24/7",
        },

        {
          type: "bold",
          text: "Business Inquiries: sales@esimcard.com",
        },

        {
          type: "bold",
          text: "Postal Correspondence: eSIM Card, 250 S Ronald Reagan Blvd, Str 106, Orlando, FL",
        },
      ],

      subTitles: [
        {
          title: "5.2. Liability and Warranty",
          content: [
            {
              type: "bold",
              text: "Service Availability: While the service provider endeavors to ensure the service is available and uninterrupted, there is no guarantee of uninterrupted service. The provider is not liable for any interruptions or lack of availability.",
            },

            {
              type: "bold",
              text: "Warranty Disclaimer: The services are provided 'as is' without any warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.",
            },
            {
              type: "bold",
              text: "Limitation of Liability: The service provider shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or other intangibles",
            },
          ],
        },

        {
          title: "5.3. Intellectual Property Rights",
          content: [
            {
              type: "bold",
              text: "Ownership: All intellectual property rights in the services, including any software, documentation, and content provided, are the property of the service provider or its licensors.",
            },

            {
              type: "bold",
              text: "Use of Service: Users are granted a limited, non-exclusive, non-transferable license to access and use the services for personal, non-commercial purposes as outlined in these terms.",
            },
          ],
        },

        {
          title: "5.4. Privacy Policy",
          content: [
            {
              type: "bold",
              text: "Data Protection: The service provider is committed to protecting the privacy and security of its users' data. Personal information collected is used in accordance with the company's Privacy Policy.",
            },

            {
              type: "bold",
              text: "Consent to Use Data: By using the service, users consent to the collection, use, and sharing of their data as outlined in the Privacy Policy.",
            },
          ],
        },

        {
          title: "5.5. Assignment",
          content: [
            {
              type: "bold",
              text: "Non-Transferable: Users cannot transfer or assign their rights or obligations under these terms without prior written consent from the service provider.",
            },

            {
              type: "bold",
              text: "Service Provider's Rights: The service provider may assign its rights and obligations to any affiliate or in connection with a merger, acquisition, corporate reorganization, or sale of all or substantially all of its assets.",
            },
          ],
        },
      ],
    },

    {
      title: "6. Additional Provisions",
      content: [],

      subTitles: [
        {
          title: "6.1. Delivery of Services",
          content: [
            {
              type: "bold",
              text: "Service Activation: Upon successful purchase, the service (e.g., eSIM) will be activated immediately or at a scheduled time as per the customer's choice. Customers will receive detailed instructions via email for installing and activating their service.",
            },

            {
              type: "bold",
              text: "Accessibility: The service will be accessible through the customer's account on our website or through our mobile application. Customers can view and manage their service details under the designated section (e.g., 'My eSIMs' tab).",
            },

            {
              type: "bold",
              text: "Compatibility: Customers are responsible for ensuring their device is compatible with the eSIM technology. A list of compatible devices is available on our website. By proceeding with the purchase, customers acknowledge and accept responsibility for compatibility checks.",
            },

            {
              type: "bold",
              text: "Service Limitations: While we strive to offer uninterrupted service, we cannot guarantee that the service will always be available, timely, secure, or error-free. The quality of the service may be affected by various factors including but not limited to the customer's location, device, and network congestion.",
            },
          ],
        },

        {
          title: "6.2. Miscellaneous Provisions",
          content: [
            {
              type: "bold",
              text: "Modifications to Terms: We reserve the right to modify these terms and conditions at any time. Changes will be effective immediately upon posting on our website. Continued use of our services after such changes will constitute acceptance of the new terms.",
            },

            {
              type: "bold",
              text: "Governing Law: These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which our company is registered, without giving effect to Dispute Resolution: Any disputes arising out of or related to these terms will be resolved through arbitration, in accordance with the rules of the jurisdiction's arbitration association.",
            },
            {
              type: "bold",
              text: "Intellectual Property: All intellectual property rights related to the service, including trademarks, service marks, patents, copyrights, and trade secrets, are owned by us or our licensors. Use of our service does not grant customers any rights to our intellectual property.",
            },
            {
              type: "bold",
              text: "User Contributions: Any content or data uploaded by users while using our service remains the user's property. However, by uploading content, users grant us a worldwide, royalty-free license to use, reproduce, modify, and display this content in connection with the service.",
            },
            {
              type: "bold",
              text: "Privacy: We are committed to protecting the privacy of our users. Our Privacy Policy, available on our website, outlines our practices regarding collecting, using, and disclosing personal information.",
            },
            {
              type: "bold",
              text: "Assignment: Customers may not assign their rights or obligations under these terms without our prior written consent.",
            },
            {
              type: "bold",
              text: "Entire Agreement: These terms constitute the entire agreement between the customer and us concerning the service and supersede all prior or contemporaneous communications and proposals, whether electronic, oral, or written, between the customer and us.",
            },
            {
              type: "bold",
              text: "Severability: If any part of these terms is found to be invalid or unenforceable, that part will be modified to reflect the parties' intention or eliminated to the minimum extent necessary so that the remainder of these terms will continue in full force and effect.",
            },

            {
              type: "bold",
              text: "No Waiver: Our failure to enforce any right or provision of these terms will not be deemed a waiver of such right or provision.",
            },
          ],
        },
      ],
    },

    {
      title: "For more information about the terms of Service",
      content: [
        {
          type: "bold",
          text: "Email Support: For any inquiries or support needs, email us at support@esimcard.com. Our team is committed to providing prompt and helpful responses.",
        },

        {
          type: "bold",
          text: "Live Chat Assistance: If you prefer real-time assistance, click on the chat icon in our website's bottom right corner. Our chat support is readily available to address your queries instantly.",
        },

        {
          type: "bold",
          text: "Telephone Support: For those who wish to speak directly with our customer service representatives, call us at +1(443) 746 2273. Please note that our phone lines are operational from 9.00 to 17.00 Central European Time.",
        },

        {
          type: "bold",
          text: "Business Inquiries: For all business-related questions or proposals, please direct your emails to sales@esimcard.com. We look forward to exploring potential collaborations and business opportunities.",
        },

        {
          type: "bold",
          text: "Postal Correspondence: If you need to send us any physical documents or correspond via mail, our postal address is:",
        },

        {
          type: "bolder",
          text: "``` eSIM Card 250 S Ronald Reagan Blvd Str 106 Orlando, FL ```",
        },

        {
          type: "link",
          text: "Our team at eSIM Card is dedicated to ensuring that your experience with our services is seamless and satisfactory. Whether it's a simple query or a detailed request, we're here to provide the support you need.",
          linkText: "eSIM Card",
          linkTo: "/",
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
        title="Terms of Service"
        showDownloadAndRating={false}
        className="py-[3rem] sm:py-[4.5rem]"
      />

      <section className="container mt-16">
        <Card className="flex flex-col gap-[28px] rounded-[15px] border-0 px-[29px] py-[34px] shadow-myCard">
          {termsData.map((item, index) => (
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
