"use client";

import { Link } from "@/lib/i18n/routing";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import Image from "next/image";
import { useEffect, useState } from "react";
import api from "@/lib/axios";


const PublicationPreview = () => {

  // const [publication, setPublication] = useState<any[]>([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {

  //   const fetchPublication = async () => {
  //     try {
  //       const response = await api.get("/publication_category/publication");
  //       setPublication(response.data || []);
  //       console.log(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchPublication();

  // }, [])

  const [buku, setBuku] = useState<any[]>([]); // Initialize as empty array
  const [laporan, setLaporan] = useState<any[]>([]); // Initialize as empty array
  const [jurnal, setJurnal] = useState<any[]>([]); // Initialize as empty array
  const [buletin, setBuletin] = useState<any[]>([]); // Initialize as empty array
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to fetch both artikel and informasi
    const fetchData = async () => {
      setLoading(true);
      try {
        const [bukuResponse, laporanResponse, jurnalResponse, buletinResponse] = await Promise.all([
          api.get("/publication/bukuTerbaru"),
          api.get("/publication/laporanTerbaru"),
          api.get("/publication/jurnalTerbaru"),
          api.get("/publication/buletinTerbaru"),
        ]);
        setBuku(bukuResponse.data.books || []); // Safeguard in case data is undefined
        setLaporan(laporanResponse.data.reports || []); // Safeguard in case data is undefined
        setJurnal(jurnalResponse.data.journals || []); // Safeguard in case data is undefined
        setBuletin(buletinResponse.data.bulletins || []); // Safeguard in case data is undefined
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="w-screen">
      <div className="container flex flex-col gap-5 place-items-center px-28">
        <h2 className="font-bold text-center">PUBLIKASI</h2>
        <Tabs defaultValue="book" className="w-full">
          <TabsList className="w-full">

            {/* {publication.map((item, index) => (
              <TabsTrigger key={index} value={item.name} className="flex-1">
                {item.name}
              </TabsTrigger>
            ))} */}

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

          {/* {publication.map((item, index) => (
            <TabsContent key={index} value={item.name}>
              <div className="flex flex-col place-items-center gap-2">
                <div className=" w-full grid grid-cols-4 gap-4">
                  {item.publications.map((publication: any, index: number) => (
                    <Link key={index} href={publication.link}>
                      <Card className=" aspect-[3/4] relative rounded overflow-hidden group">
                        <Image
                          src={publication.image}
                          alt=""
                          fill
                          className=" object-center group-hover:scale-105 transition-all duration-300"
                        />
                      </Card>
                    </Link>
                  ))}
                </div>
                <Button asChild>
                  <Link href={item.link}>Lihat Selengkapnya</Link>
                </Button>
              </div>
            </TabsContent>
          ))} */}

          <TabsContent value="book">
            <div className="flex flex-col place-items-center gap-4">
              <div className=" w-full grid grid-cols-4 gap-4">
                {/* {Array.from({ length: 4 }).map((_, index) => (
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
                ))} */}

                {buku.map((item, index) => (
                  // <Link key={index} href={item.link}>
                    <Card className=" aspect-[3/4] relative rounded overflow-hidden group">
                      <Image
                        src={item.cover !== null
                          ? `${process.env.NEXT_PUBLIC_BASE_BUCKET_URL}/${item.cover}`
                          : '/images/default.webp'
                        }
                        // src={`${process.env.NEXT_PUBLIC_BASE_BUCKET_URL}${item.cover ?? "/default.webp"}`}
                        // src={item.image}
                        alt=""
                        fill
                        className=" object-center group-hover:scale-105 transition-all duration-300"
                      />
                    </Card>
                  // </Link>
                ))}

              </div>
              <Button asChild>
                <Link href={"/publikasi/buku"}>Lihat Selengkapnya</Link>
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="report">
            <div className="flex flex-col place-items-center gap-2">
              <div className=" w-full grid grid-cols-4 gap-4">
                {/* {Array.from({ length: 4 }).map((_, index) => (
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
                ))} */}

                {laporan.map((item, index) => (
                  // <Link key={index} href={item.link}>
                    <Card className=" aspect-[3/4] relative rounded overflow-hidden group">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_BASE_BUCKET_URL}/${item.cover ?? "/default.webp"}`}
                        // `${process.env.NEXT_PUBLIC_BASE_BUCKET_URL}/${item.cover ?? "/default.webp"}` 
                        // src={item.image}
                        alt=""
                        fill
                        className=" object-center group-hover:scale-105 transition-all duration-300"
                      />
                    </Card>
                  // </Link>
                ))}
                
              </div>
              <Button asChild>
                <Link href={"/publikasi/laporan"}>Lihat Selengkapnya</Link>
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="journal">
            <div className="flex flex-col place-items-center gap-2">
              <div className=" w-full grid grid-cols-4 gap-4">
                {/* {Array.from({ length: 4 }).map((_, index) => (
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
                ))} */}

                {jurnal.map((item, index) => (
                  // <Link key={index} href={item.link}>
                    <Card className=" aspect-[3/4] relative rounded overflow-hidden group">
                      <Image
                        src={item.cover !== null
                          ? `${process.env.NEXT_PUBLIC_BASE_BUCKET_URL}/${item.cover}`
                          : '/images/default.webp'
                        }
                        // src={`${process.env.NEXT_PUBLIC_BASE_BUCKET_URL}${item.cover ?? "/default.webp"}`}
                        // src={item.image}
                        alt=""
                        fill
                        className=" object-center group-hover:scale-105 transition-all duration-300"
                      />
                    </Card>
                  // </Link>
                ))}
              </div>
              <Button asChild>
                <Link href={"/publikasi/jurnal"}>Lihat Selengkapnya</Link>
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="buletin">
            <div className="flex flex-col place-items-center gap-2">
              <div className=" w-full grid grid-cols-4 gap-4">
                {/* {Array.from({ length: 4 }).map((_, index) => (
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
                ))} */}

                {buletin.map((item, index) => (
                  // <Link key={index} href={item.link}>
                    <Card className=" aspect-[3/4] relative rounded overflow-hidden group">
                      <Image
                        src={item.cover !== null
                          ? `${process.env.NEXT_PUBLIC_BASE_BUCKET_URL}/${item.cover}`
                          : '/images/default.webp'
                        }
                        // src={`${process.env.NEXT_PUBLIC_BASE_BUCKET_URL}${item.cover ?? "/default.webp"}`}
                        // src={item.image}
                        alt=""
                        fill
                        className=" object-center group-hover:scale-105 transition-all duration-300"
                      />
                    </Card>
                  // </Link>
                ))}
              </div>
              <Button asChild>
                <Link href={"/publikasi/buletin"}>Lihat Selengkapnya</Link>
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