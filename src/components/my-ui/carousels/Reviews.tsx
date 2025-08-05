"use client";

import stars from "@/_assets/svgs/5StarsBrown.svg";
import Image, { StaticImageData } from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "../../ui/card";

interface Review {
  name: string;
  username: string;
  date: string;
  title: string;
  review: string;
  store: StaticImageData; // You can replace 'any' with a specific type if `store` refers to a defined constant or type
  imgSrc: StaticImageData; // Assuming image source is a string (e.g., a path or import reference)
}

interface PropsType {
  reviews: Review[];
  title: string;
}
function Reviews({ title, reviews }: PropsType) {
  return (
    <section className="container relative mt-16 bg-background">
      <h2 className="text-center font-montserrat text-h2-base font-600 text-foreground md:text-h2-md xl:text-start xl:text-h2-xl">
        {title}
      </h2>
      <p className="mt-[1.2rem] text-center text-body-sm text-muted-foreground md:text-body-base xl:text-start xl:text-body-md">
        Wireless service subscribers using eSIM
      </p>

      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        modules={[Pagination, Navigation, Autoplay]}
        pagination={{ clickable: true, el: ".custom-pagination" }}
        className="mySwiper"
        speed={1000}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        loop={true}
        breakpoints={{
          1240: {
            slidesPerView: 3,
          },

          840: {
            slidesPerView: 2,
          },

          0: {
            slidesPerView: 1,
          },
        }}
      >
        {reviews.map((item, index) => (
          <SwiperSlide className="mb-8" key={index}>
            <div>
              <Card
                className="mt-[2.62rem] flex min-h-[400px] flex-col justify-between gap-3 p-8 transition-all hover:border-primary"
                key={index}
              >
                <div className="flex items-center gap-3">
                  <div className="relative h-[50px] w-[50px]">
                    <Image
                      src={item.imgSrc}
                      alt={item.title}
                      fill
                      sizes="auto"
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
                        src={item.store}
                        alt="App Store"
                        fill
                        sizes="auto"
                      />
                    </div>
                    <div className="relative h-[30px] w-[100px]">
                      <Image
                        src={stars}
                        alt="5Stars Rating"
                        fill
                        sizes="auto"
                      />
                    </div>
                  </div>
                  <p className="text-body-sm text-muted-foreground">
                    {item.date}
                  </p>
                </div>
              </Card>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="custom-pagination flex items-center justify-center" />
    </section>
  );
}

export default Reviews;
