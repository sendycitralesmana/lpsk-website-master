"use client";

import { Link } from "@/lib/i18n/routing";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import Image from "next/image";


const PublicationPreview = () => {
  return (
    <section className="w-screen">
      <div className="container flex flex-col gap-5 place-items-center px-28">
        <h2 className="font-bold text-center">PUBLIKASI</h2>
        <Tabs defaultValue="book" className="w-full">
          <TabsList className="w-full">
            <TabsTrigger value="book" className="flex-1">
              Buku
            </TabsTrigger>
            <TabsTrigger value="report" className="flex-1">
              Laporan
            </TabsTrigger>
            <TabsTrigger value="journal" className="flex-1">
              Jurnal
            </TabsTrigger>
            <TabsTrigger value="buletin" className="flex-1">
              Buletin
            </TabsTrigger>
          </TabsList>
          <TabsContent value="book">
            <div className="flex flex-col place-items-center gap-4">
              <div className=" w-full grid grid-cols-4 gap-4">
                {Array.from({ length: 4 }).map((_, index) => (
                  <Link key={index} href={"/"}>
                    <Card className=" aspect-[3/4] relative rounded overflow-hidden group">
                      <Image
                        src={`https://picsum.photos/seed/book-${
                          index + 1
                        }/1000/1000`}
                        alt=""
                        fill
                        className=" object-center group-hover:scale-105 transition-all duration-300"
                      />
                    </Card>
                  </Link>
                ))}
              </div>
              <Button asChild>
                <Link href={"/"}>Lihat Selengkapnya</Link>
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="report">
            <div className="flex flex-col place-items-center gap-2">
              <div className=" w-full grid grid-cols-4 gap-4">
                {Array.from({ length: 4 }).map((_, index) => (
                  <Link key={index} href={"/"}>
                    <Card className=" aspect-[3/4] relative rounded overflow-hidden group">
                      <Image
                        src={`https://picsum.photos/seed/report-${
                          index + 1
                        }/1000/1000`}
                        alt=""
                        fill
                        className=" object-center group-hover:scale-105 transition-all duration-300"
                      />
                    </Card>
                  </Link>
                ))}
              </div>
              <Button asChild>
                <Link href={"/"}>Lihat Selengkapnya</Link>
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="journal">
            <div className="flex flex-col place-items-center gap-2">
              <div className=" w-full grid grid-cols-4 gap-4">
                {Array.from({ length: 4 }).map((_, index) => (
                  <Link key={index} href={"/"}>
                    <Card className=" aspect-[3/4] relative rounded overflow-hidden group">
                      <Image
                        src={`https://picsum.photos/seed/journal-${
                          index + 1
                        }/1000/1000`}
                        alt=""
                        fill
                        className=" object-center group-hover:scale-105 transition-all duration-300"
                      />
                    </Card>
                  </Link>
                ))}
              </div>
              <Button asChild>
                <Link href={"/"}>Lihat Selengkapnya</Link>
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="buletin">
            <div className="flex flex-col place-items-center gap-2">
              <div className=" w-full grid grid-cols-4 gap-4">
                {Array.from({ length: 4 }).map((_, index) => (
                  <Link key={index} href={"/"}>
                    <Card className=" aspect-[3/4] relative rounded overflow-hidden group">
                      <Image
                        src={`https://picsum.photos/seed/buletin-${
                          index + 1
                        }/1000/1000`}
                        alt=""
                        fill
                        className=" object-center group-hover:scale-105 transition-all duration-300"
                      />
                    </Card>
                  </Link>
                ))}
              </div>
              <Button asChild>
                <Link href={"/"}>Lihat Selengkapnya</Link>
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export { PublicationPreview };