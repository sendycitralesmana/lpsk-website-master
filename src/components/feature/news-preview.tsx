"use client";

import { Link } from "@/lib/i18n/routing";
import { Card, CardContent } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import Image from "next/image";



const NewsSection = () => {
  return (
    <section className="w-full">
      <div className="grid grid-cols-3 gap-4 container">
        <div className="col-span-1">
          <Card className="h-full w-full relative">
            <Image src={"https://picsum.photos/1000/1000"} fill alt="" />
          </Card>
        </div>
        <div className="col-span-2">
          <Tabs defaultValue="news" className="w-full">
            <TabsList className="w-full bg-neutral-200">
              <TabsTrigger value="news" className="flex-1">
                Informasi
              </TabsTrigger>
              <TabsTrigger value="information" className="flex-1">
                Berita / Artikel
              </TabsTrigger>
            </TabsList>
            <TabsContent value="news">
              <Card>
                <CardContent className="flex flex-col gap-4 p-4">
                  <Link href={"/"}>
                    <div className="p-2 rounded flex flex-col w-full gap-1 cursor-pointer group hover:bg-neutral-100 transition-colors duration-300">
                      <p className="font-bold group-hover:text-blue-900 transition-colors duration-300">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Inventore, dolores.
                      </p>
                      <small className=" text-muted-foreground group-hover:text-blue-900 transition-colors duration-300">
                        10 Oktober 2023
                      </small>
                      <Separator />
                    </div>
                  </Link>
                  <Link href={"/"}>
                    <div className="p-2 rounded flex flex-col w-full gap-1 cursor-pointer group hover:bg-neutral-100 transition-colors duration-300">
                      <p className="font-bold group-hover:text-blue-900 transition-colors duration-300">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Inventore, dolores.
                      </p>
                      <small className=" text-muted-foreground group-hover:text-blue-900 transition-colors duration-300">
                        10 Oktober 2023
                      </small>
                      <Separator />
                    </div>
                  </Link>
                  <Link href={"/"}>
                    <div className="p-2 rounded flex flex-col w-full gap-1 cursor-pointer group hover:bg-neutral-100 transition-colors duration-300">
                      <p className="font-bold group-hover:text-blue-900 transition-colors duration-300">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Inventore, dolores.
                      </p>
                      <small className=" text-muted-foreground group-hover:text-blue-900 transition-colors duration-300">
                        10 Oktober 2023
                      </small>
                      <Separator />
                    </div>
                  </Link>
                  <Link href={"/"}>
                    <div className="p-2 rounded flex flex-col w-full gap-1 cursor-pointer group hover:bg-neutral-100 transition-colors duration-300">
                      <p className="font-bold group-hover:text-blue-900 transition-colors duration-300">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Inventore, dolores.
                      </p>
                      <small className=" text-muted-foreground group-hover:text-blue-900 transition-colors duration-300">
                        10 Oktober 2023
                      </small>
                      <Separator />
                    </div>
                  </Link>
                  <Button size={"sm"} className="w-fit">
                    Selengkapnya
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="information">
              <Card>
                <CardContent className="flex flex-col gap-4 p-4">
                  <Link href={"/"}>
                    <div className="p-2 rounded flex flex-col w-full gap-1 cursor-pointer group hover:bg-neutral-100 transition-colors duration-300">
                      <p className="font-bold group-hover:text-blue-900 transition-colors duration-300">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Inventore, dolores.
                      </p>
                      <small className=" text-muted-foreground group-hover:text-blue-900 transition-colors duration-300">
                        10 Oktober 2023
                      </small>
                      <Separator />
                    </div>
                  </Link>
                  <Link href={"/"}>
                    <div className="p-2 rounded flex flex-col w-full gap-1 cursor-pointer group hover:bg-neutral-100 transition-colors duration-300">
                      <p className="font-bold group-hover:text-blue-900 transition-colors duration-300">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Inventore, dolores.
                      </p>
                      <small className=" text-muted-foreground group-hover:text-blue-900 transition-colors duration-300">
                        10 Oktober 2023
                      </small>
                      <Separator />
                    </div>
                  </Link>
                  <Link href={"/"}>
                    <div className="p-2 rounded flex flex-col w-full gap-1 cursor-pointer group hover:bg-neutral-100 transition-colors duration-300">
                      <p className="font-bold group-hover:text-blue-900 transition-colors duration-300">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Inventore, dolores.
                      </p>
                      <small className=" text-muted-foreground group-hover:text-blue-900 transition-colors duration-300">
                        10 Oktober 2023
                      </small>
                      <Separator />
                    </div>
                  </Link>
                  <Link href={"/"}>
                    <div className="p-2 rounded flex flex-col w-full gap-1 cursor-pointer group hover:bg-neutral-100 transition-colors duration-300">
                      <p className="font-bold group-hover:text-blue-900 transition-colors duration-300">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Inventore, dolores.
                      </p>
                      <small className=" text-muted-foreground group-hover:text-blue-900 transition-colors duration-300">
                        10 Oktober 2023
                      </small>
                      <Separator />
                    </div>
                  </Link>
                  <Button size={"sm"} className="w-fit">
                    Selengkapnya
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export { NewsSection };