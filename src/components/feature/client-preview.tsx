/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";


const ClientPreview = () => {
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
  return (
    <section className="w-screen">
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-center">AFILIASI</h2>
        <Carousel
          className="w-screen"
          setApi={setApi}
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
        >
          <CarouselContent className="w-full container">
            {Array.from({ length: 24 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="basis-1/12 aspect-square relative rounded overflow-clip mr-5"
              >
                <Image
                  src={`https://picsum.photos/seed/${index + 1}/200/200`}
                  alt=""
                  fill
                  className="object-cover object-center"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className=" hidden xl:flex absolute left-5 top-1/2  -translate-y-1/2" />
          <CarouselNext className=" hidden xl:flex absolute right-5 top-1/2  -translate-y-1/2" />
        </Carousel>
      </div>
    </section>
  );
};

export { ClientPreview };
