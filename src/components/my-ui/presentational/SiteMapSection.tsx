import { Suspense } from "react";
import { Spinner } from "../fallbacks/Spinner";
import SiteMapComponent from "@/components/features/packages/SiteMapComponent";

async function SiteMapSection() {
  return (
    <section className="mt-16 bg-primary-light py-16">
      <div className="container">
        <div className="flex flex-col gap-[1.31rem]">
          <h2 className="text-center font-montserrat text-h2-md font-600 md:text-h2-md xl:text-start xl:text-h2-xl">
            All over the World
          </h2>
          <p className="text-center text-body-md text-muted-foreground xl:text-start">
            Choose your destination
          </p>
        </div>
        <Suspense
          fallback={
            <div className="flex h-[300px] w-full items-center justify-center">
              <Spinner color="primary" />
            </div>
          }
        >
          <SiteMapComponent />
        </Suspense>
      </div>
    </section>
  );
}

export default SiteMapSection;
