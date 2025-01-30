"use client";

import Image from "next/image";
import { Card } from "../ui/card";

const ApplicationSection = () => {
  return (
    <section className="w-screen">
      <div className="flex flex-col place-items-center gap-4 px-28">
        <h2 className="font-bold text-center">APLIKASI INTERNAL LPSK</h2>
        <div className="w-full grid grid-cols-4 gap-2">
          <div className="col-span-4 grid grid-cols-3 gap-2">
            <Card className="aspect-[4/3] relative overflow-hidden bg-transparent group rounded">
              <div className="h-full w-full flex flex-col text-white p-5 justify-end">
                <p className="font-bold">SIMPUSAKA</p>
              </div>
              <Image
                src={"/images/internal/simpusaka.webp"}
                alt=""
                fill
                className="object-center object-cover -z-20 group-hover:scale-105 transition-all duration-300"
              />
              <div className=" h-full w-full bg-black/25 group-hover:bg-primary/35 absolute top-0 -z-10 transition-colors duration-300"></div>
            </Card>
            <Card className="aspect-[4/3] relative overflow-hidden bg-transparent group rounded">
              <div className="h-full w-full flex flex-col text-white p-5 justify-end">
                <p className="font-bold">FONDASI</p>
              </div>
              <Image
                src={"/images/internal/fondasi.webp"}
                alt=""
                fill
                className="object-center object-cover -z-20 group-hover:scale-105 transition-all duration-300"
              />
              <div className=" h-full w-full bg-black/25 group-hover:bg-primary/35 absolute top-0 -z-10 transition-colors duration-300"></div>
            </Card>
            <Card className="aspect-[4/3] relative overflow-hidden bg-transparent group rounded">
              <div className="h-full w-full flex flex-col text-white p-5 justify-end">
                <p className="font-bold">SSK</p>
              </div>
              <Image
                src={"/images/internal/ssk.webp"}
                alt=""
                fill
                className="object-center object-cover -z-20 group-hover:scale-105 transition-all duration-300"
              />
              <div className=" h-full w-full bg-black/25 group-hover:bg-primary/35 absolute top-0 -z-10 transition-colors duration-300"></div>
            </Card>
            <Card className="aspect-[4/3] relative overflow-hidden bg-transparent group rounded">
              <div className="h-full w-full flex flex-col text-white p-5 justify-end">
                <p className="font-bold">Tracking Permohonan</p>
              </div>
              <Image
                src={"/images/internal/tracking.webp"}
                alt=""
                fill
                className="object-center object-cover -z-20 group-hover:scale-105 transition-all duration-300"
              />
              <div className=" h-full w-full bg-black/25 group-hover:bg-primary/35 absolute top-0 -z-10 transition-colors duration-300"></div>
            </Card>
            <Card className="aspect-[4/3] relative overflow-hidden bg-transparent group rounded">
              <div className="h-full w-full flex flex-col text-white p-5 justify-end">
                <p className="font-bold">JDIH</p>
              </div>
              <Image
                src={"/images/internal/jdih.webp"}
                alt=""
                fill
                className="object-center object-cover -z-20 group-hover:scale-105 transition-all duration-300"
              />
              <div className=" h-full w-full bg-black/25 group-hover:bg-primary/35 absolute top-0 -z-10 transition-colors duration-300"></div>
            </Card>
            <Card className="aspect-[4/3] relative overflow-hidden bg-transparent group rounded">
              <div className="h-full w-full flex flex-col text-white p-5 justify-end">
                <p className="font-bold">EPPID</p>
              </div>
              <Image
                src={"/images/internal/eppid.webp"}
                alt=""
                fill
                className="object-center object-cover -z-20 group-hover:scale-105 transition-all duration-300"
              />
              <div className=" h-full w-full bg-black/25 group-hover:bg-primary/35 absolute top-0 -z-10 transition-colors duration-300"></div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ApplicationSection };
