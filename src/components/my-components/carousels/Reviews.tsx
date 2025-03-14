"use client";

import stars from "@/_assets/svgs/5StarsBrown.svg";
import client1 from "@/_assets/svgs/client1.svg";
import client2 from "@/_assets/svgs/client2.svg";
import client3 from "@/_assets/svgs/client3.svg";
import client4 from "@/_assets/svgs/client4.svg";
import client5 from "@/_assets/svgs/client5.svg";
import client6 from "@/_assets/svgs/client6.svg";
import playStore from "@/_assets/svgs/playStore.svg";
import appStore from "@/_assets/svgs/appStore.svg";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "../../ui/card";

function Reviews() {
  const reviews = [
    {
      name: "Fajri H",
      username: "fajri_h23",
      date: "Aug 23, 2023",
      title: "Ease of Internet Access",
      review:
        "I have recently traveled to Spain and used this esim service. This esim service was my lifesaver. It makes it easy to access the internet during my trip. If you're gonna travel abroad, I recommend this service.",
      store: appStore,
      imgSrc: client1,
    },
    {
      name: "Sakura",
      username: "sakura_travels",
      date: "Sep 25, 2023",
      title: "Big Savings",
      review:
        "This is the first pay-as-you-go eSIM I have ever used. After I got a stint of $60 for roaming in Turkey, I decided to discover some affordable alternatives. On my next trip to Uzbekistan, I used eSIMCard and found it very reasonable and had a good connection. I Recommend this eSIM for international travel.",
      imgSrc: client2,
      store: playStore,
    },
    {
      name: "Fergus E",
      username: "fergus_explorer",
      date: "Sep 23, 2023",
      title: "Convenience",
      review:
        "I used to travel with local eSIM for every country. Then, I discovered their Global and Regional eSIM, with which I can travel to multiple countries with one package. Super Useful and genuinely exceptional. It's definitely a thing to keep and use again.",
      imgSrc: client4,
      store: appStore,
    },
    {
      name: "Amelia J",
      username: "amelia_journey",
      date: "Aug 23, 2023",
      title: "Excellent Customer Service",
      review:
        "At first, I felt frustrated when I had some issues with activation. But when I contacted their support team, I found out that the problem was on my side. Thanks to the clear instructions from the support team, my issue got resolved in minutes. After that, I experienced high-quality internet. Satisfied!",
      imgSrc: client6,
      store: appStore,
    },
    {
      name: "David Andrew",
      username: "david_andrew_90",
      date: "Jun 09, 2023",
      title: "Affordability",
      review:
        "Right after landing in Barcelona, Spain, I activated my eSIMCard connection. It was a smooth experience, and immediate access to texts, WhatsApp, and more. I became a fan of unthrottled connectivity and affordable packages. I highly recommend eSIMCard for travelers.",
      imgSrc: client5,
      store: appStore,
    },
    {
      name: "John William",
      username: "john_w_traveler",
      date: "May 17, 2023",
      title: "Multiple Plans",
      review:
        "I enjoyed eSIMCard’s service during my visit to Europe. I traveled Europe with a single Regional eSIM plan. No High roaming charges and no change of plan during the entire tour. I am completely satisfied and will use it again.",
      imgSrc: client3,
      store: appStore,
    },
  ];

  return (
    <section className="container relative mt-16 bg-background">
      <h2 className="text-center font-montserrat text-h2-base font-600 text-foreground md:text-h2-md xl:text-start xl:text-h2-xl">
        What Our Customers Have to Say About eSIMCard
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
            <Card
              className="mt-[2.62rem] flex min-h-[400px] flex-col justify-between gap-3 p-8 transition-all hover:cursor-grab hover:border-primary"
              key={index}
            >
              <div className="flex items-center gap-3">
                <div className="relative h-[50px] w-[50px]">
                  <Image src={item.imgSrc} alt={item.title} fill sizes="auto" />
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
                    <Image src={item.store} alt="App Store" fill sizes="auto" />
                  </div>
                  <div className="relative h-[30px] w-[100px]">
                    <Image src={stars} alt="5Stars Rating" fill sizes="auto" />
                  </div>
                </div>
                <p className="text-body-sm text-muted-foreground">
                  {item.date}
                </p>
              </div>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-pagination flex items-center justify-center" />
    </section>
  );
}

export default Reviews;
