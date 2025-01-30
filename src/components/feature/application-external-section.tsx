/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Image from "next/image";
import { Link } from "@/lib/i18n/routing";
import { useEffect, useState } from "react";
import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";



const ApplicationExternalSection = () => {
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
        <h2 className="font-bold text-center">APLIKASI EXTERNAL</h2>
        <Carousel className="w-screen" setApi={setApi} plugins={[]}>
          <CarouselContent className="w-full container">
            <CarouselItem className="basis-1/4 aspect-video relative rounded overflow-clip ">
              <Card className=" aspect-video bg-transparent shadow rounded overflow-hidden group select-none">
                <Link href={"/"}>
                  <CardContent className="p-0 aspect-video relative h-full w-full">
                    <div className="h-full w-full flex flex-col text-white p-5 justify-end basis-4">
                      <h3 className="font-bold text-base">E - MANAJEMEN PENYIDIKAN POLRI</h3>
                    </div>
                    <Image
                      src={"/images/external/bareskrim.webp"}
                      alt={""}
                      fill
                      className="object-cover -z-20 group-hover:scale-110 transition-all duration-300"
                    />
                    <div className=" h-full w-full bg-black/25 group-hover:bg-primary/35 absolute top-0 -z-10 transition-colors duration-300"></div>
                  </CardContent>
                </Link>
              </Card>
            </CarouselItem>
            <CarouselItem className="basis-1/4 aspect-video relative rounded overflow-clip ">
              <Card className=" aspect-video bg-transparent shadow rounded overflow-hidden group select-none">
                <Link href={"/"}>
                  <CardContent className="p-0 aspect-video relative h-full w-full">
                    <div className="h-full w-full flex flex-col text-white p-5 justify-end basis-4">
                      <h3 className="font-bold text-base">E - MINDIK BNN</h3>
                    </div>
                    <Image
                      src={"/images/external/bnn.webp"}
                      alt={""}
                      fill
                      className="object-cover -z-20 group-hover:scale-110 transition-all duration-300"
                    />
                    <div className=" h-full w-full bg-black/25 group-hover:bg-primary/35 absolute top-0 -z-10 transition-colors duration-300"></div>
                  </CardContent>
                </Link>
              </Card>
            </CarouselItem>
            <CarouselItem className="basis-1/4 aspect-video relative rounded overflow-clip ">
              <Card className=" aspect-video bg-transparent shadow rounded overflow-hidden group select-none">
                <Link href={"/"}>
                  <CardContent className="p-0 aspect-video relative h-full w-full">
                    <div className="h-full w-full flex flex-col text-white p-5 justify-end basis-4">
                      <h3 className="font-bold text-base">CMS PUBLIK KEJAKSAAN RI</h3>
                    </div>
                    <Image
                      src={"/images/external/kejaksaan.webp"}
                      alt={""}
                      fill
                      className="object-cover -z-20 group-hover:scale-110 transition-all duration-300"
                    />
                    <div className=" h-full w-full bg-black/25 group-hover:bg-primary/35 absolute top-0 -z-10 transition-colors duration-300"></div>
                  </CardContent>
                </Link>
              </Card>
            </CarouselItem>
            <CarouselItem className="basis-1/4 aspect-video relative rounded overflow-clip ">
              <Card className=" aspect-video bg-transparent shadow rounded overflow-hidden group select-none">
                <Link href={"/"}>
                  <CardContent className="p-0 aspect-video relative h-full w-full">
                    <div className="h-full w-full flex flex-col text-white p-5 justify-end basis-4">
                      <h3 className="font-bold text-base">SDP KEMENKUMHAM</h3>
                    </div>
                    <Image
                      src={"/images/external/kemenkumham.webp"}
                      alt={""}
                      fill
                      className="object-cover -z-20 group-hover:scale-110 transition-all duration-300"
                    />
                    <div className=" h-full w-full bg-black/25 group-hover:bg-primary/35 absolute top-0 -z-10 transition-colors duration-300"></div>
                  </CardContent>
                </Link>
              </Card>
            </CarouselItem>
            <CarouselItem className="basis-1/4 aspect-video relative rounded overflow-clip ">
              <Card className=" aspect-video bg-transparent shadow rounded overflow-hidden group select-none">
                <Link href={"/"}>
                  <CardContent className="p-0 aspect-video relative h-full w-full">
                    <div className="h-full w-full flex flex-col text-white p-5 justify-end basis-4">
                      <h3 className="font-bold text-base">KPK</h3>
                    </div>
                    <Image
                      src={"/images/external/kpk.webp"}
                      alt={""}
                      fill
                      className="object-cover -z-20 group-hover:scale-110 transition-all duration-300"
                    />
                    <div className=" h-full w-full bg-black/25 group-hover:bg-primary/35 absolute top-0 -z-10 transition-colors duration-300"></div>
                  </CardContent>
                </Link>
              </Card>
            </CarouselItem>
            <CarouselItem className="basis-1/4 aspect-video relative rounded overflow-clip ">
              <Card className=" aspect-video bg-transparent shadow rounded overflow-hidden group select-none">
                <Link href={"/"}>
                  <CardContent className="p-0 aspect-video relative h-full w-full">
                    <div className="h-full w-full flex flex-col text-white p-5 justify-end basis-4">
                      <h3 className="font-bold text-base">SIGAP LAPOR</h3>
                    </div>
                    <Image
                      src={"/images/external/lapor.webp"}
                      alt={""}
                      fill
                      className="object-cover -z-20 group-hover:scale-110 transition-all duration-300"
                    />
                    <div className=" h-full w-full bg-black/25 group-hover:bg-primary/35 absolute top-0 -z-10 transition-colors duration-300"></div>
                  </CardContent>
                </Link>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className=" hidden xl:flex absolute left-5 top-1/2  -translate-y-1/2" />
          <CarouselNext className=" hidden xl:flex absolute right-5 top-1/2  -translate-y-1/2" />
        </Carousel>
      </div>
    </section>
  );
};

export { ApplicationExternalSection };
