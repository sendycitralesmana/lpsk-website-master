"use client";

import { useMessages } from "next-intl";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { Link } from "@/lib/i18n/routing";

const InformationSection = () => {
  const { applicationInternal: data } = useMessages();
  return (
    <section className="w-screen">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {data.map(({ name, path, image }) => (
          <Card
            key={path}
            className=" aspect-video md:aspect-[4/3] bg-transparent shadow rounded overflow-hidden group select-none"
          >
            <CardContent className="p-0 relative h-full w-full">
              <Link href={path} key={path}>
                <div className="h-full w-full flex flex-col text-white p-5 justify-end">
                  <h3 className="font-bold text-base">{name}</h3>
                </div>
                <Image
                  src={image}
                  alt={name}
                  fill
                  className="object-cover -z-20 group-hover:scale-110 transition-all duration-300"
                />
                <div className=" h-full w-full bg-black/25 group-hover:bg-primary/35 absolute top-0 -z-10 transition-colors duration-300"></div>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export { InformationSection };
