/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Autoplay from "embla-carousel-autoplay";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "@/lib/i18n/routing";
import { Item } from "@radix-ui/react-dropdown-menu";

const Hero = ({ data: { data } }: { data: { data: any[] } }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    // setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="w-full bg-secondary">
      <Carousel
        className="w-screen"
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
      >
        <CarouselContent className="w-full">
          {data.map((item: any) => (
            <HeroItem
              dataItem={item}
              key={item.id}
              title={item.news.title}
              // image={process.env.NEXT_PUBLIC_BASE_BUCKET_URL + item.news.cover}

              image={item.news.cover != null
                ? `${process.env.NEXT_PUBLIC_BASE_BUCKET_URL}/${item.news.cover}`
                : "/images/default.webp"
              }

              date={item.news.created_at}
              redirect={`/${item.news.slug}/${item.news.id}`}
            />
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden xl:flex absolute left-5 top-1/2  -translate-y-1/2" />
        <CarouselNext className=" hidden xl:flex absolute right-5 top-1/2  -translate-y-1/2" />
        <div className=" absolute bottom-5 left-1/2 -translate-x-1/2">
          <div className="flex gap-2">
            {data.map((_, index) => (
              <div
                key={index}
                className={cn(
                  " h-2 w-2 rounded-full transition-all duration-300",
                  {
                    " bg-white scale-125": current === index + 1,
                    " bg-neutral-500": current !== index + 1,
                  }
                )}
              ></div>
            ))}
          </div>
        </div>
      </Carousel>
    </section>
  );
};

type TAppCaoruselItem = {
  title: string;
  image: string;
  date?: string;
  redirect?: string;
  dataItem?: any;
};

const HeroItem = ({ title, image, date, redirect, dataItem }: TAppCaoruselItem) => {

  return (
    // <CarouselItem className="basis-full">
    //   <div className="w-screen aspect-[9/16] md:aspect-video relative">
    //     <div className="container h-full w-full text-neutral-100 py-16">
    //       <div className="flex flex-col h-full w-full z-10 justify-end gap-3">
    //         {!!date && (
    //           <Badge className=" bg-yellow-600 hover:bg-yellow-600/80 w-fit rounded-sm">
    //             {date}
    //           </Badge>
    //         )}
    //         <h1 className="font-bold max-w-5xl">{title}</h1>
    //         {!!redirect && (
    //           <Button asChild className="w-fit">
    //             <Link href={`/berita/${dataItem.newsCategory.slug}/${dataItem.news.id}`}>Selengkapnya</Link>
    //           </Button>
    //         )}
    //       </div>
    //     </div>
    //     <Image
    //       fill
    //       // src={image}
    //       src={image ? image : "/images/default.webp"}
    //       alt="LPSK"
    //       className=" object-cover object-center -z-20 absolute top-0 !m-0"
    //     />
    //     <div className=" h-full w-full absolute top-0 -z-10 bg-neutral-950/25"></div>
    //   </div>
    // </CarouselItem>

    
    <CarouselItem className="basis-full">
      {/* <div className="w-screen aspect-[9/16] md:aspect-video relative"> */}
      <div className="w-screen h-[560px] md:aspect-video relative">
        <div className="container h-full w-full text-neutral-100 py-16">
          <div className="flex flex-col h-full w-full z-10 justify-end gap-3">
            {!!date && (
              <Badge className=" bg-yellow-600 hover:bg-yellow-600/80 w-fit rounded-sm">
                {date}
              </Badge>
            )}
            <h1 className="font-bold max-w-5xl">{title}</h1>
            {!!redirect && (
              <Button asChild className="w-fit">
                <Link href={`/berita/${dataItem.newsCategory.slug}/${dataItem.news.id}`}>Selengkapnya</Link>
              </Button>
            )}
          </div>
        </div>
        <Image
          fill
          // src={image}
          src={image ? image : "/images/default.webp"}
          alt="LPSK"
          className=" object-cover object-center -z-20 absolute top-0 !m-0"
        />
        <div className=" h-full w-full absolute top-0 -z-10 bg-neutral-950/25"></div>
      </div>
    </CarouselItem>
  );
};

export { Hero, HeroItem };

