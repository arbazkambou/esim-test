import PagesHero from "@/components/my-ui/heros/PagesHero";
import FooterLink from "@/components/my-ui/links/FooterLink";
// import PrimaryButton from "@/components/my-components/buttons/PrimaryButton";
import InfoMessage from "@/components/features/packages/InfoMessage";
import { seoData } from "@/lib/seoConfig";
import { Metadata } from "next";
import { PageParams } from "../page";

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const localizedSeo = seoData[params.locale] || seoData["en"];
  return localizedSeo.careers;
}

type ContentType =
  | { type: "text" | "bold" | "bolder"; text: string }
  | { type: "link"; linkText: string; linkTo: string; text: string };

interface CareerType {
  title: string;
  content: ContentType[];
  subTitles?: { title: string; content: ContentType[] }[];
}

function Page() {
  const CareerData: CareerType[] = [
    {
      title: "Join The eSIMCard Team - Innovate, Grow, and Lead!",
      content: [
        {
          type: "text",
          text: "At eSIMCard, great people build great companies. Our mission is to transform global connectivity, and we invite passionate, talented individuals to join us on this journey.",
        },
        {
          type: "text",
          text: "Browse our job openings and take the next step in your career with eSIMCard—where your concepts influence tomorrow. Your ideal position might be only a click away!",
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
        title={
          <div className="text-center">
            <span className="mb-3 block"> Career Openings</span>
            <span className="block">Join The eSIMCard Team</span>
          </div>
        }
        description={
          "eSIM technology is a booming industry of the future, and we welcome top talent for this. Join us and reshape the future. eSIMCard - We Connect You Globally!"
        }
        showDownloadAndRating={true}
        className="py-[3rem] sm:py-[4.5rem]"
      />

      <section className="container mt-16">
        {CareerData.map((item, index) => (
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
          </div>
        ))}

        {/* Hiring Card */}
        {/* <div className="container mt-16">
          <div className="grid grid-cols-1 justify-items-center gap-6 md:grid-cols-2 lg:grid-cols-3">
            
            <div className="group w-full max-w-sm overflow-hidden rounded-lg border border-transparent shadow-lg transition-all hover:scale-105 hover:border-primary hover:bg-background hover:shadow-2xl">
              <Image
                className="w-full"
                src={"/images/hiring-card.png"}
                alt="hiring-card"
                width={450}
                height={450}
              />

              <div className="flex items-center gap-3 px-6 py-4">
                <CalendarClock />
                <p>1 year ago</p>
              </div>

              <h2 className="px-6 py-3 text-h2-base font-semibold text-foreground/80">
                Hiring Business Manager
              </h2>

              <div className="flex items-center gap-3 px-6 pb-2 pt-3">
                <ArrowUpRight className="text-[#008E7C] transition-all group-hover:rotate-45 group-hover:text-primary" />
                <p className="py-4 text-[#008E7C] transition-all group-hover:text-primary">
                  Read More
                </p>
              </div>
            </div>

            
            <div className="group w-full max-w-sm overflow-hidden rounded-lg border border-transparent shadow-lg transition-all hover:scale-105 hover:border-primary hover:bg-background hover:shadow-2xl">
              <Image
                className="w-full"
                src={"/images/hiring-card.png"}
                alt="hiring-card"
                width={450}
                height={450}
              />

              <div className="flex items-center gap-3 px-6 py-4">
                <CalendarClock />
                <p>1 year ago</p>
              </div>

              <h2 className="px-6 py-3 text-h2-base font-semibold text-foreground/80">
                Hiring Business Manager
              </h2>

              <div className="flex items-center gap-3 px-6 pb-2 pt-3">
                <ArrowUpRight className="text-[#008E7C] transition-all group-hover:rotate-45 group-hover:text-primary" />
                <p className="py-4 text-[#008E7C] transition-all group-hover:text-primary">
                  Read More
                </p>
              </div>
            </div>

         
            <div className="group w-full max-w-sm overflow-hidden rounded-lg border border-transparent shadow-lg transition-all hover:scale-105 hover:border-primary hover:bg-background hover:shadow-2xl">
              <Image
                className="w-full"
                src={"/images/hiring-card.png"}
                alt="hiring-card"
                width={450}
                height={450}
              />

              <div className="flex items-center gap-3 px-6 py-4">
                <CalendarClock />
                <p>1 year ago</p>
              </div>

              <h2 className="px-6 py-3 text-h2-base font-semibold text-foreground/80">
                Hiring Business Manager
              </h2>

              <div className="flex items-center gap-3 px-6 pb-2 pt-3">
                <ArrowUpRight className="text-[#008E7C] transition-all group-hover:rotate-45 group-hover:text-primary" />
                <p className="py-4 text-[#008E7C] transition-all group-hover:text-primary">
                  Read More
                </p>
              </div>
            </div>
          </div>
        </div> */}

        {/* message */}
        <div className="mt-6">
          <h2 className="mb-7 font-montserrat text-h2-base font-bold">
            We’re Not Hiring Right Now
          </h2>
          <InfoMessage
            className="min-h-max"
            message={
              "Thank you for your interest in joining our team. Currently, we don’t have any open positions. Please check back later or follow us on our social media channels for future updates."
            }
          />
        </div>

        {/* Stay Connnected */}
        {/* <section className="container mt-16">
          <h2 className="font-montserrat text-h2-base font-600 md:text-h2-md xl:text-h2-xl">
            Didn’t Fid a Suitable Position? Let’s Stay Connected!
          </h2>
          <p classnName="my-7 font-poppins text-base">
            We’re always in search of top talent. If you don’t see an opening
            that matches your skills but would love to be part of our team, we’d
            still love to hear from you!
          </p>
          <p className="font-600">
            Submit your details below, and we’ll reach out when a role aligns
            with your expertise.
          </p>
        </section> */}

        {/* form */}

        {/* <CareersForm /> */}
      </section>
    </>
  );
}

export default Page;
