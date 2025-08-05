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
  return localizedSeo.refundPolicy;
}

type ContentType =
  | { type: "text" | "bold" | "bolder"; text: string }
  | { type: "link"; linkText: string; linkTo: string; text: string };

interface RefundPolicyType {
  title: string;
  content: ContentType[];
  subTitles?: { title: string; content: ContentType[] }[];
}

function Page() {
  const RefundPolicyData: RefundPolicyType[] = [
    {
      title: "Refund Eligibility and Conditions",
      content: [
        {
          type: "bold",
          text: "Coverage Issues: If the eSIM cannot be installed due to coverage problems, you may request a refund or change.",
        },
        {
          type: "bold",
          text: "Technical Issues: In cases where technical problems originate from eSIM Card and cannot be resolved promptly, refunds are possible only if no data has been consumed.",
        },
        {
          type: "bold",
          text: "Data Package Validity:  No refunds are available for any remaining data after the validity period of a data package expires.",
        },
        {
          type: "bold",
          text: "Accidental Purchases: No refunds are offered once the eSIM is installed and used.",
        },
        {
          type: "bold",
          text: "Incorrect Charges: Disputes on charges must be notified within 12 days of receipt, containing details of why the amount is incorrect.",
        },
        {
          type: "bold",
          text: "Fraudulent Activities: eSIM Card reserves the right to refuse refunds in cases of suspected abuse, term violation, or fraudulent activities.",
        },
        {
          type: "bold",
          text: "Phone Compatibility: It's crucial to ensure your phone is eSIM compatible before purchase. No refunds are issued for incompatibility issues.",
        },
        {
          type: "bold",
          text: "One-time Purchase: eSIM is a one-time purchase and non-refundable",
        },
        {
          type: "bold",
          text: "Virtual Numbers: Virtual Numbers will not work on WhatsApp and other social media services, and the customer is not entitled to a refund if he does not get the OTP codes for such services.",
        },
      ],
    },
    {
      title: "Process for Requesting a Refund",
      content: [
        {
          type: "bold",
          text: "Time Frame: Refund requests must be made within 30 days of purchase.",
        },
        {
          type: "bold",
          text: "Cooperation: Prompt/timely cooperation in troubleshooting is necessary for a refund consideration.",
        },
        {
          type: "bold",
          text: "Notification: Email support@esimcard.com with your refund request, providing relevant details and reasons.",
        },
      ],
    },
    {
      title: "Exceptions and Specific Scenarios",
      content: [
        {
          type: "bold",
          text: "Unauthorized Purchases: Subject to investigation and approval.",
        },
        {
          type: "bold",
          text: "Modification: No modifications or customizations are allowed post-purchase.",
        },
        {
          type: "bold",
          text: "Ultimate Mobile Services: Service suspension may occur without notice and is not subject to refunds.",
        },
      ],
    },
    {
      title: "Additional Terms",
      content: [
        {
          type: "bold",
          text: "Fair Usage Policy: This applies to all bundles/plans.",
        },
        {
          type: "bold",
          text: "Liability: eSIM Card is not liable for service unavailability or network issues.",
        },
        {
          type: "bold",
          text: "Warranty: No guarantees on constant network availability.",
        },
      ],
    },
    {
      title: "Contact and Support",
      content: [
        {
          type: "text",
          text: "For any queries or assistance, please contact our support team at support@esimcard.com. We're here to help you for a smooth and hassle-free experience.",
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
        title="Refund Policy"
        showDownloadAndRating={false}
        className="py-[3rem] sm:py-[4.5rem]"
      />

      <section className="container mt-16">
        <Card className="flex flex-col gap-[28px] rounded-[15px] border-0 px-[29px] py-[34px] shadow-myCard">
          <p>
            At eSIM Card, we're committed to ensuring that our customers get a
            seamless and enjoyable experience. Our refund policy is designed to
            offer clarity in the rare instances where you may need to request a
            refund. Below, you'll find detailed information on our refund
            procedures and conditions.
          </p>
          {RefundPolicyData.map((item, index) => (
            <div className="flex flex-col gap-[28px]" key={`main ${index}`}>
              <h2 className="font-montserrat text-h2-base font-600 md:text-h2-md xl:text-h2-xl">
                {item.title}
              </h2>
              {/* <ul className="list-group"> */}
              {item.content.map((item, index) => (
                <li
                  key={`main-content ${index}`}
                  className="list-group-item font-poppins text-base"
                >
                  {renderContentItem(item)}
                </li>
              ))}
              {/* </ul> */}
            </div>
          ))}
        </Card>
      </section>
    </>
  );
}

export default Page;
