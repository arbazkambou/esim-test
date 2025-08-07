"use client";

import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import stars from "@/_assets/svgs/5StarsBrown.svg";
import { cn } from "@/lib/utils";

interface Review {
  name: string;
  username: string;
  date: string;
  title: string;
  review: string;
  store: StaticImageData;
  imgSrc: StaticImageData;
}

interface PropsType {
  reviews: Review[];
  title: string;
}

function Reviews({ title, reviews }: PropsType) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  // Auto-play functionality
  useEffect(() => {
    if (!api) {
      return;
    }

    const interval = setInterval(() => {
      api.scrollNext();
    }, 2000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="container relative mt-16 bg-background">
      <h2 className="text-center font-montserrat text-h2-base font-600 text-foreground md:text-h2-md xl:text-start xl:text-h2-xl">
        {title}
      </h2>
      <p className="mt-[1.2rem] text-center text-body-sm text-muted-foreground md:text-body-base xl:text-start xl:text-body-md">
        Wireless service subscribers using eSIM
      </p>

      <Carousel
        setApi={setApi}
        className="mt-[2.62rem] w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {reviews.map((item, index) => (
            <CarouselItem
              key={index}
              className="basis-full pl-2 md:basis-1/2 md:pl-4 xl:basis-1/3"
            >
              <Card className="flex min-h-[400px] flex-col justify-between gap-3 p-8 transition-all hover:border-primary">
                <div className="flex items-center gap-3">
                  <div className="relative h-[50px] w-[50px]">
                    <Image
                      src={item.imgSrc || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      sizes="50px"
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-body-md text-foreground-light">
                      {item.name}
                    </p>
                  </div>
                </div>
                <h3 className="text-body-md font-700 text-foreground-light">
                  {item.title}
                </h3>
                <p className="text-body-base text-muted-foreground">
                  {item.review}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="relative h-[25px] w-[28px]">
                      <Image
                        src={item.store || "/placeholder.svg"}
                        alt="App Store"
                        fill
                        sizes="28px"
                      />
                    </div>
                    <div className="relative h-[30px] w-[100px]">
                      <Image
                        src={stars}
                        alt="5Stars Rating"
                        fill
                        sizes="100px"
                      />
                    </div>
                  </div>
                  <p className="text-body-sm text-muted-foreground">
                    {item.date}
                  </p>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>

      {/* Custom pagination dots */}
      <div className="mt-8 flex items-center justify-center gap-2">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            className={cn(
              "h-2 w-2 rounded-full transition-all",
              current === index + 1
                ? "w-6 bg-primary"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50",
            )}
            onClick={() => api?.scrollTo(index)}
          />
        ))}
      </div>
    </section>
  );
}

export default Reviews;
